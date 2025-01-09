import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardMedia, CardActionArea, Typography, Chip, Checkbox } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { gsap } from 'gsap';
import { fetchProjects } from '../../services/api';

import './Gallery.css';

function Gallery() {
    const navigate = useNavigate();
    const cardsRef = useRef([]);
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await fetchProjects();
                setProjects(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        loadProjects();
    }, []);

    useEffect(() => {
        gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 200 },
            { opacity: 1, y: 0, stagger: 0.1, duration: 1, ease: 'power3.out' }
        );
    }, [projects]);

    const handleClick = (id) => {
        navigate(`/project/${id}`);
    };

    const handleFilterChange = (value) => {
        setFilter((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const handleResetFilters = () => {
        setFilter([]);
    };

    const filteredProjects = filter.length === 0 ? projects : projects.filter(project => filter.includes(project.type));

    if (loading) return <div style={{ color: "black", position: "absolute", top: "200px", left: "200px" }}>Loading...</div>;
    if (error) return <div style={{ color: "black", position: "absolute", top: "200px", left: "200px" }} >Error: {error.message}</div>;

    return (
        <div>
            <Grid className='gallery' container spacing={2} padding={4}>
                <Grid container justifyContent="center" alignItems="center" padding={1}>
                    <Chip
                        label="Video"
                        onClick={() => handleFilterChange('video')}
                        variant={filter.includes('video') ? 'filled' : 'outlined'}
                        color={filter.includes('video') ? 'black' : 'black'}
                        icon={filter.includes('video') ? <CheckIcon /> : null}
                        style={{ marginRight: '8px', cursor: 'pointer' }}
                    />
                    <Chip
                        label="Static"
                        onClick={() => handleFilterChange('carousel')}
                        variant={filter.includes('carousel') ? 'filled' : 'outlined'}
                        color={filter.includes('carousel') ? 'black' : 'black'}
                        icon={filter.includes('carousel') ? <CheckIcon /> : null}
                        style={{ marginRight: '8px', cursor: 'pointer' }}
                    />
                    <Chip
                        label="Banner"
                        onClick={() => handleFilterChange('banner')}
                        variant={filter.includes('banner') ? 'filled' : 'outlined'}
                        color={filter.includes('banner') ? 'black' : 'black'}
                        icon={filter.includes('banner') ? <CheckIcon /> : null}
                        style={{ marginRight: '8px', cursor: 'pointer' }}
                    />
                    <Chip
                        label="Code"
                        onClick={() => handleFilterChange('code')}
                        variant={filter.includes('code') ? 'filled' : 'outlined'}
                        color={filter.includes('code') ? 'black' : 'black'}
                        icon={filter.includes('code') ? <CheckIcon /> : null}
                        style={{ marginRight: '8px', cursor: 'pointer' }}
                    />
                </Grid>
                {filteredProjects.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Card
                            className="card"
                            sx={{ borderRadius: 0, boxShadow: 0 }}
                            ref={(el) => (cardsRef.current[index] = el)}
                        >
                            <CardActionArea onClick={() => handleClick(project.id)}>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image={project.image}
                                    alt={project.title}
                                />
                                <div className='aria-hidden'>
                                    <Typography variant="h5" align="center" padding={2} className="card-title">
                                        {project.title}
                                    </Typography>
                                    <div className="tags-container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
                                        {project.tags.split(',').map((tag, index) => (
                                            <Chip key={index} color="white" variant="outlined" label={tag.trim()} />
                                        ))}
                                    </div>
                                </div>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Gallery;
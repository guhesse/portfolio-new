import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardMedia, CardActionArea, Typography } from '@mui/material';
import { gsap } from 'gsap';
import projects from './projects';
import './Gallery.css';

function Gallery() {
    const navigate = useNavigate();
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            cardsRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: 'power3.out' }
        );
    }, []);

    const handleClick = (id) => {
        navigate(`/project/${id}`);
    };

    return (
        <Grid className='gallery' container spacing={2} padding={4}>
            {projects.map((project, index) => (
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
                                <Typography variant="h7" align="center" padding={2} className="card-title">
                                    {project.tags}
                                </Typography>
                            </div>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default Gallery;
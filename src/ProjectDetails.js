import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Grid, CardMedia, useMediaQuery, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward, Close } from '@mui/icons-material';
import Modal from 'react-modal';
import projects from './projects';

Modal.setAppElement('#root');

function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find((project) => project.id === parseInt(id, 10));

    const isDesktop = useMediaQuery('(min-width:1024px)');
    const isTablet = useMediaQuery('(min-width:768px) and (max-width:1023px)');
    const isMobile = useMediaQuery('(max-width:767px)');

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!project) {
        return <Typography variant="h4">Project not found</Typography>;
    }

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % project.details.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + project.details.length) % project.details.length);
    };

    const renderIframes = (details) => {
        const rows = [
            [
                { src: details[1].src, width: '300px', height: '250px' }, // 300x250
                { src: details[2].src, width: '336px', height: '280px' }, // 336x280
                { src: details[3].src, width: '160px', height: '600px' }, // 160x600
                { src: details[4].src, width: '300px', height: '600px' }  // 300x600
            ],
            details.slice(8, 9), // 970x90
            details.slice(9, 10), // 970x250
        ];

        return rows.map((row, rowIndex) => (
            <Grid container spacing={3} key={rowIndex} marginTop={2} justifyContent="center">
                {rowIndex === 0 ? (
                    <>
                        <Grid item xs={12} sm={6} md={4}>
                            <Grid container direction="column" spacing={1} alignItems="center">
                                <Grid item>
                                    <iframe
                                        src={details[1].src}
                                        title="Project detail 300x250"
                                        style={{ width: '300px', height: '250px', border: 'none', overflow: 'hidden' }}
                                    />
                                </Grid>
                                <Grid item>
                                    <iframe
                                        src={details[2].src}
                                        title="Project detail 336x280"
                                        style={{ width: '336px', height: '280px', border: 'none', overflow: 'hidden' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                            <iframe
                                src={details[3].src}
                                title="Project detail 160x600"
                                style={{ width: '160px', height: '600px', border: 'none', overflow: 'hidden' }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                            <iframe
                                src={details[4].src}
                                title="Project detail 300x600"
                                style={{ width: '300px', height: '600px', border: 'none', overflow: 'hidden' }}
                            />
                        </Grid>
                    </>
                ) : (
                    row.map((detail, index) => {
                        if ((isMobile || isTablet) && (detail.width === '970px')) {
                            return null;
                        }
                        return (
                            <Grid item key={index} xs={12} sm={12} md={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                <iframe
                                    src={detail.src}
                                    title={`Project detail ${index + 1}`}
                                    style={{ width: detail.width, height: detail.height, border: 'none', overflow: 'hidden' }}
                                />
                            </Grid>
                        );
                    })
                )}
            </Grid>
        ));
    };

    return (
        <Container>
            <Typography variant="h4" marginTop={10} align="center">
                {project.title}
            </Typography>
            <Typography variant="body1" marginTop={4} paddingBottom={6} align="center">
                {project.description}
            </Typography>
            {project.type === 'video' && project.video && (
                <CardMedia
                    component="video"
                    controls
                    src={project.video}
                    alt={`${project.title} video`}
                    sx={{ marginTop: 2 }}
                />
            )}
            {project.type === 'banner' && isDesktop && project.code && (
                <iframe
                    src={project.code}
                    title={`${project.title} banner`}
                    style={{ width: '100%', height: '500px', border: 'none', marginTop: 2, overflow: 'hidden' }}
                />
            )}
            {project.type === 'banner' && renderIframes(project.details)}
            {project.type === 'video' && (
                <Grid container spacing={3} marginTop={2}>
                    {project.details.map((detail, index) => (
                        <Grid item xs={12} sm={6} md={6} key={index}>
                            <CardMedia
                                component="img"
                                image={detail}
                                alt={`Project detail ${index + 1}`}
                                onClick={() => openModal(index)}
                                style={{ cursor: 'pointer' }}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        background: 'transparent',
                        border: 'none',
                        padding: 0,
                    },
                }}
            >
                <div style={{ position: 'relative', textAlign: 'center' }}>
                    <IconButton
                        onClick={closeModal}
                        style={{ position: 'absolute', top: 10, right: 10, color: 'white' }}
                    >
                        <Close />
                    </IconButton>
                    <IconButton
                        onClick={prevImage}
                        style={{ position: 'absolute', top: '50%', left: -50, color: 'white', transform: 'translateY(-50%)' }}
                    >
                        <ArrowBack />
                    </IconButton>
                    <img
                        src={project.details[currentIndex]}
                        alt={`Project detail ${currentIndex + 1}`}
                        style={{ maxWidth: '100%', maxHeight: '80vh' }}
                    />
                    <IconButton
                        onClick={nextImage}
                        style={{ position: 'absolute', top: '50%', right: -50, color: 'white', transform: 'translateY(-50%)' }}
                    >
                        <ArrowForward />
                    </IconButton>
                </div>
            </Modal>
        </Container>
    );
}

export default ProjectDetails;
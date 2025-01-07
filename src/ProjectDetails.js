import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Grid, CardMedia, useMediaQuery, IconButton } from '@mui/material';
import { ArrowBack, ArrowForward, Close, CropSquare, CropLandscape, CropPortrait } from '@mui/icons-material';
import Modal from 'react-modal';
import projects from './projects';
import Carousel from './components/Carousel';
import Iframes from './components/Iframes';

Modal.setAppElement('#root');

function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find((project) => project.id === parseInt(id, 10));

    const isDesktop = useMediaQuery('(min-width:1024px)');
    const isTablet = useMediaQuery('(min-width:768px) and (max-width:1023px)');
    const isMobile = useMediaQuery('(max-width:767px)');

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentFormat, setCurrentFormat] = useState(0);

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

    const formats = [
        { width: isDesktop ? '115%' : isTablet ? '90%' : '90%', height: 'auto' },
        { width: isDesktop ? '115%' : isTablet ? '90%' : '90%', height: 'auto' },
        { width: isDesktop ? '115%' : isTablet ? '90%' : '90%', height: 'auto' },
    ];

    const format = formats[currentFormat];

    return (
        <Container disableGutters>
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
            {project.type === 'banner' && <Iframes details={project.details} isMobile={isMobile} isTablet={isTablet} />}
            {project.type === 'carousel' && (
                <>
                    <Grid container spacing={1} justifyContent="center" marginTop={1}>
                        <Grid item>
                            <IconButton onClick={() => setCurrentFormat(0)}>
                                <CropSquare />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={() => setCurrentFormat(1)}>
                                <CropPortrait />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={() => setCurrentFormat(2)}>
                                <CropLandscape />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Carousel details={project.details.filter((_, index) => Math.floor(index / 5) % 3 === currentFormat)} format={format} isMobile={isMobile} isTablet={isTablet} />
                </>
            )}
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

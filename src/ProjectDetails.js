import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Grid, CardMedia, useMediaQuery } from '@mui/material';
import projects from './projects';

function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find((project) => project.id === parseInt(id, 10));

    const isDesktop = useMediaQuery('(min-width:1024px)');
    const isTablet = useMediaQuery('(min-width:768px) and (max-width:1023px)');
    const isMobile = useMediaQuery('(max-width:767px)');

    if (!project) {
        return <Typography variant="h4">Project not found</Typography>;
    }

    const renderIframes = (details) => {
        const rows = [
            details.slice(0, 3), // 250x250, 300x250, 336x280
            [details[3], details[4], { src: details[5].src, width: '320px', height: '150px' }], // 160x600, 300x600, 320x50 sobre 320x100
            details.slice(7, 8), // 728x90
            details.slice(8, 9), // 970x90
            details.slice(9, 10), // 970x250
        ];

        return rows.map((row, rowIndex) => (
            <Grid container spacing={3} key={rowIndex} marginTop={2}>
                {row.map((detail, index) => {
                    if (isMobile && (detail.width === '728px' || detail.width === '970px')) {
                        return null;
                    }
                    if (isTablet && (detail.width === '970px')) {
                        return null;
                    }
                    return (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            {rowIndex === 1 && index === 2 ? (
                                <Grid container spacing={1}>
                                    <Grid item xs={12}>
                                        <iframe
                                            src={details[5].src}
                                            title={`Project detail 320x50`}
                                            style={{ width: details[5].width, height: details[5].height, border: 'none', overflow: 'hidden' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <iframe
                                            src={details[6].src}
                                            title={`Project detail 320x100`}
                                            style={{ width: details[6].width, height: details[6].height, border: 'none', overflow: 'hidden' }}
                                        />
                                    </Grid>
                                </Grid>
                            ) : (
                                <iframe
                                    src={detail.src}
                                    title={`Project detail ${index + 1}`}
                                    style={{ width: detail.width, height: detail.height, border: 'none', overflow: 'hidden' }}
                                />
                            )}
                        </Grid>
                    );
                })}
            </Grid>
        ));
    };

    return (
        <Container>
            <Typography variant="h4" marginTop={10} align="center">
                {project.title}
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
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
            <Typography variant="body1" marginTop={4} align="center">
                {project.description}
            </Typography>
        </Container>
    );
}

export default ProjectDetails;
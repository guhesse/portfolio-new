import React, { useState } from 'react';
import { Grid, IconButton, Modal } from '@mui/material';
import { ArrowBack, ArrowForward, Close } from '@mui/icons-material';

const Carousel = ({ details, format, isMobile, isTablet }) => {
    const [carouselIndices, setCarouselIndices] = useState(Array(Math.ceil(details.length / 15)).fill(0));
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCarouselImage = (chunkIndex) => {
        setCarouselIndices((prevIndices) => {
            const newIndices = [...prevIndices];
            newIndices[chunkIndex] = (newIndices[chunkIndex] + 1) % 5;
            return newIndices;
        });
    };

    const prevCarouselImage = (chunkIndex) => {
        setCarouselIndices((prevIndices) => {
            const newIndices = [...prevIndices];
            newIndices[chunkIndex] = (newIndices[chunkIndex] - 1 + 5) % 5;
            return newIndices;
        });
    };

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % details.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + details.length) % details.length);
    };

    const chunks = [];
    for (let i = 0; i < details.length; i += 5) {
        chunks.push(details.slice(i, i + 5));
    }

    return (
        <>
            {chunks.map((chunk, chunkIndex) => (
                <div key={chunkIndex} style={{ marginBottom: '20px' }}>
                    {isMobile || isTablet ? (
                        <div style={{ position: 'relative', textAlign: 'center' }}>
                            <IconButton
                                onClick={() => prevCarouselImage(chunkIndex)}
                                style={{ position: 'absolute', top: '50%', left: 0, color: 'black', transform: 'translateY(-50%)' }}
                            >
                                <ArrowBack />
                            </IconButton>
                            <img
                                src={chunk[carouselIndices[chunkIndex]].src}
                                alt={`Project detail ${carouselIndices[chunkIndex] + 1}`}
                                style={{ width: format.width, height: format.height, objectFit: 'contain' }}
                            />
                            <IconButton
                                onClick={() => nextCarouselImage(chunkIndex)}
                                style={{ position: 'absolute', top: '50%', right: 0, color: 'black', transform: 'translateY(-50%)' }}
                            >
                                <ArrowForward />
                            </IconButton>
                        </div>
                    ) : (
                        <Grid container columnSpacing={0} rowSpacing={1} marginTop={1} justifyContent="space-evenly">
                            {chunk.map((detail, index) => (
                                <Grid item key={index} xs={12} sm={2} md={2} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img
                                        src={detail.src}
                                        alt={`Project detail ${index + 1}`}
                                        style={{ width: format.width, height: format.height, objectFit: 'contain', cursor: 'pointer' }}
                                        onClick={() => openModal(chunkIndex * 5 + index)}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </div>
            ))}
            <Modal
                open={isOpen}
                onClose={closeModal}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
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
                        src={details[currentIndex].src}
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
        </>
    );
};

export default Carousel;

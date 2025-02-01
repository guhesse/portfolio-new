import React from 'react';
import { Grid } from '@mui/material';

const Iframes = ({ details, isMobile, isTablet }) => {
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
                                    style={{ width: '300px', height: '250px', border: 'none', overflow: 'hidden', zIndex: 1, position: 'relative', pointerEvents: 'none' }}
                                />
                            </Grid>
                            <Grid item>
                                <iframe
                                    src={details[2].src}
                                    title="Project detail 336x280"
                                    style={{ width: '336px', height: '280px', border: 'none', overflow: 'hidden', zIndex: 1, position: 'relative', pointerEvents: 'none' }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                        <iframe
                            src={details[3].src}
                            title="Project detail 160x600"
                            style={{ width: '160px', height: '600px', border: 'none', overflow: 'hidden', zIndex: 1, position: 'relative', pointerEvents: 'none' }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
                        <iframe
                            src={details[4].src}
                            title="Project detail 300x600"
                            style={{ width: '300px', height: '600px', border: 'none', overflow: 'hidden', zIndex: 1, position: 'relative', pointerEvents: 'none' }}
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
                                style={{ width: detail.width, height: detail.height, border: 'none', overflow: 'hidden', zIndex: 1, position: 'relative', pointerEvents: 'none' }}
                            />
                        </Grid>
                    );
                })
            )}
        </Grid>
    ));
};

export default Iframes;

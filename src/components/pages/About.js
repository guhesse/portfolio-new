import React, { useEffect, useRef } from 'react';
import Gus from '../../assets/images/foto-gus.png';
import BgGus from '../../assets/images/bg-gus.png';
import { Grid, Box, Typography } from '@mui/material';
import { gsap } from 'gsap';
import './About.css';
import { translate } from 'pdf-lib';

const About = () => {
    const textRef = useRef(null);
    const text2Ref = useRef(null);
    const subTextRef = useRef(null);
    const bgRef = useRef(null);
    const gusRef = useRef(null);

    const wrapLinesInSpans = (elementRef) => {
        const lines = elementRef.current.innerHTML.split('<br>');
        const wrappedLines = lines.map(line => `<span class="line" style="position: relative; white-space: nowrap">${line}</span>`).join('<br>');
        elementRef.current.innerHTML = wrappedLines;
    };

    useEffect(() => {
        wrapLinesInSpans(textRef);
        wrapLinesInSpans(text2Ref);

        const spans = subTextRef.current.querySelectorAll('span');
        const lines1 = textRef.current.querySelectorAll('.line');
        const lines2 = text2Ref.current.querySelectorAll('.line');

        const tl = gsap.timeline();

        tl.fromTo(bgRef.current,
            { rotation: 0, left: 1000 },
            { rotation: -180, left: 10, duration: 1.5, ease: 'power3.out' }
        )
            .fromTo(gusRef.current,
                { rotation: 0, top: 1000 },
                { top: 0, duration: 1, ease: 'power3.out' },
                "-=1.2"
            )
            .fromTo(lines1,
                { opacity: 0, top: 50 },
                { opacity: 1, top: 0, stagger: 0.05, duration: 0.2, ease: "sine.in" },
                "-=1.5"
            )
            .fromTo(spans,
                { opacity: 0, top: 50 },
                { opacity: 1, top: 0, stagger: 0.1, duration: 0.2, ease: "sine.in" },
                "-=1.2"
            )
            .fromTo(lines2,
                { opacity: 0, top: 50 },
                { opacity: 1, top: 0, stagger: 0.05, duration: 0.3, ease: "sine.in" },
                "-=1"
            );
    }, []);

    const spanStyleLetter = {
        fontFamily: "superpop-variable, sans-serif",
        fontVariationSettings: "'wght' 200",
        color: '#FFBA00',
    };

    const spanStyleSymbol = {
        fontFamily: "superpop-variable, sans-serif",
        fontVariationSettings: "'wght' 200",
        color: '#FFBA00',
        verticalAlign: 'top',
        fontSize: '2em',
        position: 'relative',
    };

    const posRel = {
        position: 'relative',
    };

    return (
        <div>
            <Grid className='about-page' container justifyContent="center" alignItems="center" spacing={1}>

                <Grid item xs={12} md={6} container flexDirection="column" alignContent="center" justifyContent="center" gap={3} padding={1}>
                    <Typography variant="h3" component="p" ref={textRef}>
                        Hey! I'm Gustavo Hesse<br />
                        a creative designer <span style={spanStyleLetter}>&</span><br />
                        digital producer<span>.</span>
                    </Typography>
                    <Typography variant="h5" component="p" sx={{ marginBottom: '-1.5em', position: "relative" }} ref={subTextRef}>
                        <span style={posRel}>Motion</span>&nbsp;
                        <span style={spanStyleSymbol}>*</span>&nbsp;
                        <span style={posRel}>Web</span>&nbsp;
                        <span style={spanStyleSymbol}>*</span>&nbsp;
                        <span style={posRel}>Design</span>
                    </Typography>
                    <Typography variant="body3" component="p" ref={text2Ref}>
                        In pursuit of visual project excellence? <br />
                        You've landed in the epicenter of creativity.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} container justifyContent="center" alignItems="center" position="relative">
                    <Box
                        sx={{
                            position: 'relative',
                            width: '100%',
                            height: 'auto',
                            overflow: 'hidden',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            component="img"
                            ref={bgRef}
                            alt='background-gus'
                            src={BgGus}
                            sx={{
                                position: 'absolute',
                                top: 110,
                                width: '120%',
                                height: 'auto',
                                zIndex: 1,
                            }}
                        />
                        <Box
                            component="img"
                            ref={gusRef}
                            alt='gustavo-hesse-foto'
                            src={Gus}
                            sx={{
                                position: 'relative',
                                width: '100%',
                                height: 'auto',
                                zIndex: 2,
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" padding={1} spacing={2}>
                {/* Conteúdo da nova seção */}
                <Typography variant="h6" component="p">
                    Esta é a nova seção abaixo.
                </Typography>
            </Grid>
        </div>
    );
}

export default About;
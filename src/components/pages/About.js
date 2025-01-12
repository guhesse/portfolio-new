import React, { useEffect, useRef } from 'react';
import Gus from '../../assets/images/foto-gus.png';
import BgGus from '../../assets/images/bg-gus.png';
import { Grid, Box, Typography, Stack, Divider } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';
import logos from '../../utils/logos';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const textRef = useRef(null);
    const text2Ref = useRef(null);
    const subTextRef = useRef(null);
    const bgRef = useRef(null);
    const gusRef = useRef(null);
    const logosRef = useRef([]);
    const servicesRef = useRef([]);

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

        gsap.fromTo(servicesRef.current, {
            opacity: 0,
            y: 100
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: servicesRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none none'
            }
        });
        gsap.fromTo(logosRef.current, {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: logosRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none none'
            }
        });


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
        <div className="about-page">
            <Grid container justifyContent="center" alignItems="center" spacing={1}>
                <Box component="section" className='section'>
                    <Grid container flexDirection="row" justifyContent="center" alignItems="center" spacing={1}>
                        <Grid
                            container
                            xs={12} md={6}
                            flexDirection="column"
                            alignContent="center"
                            justifyContent="center"
                            gap={3}
                            padding={1}
                        >
                            <Typography variant="h3" component="p" ref={textRef}>
                                Hey! I'm Gustavo Hesse<br />
                                a creative designer <span style={spanStyleLetter}>&</span><br />
                                digital producer<span>.</span>
                            </Typography>
                            <Typography variant="h5" component="p" ref={subTextRef}>
                                <span style={posRel}>Motion</span>&nbsp;
                                <span style={spanStyleSymbol}>*</span>&nbsp;
                                <span style={posRel}>Web</span>&nbsp;
                                <span style={spanStyleSymbol}>*</span>&nbsp;
                                <span style={posRel}>Design</span>
                            </Typography>
                            <Typography variant="body3" sx={{ marginTop: "-2em" }} component="p" ref={text2Ref}>
                                In pursuit of visual project excellence? <br />
                                You've landed in the epicenter of creativity.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6} container justifyContent="center" alignItems="center" position="relative" >
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: 'auto',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: { xs: 0, sm: 0, md: 0 }
                                }}
                            >
                                <Box

                                    component="img"
                                    ref={bgRef}
                                    alt='background-gus'
                                    src={BgGus}
                                    sx={{
                                        position: 'absolute',
                                        top: 100,
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
                </Box>
                <Box component="section" className='section' id='services'>
                    <Grid container
                        sx={{
                            position: 'relative',
                        }}
                        justifyContent="flex-start"
                        alignItems="center"
                        pt={{ xs: 0, md: 10 }}
                        pl={{ xs: 4, md: 14 }}
                        ref={el => servicesRef.current[0] = el}>
                        <Typography variant='h3' component='h2' sx={{ textAlign: 'left', mt: 5 }} >I can help you with ...</Typography>
                    </Grid>
                    <Grid container
                        sx={{
                            position: 'relative',
                            top: { xs: 0, md: 55 },
                        }}
                        justifyContent="center"
                        alignItems="center"
                        pt={12}>
                        <Grid container
                            justifyItems="center"
                            alignItems="center"
                            gap={3}
                            xs={12} md={12}>
                            <Box sx={{ px: { xs: 4, md: 15 } }}>
                                <Stack direction={{ sx: "column", md: "row" }} gap={10}>
                                    <Stack gap={3} xs={12} md={4} ref={el => servicesRef.current[1] = el}>
                                        <Typography variant='body2'>1</Typography>
                                        <Divider color="white"></Divider>
                                        <Typography variant='h4'>
                                            Motion e Design<br />
                                        </Typography>
                                        <Typography variant='body2'>
                                            I create comprehensive visual solutions, from animated videos to static and dynamic assets. My expertise covers advertising, web design (UI/UX), ad banners, landing pages, and complete websites, ensuring a impactful visual experience.
                                        </Typography>
                                    </Stack>
                                    <Stack gap={3} xs={12} md={4} ref={el => servicesRef.current[2] = el} >
                                        <Typography variant='body2'>2</Typography>
                                        <Divider color="white"></Divider>
                                        <Typography variant='h4'>
                                            Process design<br />
                                        </Typography>
                                        <Typography variant='body2'>
                                            I optimize workflows through process restructuring, implementation of efficient Kanban systems, and development of custom tools. My focus is on increasing your team's productivity and operational efficiency.
                                        </Typography>
                                    </Stack>
                                    <Stack gap={3} xs={12} md={4} ref={el => servicesRef.current[3] = el}>
                                        <Typography variant='body2'>2</Typography>
                                        <Divider color="white"></Divider>
                                        <Typography variant='h4'>
                                            Web Development<br />
                                        </Typography>
                                        <Typography variant='body2'>
                                            I master essential technologies such as HTML, CSS, JavaScript, React, and Node.js. I offer everything from lightweight, efficient animated banners to complete websites and custom tools. I also develop Photoshop plugins, enhancing your team's creative workflow.
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Box>

                        </Grid>

                    </Grid>

                </Box>
                <Box component="section" className='section' id='experience'>
                    <Stack container
                        direction="row"
                        sx={{
                            marginTop: { xs: 0, md: 5 },
                            justifyContent: "space-around",
                            alignItems: "center",
                            p: 3
                        }}>
                        <Grid item xs={12} display="flex" gap={15} justifyContent="space-around" alignItems="center" padding={1} flexWrap="wrap" className="logo">
                            <Box ref={el => logosRef.current[0] = el} component="img" src={logos.Diniz} id='diniz' alt="Óticas Diniz Logo" className="logo" />
                            <Box ref={el => logosRef.current[1] = el} component="img" src={logos.Charlie} id='charlie' alt="Charlie Logo" className="logo" />
                            <Box ref={el => logosRef.current[3] = el} component="img" src={logos.Vml} id='vml' alt="Vml Logo" className="logo" />
                            <Box ref={el => logosRef.current[4] = el} component="img" src={logos.Dell} id='dell' alt="Dell Logo" className="logo" />
                            <Box ref={el => logosRef.current[5] = el} component="img" src={logos.Trace} id='trace' alt="Trace Logo" className="logo" />
                            <Box ref={el => logosRef.current[6] = el} component="img" src={logos.Sultan} id='sultan' alt="Sultan Logo" className="logo" />
                        </Grid>
                    </Stack>
                </Box>
            </Grid >
        </div >
    );
}

export default About;
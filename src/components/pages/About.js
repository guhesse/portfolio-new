import React, { useEffect, useRef } from 'react';
import Gus from '../../assets/images/foto-gus.png';
import BgGus from '../../assets/images/bg-gus.png';
import { Grid, Box, Typography, Card, Stack } from '@mui/material';
import { gsap } from 'gsap';
import './About.css';
import logos from '../../utils/logos';

const About = () => {
    const textRef = useRef(null);
    const text2Ref = useRef(null);
    const subTextRef = useRef(null);
    const bgRef = useRef(null);
    const gusRef = useRef(null);

    const descriptionList = [
        { title: 'Motion, UI/UX & Design', description: 'Movimento, tipografia, cores e layout: tudo em harmonia para contar histórias visuais impactantes. Minha abordagem combina design criativo e funcional, aliada a um fluxo de trabalho otimizado para resultados únicos.' },
        { title: 'Programação & Automação', description: 'Desenvolvimento de web e criação de ferramentas personalizadas como plugins e automações, aplicando HTML, CSS, JavaScript, React e Node.js. Tecnologia a serviço da eficiência e inovação para as melhores experiências digitais.' },
    ];

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
                    <Stack container
                        direction="row"
                        spacing={2}
                        sx={{
                            marginTop: { xs: 0, md: 5 },
                            justifyContent: "space-around",
                            alignItems: "center",
                            p: 3
                        }}>
                        <Grid item xs={12} display="flex" gap={4} justifyContent="space-around" alignItems="center" padding={1} flexWrap="wrap" className="logo">
                            <Box component="img" src={logos.Diniz} id='diniz' alt="Óticas Diniz Logo" className="logo" />
                            <Box component="img" src={logos.Charlie} id='charlie' alt="Charlie Logo" className="logo" />
                            <Box component="img" src={logos.Vml} id='vml' alt="Vml Logo" className="logo" />
                            <Box component="img" src={logos.Dell} id='dell' alt="Dell Logo" className="logo" />
                            <Box component="img" src={logos.Trace} id='trace' alt="Trace Logo" className="logo" />
                            <Box component="img" src={logos.Sultan} id='sultan' alt="Sultan Logo" className="logo" />
                        </Grid>
                    </Stack>

                    <Grid container
                        position='relative'
                        sx={{
                            position: 'relative',
                            top : { xs: 0, md: 20 },
                        }}
                        justifyContent="center"
                        alignItems="center"
                        pt={12}>
                        <Grid container
                            justifyItems="center"
                            alignItems="center"
                            gap={3}
                            xs={12} md={6}>
                            <Box sx={{ px: { xs: 4, md: 24 } }}>
                                <Stack gap={3}>
                                    <Typography variant='body2'>Serviços</Typography>
                                    <Typography variant='h4'>
                                        Motion, Design, UX e Programação. <br />
                                        Tudo junto.
                                    </Typography>
                                    <Typography variant='body2'>
                                        Especializado em criar produtos visuais dinâmicos, integrando design, experiência do usuário e tecnologia para soluções criativas e eficientes.
                                    </Typography>
                                </Stack>
                            </Box>

                        </Grid>
                        <Grid item
                            xs={12} md={6}
                            container
                            justifyContent="center"
                            alignItems="center"
                            pt={5}
                            gap={3}
                            sx={{ px: { xs: 4, md: 18 } }}>
                            {descriptionList.map((item, index) => (
                                <Card key={index}
                                    container variant="outlined"
                                    justifyContent="center"
                                    alignItems="center"
                                    gap={3}
                                    sx={{ backgroundColor: 'transparent' }}>
                                    <Box sx={{ p: 5 }}>
                                        <Stack
                                            direction="row"
                                            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                                        >
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.title}
                                            </Typography>
                                        </Stack>
                                        <Typography variant='body2'>{item.description}</Typography>
                                    </Box>
                                </Card>
                            ))}
                        </Grid>

                    </Grid>

                </Box>
            </Grid>
        </div>
    );
}

export default About;
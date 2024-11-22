import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from './assets/nav-logo.svg'; // ajuste o caminho conforme necessário

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path) => location.pathname === path;

    return (
        <AppBar position="fixed" color="transparent" elevation={0} sx={{ zIndex: 1300 }}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box component="img" src={logo} alt="Logo" sx={{ height: 25 }} />
                <Box>
                    <Button
                        color="inherit"
                        onClick={() => navigate('/')}
                        sx={{
                            mx: 1,
                            textTransform: 'none',
                            position: 'relative',
                            fontWeight: isActive('/') ? 'bold' : 'normal',
                            '&:hover': {
                                textDecoration: 'none',
                                backgroundColor: 'transparent',
                                '&::after': {
                                    width: '100%',
                                    left: 0
                                }
                            },
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                width: isActive('/') ? '100%' : '0',
                                height: '2px',
                                bottom: '-2px',
                                left: isActive('/') ? '0' : '50%',
                                backgroundColor: 'currentColor',
                                transition: 'width 0.3s ease, left 0.3s ease'
                            }
                        }}
                    >
                        WORK
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => navigate('/about')}
                        sx={{
                            mx: 1,
                            textTransform: 'none',
                            position: 'relative',
                            fontWeight: isActive('/about') ? 'bold' : 'normal',
                            '&:hover': {
                                textDecoration: 'none',
                                backgroundColor: 'transparent',
                                '&::after': {
                                    width: '100%',
                                    left: 0
                                }
                            },
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                width: isActive('/about') ? '100%' : '0',
                                height: '2px',
                                bottom: '-2px',
                                left: isActive('/about') ? '0' : '50%',
                                backgroundColor: 'currentColor',
                                transition: 'width 0.3s ease, left 0.3s ease'
                            }
                        }}
                    >
                        ABOUT
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => navigate('/contact')}
                        sx={{
                            mx: 1,
                            textTransform: 'none',
                            position: 'relative',
                            fontWeight: isActive('/contact') ? 'bold' : 'normal',
                            '&:hover': {
                                textDecoration: 'none',
                                backgroundColor: 'transparent',
                                '&::after': {
                                    width: '100%',
                                    left: 0
                                }
                            },
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                width: isActive('/contact') ? '100%' : '0',
                                height: '2px',
                                bottom: '-2px',
                                left: isActive('/contact') ? '0' : '50%',
                                backgroundColor: 'currentColor',
                                transition: 'width 0.3s ease, left 0.3s ease'
                            }
                        }}
                    >
                        CONTACT
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
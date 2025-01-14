import React from 'react';
import { Box, IconButton } from '@mui/material';
import { MailOutline, LinkedIn, GitHub, WhatsApp } from '@mui/icons-material';

function Footer() {
    return (
        <Box
            component="footer"
            color='white.main'
            backgroundColor='black.main'
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 1300,
                textAlign: 'center',
                py: 2,
            }}
        >
            <Box>
                <IconButton color="inherit" target='blank' href="mailto:contato@gustavohesse.com.br">
                    <MailOutline />
                </IconButton>
                <IconButton color="inherit" target='blank' href='https://github.com/guhesse'>
                    <GitHub />
                </IconButton>
                <IconButton color="inherit" target='blank' href='https://www.linkedin.com/in/guhesse/'>
                    <LinkedIn />
                </IconButton>
                <IconButton color="inherit" target='blank' href='https://wa.me/5511970981101'>
                    <WhatsApp />
                </IconButton>
            </Box>
        </Box>
    );
}

export default Footer;

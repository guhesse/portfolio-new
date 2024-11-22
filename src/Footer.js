import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Instagram, Twitter, MailOutline } from '@mui/icons-material';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'transparent',
                zIndex: 1300,
                textAlign: 'center',
                py: 2,
            }}
        >
            <Typography variant="body2" sx={{ mb: 1 }}>
                © GUSTAVOHESSE 2024
            </Typography>
            <Box>
                <IconButton color="inherit">
                    <Instagram />
                </IconButton>
                <IconButton color="inherit">
                    <Twitter />
                </IconButton>
                <IconButton color="inherit">
                    <MailOutline />
                </IconButton>
            </Box>
        </Box>
    );
}

export default Footer;

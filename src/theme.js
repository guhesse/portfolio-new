import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'proxima-nova, sans-serif',
    },
    palette: {
        white: {
            main: '#ffffff',
        },
        primary: {
            main: '#1976d2', 
        },
        secondary: {
            main: '#dc004e',
        },
        customColor: {
            main: '#ff5722',
        },
    },
});

export default theme;
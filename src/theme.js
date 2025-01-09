import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'proxima-nova, sans-serif',
        h3: {
            fontSize: '3em',
            '@media (max-width:600px)': {
                fontSize: '2em',
            },
        },
        h5: {
            fontSize: '1.7em',
            '@media (max-width:600px)': {
                fontSize: '1.2em',
            },
        },
    },
    palette: {
        white: {
            light: '#f6f6f6',
            main: '#f6f6f6',
            dark: '#e0e0e0',
            contrastText: '#000000'
        },
        black: {
            light: '#484848',
            main: '#191919',
            dark: '#191919',
            contrastText: '#ffffff'
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
import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#1A1423',
            light: '#372549'
        },
        success: {
            main: '#43AA8B',
            light: '#90BE6D',
            dark: '#4D908E'
        },
        warning: {
            main: '#F8961E',
            light: '#F9C74F',
            dark: '#F3722C'
        },
        error: {
            main: '#372549'
        }
    }
})
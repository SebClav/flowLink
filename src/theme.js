import { createTheme } from '@mui/material/styles';

export const flowLinkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#004f9e',
    },
    secondary: {
      main: '#007ACC',
    },
    error: {
      main: '#c00003',
    },
    success: {
      main: '#00c853',
    },
  },
});
import { createTheme } from '@mui/material/styles';

const flowLinkTheme = createTheme({
  palette: {
    mode: 'light',
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

export default flowLinkTheme;
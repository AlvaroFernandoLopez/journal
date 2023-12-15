import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
export const lightTheme = createTheme({
  palette: {
    primary: {
      // main: '#d85259',
      main:'#000'
    },
    secondary: {
      main: '#000',
    },
    error: {
      main: '#f44336',
    },
    info:{
      main:'#42343b'
    },
    success:{
      main:'#769353'
    },
    warning:{
      main:'#959b8d'
    }
  },
});


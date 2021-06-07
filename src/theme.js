import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#183d5d',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3ed1b8',
      contrastText: '#ffffff',
    },
    accent: {
      main: '#00ff00'
    }
  },

  text: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#000',
    },
  },

  typography: {
    fontFamily: "'Titillium Web', sans-serif"
  }
});

export default theme
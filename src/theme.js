import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/blueGrey';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#243f77',
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
  }
});

export default theme
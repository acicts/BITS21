import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/blueGrey';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#1B1B1B',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#8739F9',
      contrastText: '#ffffff',
    },
  },
  text: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#fefefe',
    },
  }
});

export default theme
import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/blueGrey';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00467c',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ab47bc',
    },
  }
});

export default theme
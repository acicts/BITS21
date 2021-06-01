import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import InfoIcon from '@material-ui/icons/Info';
import ContactsIcon from '@material-ui/icons/Contacts';
import { Link as RouterLink } from 'react-router-dom';
import theme from '../theme';



const useStyles = makeStyles(() => ({
    root: {
      backgroundColor: '#222372',
      color: '#fefefe'
    },
    rooty: {
      color: '#b9b9b9'
    },
    icons: {
      color: '#527dd6'

    },
    selected: {
      color: '#fff'
    }

  }));
  
  export default function Navbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    return (
      <BottomNavigation
        value={value}
        
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction className={classes.rooty} classes={{selected: classes.selected}} component={RouterLink} to="/" label="Home" icon={ <HomeIcon className={classes.icons}/> }/>
        <BottomNavigationAction className={classes.rooty} classes={{selected: classes.selected}} component={RouterLink} to="/leaderboard" label="Leaderboard" icon={ <FormatListNumberedIcon className={classes.icons}/> }/>
        <BottomNavigationAction className={classes.rooty} classes={{selected: classes.selected}} component={RouterLink} to="/tasks" label="Tasks" icon={ <AssignmentIcon className={classes.icons}/> }/>
        <BottomNavigationAction className={classes.rooty} classes={{selected: classes.selected}} component={RouterLink} to="/contact" label="Contact" icon={ <ContactsIcon className={classes.icons}/> }/>
      </BottomNavigation>
    );
  }
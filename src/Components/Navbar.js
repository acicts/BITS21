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
      backgroundColor: theme.palette.primary.main
    },
    rooty: {
      color: '#ffffff'
    },
    icons: {
      color: theme.palette.secondary.main

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
        <BottomNavigationAction className={classes.rooty} component={RouterLink} to="/" label="Home" icon={ <HomeIcon className={classes.icons}/> }/>
        <BottomNavigationAction className={classes.rooty} component={RouterLink} to="/leaderboard" label="Leaderboard" icon={ <FormatListNumberedIcon className={classes.icons}/> }/>
        <BottomNavigationAction className={classes.rooty} component={RouterLink} to="/tasks" label="Tasks" icon={ <AssignmentIcon className={classes.icons}/> }/>
        <BottomNavigationAction className={classes.rooty} component={RouterLink} to="/about" label="About" icon={ <InfoIcon className={classes.icons}/> }/>
        <BottomNavigationAction className={classes.rooty} component={RouterLink} to="/contact" label="Contact" icon={ <ContactsIcon className={classes.icons}/> }/>
      </BottomNavigation>
    );
  }
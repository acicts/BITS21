import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header'
import theme from '../../theme'  

function Home(theme) {
    const useStyles = makeStyles({
        homeContainer: {
          
        }
    });
      const classes = useStyles();
    return (
      <div className={classes.homeContainer}>
        <Header />
      </div>
    )
}


export default Home

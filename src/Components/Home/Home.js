import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header'
import Charts from './Charts'
import Categories from './Categories'

function Home() {
    const useStyles = makeStyles({
        homeContainer: {
          
        }
    });
      const classes = useStyles();
    return (
      <div className={classes.homeContainer}>
        <Header />
        <Categories />
      </div>
    )
}


export default Home

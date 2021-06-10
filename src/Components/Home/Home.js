import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header'
import Charts from './Charts'
import Categories from './Categories'
import Quotes from './Quotes'

function Home() {
    const useStyles = makeStyles({
        homeContainer: {
          
        },
        cats:{
          marginTop: '0px'
        }
    });
      const classes = useStyles();
    return (
      <div className={classes.homeContainer}>
        <Header />
        <div id="catt" className={classes.cats}><Categories  /></div>
        <Quotes />
      </div>
    )
}


export default Home

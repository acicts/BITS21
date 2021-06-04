import React, { useState } from 'react'
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header'

function Home() {
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

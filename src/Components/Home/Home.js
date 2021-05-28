import React, { useState } from 'react'
import Typewriter from 'typewriter-effect';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import zIndex from '@material-ui/core/styles/zIndex';

function Home() {
    const useStyles = makeStyles({
        introduction: {
          color: '#001B2E',
          marginLeft: '-50%',
          marginRight: '-22%',
          textAlign: 'center',
        },
        background: {
          background: 'linear-gradient(70deg, rgba(24,89,226,1) 11%, rgba(0,241,255,1) 100%)',
          paddingBottom: '30px',
          zIndex: '-1'
        },
        home: {
          background: 'linear-gradient(70deg, rgba(24,89,226,1) 11%, rgba(0,241,255,1) 100%)',
          height: 'ma',
          zIndex: '1'
        }

        
      });
      const classes = useStyles();
    return (
        <div className={classes.home}>
          <Paper className={classes.background} elevation='0'>
        <div className='title'>
            <Typewriter
  options={{
    strings: ['BiT', 'BITS 2021'],
    pauseFor: '100ms',
    autoStart: true,
    loop: true,
  }}
/>

            <Typography variant="h6" component="h4" className={classes.introduction}>
            BITS, The First-Ever Task-Based Intra-School ICT competition, organized by the Ananda College ICT Society to provide a platform for our school's students to polish and improve their ICT knowledge in many fields of ICT
            </Typography>
        </div>
        </Paper>
        </div>

    
    )
}


export default Home

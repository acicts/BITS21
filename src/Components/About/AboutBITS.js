import { Grid, makeStyles, Paper, Typography, useTheme } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import OC from './OC'

export default function SimpleContainer() {

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    background: '#0f7bc7',
    color: '#ffffff',
    padding: '50px'
  },
  OCContainer: {
    marginTop: '30px',
  }
}))

const classes = useStyles()
const theme = useTheme() 

return (
  <div>
    <Grid xl='12'>
      <Paper className={classes.titleContainer} square='true'>
      <Typography variant='h1' align='center'>BITS 2021</Typography>
      <Typography variant='subtitle1' align='center'>BITS, The First-Ever Task-Based Intra-School ICT competition, organized by the Ananda College ICT Society to provide a platform for our school's students to polish and improve their ICT knowledge in many fields of ICT.</Typography>
      </Paper>
    </Grid>

    <Grid xl='4' container direction="row" justify="space-evenly" alignItems="center" className={classes.OCContainer}>
      <OC />
      <OC />
      <OC />
      <OC />
      <OC />
      <OC />
    </Grid>
  </div>
  )
}
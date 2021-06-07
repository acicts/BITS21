import { Grid, makeStyles, Paper, Typography, useTheme } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import OC from '../Contact/OC'

export default function SimpleContainer() {

const useStyles = makeStyles((theme) => ({
  titleContainer: {
    background: theme.palette.secondary.main,
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

      <OC />
  </div>
  )
}
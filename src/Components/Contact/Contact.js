import { Grid, makeStyles, Paper, Typography, useTheme } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import OC from './OC'

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
      <OC />
  </div>
  )
}
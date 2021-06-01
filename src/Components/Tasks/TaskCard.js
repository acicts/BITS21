import React, { Component, useState }  from 'react';
import { unmountComponentAtNode, render } from "react-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Avatar, IconButton } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import CodeIcon from '@material-ui/icons/Code';
import BrushIcon from '@material-ui/icons/Brush';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import taskDetails from '../../Data/tasks.json'
import theme from '../../theme'
import { Link } from 'react-router-dom';
import { render as renderelement } from '@testing-library/react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '600px',
    height: '220px',
    marginLeft: '100px',
    marginTop: '20px',
    backgroundColor: '#183d5d',
    color: '#fff',
    borderRadius: '20px',
    ['@media (max-width:540px)']: {
      position: 'relative',
      width: '95%',
      margin: 'auto',
      marginTop: '20px',
    },
    ['@media (max-width:350px)']: {

      width: '90%',
      margin: 'auto',
      marginTop: '20px',
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },

  button: {
    marginLeft: '10px',
    marginBottom: '10px',
    backgroundColor: '#3ed1b8',
    color: '#000',
    transition: '0.5s ease',
    '&:hover': {
      backgroundColor: '#f587dc',
      color: '#FFF',
  },
  
  },

  catogery: {
    float: 'right'
  },
  filter: {
    backgroundColor: '#183d5d',
    float: 'right',
    marginRight: '50px',
    padding: '50px',
    borderRadius: '25px',
    ['@media (max-width:540px)']: {
      position: 'relative',
      width: '65%',
      margin: 'auto',
      marginBottom: '20px',
      float: 'none',

    }
  },

  filterOptions: {
    color: '#fff',
    ['@media (max-width:540px)']: {
      flexDirection: 'row',
    }
  }
  

}));

export default function TaskCard() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState('All');
  const [data, setData] = useState(taskDetails)

  const handleChange = (event) => {
    
    setValue(event.target.value);
     let result = taskDetails
     setData(result.filter(function(obj, index){
      return obj.catogery===event.target.value;})) 
  ;
  if (event.target.value == "All") {
    setData(taskDetails) 
  }
}

  return (
    <div className='eee'>
      <div className={classes.filter}>
      <FormControl component="fieldset">
      <FormLabel component="legend">Filter Tasks</FormLabel>
      <RadioGroup className={classes.filterOptions} aria-label="tasks" name="filter" value={value} onChange={handleChange}>
        <FormControlLabel value="All" control={<Radio color='secondary' />} label="All" />
        <FormControlLabel value="Code" control={<Radio color='secondary'/>} label="Code" />
        <FormControlLabel value="Design" control={<Radio color='secondary'/>} label="Design" />
        <FormControlLabel value="Explore"  control={<Radio color='secondary'/>} label="Explore" />
      </RadioGroup>
    </FormControl>
    </div>
      {data.map((tasks, index) => (

    <Card className={classes.root} color="primary"  key={index} >
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {tasks.taskName}
            <span className={classes.catogery}>
            <Tooltip title={tasks.catogery}>
              <IconButton aria-label={tasks.catogery} color='secondary'>
         {(() => {
        switch (tasks.catogery) {
          case "Code":   return <CodeIcon />;
          case "Design": return <BrushIcon />;
          case "Explore":  return <FindInPageIcon />;
        }
      })()}
          </IconButton>
          </Tooltip>
          </span>
          </Typography>
          <Typography variant="subtitle1"  color='textSecondary' className={classes.cat} >
            {tasks.shortDescription}
          </Typography>
          <hr color='#17548a'></hr>
          <Typography variant='caption'>Task ID: {tasks.id}</Typography>
        </CardContent>
        
        <div className={classes.controls}>
        <Button variant="contained" component={Link} to={`/task/${tasks.id}`} className={classes.button}>
          View Task
        </Button>
        
        </div>
      </div>
    </Card>
    ))}
    </div>
    
  );
}
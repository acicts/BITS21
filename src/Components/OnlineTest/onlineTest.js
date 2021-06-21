import React, { useState, useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { IconButton } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import CodeIcon from '@material-ui/icons/Code';
import BrushIcon from '@material-ui/icons/Brush';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import Tests from '../../Data/onlineTest.json'
import theme from '../../theme'
import { Link } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Aos from 'aos';
import "aos/dist/aos.css"


const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '600px',
    height: '230px',
    marginLeft: '100px',
    marginTop: '20px',
    backgroundColor: '#183d5db0',
    color: '#fff',
    borderRadius: '15px',
    backdropFilter: 'blur(10px)',
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      width: '600px',
      margin: 'auto',
      marginTop: '20px',
    },
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      width: '90%',
      margin: 'auto',
      marginTop: '20px',
      height: 'max-content'
    },

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
   
  },
  content: {
    flex: '1 0 auto',
    marginRight: '-20px',
    width: '545px',
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      width: '90%',
      margin: 'auto',
    },
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
      backgroundColor: '#3ed1b8',
      boxShadow: '0px 0px 11px 0px rgb(62 209 184), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)',
  },
  
  },

  catIcon: {
    color: '#3ed1b8',
  },

  catogery: {
    float: 'right',
    marginTop: '-10px'
  },
  filter: {
    backgroundColor: '#183d5db0',
    backdropFilter: 'blur(10px)',
    float: 'right',
    marginRight: '20%',
    padding: '50px',
    borderRadius: '15px',
    width: '15%',
    position: 'sticky',
    right: '0',
    top: '100px',
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      width: '500px',
      margin: 'auto',
      marginLeft: '100px',
      marginBottom: '20px',
      float: 'none',
      top: '0',
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      width: '500px',
      margin: 'auto',
      marginBottom: '20px',
    },
    [theme.breakpoints.down('xs')]: {
      position: 'relative',
      width: '65%',
      margin: 'auto',
      marginBottom: '20px',
    }
  },

  filterOptions: {
    color: '#fff',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'row',
    }
  }
  , codeIcon: {
    color: '#3ed1b8'
  }
  , brushIcon: {
    color: '#3ed1b8'
  }
  , exploreIcon: {
    color: '#3ed1b8'
  }
  

}));


export default function TaskCard() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration:500 })
  }, [])


  return (
      <div>
      {Tests.map((tests, index) => (

    <Card className={classes.root} color="primary"  key={index}  data-aos="fade-right" >
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {tests.name}
          </Typography>
          <Typography variant="subtitle1"  color='textSecondary' className={classes.cat} >
            {tests.description}
          </Typography>
          <hr color='#16548a'></hr>
          <Typography variant='caption'>Marks: {tests.marks}</Typography>
        </CardContent>
        
        <div className={classes.controls}>
        <Button variant="contained" component={Link} href={tests.link} className={classes.button}>
          Start Test
        </Button>
        
        </div>
      </div>
    </Card>
    ))}
</div>
    
  );
}

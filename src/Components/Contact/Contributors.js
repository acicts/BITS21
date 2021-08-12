import React, { useEffect }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import catImg from '../../Img/cat.jpg'
import { GitHub, Instagram, Phone } from '@material-ui/icons';
import theme from '../../theme'
import OCdata from '../../Data/Contributors.json'
import Aos from 'aos';
import "aos/dist/aos.css"

const useStyles = makeStyles(() => ({
  root: {
    width: 345,
    height: '150px',
    marginBottom: '50px',
    marginLeft: '50px',
    marginRight: '50px',
    background: 'linear-gradient(144deg, #275d8ccf, #21466766)',
    backdropFilter: 'blur(10px)',
    color: theme.palette.primary.contrastText,
    borderRadius: '15px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '10px',
    marginRight: '10px',
  },

  },
  OClistItem: {
    width: 345,
    height: '50px',
    marginBottom: '10px',
    marginLeft: '50px',
    padding: '10px',
    marginRight: '50px',
    background: 'linear-gradient(144deg, #275d8ccf, #21466766)',
    backdropFilter: 'blur(10px)',
    color: theme.palette.primary.contrastText,
    borderRadius: '10px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '10px',
    marginRight: '10px',
  },
  },

  avatar: {
    width: '50px',
    height: '50px',
  },

  OCContainer: {
    marginTop: '50px',
    marginRight: '50px',
 
  },
  icons: {
    color: '#3ed1b8'
  },

  OClist: {
    marginTop: '50px',
  }
  
}));

export default function OC() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration:200 })
  }, [])

  return (
    <div>
    <Typography variant="h4" style={{marginTop: '50px', marginLeft: '110px'}}>Competitors Who Contributed</Typography>
    <Grid  xl={12} md={12} lg={12} container direction="row" justify="space-around" alignItems="center" className={classes.OClist}>
    {OCdata.map((member, index) => (
      <Card className={classes.OClistItem} elevation='6' data-aos="zoom-in-up">
        <Typography>{member.name}</Typography>
      </Card>
    ))}
    </Grid>
    </div>
    
  );
}
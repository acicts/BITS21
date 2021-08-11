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
import OCdata from '../../Data/OC.json'
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
    <div className="padding-bottom-100">
    <Grid xl={12} md={12} lg={12} container direction="row" justify="space-around" alignItems="center" className={classes.OCContainer}>
      <Card className={classes.root} elevation='6' data-aos="zoom-in-up">
      <CardHeader
       
        title= "Chamindu Jayanath" 
        subheader= "Code Task Review Committee|Web Developer"
      />
      <CardActions disableSpacing >
       <IconButton className={classes.icons} aria-label="GitHub" href="https://github.com/chamindujs" target="_blank">
          <GitHub />
        </IconButton>
        <IconButton className={classes.icons} aria-label="Phone" href="https://wa.link/1yweij" target="_blank">
          <Phone />
        </IconButton> 
      
      </CardActions>
    </Card>

    <Card className={classes.root} elevation='6' data-aos="zoom-in-up">
      <CardHeader
       
        title= "Manula Thejan" 
        subheader= "Design & Explore Task Review Committee"
      />
      <CardActions disableSpacing >
        <IconButton className={classes.icons} aria-label="Phone" href="https://wa.link/hqa8o0" target="_blank">
          <Phone />
        </IconButton> 
      
      </CardActions>
    </Card>

    <Card className={classes.root} elevation='6' data-aos="zoom-in-up">
      <CardHeader
       
        title= "Chamuthu Edirisuriya" 
        subheader= "Main Organizer"
      />
      <CardActions disableSpacing >
        <IconButton className={classes.icons} aria-label="Instagram" href="https://www.instagram.com/time_remnant_2.0/" target="_blank">
          <Instagram />
        </IconButton> 
        <IconButton className={classes.icons} aria-label="Phone" href="https://wa.link/buph6h" target="_blank">
          <Phone />
        </IconButton> 
      
      </CardActions>
    </Card>

    <Card className={classes.root} elevation='6' data-aos="zoom-in-up">
      <CardHeader
       
        title= "Thithiesha Mahabaduge" 
        subheader= "Leaderboard Update Committee"
      />
      <CardActions disableSpacing >
        <IconButton className={classes.icons} aria-label="Instagram" href="https://www.instagram.com/thithiesha/" target="_blank">
          <Instagram />
        </IconButton> 
        <IconButton className={classes.icons} aria-label="Phone" href="https://wa.link/8zr3bq" target="_blank">
          <Phone />
        </IconButton> 
      
      </CardActions>
    </Card>

    <Card className={classes.root} elevation='6' data-aos="zoom-in-up">
      <CardHeader
       
        title= "Nithika Senaweera " 
        subheader= "Task Review committee"
      />
      <CardActions disableSpacing >
       <IconButton className={classes.icons} aria-label="GitHub" href="https://github.com/ns200310" target="_blank">
          <GitHub />
        </IconButton>
        <IconButton className={classes.icons} aria-label="Instagram" href="https://www.instagram.com/nithikase__/" target="_blank">
          <Instagram />
        </IconButton> 
        <IconButton className={classes.icons} aria-label="Phone" href="https://wa.link/8h7ern" target="_blank">
          <Phone />
        </IconButton> 
      
      </CardActions>
    </Card>

    <Card className={classes.root} elevation='6' data-aos="zoom-in-up">
      <CardHeader
       
        title= "Gothira Mendis" 
        subheader= "Online Test Committee"
      />
      <CardActions disableSpacing >
        <IconButton className={classes.icons} aria-label="Instagram" href="https://www.instagram.com/mendi.iiii/" target="_blank">
          <Instagram />
        </IconButton> 
        <IconButton className={classes.icons} aria-label="Phone" href="https://wa.link/6uw5ab" target="_blank">
          <Phone />
        </IconButton> 
      
      </CardActions>
    </Card>

    </Grid>
    <Typography variant="h4" style={{marginTop: '50px', marginLeft: '110px'}}>Organizing Committee and Contributers</Typography>
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

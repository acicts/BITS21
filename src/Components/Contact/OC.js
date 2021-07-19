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
    height: '200px',
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

  avatar: {
    width: '50px',
    height: '50px',
  },

  OCContainer: {
    marginTop: '150px',
    marginRight: '50px',
 
  },
  icons: {
    color: '#3ed1b8'
  }
  
}));

export default function OC() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration:200 })
  }, [])

  return (
    <Grid xl={12} md={12} lg={12} container direction="row" justify="space-around" alignItems="center" className={classes.OCContainer}>
    {OCdata.map((member, index) => (
    <Card className={classes.root} elevation='6' key={index} data-aos="zoom-in-up">
      <CardHeader
       
        title={member.name}
        subheader="BITS OC"
      />
      <CardContent>
        <Typography variant="body2"  component="p">
        {member.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        { member.github !== "" && <IconButton className={classes.icons} aria-label="GitHub" href={member.github}>
          <GitHub />
        </IconButton>}
        { member.insta !== "" &&  <IconButton className={classes.icons} aria-label="Instagram" href={member.insta}>
          <Instagram />
        </IconButton> }
        { member.phone !== "" &&  <IconButton className={classes.icons} aria-label="Phone" href={member.phone}>
          <Phone />
        </IconButton> }
      
      </CardActions>
    </Card>
    ))}
    </Grid>
  );
}
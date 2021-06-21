import React from 'react';
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
import { GitHub, Instagram } from '@material-ui/icons';
import theme from '../../theme'
import OCdata from '../../Data/OC.json'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
    marginBottom: '50px',
    marginLeft: '50px',
    marginRight: '50px',
    backgroundColor: '#183d5db0',
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

  return (
    <Grid xl={12} md={12} lg={12} container direction="row" justify="space-around" alignItems="center" className={classes.OCContainer}>
    {OCdata.map((member, index) => (
    <Card className={classes.root} elevation='6' key={index}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={catImg}/>
        }
        title={member.name}
        subheader="BITS OC"
      />
      <CardContent>
        <Typography variant="body2"  component="p">
        {member.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <IconButton className={classes.icons} aria-label="GitHub" href={member.github}>
          <GitHub />
        </IconButton>
        <IconButton className={classes.icons} aria-label="Instagram" href={member.insta}>
          <Instagram />
        </IconButton>
      </CardActions>
    </Card>
    ))}
    </Grid>
  );
}
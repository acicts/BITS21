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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: '50px',
    marginLeft: '50px',
    marginRight: '50px',
    background: '#183d5d',
    color: theme.palette.primary.contrastText,
    borderRadius: '15px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    width: '50px',
    height: '50px',
  },
  subheader: {

  },
  OCContainer: {
    marginTop: '30px',
    marginRight: '50px',
  },
  
}));

export default function OC() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      <CardActions disableSpacing>
        <IconButton aria-label="GitHub" color='secondary' href={member.github}>
          <GitHub />
        </IconButton>
        <IconButton aria-label="Instagram" color='secondary' href={member.insta}>
          <Instagram />
        </IconButton>
      </CardActions>
    </Card>
    ))}
    </Grid>
  );
}
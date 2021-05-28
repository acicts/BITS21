import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import catImg from '../../Img/cat.jpg'
import { GitHub, Instagram } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: '30px'
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
}));

export default function OC() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} elevation='6'>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={catImg}/>
        }
        title="Chamindu Jayanath"
        subheader="BITS OC"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        Google Code-In 2019 Winner  |
        BITS 2019 Winner  |
        Programmer  |
        Web Developer  |
        UX Designer
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="GitHub" color='primary'>
          <GitHub />
        </IconButton>
        <IconButton aria-label="Instagram" color='secondary'>
          <Instagram />
        </IconButton>
      </CardActions>
    </Card>
  );
}
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Avatar, IconButton } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import CodeIcon from '@material-ui/icons/Code';
import GestureIcon from '@material-ui/icons/Gesture';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import taskDetails from '../../Data/tasks.json'
import theme from '../../theme'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    width: '600px',
    height: '200px',
    marginLeft: '100px',
    marginTop: '20px',
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    borderRadius: '15px',
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
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: '#FFF'
  },
  color:'#00000'
  },

  catogery: {
    marginLeft: '230px'
  }
  

}));

export default function TaskCard() {
  const classes = useStyles();
  const theme = useTheme();

  

  return (
    <div>
      {taskDetails.map((tasks, index) => (

    <Card className={classes.root} color="primary"  key={index}>
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
          case "Design": return <GestureIcon />;
          case "Explore":  return <FindInPageIcon />;
        }
      })()}
          </IconButton>
          </Tooltip>
          </span>
          </Typography>
          <Typography variant="subtitle1"  color={theme.text.secondary.main} className={classes.cat} >
            {tasks.shortDescription}
          </Typography>
        </CardContent>
        
        <div className={classes.controls}>
        <Button variant="contained" component={Link} to={`/task/${tasks.id}`} className={classes.button}>
          View
        </Button>
        
        </div>
      </div>
    </Card>
    ))}
    </div>
    
  );
}

import React from 'react'
import Taskcard from './TaskCard'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function TaskPage() {
    const useStyles = makeStyles({
        container: {
          padding: '0',
          
          height: '100vh',
          padding: '0'
        },
        background: {
            paddingTop: "20px",
            
        }
        
      });
      const classes = useStyles();
    return (
        <Container maxWidth="xl" className={classes.container} >
       
        <div className={classes.background}>
            <Taskcard />
            
        </div>
      </Container>
        
    )
}

export default TaskPage

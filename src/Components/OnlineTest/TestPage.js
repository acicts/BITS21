import {React, useEffect} from 'react'
import Test from './onlineTest'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Toolbar from '@material-ui/core/Toolbar';
import Aos from 'aos';
import "aos/dist/aos.css"



const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  container: {
    padding: '0',
    height: '100vh',
  },
  background: {
      paddingTop: "50px",
      marginTop: '50px',
      marginBottom: '50px'
  },
  backToTop: {
    color: '#000'
  },
  
  
}));
function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


function TaskPage(props) {

      useEffect(() => {
        Aos.init({ duration:200 })
      }, [])
    
      const classes = useStyles();
    return (
      <div className={classes.taskContainer}>

        <Container maxWidth="xl" className={classes.container} >
       <Toolbar id="back-to-top-anchor" />
        <div className={classes.background}>
          
            <Test  />
           
        </div>
        
      </Container>
      
      <ScrollTop {...props}>
      <Fab color="secondary" className={classes.backToTop} size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop>
    </div>

    )
}

export default TaskPage

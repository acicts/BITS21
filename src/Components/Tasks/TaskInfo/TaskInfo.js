import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import '../../../App.css'
import { Container } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },

  ss: {
    paddingTop: '20px'
  },

  container: {
    padding: '0',
    backgroundColor: '#e2e2e2',
    height: '100vh',
    padding: '0',
    color: 'ffffff'
  },

  details: {
    backgroundColor:'#ffffff',
    width: '810px',
    padding: '0',
    height: 'max-content',
    margin: 'auto',
    marginTop: '230px',
    color: 'ffffff'
  },
  appbar: {
    width: '100%',
    backgroundColor: '#0f7bc7'
  },
  title: {
    width: '500px',
    marginLeft: '210px',
    marginBottom: '-200px',
    color: '#000000',
  },

  text: {
    color: '#000000'
  },
  switcher: {
    color: '#ffffff',
  
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container maxWidth="xl" className={classes.container}>
    <div className={classes.ss}>

      <Container className="taskname" color="primary"><Typography variant="h4" className={classes.title} color="#ffffff">Web Scraping for Data</Typography></Container>
    
    <Container fixed className={classes.details}>
        
<AppBar position="static" className={classes.appbar} color="#0f7bc7" elevation="0">
        <Tabs
          value={value}
         className={classes.switcher}
          onChange={handleChange}   
          indicatorColor="dfdfgdfdg"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Details" {...a11yProps(0)} />
          
          <Tab label="Submit" {...a11yProps(1)} />
        </Tabs>
      </AppBar>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}><Typography className={classes.text}>
        Web scraping is a very popular way of getting information from the internet. Learn what is web scraping and learn to build one yourself. <br></br>
        <br></br>
●     Build a web scraper to scrape a website about COVID-19 Statistics and get the current                         
       worldwide situation (Total deaths, case and cured count) that can be operated by CLI.<br></br>
       <br></br>
●     Use any programming language you prefer (We recommend python)<br></br>
<br></br>
●     Copying code from any other source is strictly prohibited.<br></br>
<br></br>
●     You can get a higher score by adding more features to the code.<br></br> </Typography>
<br></br>
        </TabPanel>
       
        <TabPanel value={value} index={1} dir={theme.direction}> <Typography  className={classes.text}>
        Find the task in the tasks page and click the “Submit task” button. Then you will be redirected t a Form which you can attach your work files or send the link of your work. Complete the form
and hit the “SUBMIT” button and your task will be reviewed by the mentors in around 24 hours
and you will get a confirmation email.</Typography>
<br></br>
<br></br>
<Fab color="primary" aria-label="add" align="right">
        <AddIcon className="add"/>
      </Fab>
        </TabPanel>
      </SwipeableViews>


      </Container>
      </div>
      </Container>
     
  
    
  );
}
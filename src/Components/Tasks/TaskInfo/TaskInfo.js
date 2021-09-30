import { Button, Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import { Link, useParams } from "react-router-dom";
import SwipeableViews from "react-swipeable-views";
import "../../../App.css";
import taskDetails from "../../../Data/tasks.json";
import Linkify from "react-linkify";

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
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: "400px",
  },

  ss: {
    paddingTop: "20px",
  },

  container: {
    padding: "0",
    height: "100vh",
    color: "#fff",
    marginBottom: "600px",
  },

  details: {
    background: "linear-gradient(144deg, #275d8ccf, #21466766)",
    backdropFilter: "blur(10px)",
    maxWidth: "800px",
    borderRadius: "20px",
    width: "70%",
    padding: "0",
    height: "min-content",
    margin: "auto",
    marginTop: "20px",
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      width: "95%",
      margin: "auto",
      marginTop: "20px",
    },
  },
  appbar: {
    width: "100%",
    backgroundColor: "#06192e",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
  },
  title: {
    width: "85%",
    margin: "auto",
    color: "#fff",
    fontStyle: "bold",
    marginTop: "200px",
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      marginTop: "100px",
    },
  },

  text: {
    color: "#fff",
    marginBottom: "20px",
  },
  switcher: {
    color: "#3ed1b8",
  },
  taskname: {
    width: "70%",
  },
  form: {
    borderRadius: "10px",
    width: "80%",
    marginLeft: "10%",
    marginBottom: "50px",
  },
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

  const hrefDecorator = (href, text, key) => (
    <a href={href} key={key} target="_blank" className="urlDecor">
      {text}
    </a>
  );

  let { id } = useParams();

  var result = taskDetails.filter((obj) => {
    return obj.id === id;
  });
  const details = result[0];

  console.log(details.submit);

  return (
    <Container className={classes.container}>
      <div className={classes.ss}>
        <Container className="taskname" color="primary">
          <Typography variant="h4" className={classes.title} color="#ffffff">
            <Link to="/tasks" style={{ width: "100px" }}>
              <Button
                color="secondary"
                variant="outlined"
                style={{ marginRight: "50px", width: "100px" }}
              >
                Go Back
              </Button>
            </Link>
            {details.taskName}
          </Typography>
        </Container>

        <Container fixed className={classes.details}>
          <AppBar
            position="static"
            className={classes.appbar}
            color="#0f7bc7"
            elevation="0"
          >
            <Tabs
              value={value}
              className={classes.switcher}
              onChange={handleChange}
              indicatorColor="dfdfgdfdg"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Details" {...a11yProps(0)} />
            </Tabs>
          </AppBar>

          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Linkify componentDecorator={hrefDecorator}>
                <Typography className={classes.text}>
                  {details.description}
                </Typography>
                <ul style={{ color: "#fefefe", marrginTop: "90px" }}>
                  {details.point1 !== "" && <li>{details.point1}</li>}
                  {details.point2 !== "" && <li>{details.point2}</li>}
                  {details.point3 !== "" && <li>{details.point3}</li>}
                  {details.point4 !== "" && <li>{details.point4}</li>}
                  {details.point5 !== "" && <li>{details.point5}</li>}
                  {details.point6 !== "" && <li>{details.point6}</li>}
                  {details.point7 !== "" && <li>{details.point7}</li>}
                </ul>
                <br></br>
              </Linkify>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              {" "}
              <br></br>
              <br></br>
              <Button
                href={details.submit}
                className={classes.form}
                color="secondary"
                target="_blank"
                variant="contained"
              >
                Submit Task
              </Button>
            </TabPanel>
          </SwipeableViews>
        </Container>
      </div>
    </Container>
  );
}

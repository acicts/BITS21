import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Grid, IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import CodeIcon from "@material-ui/icons/Code";
import BrushIcon from "@material-ui/icons/Brush";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import taskDetails from "../../Data/tasks.json";
import theme from "../../theme";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Aos from "aos";
import "aos/dist/aos.css";
import { Star } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  roott: {
    display: "flex",
    transition: "all 0.3s ease",
    width: "350px",
    minHeight: "250px",
    marginTop: "20px",
    background: "linear-gradient(144deg, #276eabcf, #295f9066)",
    color: "#fff",
    border: "2px solid #3c9687",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      width: "350px",
      margin: "auto",
      marginTop: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      width: "90%",
      margin: "auto",
      marginTop: "20px",
      height: "max-content",
    },
    "&:hover": {
      transform: "scale(1.05)",
    },
  },

  root: {
    display: "flex",
    transition: "all 0.3s ease",
    width: "350px",
    minHeight: "250px",
    marginTop: "20px",
    background: "linear-gradient(144deg, #276eabcf, #295f9066)",
    color: "#fff",
    borderRadius: "15px",
    backdropFilter: "blur(10px)",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      width: "350px",
      margin: "auto",
      marginTop: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      width: "90%",
      margin: "auto",
      marginTop: "20px",
      height: "max-content",
    },
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    width: "100%",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      width: "100%",
      margin: "auto",
    },
  },
  winnerContainer: {
    paddingTop: "200px",
  },

  icons: {
    fontSize: "2rem",
    color: "#3ed1b8",
  },
}));

export default function TaskCard() {
  const classes = useStyles();
  const [value, setValue] = React.useState("All");
  const [data, setData] = useState(taskDetails);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
    let result = taskDetails;
    setData(
      result.filter(function (obj, index) {
        return obj.catogery === event.target.value;
      })
    );
    if (event.target.value === "All") {
      setData(taskDetails);
    }
  };

    return (
      <div>
        <Grid
          xl={12}
          md={12}
          lg={12}
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          className={classes.winnerContainer}
        >
          <Card className={classes.roott} color="primary">
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <div className={classes.stars}>
                  <Star
                    color="secondary"
                    fontSize="large"
                    className={classes.icons}
                  />
                  <Star
                    color="secondary"
                    fontSize="large"
                    className={classes.icons}
                  />
                  <Star
                    color="secondary"
                    fontSize="large"
                    className={classes.icons}
                  />
                </div>

                <div className={classes.namePlace}>
                  <Typography component="h5" variant="h5" align="center">
                    Janiru Semitha
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    align="center"
                    className={classes.cat}
                  >
                    All-Round Winner
                  </Typography>
                </div>

                <hr color="#16548a"></hr>
                <Typography variant="caption">Grade 10-05</Typography>
              </CardContent>
            </div>
          </Card>

          <Card className={classes.roott} color="primary">
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <div className={classes.stars}>
                  <Star
                    color="secondary"
                    fontSize="large"
                    className={classes.icons}
                  />
                  <Star
                    color="secondary"
                    fontSize="large"
                    className={classes.icons}
                  />
                </div>

                <div className={classes.namePlace}>
                  <Typography component="h5" variant="h5" align="center">
                    Nisandu Athsara
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    align="center"
                    className={classes.cat}
                  >
                    All-Round 1st Runner Up
                  </Typography>
                </div>

                <hr color="#16548a"></hr>
                <Typography variant="caption">Grade 09-07</Typography>
              </CardContent>
            </div>
          </Card>

          <Card className={classes.roott} color="primary">
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <div className={classes.stars}>
                  <Star
                    color="secondary"
                    fontSize="large"
                    className={classes.icons}
                  />
                </div>

                <div className={classes.namePlace}>
                  <Typography component="h5" variant="h5" align="center">
                    Pulitha Sethnindu
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    align="center"
                    className={classes.cat}
                  >
                    All-Round 2nd Runner Up
                  </Typography>
                </div>

                <hr color="#16548a"></hr>
                <Typography variant="caption">Grade 09-11</Typography>
              </CardContent>
            </div>
          </Card>

          <Card className={classes.roott} color="primary">
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <div className={classes.stars}>
                  <Star
                    color="secondary"
                    fontSize="large"
                    className={classes.icons}
                  />
                </div>

                <div className={classes.namePlace}>
                  <Typography component="h5" variant="h5" align="center">
                    Lithira Mendis
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    align="center"
                    className={classes.cat}
                  >
                    All-Round 2nd Runner Up
                  </Typography>
                </div>

                <hr color="#16548a"></hr>
                <Typography variant="caption">Grade 09-10</Typography>
              </CardContent>
            </div>
          </Card>
        </Grid>
      </div>
    );
}

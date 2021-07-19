import {
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logoGIF from "../Img/BITS-logo-w.gif";

const useStyles = makeStyles(() => ({
  header: {
    transition: "0.5s ease",
    background: "transparent",
    paddingRight: "79px",
    paddingLeft: "50px",
    color: "#183d5d",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },

  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#183d5d",
    textAlign: "left",
  },
  logoMobile: {},
  menuButton: {
    fontFamily: "Titillium Web, sans-serif",
    fontWeight: 700,
    size: "25px",
    marginLeft: "38px",
    textDecoration: "none",
    color: "#fff",
  },
  mobileMenuButton: {
    fontFamily: "Titillium Web, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
    textDecoration: "none",
    color: "#fff",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    width: "200px",
    height: "100%",
    backgroundColor: "#072540",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },

  headerActive: {
    transition: "0.5s ease",
    backgroundColor: "#06192e",
    height: "80px",
    paddingRight: "79px",
    paddingLeft: "118px",
    color: "#183d5d",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },

  menu: {
    color: "#3ed1b8",
  },
}));

export default function Nav() {
  const {
    header,
    menuButton,
    menu,
    headerActive,
    mobileMenuButton,
    toolbar,
    drawerContainer,
    drawer,
  } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "#fff",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon className={menu} />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
            onClick: handleDrawerClose,
          }}
          className={drawer}
        >
          <div className={drawerContainer}>
            <img
              src={logoGIF}
              alt="logo"
              style={{
                height: "100px",
                width: "100px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            ></img>
            {getDrawerChoices()}
          </div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "200px",
        }}
      >

<NavLink
          className={menuButton}
          to="#"
         
          style={{
            fontWeight: "bold",
            fontSize: "30px",
            color: "#87eddc",
          }}
        >
          TASKS ARE COMING SOON!
        </NavLink>
        <NavLink
          className={mobileMenuButton}
          to="/"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "#3ed1b8",
          }}
        >
          Home
        </NavLink>
        
        {/*<NavLink
          className={mobileMenuButton}
          to="/tasks"
          activeStyle={{
            fontWeight: "bold",
            color: "#3ed1b8",
          }}
        >
          Tasks
        </NavLink>
        <NavLink
          className={mobileMenuButton}
          to="/onlinetest"
          activeStyle={{
            fontWeight: "bold",
            color: "#3ed1b8",
          }}
        >
          Online Tests
        </NavLink>
        <NavLink
          className={mobileMenuButton}
          to="/leaderboard"
          activeStyle={{
            fontWeight: "bold",
            color: "#3ed1b8",
          }}
        >
          LeaderBoard
        </NavLink>*/}
        <NavLink
          className={mobileMenuButton}
          to="/contact"
          activeStyle={{
            fontWeight: "bold",
            color: "#3ed1b8",
          }}
        >
          Contact
        </NavLink>
      </div>
    );
  };

  const femmecubatorLogo = (
    <img src={logoGIF} alt="logo" style={{ height: "100px" }}></img>
  );

  const getMenuButtons = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "600px",
        }}
      >
        <NavLink
          className={menuButton}
          to="#"
         
          style={{
            fontWeight: "bold",
            fontSize: "30px",
            color: "#87eddc",
          }}
        >
          TASKS ARE COMING SOON!
        </NavLink>
        <NavLink
          className={menuButton}
          to="/"
          exact
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#3ed1b8",
          }}
        >
          Home
        </NavLink>
        {/*<NavLink
          className={menuButton}
          to="/tasks"
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#3ed1b8",
          }}
        >
          Tasks
        </NavLink>}
        <NavLink
          className={menuButton}
          to="/onlinetest"
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#3ed1b8",
          }}
        >
          Online Tests
        </NavLink>
        <NavLink
          className={menuButton}
          to="/leaderboard"
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#3ed1b8",
          }}
        >
          LeaderBoard
        </NavLink>*/}
        <NavLink
          className={menuButton}
          to="/contact"
          activeStyle={{
            fontWeight: "bold",
            fontSize: "20px",
            color: "#3ed1b8",
          }}
        >
          Contact
        </NavLink>
      </div>
    );
  };

  return (
    <header>
      <AppBar className={nav ? headerActive : header} elevation={0}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}

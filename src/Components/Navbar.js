
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import theme from "../theme";
import logoGIF from '../Img/logo.gif'

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Tasks",
    href: "/tasks",
  },
  {
    label: "LeaderBoard",
    href: "/leaderboard",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: theme.palette.secondary.main,
    paddingRight: "79px",
    paddingLeft: "118px",
    color: '#183d5d',
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
  logoMobile: {
    
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
    textDecoration: 'none',
    color: '#072540'
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
    height: '100%',
    paddingBottom: '100%',
    backgroundColor: '#072540',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
}));

export default function Nav() {
  const { header, logo, menuButton, toolbar, drawerContainer, drawer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const [bColor, setBColor] = useState('#000')

  function handleColor() {
    setBColor('#fff')
  }

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
            color: "#183d5d",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
            onClick: handleDrawerClose
          }}
          className={drawer}
        >
          
          <div className={drawerContainer}>
          <img src={logoGIF} style={{height: '100px'}}></img>
            {getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      
    <img src={logoGIF}></img>
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        > 
         
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const femmecubatorLogo = (
    <img src={logoGIF} style={{height: '100px'}}></img>
  );

  const getMenuButtons = () => {
    
      return (
        <div style={{    display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '600px',}}>
        <NavLink
        className={menuButton}
        to="/" exact
        activeStyle={{
          fontWeight: "bold",
          borderBottomStyle: 'solid',
          borderColor: '#183d5d',
          borderWidth: 'medium',
          color: '#005bad',
        }}
        >
          Home
        </NavLink>
        <NavLink
        className={menuButton}
        to="/tasks"
        activeStyle={{
          fontWeight: "bold",
          borderBottomStyle: 'solid',
          borderColor: '#183d5d',
          borderWidth: 'medium',
          color: '#005bad',
        }}
        >
          Tasks
        </NavLink>
        <NavLink
        className={menuButton}
        to="/onlinetest"
        activeStyle={{
          fontWeight: "bold",
          borderBottomStyle: 'solid',
          borderColor: '#183d5d',
          borderWidth: 'medium',
          color: '#005bad',
        }}
        >
          Online Tests
        </NavLink>
        <NavLink
        className={menuButton}
        to="/leaderboard"
        activeStyle={{
          fontWeight: "bold",
          borderBottomStyle: 'solid',
          borderColor: '#183d5d',
          borderWidth: 'medium',
          color: '#005bad',
        }}
        >
          LeaderBoard
        </NavLink>
        <NavLink
        className={menuButton}
        to="/contact"
        activeStyle={{
          fontWeight: "bold",
          borderBottomStyle: 'solid',
          borderColor: '#183d5d',
          borderWidth: 'medium',
          color: '#005bad',
        }}
        >
          Contact
        </NavLink>
        
        </div>
      );

  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
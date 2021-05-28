import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './theme'
import './App.css'
import Nav from './Components/Navbar'
import TaskPage from './Components/Tasks/TaskPage'
import Home from './Components/Home/Home'
import LeaderBoard from './Components/Leaderboard/Chart'
import About from './Components/About/AboutBITS'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default function App() {

  return (
    <Router>
    <ThemeProvider theme={Theme}>
    <div>
    <Nav />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/tasks" component={TaskPage}/>
      <Route path="/leaderboard" component={LeaderBoard}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={TaskPage}/>
      </Switch>
    </div>
    </ThemeProvider>
    </Router>
  );
}
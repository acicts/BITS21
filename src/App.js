import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './theme'
import './App.css'
import Nav from './Components/Navbar'
import TaskPage from './Components/Tasks/TaskPage'
import Home from './Components/Home/Home'
import LeaderBoard from './Components/Leaderboard/Chart'
import Contact from './Components/Contact/Contact'
import Task from './Components/Tasks/TaskInfo/TaskInfo'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default function App() {

  return (
    <Router>
    
    <div>
    <Nav />
      <Switch>
      <ThemeProvider theme={Theme}>
      <Route exact path="/" component={Home}/>
      <Route path="/tasks" component={TaskPage}/>
      <Route path="/leaderboard" component={LeaderBoard}/>
      <Route path="/contact" component={Contact}/>

      <Route path="/task" component={Task}/>
      </ThemeProvider>
      </Switch>
    </div>
    
    </Router>
  );
}
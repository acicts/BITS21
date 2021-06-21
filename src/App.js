import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from './theme'
import './App.css'
import Nav from './Components/Navbar'
import Footer from './Components/Footer'
import OnlineTest from './Components/OnlineTest/TestPage'
import TaskPage from './Components/Tasks/TaskPage'
import Home from './Components/Home/Home'
import LeaderBoard from './Components/Leaderboard/Chart'
import Contact from './Components/Contact/Contact'
import Task from './Components/Tasks/TaskInfo/TaskInfo'
import { BrowserRouter as Router, Switch, Route, useLocation, withRouter } from 'react-router-dom';
import NotFound from './Components/NotFound'


function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return props.children
}

const ScrollToTop = withRouter(_ScrollToTop)

export default function App() {

  return (
    <Router>
    <ScrollToTop>
    <div>
    <Nav />
      <ThemeProvider theme={Theme}>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/tasks" component={TaskPage}/>
      <Route path="/onlinetest" component={OnlineTest}/>
      <Route path="/leaderboard" component={LeaderBoard}/>
      <Route path="/contact" component={Contact}/>

      <Route path='/task/:id' component={Task} />

      <Route  path='*'> <NotFound /> </Route>
      <Route  path='*/*'> <NotFound /> </Route>
      </Switch>
      </ThemeProvider>
    
    </div>
    
    </ScrollToTop>
    </Router>
  );
}
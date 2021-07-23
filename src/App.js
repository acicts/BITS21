import { ThemeProvider } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  withRouter,
} from "react-router-dom";
import "./App.css";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import LeaderBoard from "./Components/Leaderboard/Chart";
import Nav from "./Components/Navbar";
import NotFound from "./Components/NotFound";
import OnlineTest from "./Components/OnlineTest/TestPage";
import Task from "./Components/Tasks/TaskInfo/TaskInfo";
import TaskPage from "./Components/Tasks/TaskPage";
import Theme from "./theme";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}


const ScrollToTop = withRouter(_ScrollToTop);

export default function App({ location }) {
  return (
    <Router>
      <ScrollToTop>
        <div>
          <Nav />
          <ThemeProvider theme={Theme}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/tasks" component={TaskPage} />
              <Route path="/onlinetest" component={OnlineTest} />
              <Route path="/leaderboard" component={LeaderBoard} />
              <Route path="/contact" component={Contact} />

              <Route path="/task/:id" component={Task} />

              <Route path="*">
                <NotFound />
              </Route>
              <Route path="*/*">
                <NotFound />
              </Route>
            </Switch>
            <Footer />
          </ThemeProvider>
        </div>
      </ScrollToTop>
    </Router>
  );
}

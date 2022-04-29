import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/minecraft">
            <Single />
        </Route>
      </Switch>
      

    </Router>
  );
}

export default App;

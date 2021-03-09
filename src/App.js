import React /*, { Component }*/ from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NoMatch } from "./pages/NoMatch";
import { Contact } from "./pages/Contact";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";

//class App extends Component {
function App() {
  //  render() {
    return (
  <>
    <NavigationBar/>
      <Layout>
        <Router>
          <Switch>
            <Route exact path= "/" component={Home} />
            <Route path= "/about" component={About} />
            <Route path= "/contact" component={Contact} />
            <Route component={NoMatch} />


          </Switch>

        </Router>
    </Layout>

  </>
    );
  //}
}

export default App;

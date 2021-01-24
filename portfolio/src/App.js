import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Blogs from "./components/Blogs"

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/project" component={Projects} />
          <Route exact path="/resume" component={Resume} />
        </Switch> */}
        <Blogs />
      </Router>
    </div>
  );
}

export default App;

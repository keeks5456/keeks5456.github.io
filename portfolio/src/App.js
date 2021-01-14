
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'

function App() {
  return (
    <Router>
    <div>
      {/* <Navbar />
      <Switch>
        <Route exact="/home" component={Home} />
        <Route exact="/contacts" component={Contact} />
      <Route exact="/projects" component={Projects} />
      </Switch> */}
      <Projects />
    </div>
    </Router>
  );
}

export default App;

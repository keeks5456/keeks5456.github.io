import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './components/Home'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Contact from './component/Contact'
import './App.css';

function App() {
  return (
    <Router>
    <div>
      {/* <Navbar />
      <Switch>
        <Route exact="/home" component={Home} />
      <Contact />
      </Switch> */}
    </div>
    </Router>
  );
}

export default App;

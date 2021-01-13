import logo from './logo.svg';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
    </div>
    </Router>
  );
}

export default App;

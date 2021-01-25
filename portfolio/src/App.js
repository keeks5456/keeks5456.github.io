import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useState} from 'react'
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Blogs from "./components/Blogs"

function App() {

//   const [profile, setProfile] = useState({
//     name: "Akiko Green",
//     profilePic: "",
//     ProfileUrl: ""
// })

// const [blogs, setBlogs] = useState({
//     item: [],
//     isLoading: true,
//     error: null
// })


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
        <Blogs 
        // blogs={blogs} setBlogs={setBlogs} profile={profile} setProfile={setProfile} 
        />
      </Router>
    </div>
  );
}

export default App;

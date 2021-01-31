import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useState, useEffect} from 'react'
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Blogs from "./components/Blogs";

function App() {

  const [profile, setProfile] = useState({
    name: "Akiko Green",
    profilePic: "",
    ProfileUrl: ""
})

const [blogs, setBlogs] = useState({
    item: [],
    isLoading: true,
    error: null
})

const mediumURL =
"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@agreen17";

useEffect(() => {
fetch(mediumURL)
    .then(res => res.json())
    .then(info => {
        console.log(info)
        // profile info
        const avatar = info.feed.image
        // const link = info.feed.link
        // const title = info.feed.title
        const url = info.feed.url

        //Filter the array
        const blogs = info.items
        const post = blogs.filter(item => item.categories.length > 0)

        //setState our data
        setProfile(prev => ({ ...prev, profilePic: avatar, profileUrl: url }))
        setBlogs({ item: post, isLoading: false })
    }) //end of fetch
    .catch(err => setBlogs({ error: err.message }))
}, [])// end of useEffect


console.log(profile)
console.log(blogs)
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/home">
            <Home profile={profile} />
          </Route>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
        <Route path="/blogs">
       <Blogs blogs={blogs} profile={profile} />
          </Route>   
        </Switch>
      </Router>
    </div>
  );
}

export default App;

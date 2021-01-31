import React from 'react';
import { Route } from 'react-router-dom';

// try to implement hooks here
function Home({ profile }) {

    return (
        <div>
            <div className="home-container">
                <div className="banner">
                    {/* banner image goes here BLM or something */}
                </div>
                <div className="profile-pic">
                    <img src={profile.profilePic} alt="Akiko Green" />
                </div>
                <div className="introduction">
                    <h1>My Name is Akiko Green! </h1>
                </div> 
                <div className="social-handles">
                    <ul>
                        {/* replace the text with icons */}
                        <li><a href="https://www.linkedin.com/in/agreen08/">Linkedin</a></li>
                        <li><a href="https://twitter.com/akikoDotJS/">Twitter</a></li>
                        <li><a href="https://agreen17.medium.com/">Medium</a></li>
                        <li> <a href={'mailto:akikogreen08@gmail.com'} className='email'>akikogreen08@gmail.com</a></li>
                    </ul>
                </div>
            </div> 
            {/* home container div */}
        </div>//end all divs
    );
}

export default Home;
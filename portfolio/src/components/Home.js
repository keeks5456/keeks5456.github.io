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
                    <h1>My Name is Akiko Green!</h1>
                    <h2 className="about-me">About Me!</h2>
                    <p>Before I became a Junior Software Engineer, I was what you could call a quadruple threat! I was a dancer for a team called Str8Jacket,  a Barista for a variety of coffee shops, a student at San Francisco State University and, lastly an amazing dog walker for Wags! The best thing about this life was that I was creating connections with people almost everyday! Dancing brought out my passion for expressing myself. Making coffee, gave me the ability to turn people's bad days into good ones. Going to school has molded me into a hard working and well-organized person. Honestly, walking dogs is my form of therapy! Unfortunately, it all was not enough for me. Internally, I wanted so much more for myself but in a different way. </p>

                    <h2 className="about-me">How I Got Into Coding!</h2>
                    <h4><b>New Years 2019...</b></h4>
                    <p>It was a few weeks working at 24 Hour Fitness. I had grown to dislike the job because of how </p>
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
import { motion } from 'framer-motion';
import React from 'react';
import { Route } from 'react-router-dom';
import cookieRecipie from '../projectImage/cookieRecipie.png'
import {pageTransitions} from '../containers/pageTransition'


// try to implement hooks here
function Home({ profile }) {

    return (
        <div>
            <motion.div
             initial="out"
             animate="in"
             exit="out"
             variants={pageTransitions}>
            <div className="home-container">
                <div className="banner">
                    {/* banner image goes here BLM or something */}
                </div>
                <div className="profile-pic">
                    <img src={profile.profilePic} alt="Akiko Green" />
                </div>
                <div className="introduction">
                    <motion.h1 
                    initial={{y: -550 }}
                    animate={{
                        fontSize: 100,
                        y: -10
                     }}
                    >
                    <h1>My Name is Akiko Green!</h1>
                    </motion.h1>
                    <h2 className="about-me">About Me!</h2>
                    <p>Before I became a Junior Software Engineer, I was what you could call a quadruple threat! I was a dancer for a team called Str8Jacket,  a Barista for a variety of coffee shops, a student at San Francisco State University and, lastly an amazing dog walker for Wags! The best thing about this life was that I was creating connections with people almost everyday! Dancing brought out my passion for expressing myself. Making coffee, gave me the ability to turn people's bad days into good ones. Going to school has molded me into a hard working and well-organized person. Honestly, walking dogs is my form of therapy! Unfortunately, it all was not enough for me. Internally, I wanted so much more for myself but in a different way. </p>

                    <h2 className="about-me">How I Got Into Coding!</h2>
                    <h4><b>New Years 2019...</b></h4>
                    <p>It was a few days befre New Years eve, I was working at 24 Hour Fitness. I had grown to dislike the job because of how understimulating it had become! I felt stuck and unhappy. The day before New Years I looking in the mirror and I told myself, "You cant keep working in a comfortable job! You need to take a risk, do better for yourself!"</p>
                    <img className="do-better-gif" src="https://media3.giphy.com/media/26gsetuXxUjaWPLA4/giphy.gif" width="200px" height="auto"/>
                    <p>That's where coding comes into the picture! On January 5th, 2020, I woke up at 6 or 7am, grabbed my beat up old laptop, and googled, "How to code for beginners". The first thing I learned was HTML and CSS on a free environment called "CodePen"! Learning the fundamentals of HTML, CSS and soon after getting my hands dirty with Javascript, I felt I was ready to take the risk of attending a bootcamp to further my learnings.</p>
                    <img src={cookieRecipie} width="350em" height="auto" />
                    <p>After 4 months at Flatiron School, I obtained the tools I needed to craft myself into the developer I am today! Although, I am way far off to being the developer I want to be, I am grateful for taking the first step in changing my left for a better one and learning how to code! </p>
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
            </motion.div>
        </div>//end all divs
    );
}

export default Home;
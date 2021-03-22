import { motion } from 'framer-motion';
import React from 'react';
import { Route } from 'react-router-dom';
import cookieRecipie from '../projectImage/cookieRecipie.png'
import {pageTransitions} from '../containers/pageTransition'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMedium,
    faTwitter,
    faInstagram,
    faLinkedin,
    faTelegramPlane
  } from "@fortawesome/free-brands-svg-icons";
// import {coolCry} from '../projectImage/coolCry.png'

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
                    <img className="akiko-image" src={profile.profilePic} alt="Akiko Green" />
                </div>
                <div className="introduction">
                    <motion.h1 
                    initial={{y: -550 }}
                    animate={{
                        fontSize: 100,
                        y: -10
                     }}
                    >
                    <h1>Hey There! I'm Akiko!  </h1>
                    {/* add cool cry */}
                    </motion.h1>
                    <h2 className="about-me">About Me!</h2>
                    <p>Before I became a Junior Software Engineer, I was what you could call a quadruple threat! I was a dancer for a team called Str8Jacket, a Barista at various coffee shops, a student at San Francisco State University, and lastly, an amazing dog walker for Wags! The best thing about this life was that I was creating connections with people almost every day! Dancing brought out my passion for expressing myself. Making coffee gave me the ability to turn people's bad days into good ones. Going to school has molded me into a hard-working and well-organized person. Honestly, walking dogs is my form of therapy! I love my previous experiences, but I knew that I wanted to express myself in a more technical capacity.  </p>
                    <br/>
                    <p>How I got into coding was from going the self taught route!I was able to teach myself the basics of coding by taking notes and utilizing free resources like FreeCodeCamp, where I built my own "cookie recipe sheet." From pre-work prep schools like Flatiron and Rithm, I learned the fundamentals of HTML, CSS, and Javascript. Soon after, I enrolled in Flatiron's Software Engineering Bootcamp to accelerate my learning and gain more hands-on experience building applications with a team. </p>
                    <br/>
                    <p>Fast forward to now, As a graduate from Flatiron's Bootcamp, I have a solid understanding of Javascript and Ruby and continue my studies with personal projects. I am currently searching for a full-time Software Engineer role and have made many connections along the way. I am excited to continue learning and growing my understanding as an engineer!</p>
                    <p></p>
                </div> 
                <div className="social-handles">
                <ul>
                    {/* replace the text with icons */}
                    <li><a href="https://www.linkedin.com/in/agreen08/">Linkedin <FontAwesomeIcon icon={faLinkedin}/></a></li>
                    <li><a href="https://twitter.com/akikoDotJS/">Twitter  <FontAwesomeIcon icon={faTwitter}/></a></li>
                    <li><a href="https://agreen17.medium.com/">Medium <FontAwesomeIcon icon={faMedium}/></a></li>
                    <li> <a href={'mailto:akikogreen08@gmail.com'} className='email'>Contact Me Here <FontAwesomeIcon icon={faTelegramPlane}/></a></li>
                </ul>
                </div>
            </div> 
            {/* home container div */}
            </motion.div>
        </div>//end all divs
    );
}

export default Home;
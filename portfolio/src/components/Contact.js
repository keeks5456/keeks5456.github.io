import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMedium,
    faTwitter,
    faInstagram,
    faLinkedin,
    faTelegramPlane
  } from "@fortawesome/free-brands-svg-icons";
import {pageTransitions} from '../containers/pageTransition'
import { motion } from 'framer-motion';

function Contact() {
    return (
        <div>
            <motion.div
             initial="out"
             animate="in"
             exit="out"
             variants={pageTransitions}>
           <div className="contact">
               <h1 className="question">Akiko! What is the best way someone can contact you if they have questions??</h1>
               <h2 id="reach">Ah yes! You can contact me through my links down below! </h2> 
               {/* insert arrow down icon */}
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
                </motion.div>
        </div>
    );
}

export default Contact;
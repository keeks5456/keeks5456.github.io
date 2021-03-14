import React from 'react';
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
               <h2 id="reach">The best way to reach me is through my email here </h2> 
               {/* insert arrow down icon */}
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
                </motion.div>
        </div>
    );
}

export default Contact;
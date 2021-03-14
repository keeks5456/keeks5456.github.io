import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../Utilities/Resume.pdf' //fix this later
import {pageTransitions} from '../containers/pageTransition'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMedium,
    faTwitter,
    faInstagram,
    faLinkedin,
    faTelegramPlane
  } from "@fortawesome/free-brands-svg-icons";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


function Resume() {
    return (
        <div>
            <motion.div
             initial="out"
             animate="in"
             exit="out"
             variants={pageTransitions}>
            <h2 className="heading">Resume</h2>
            <div className="res">
                <br />

                {/* <a href="Resume.pdf" rel="none" target="_blank"></a> */}

                {/* if my resume had linked embedded in them I would us this so that they are functional  */}
                <Document file={resume}
                    onLoadError={console.error}
                    style={{ width: '50vw', height: 'auto' }}>
                    <Page pageIndex={0} />
                </Document>
            </div>

            <div className="connections">
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

export default Resume;
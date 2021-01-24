import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../Utilities/Resume.pdf' //fix this later
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


function Resume() {
    return (
        <div>
        <div className="res">
            <h1>hello from resume</h1>
            <h2 className="heading">Resume</h2>

            {/* <a href="Resume.pdf" rel="none" target="_blank"></a> */} 

            {/* if my resume had linked embedded in them I would us this so that they are functional  */}
            <Document file={resume}
            onLoadError={console.error}
            style={{width: '50vw', height: 'auto'}}>
                <Page pageIndex={0}/>
            </Document>
        </div>
        <div className="connections">
        <ul>
                        {/* replace the text with icons */}
                        <li><a href="https://www.linkedin.com/in/agreen08/">Linkedin</a></li>
                        <li><a href="https://twitter.com/akikoDotJS/">Twitter</a></li>
                        <li><a href="https://agreen17.medium.com/">Medium</a></li>
                        <li> <a href={'mailto:akikogreen08@gmail.com'} className='email'>akikogreen08@gmail.com</a></li>
                    </ul>
        </div>
        </div>
    );
}

export default Resume;
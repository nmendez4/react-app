// resume.js file

import React from "react";

function Resume() {
    return (
        <div className="container">
            <div className="col">
                <p className="card">My Resumé</p>
                <hr />

                <a className="button" href={process.env.PUBLIC_URL + "/nicholas-e-mendez-resume.pdf"} target="_blank" rel="noreferrer">
                    <span className="icon">
                        <i className="fa fa-download"></i>
                    </span>
                    <span className="font">Download my Resumé Here!</span>
                </a>

            </div>
            <div className="col">
                <p className="card">Technical Skills</p>
                <hr />
                <ul>
                    <li>HTML, CSS & Markdown</li>
                    <li>JavaScript, Node.js, & Express.js</li>
                    <li>React</li>
                    <li>Git, GitHub Repositories</li>
                </ul>

            </div>

        </div>
    );
}

export default Resume;
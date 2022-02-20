// resume.js file

import React from "react";

function Resume() {
    return (
        <div className="columns">
            <div className="column">
                <p className="content is-medium">My Resumé</p>
                <hr />

                <a className="button is-primary" href={process.env.PUBLIC_URL + " /nicholas-mendez-resume.pdf"} target="_blank" rel="noreferrer">
                    <span className="icon">
                        <i className="fas fa-download"></i>
                    </span>
                    <span>Download my Resumé Here!</span>
                </a>

            </div>
            <div className="column">
                <p className="content is-medium">Technical Skills</p>
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
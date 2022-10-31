// about.js file

import React from "react";

function About() {
    return (
        <div>
            <p className="card"> About Me </p>
            <hr />
            <img className="my-photo" src={process.env.PUBLIC_URL + '/images/my-photo.jpeg'} alt="Nicholas E Mendez" />
            <p className="content">
                Hello! My name is Nicholas Mendez, I'm a recent Web Development Bootcamp graduate. Please explore my portfolio and reach out to me using the links below for further inquiries!
            </p>
            <p className="content">
                My background: The last 6 years I've spent working in the healthcare field. Now having my new-found education in technology, I'm looking to change paths and move forward with a new career in web development and information technology.
            </p>
        </div>
    );
}

export default About;
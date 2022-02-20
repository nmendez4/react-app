// about.js file

import React from "react";

function About() {
    return (
        <div>
            <p className="content">  </p>
            <hr />
            <img className="my-photo" src={process.env.PUBLIC_URL + '/images/my-photo.jpeg'} alt="Nicholas E Mendez" />
            <p className="content">
                Hello my name is Nicholas Mendez, I'm currently studying to become a full stack developer, I'm interested in UI and revamping applications to 
                fit into the new technological age
            </p>
            <p className="content">
                After having worked in the medical field for the last 6 years, I wanted to change career paths, and dive into something I've always loved, technology.
                With strong attention to detail, and a great passion for making things work, I believe I can be a great asset to any team.
            </p>
        </div>
    );
}

export default About;
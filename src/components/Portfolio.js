//  portfolio.js file

import React from "react";
import Project from "./Project";

const projects = [
    // input projects/module homework here 4-5 should be plenty
    {

    },
    {

    },
    {

    },
    {

    }
];

function Portfolio() {
    return (
        <div>
            <p className="content is-medium">Portfolio</p>
            <hr />

            <Project projects={projects} />
        </div>
    );
}

export default Portfolio;
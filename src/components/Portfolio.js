//  portfolio.js file

import React from "react";
import Project from "./Project";

const projects = [
    // input projects/module homework here 4-5 should be plenty
    {
        id: ,
        title: ,
        languages: ,
        packages: ,
        image: ,
        description: ,
        repository: ,
        live: ,
    },
    {
        id: ,
        title: ,
        languages: ,
        packages: ,
        image: ,
        description: ,
        repository: ,
        live: ,
    },
    {
        id: ,
        title: ,
        languages: ,
        packages: ,
        image: ,
        description: ,
        repository: ,
        live: ,
    },
    {
        id: ,
        title: ,
        languages: ,
        packages: ,
        image: ,
        description: ,
        repository: ,
        live: ,
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
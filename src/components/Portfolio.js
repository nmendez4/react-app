//  portfolio.js file

import React from "react";
import Project from "./Project";

const projects = [
    // input projects/module homework here 4-5 should be plenty
    {
        id: 0,
        title: "Just Tech News",
        languages: "Java, HTML, JavaScript, CSS",
        packages: "SpringBoot, Maven",
        image: "/images/justtechnews.png",
        description: "A tech news platform for all to chat about the latest and greatest in IT",
        repository: "https://github.com/nmendez4/tech-news-java-api",
        live: "https://cc-java-api-24.herokuapp.com/"
    },
    {
        id: 1,
        title: "Take It or Leave It",
        languages: "JavaScript, HTML, CSS",
        packages: "Node.js, Express.js, Handlebars.js, MySQL, Sequelize",
        image: "/images/take-it-or-leave-it.png",
        description: "A comprehensive platform that lets users sign in, build a profile, list, buy and/or sell items to and from other sellers",
        repository: "https://github.com/nmendez4/take-it-or-leave-it",
        live: "https://desolate-dusk-43697.herokuapp.com/",
    },
    {
        id: 2,
        title: "budget-app",
        languages: "JavaScript",
        packages: "MongoDB, Mongoose, Node.js, Express.js",
        image: "/images/budget-app.png",
        description: "An application that allows the user to track their spending, with the extra added benefit of offline tracking that will allow a data push once internet connection is restored",
        repository: "https://github.com/nmendez4/budget-app",
        live: "https://budget-app-pwa4.herokuapp.com/",
    },
    {
        id: 3,
        title: "social-network-api",
        languages: "JavaScript",
        packages: "MongoDB, Mongoose, Node.js, Express.js",
        image: "/images/social-network-api.png",
        description: "An application that allows the user to sign into a social media app, post, comment, and like on other user's posts ",
        repository: "https://github.com/nmendez4/social-network-api",
        live: "N/A",
    },
    {
        id: 4,
        title: "tech-blog",
        languages: "JavaScript",
        packages: "Node.js, Express.js, Handlebars.js, MySQL, Sequelize",
        image: "/images/tech_blog.png",
        description: "A tech blog that allows users to sign in and view posts of their own and the posts of other users",
        repository: "https://github.com/nmendez4/tech-blog",
        live: "https://tech-nically-a-blog.herokuapp.com/",
    },
    {
        id: 5,
        title: "ecommerce-back-end",
        languages: "JavaScript, Insomnia",
        packages: "Node.js, Express.js, Sequelize, ORM",
        image: "/images/e_commerce-ORM.png",
        description: "This application allows the user to access a storage system that contains items from a 'marketplace', and then view their id, product-name, category, price and stock",
        repository: "https://github.com/nmendez4/ecommerce-back-end",
        live: "N/A",
    },
    {
        id: 6,
        title: "mysql-employee-tracker",
        languages: "JavaScript",
        packages: "Node.js, inquirer.js, MySQL2, console.table",
        image: "/images/employee-tracker.png",
        description: "This application allows the user to access an employee database, view all employees, departments, managers, salaries and roles for all employees at the company",
        repository: "https://github.com/nmendez4/mysql-employee-tracker",
        live: "N/A",       
    }
];

function Portfolio() {
    return (
        <div>
            <p className="card">My Portfolio Work</p>
            {/* <hr /> */}

            <Project projects={projects} />
        </div>
    );
}

export default Portfolio;
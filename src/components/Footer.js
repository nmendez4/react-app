//  footer.js file

import React from "react";

function Footer() {
    return (
        <footer>
            <div className="card">
                <p>
                    <strong>My Web Development Portfolio</strong> built with JavaScript and React! by{" "}
                    <a href="https://nmendez4.github.io/react-app/#about" target="_blank" rel="noreferrer">
                        Nicholas E Mendez
                    </a>
                    .
                    <hr />
                    <a href="https://www.linkedin.com/in/nicholas-e-mendez5/" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>{" "} | {" "}{" "}
                    <a href="https://www.github.com/nmendez4" target="_blank" rel="noreferrer">
                        GitHub
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
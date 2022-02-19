//  footer.js file

import React from "react";

function Footer() {
    return (
        <footer>
            <div className="content has-test-centered">
                <p>
                    <strong>My Web Development Portfolio</strong> built with React! by{" "}
                    <a href="https://github.com/nmendez4" target="_blank" rel="noreferrer">
                        Nicholas E Mendez
                    </a>
                    .
                    <hr />
                    <a href="https://www.linkedin.com/in/nicholas-mendez-5nem94/" target="_blank" rel="noreferrer">
                        LinkedIn
                    </a>{" "} | {" "}{" "}
                    <a href="https://www.stackoverflow.com" target="_blank" rel="noreferrer">
                        My Saving Grace
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
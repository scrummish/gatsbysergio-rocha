import React from "react";

const FooterSection = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer__logo-box">
                <p className="logo">&lt; Sergio /&gt;</p>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__nav">
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a className="footer__link"
                                    href="#about-me-section">About Me</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link"
                                    href="#portfolio-section">Portfolio</a>
                            </li>
                            <li className="footer__item">
                                <a className="footer__link"
                                    href="#reviews-section">Reviews</a>
                            </li>
                        </ul>
                    </div>
                </div>
            
            <div className="col-1-of-2">
                <p className="footer__copy">I'm a Chicago born and raised software developer with an amazing web development toolkit. I can help you build and grow your next project. Have an altruistic mission, low on funds, and need a developer? I am always up
                for pro bono work for the right cause! Send me an email, let's chat.<br/><br/>
                    <a className="footer__link utility-margin-right-small" href="#">rochascript@gmail.com</a> <span className="utility-margin-right-small">|</span> <a className="footer__link" href="#">312-728-0297</a>
                </p>
            </div>
            </div>
        </footer>
    )
}

export default FooterSection;
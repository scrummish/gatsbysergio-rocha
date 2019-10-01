import React from "react";

const FooterSection = () => {
    return (
        <footer class="footer" id="contact">
            <div class="footer__logo-box">
                <p class="logo">&lt; Sergio /&gt;</p>
            </div>
            <div class="row">
                <div class="col-1-of-2">
                    <div class="footer__nav">
                        <ul class="footer__list">
                            <li class="footer__item">
                                <a class="footer__link"
                                    href="#about-me-section">About Me</a>
                            </li>
                            <li class="footer__item">
                                <a class="footer__link"
                                    href="#portfolio-section">Portfolio</a>
                            </li>
                            <li class="footer__item">
                                <a class="footer__link"
                                    href="#reviews-section">Reviews</a>
                            </li>
                        </ul>
                    </div>
                </div>
            
            <div class="col-1-of-2">
                <p class="footer__copy">I'm a Chicago born and raised software developer with an amazing web development toolkit. I can help you build and grow your next project. Have an altruistic mission, low on funds, and need a developer? I am always up
                for pro bono work for the right cause! Send me an email, let's chat.<br/><br/>
                    <a class="footer__link utility-margin-right-small" href="#">rochascript@gmail.com</a> <span class="utility-margin-right-small">|</span> <a class="footer__link" href="#">312-728-0297</a>
                </p>
            </div>
            </div>
        </footer>
    )
}

export default FooterSection;
import React from "react";

const Popup = ({title,i,tech,about,link}) => {
    let popupid = ["pop-up-", i].join("");
    return (
            <div class="pop-up" id={popupid}>
                <div class="pop-up__content">
                    <div class="pop-up__left-side"><img alt=""
                        class="pop-up__img"
                        src="images/nat-8.jpg"/> <img alt=""
                        class="pop-up__img"
                        src="images/nat-9.jpg"/></div>
                    <div class="pop-up__right-side">
                    <a class="pop-up__exit"
                        href="#portfolio-section">&times;</a>
                    <h2 class="secondary-heading secondary-heading--blue utility-margin-bottom-small">{title}</h2>
                    <h3 class="tertiary-heading utility-margin-bottom-small">{tech}</h3>
                    <p class="pop-up__text">{about}</p><a class="btn btn--blue"
                        href={link}
                        target="_blank">Visit Here</a>
                    </div>
                </div>
            </div>
    )
}

export default Popup;
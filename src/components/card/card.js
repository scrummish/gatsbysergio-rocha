import React from "react";

const Card = ({title,github,index,detail,url}) => {
    let img = ["card__pic--", index].join("");
    let headingcolor = ["card__heading-span--", index].join("");
    let backgroundcolor = ["card__face--back-", index].join("");
    // let modal = ["#pop-up-", index].join("");
    return (
        <div class="col-1-of-3">
            <div class="card">
                <div class="card__face card__face--front">
                    <div class={"card__pic" + " " + img}>&nbsp;</div>
                    <h4 class="card__heading"><span class={"card__heading-span" + " " + headingcolor}>{title}</span></h4>
                    <div class="card__detail">
                        <ul>
                            {detail.map((item)=>{
                                return <li key={item}>{item}</li>;
                            })}
                        </ul>
                    </div>
                </div>
                <div class={"card__face card__face--back" + " " + backgroundcolor} >
                    <div class="card__action-box">
                        <div class="card__action-sub-box">
                            <p class="card__action-heading">see the code on</p>
                            <p class="card__action-sub-heading"><a class="utility-remove-decoration utility-font-color-purple"
                                href={github}
                                target="_blank">github</a></p>
                            <p class="card__action-heading">or</p>
                        </div><a class="btn btn--light"
                                href={url} target="_blank">Visit Here</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
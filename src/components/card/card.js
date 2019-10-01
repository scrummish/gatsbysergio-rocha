import React from "react";

const Card = ({title,github,index,detail,url}) => {
    let img = ["card__pic card__pic--", index].join("");
    let headingcolor = ["card__heading-span card__heading-span--", index].join("");
    let backgroundcolor = ["card__face card__face--back card__face--back-", index].join("");
    // let modal = ["#pop-up-", index].join("");
    return (
        <div className="col-1-of-3">
            <div className="card">
                <div className="card__face card__face--front">
                    <div className={img}>&nbsp;</div>
                    <h4 className="card__heading"><span className={headingcolor}>{title}</span></h4>
                    <div className="card__detail">
                        <ul>
                            {detail.map((item)=>{
                                return <li key={item}>{item}</li>;
                            })}
                        </ul>
                    </div>
                </div>
                <div className={backgroundcolor} >
                    <div className="card__action-box">
                        <div className="card__action-sub-box">
                            <p className="card__action-heading">see the code on</p>
                            <p className="card__action-sub-heading"><a className="utility-remove-decoration utility-font-color-purple"
                                href={github}
                                target="_blank" rel="noopener noreferrer">github</a></p>
                            <p className="card__action-heading">or</p>
                        </div><a className="btn btn--light"
                                href={url} target="_blank" rel="noopener noreferrer">Visit Here</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
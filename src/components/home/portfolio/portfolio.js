import React from "react";
import Card from "../../card";
// import Popup from "../../cardspopup";

const WORK = [
    {
        title: "eSports: Competitive Advantage",
        github: "https://github.com/scrummish/Competitive-Advantage-Back-End-",
        tech:  "MERN App (Mongodb, Express.js, React.js, Node.js",
        about: `Quick application I created to track professional fighting game players win/loss records. I can search by game and by player and view any available footage of the chosen players tournament losses in order to
        study my opponents weaknesses.`,
        url: "http://e-sports-advantage.herokuapp.com/",
        detail: ["Fullstack Mern App", "Reactjs, Expressjs, Mongodb, Mongoose, Material UI", "(in beta)"]
    },
    {
        title: "Space Invaders 18'",
        github: "https://github.com/scrummish/Space-Invaders-2018",
        tech:  "",
        about: "",
        url: "https://scrummish.github.io/Space-Invaders-2018/",
        detail: ["Browser Based Video Game", "JavaScript ES6, CSS3, HTML5 Canvas", "(in beta)"]
    },
    {
        title: "Real Estate Lead Generator",
        github: "https://github.com/scrummish/Real-Estate-Lead-Generator",
        tech:  "",
        about: "",
        url: "http://realestateleadgenerator.herokuapp.com/",
        detail: ["Fullstack Multi Page App", "EJS (Templating Language), expressjs, mongodb, mongoose, Less", "(in beta)"]
    }

]

const PortfolioSection = () => {
    return (
        <section className="prices-section" id="portfolio-section">
            <div className="utility-center-text utility-margin-bottom-large">
                <h2 className="secondary-heading">Portfolio</h2>
            </div>
            <div className="row">
                {WORK.map((obj,index)=> {
                    return (
                        <Card key={obj.url} title={obj.title} github={obj.github} index={index+1} detail={obj.detail} url={obj.url}/>
                    ) 
                })}   
            </div>
        </section>
    )
}

export default PortfolioSection;

/* <Popup title={obj.title} i={index+1} tech={obj.tech} about={obj.about} url={obj.url}/> */
import React from "react";

const About = () => {
  return (
    <section class="about-section" id="about-me-section">
      <div class="utility-center-text utility-margin-bottom-large">
        <h2 class="secondary-heading">WHO AM I</h2>
      </div>
      <div class="row">
        <div class="col-1-of-2">
          <h3 class="tertiary-heading utility-margin-bottom-small">
            JavaScript Geek
          </h3>
          <p class="paragraph">
            I love javascript! So naturally I tend to gravitate towards JS
            frameworks and libraries but I do work with Ruby based technologies
            as well. I am a full stack web developer with a passion for making
            things both beautiful and efficient. I am known for throwing myself
            into an environment and getting things done, whether it requires
            diving in headfirst to learn a new framework/technology, to leading
            a team, to asking the right questions that help me identify
            important elements for success. I use my keen sense of focus to
            solve problems that come my way. As a previous pro level video game
            competitor, I found that my focus was what separated myself from the
            many other great players and lead me to all my tournament wins. Now
            my focus is web development and I am excited to see what we can
            accomplish.
          </p>
          <h3 class="tertiary-heading utility-margin-bottom-small">100% CSS</h3>
          <p class="paragraph">
            All the animation and interactivity on this page is done with 100%
            CSS, no JavaScript at all. Check out the source code!
          </p>
          <a
            class="btn-text"
            href="https://github.com/scrummish/css-float-layout"
            target="_blank"
          >
            See the code &rarr;
          </a>
        </div>
        <div class="col-1-of-2">
          <div class="composition">
            <img
              alt="Photo Google"
              class="composition__photo composition__photo--1"
              src="img/react.jpg"
            />
            <img
              alt="Photo SEO"
              class="composition__photo composition__photo--3"
              src="img/frontend.png"
            />
            <img
              alt="Photo Gizmos"
              class="composition__photo composition__photo--2"
              src="img/node.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

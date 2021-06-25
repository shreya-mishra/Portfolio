import React from "react";
import about from "../Images/about-me.png";
import me from "../Images/me3.png";
import "./About.css";
import Container from "@material-ui/core/Container";
import "../App.css";

const About = () => {
  return (
    <Container>
      <div id='about' style={{ textAlign: "center", margin: 80 }}>
        <div style={{ height: "190px" }}></div>
        <img src={about} alt='about' style={{ maxWidth: "100%" }} />
        <div style={{ height: 50 }}></div>
        <div className='aboutpart'>
          <img
            src={me}
            alt='me'
            height={"352px"}
            width={"412px"}
            className='myprofile'
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "100%",
            }}>
            <p style={{ textIndent: "50px", xwordSpacing: "50px" }}>
              I'm obsessed with making things and even more obsessed with making
              things better.After graduating from the University of Vellore
              Institute of Technology, I've been actively involved in the web
              developers community since june 2020. I've designed websites
              ,applications for small businesses, corporations, nonprofits,and
              more. I also started a design blog, animation, where I share
              inspiration, tutorials, and resources.
            </p>

            <p>
              My specialty is full web and applications design and development,
              making pixel turning it into beautiful, semantic HTML & CSS. My
              interests, however, extend beyond the web and I love helping
              people . I even love to think beyond the box and add the news
              features in projects.
            </p>
          </div>
        </div>
        <p>
          When I'm not developing, I'm probably hanging out with my friends,
          binge watching series, watching phone galleries, or messing around on
          something inspired by Steve Jobs.
        </p>
      </div>
    </Container>
  );
};

export default About;

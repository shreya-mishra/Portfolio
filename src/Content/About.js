import React from 'react'
 import about from "../Images/about-me.png"
 import me from "../Images/polaroid.png"
 import "./About.css"

const About = () => {
    return (
        <div style={{textAlign:"center",margin:80}}>
        <div style={{height:"190px"}}></div>
        <img src={about} alt="about" />
            <div style={{height:50}}></div>
            <div style={{display:'flex'}}>
        <img src={me} alt="me"  style={{marginLeft:60}}/>
         <div style={{display:'flex',flexDirection:"column"}}>
        <p style={{textIndent:"50px",xwordSpacing:"50px"}}>I'm obsessed with making things and even more obsessed with making things better.After graduating from 
        the University of Vellore Institute of Technology, 
             I've been actively involved in the web developers community since june 2020.
              I've designed websites ,applications for small businesses, corporations, nonprofits,and more.
               I also started a design blog, animation, where I share inspiration, tutorials, and resources.</p>

        <p>My specialty is full web and applications design and development, making pixel turning it into 
                beautiful, semantic HTML & CSS. My interests, however, extend beyond the web and I love helping people . I even love to think beyond the box and add the news features in projects.</p>
      
</div>
        </div>
        <p>When I'm not developing, I'm probably hanging out with my friends, binge watching series on youtube,
             watching phones galleries, or messing around on something inspired by Steve Jobs.

</p>
        </div>
    )
}

export default About

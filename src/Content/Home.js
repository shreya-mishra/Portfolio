import React from "react";
 import quote from "../Images/invent.png"
 import fleur from "../Images/fleur.png"

const Home = () => {
  
    return (
      <>

      <div id= "home" style={{textAlign:"center"}}>

        <div style={{height:"150px"}}></div>

        <img src={quote} alt="quote" style={{  maxWidth:"100%"}} />
                  <div style={{height:"30px"}}></div>

        <p style={{maxWidth:"100%"}}>Hello, my name is <em>Shreya Mishra</em>. I'm a Application and 
          Web Developer based in Hardoi, India. If you have a project or creative need that I can 
          help with, please get in touch.</p>
         <div style={{height:"30px"}}></div>

        <img src={fleur} alt="end" />

      </div>
      </>
    );
  
}
 
export default Home;
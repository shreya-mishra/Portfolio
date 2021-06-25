import React from "react";
import Home from "./Content/Home";
import Header from "./Component/Header";
import About from "./Content/About";
import Work from "./Content/Work";
import Contact from "./Content/Contact";

const App = () => {
  return (
    <>
      <div>
        <Header />

        <div className='content'>
          <Home />
          <About />
          <Work />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;

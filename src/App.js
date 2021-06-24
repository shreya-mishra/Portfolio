import React from 'react'
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from './Content/Home';
import Header from './Component/Header';
import About from './Content/About';
import Work from './Content/Work';
import Contact from './Content/Contact';

const App = () => {

    return (
           <HashRouter>
        <div>
          {/* <h1>Simple SPA</h1> */}
          <Header />
          {/* <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/stuff">Stuff</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul> */}
              <div className="content">
            <Route path="/" component={Home}/>
                   <Route path="/about" component={About}/>
                    <Route path="/work" component={Work}/>
                    <Route path="/contact" component={Contact}/>

                                  {/* <Route path="/blog" component={Blog}/>  */}
          </div>
        </div>
      </HashRouter>
    )
}

export default App

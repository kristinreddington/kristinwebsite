import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import About from './About'; 
import Blog from './Blog'; 
import Contact from './Contact'; 
import HomePage from './HomePage'; 
import Services from './Services'; 

import './Nav.css';

class Nav extends Component {
  render() {

    return (

    <Router>
      <div className="container">
      <div className="logocontainer">
          <NavLink id="logo"  to='/'>K.N.R.</NavLink>
          {/* <hr style={{border: '1px' }}></hr> */}
      </div>
      
      <div className="Nav">
        <ul id="main-menu" className= "menu">
          <li><NavLink id="about" className="menu" to='/about'>About</NavLink></li>
       
          <li><NavLink id="services" className="menu" to='/services'>Services</NavLink></li>
          <li><NavLink id="contact" className="menu" to='/contact'>Contact</NavLink></li> 
          <li><NavLink id="blog" className="menu" to='/blog'>Blog</NavLink></li>
        </ul>
        
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={About} />
        <Route path='/blog' component={Blog} />
        <Route exact path='/services' component={Services} />
        <Route  path='/contact' component={Contact} />
      </div>
      </div> 
    </Router>
    )}
}
export default Nav;
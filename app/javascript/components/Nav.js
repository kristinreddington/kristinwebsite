import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import About from './About'; 
import Blog from './Blog'; 
import Contact from './Contact'; 
import HomePage from './HomePage'; 
import Services from './Services'; 

class Nav extends Component {
  render() {

    return (

    <Router>
      <div>
        <NavLink className="navbar-brand" to='/'>K.N.R</NavLink>
        <NavLink id="about" className="navbar-nav" to='/about'>About</NavLink> 
        <NavLink id="blog" className="navbar-nav" to='/blog'>Blog</NavLink>
        <NavLink id="services" className="navbar-nav" to='/services'>Services</NavLink>
        <NavLink id="contact" className="navbar-nav" to='/contact'>Contact</NavLink> 
        
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={About} />
        <Route path='/blog' component={Blog} />
        <Route exact path='/services' component={Services} />
        <Route  path='/contact' component={Contact} />
      </div>
    </Router>
    )}
}
export default Nav;
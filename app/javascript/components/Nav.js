import React from 'react'; 
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const Nav = (props) => (
    <Router>
      <div>
        <NavLink className="navbar-brand" to='/'>K.N.R</NavLink>
        <NavLink id="about" className="navbar-nav" to='/login'>About</NavLink> 
        <NavLink id="blog" className="navbar-nav" to='/blog'>Blog</NavLink>
        <NavLink id="services" className="navbar-nav" to='/services'>Services</NavLink>
        <NavLink id="contact" className="navbar-nav" to='/contact'>Contact</NavLink> 
        <Route path='/' component={HomePage} />
        <Route path='/about' component={About} />
        <Route path='/blog' component={Blog} />
        <Route exact path='/services' component={Services} />
        <Route  path='/contact' component={Contact} />
      </div>
    </Router>
)
export default Nav;
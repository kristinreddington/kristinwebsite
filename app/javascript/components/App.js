import React from "react"
import PropTypes from "prop-types"
import HomePage from './HomePage'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <BrowserRouter>
        <Switch> 
          <Route exact path="/" render={() => ("Home!")} />
          <Route path="/hello" render={() => <HomePage greeting="Friend"/>} />
        </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App

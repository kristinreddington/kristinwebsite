import React from "react"

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Provider } from 'react-redux'

import Nav from './Nav' 
import configureStore from '../configureStore'
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Nav /> 
      </Provider>
    );
  }
}

export default App

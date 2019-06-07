// import ReactRailsUJS from 'react_ujs'
console.log('Hello World from Webpacker')
// Support component names relative to this directory:
var componentRequireContext = require.context("components", true)
var ReactRailsUJS = require("react_ujs")
ReactRailsUJS.useContext(componentRequireContext)

import 'semantic-ui-css/semantic.min.css';
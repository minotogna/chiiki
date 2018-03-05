import './app-styles/app-style.scss'
// import './vendor/vendor.ts.js'

import React from 'react'
import ReactDOM from 'react-dom'

import routes from './routes'
import { Router } from './router'

function renderApp () {
  ReactDOM.render(
    <Router routes={routes}/>
    ,
    document.getElementById('main'),
  )
}

renderApp()

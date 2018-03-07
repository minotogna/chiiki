import './app-styles/app-style.scss'
// import './vendor/vendor.ts.js'

import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'
import App from './app/app'

function renderApp () {
  ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    ,
    document.getElementById('main'),
  )
}

renderApp()

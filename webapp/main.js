import './app-styles/app-style.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
//import createDebounce from 'redux-debounced'
import reducer from './app/rootReducer'

//const store = createStore(reducer, applyMiddleware(createDebounce(), thunkMiddleware))
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

import App from './app/app'

function renderApp () {

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
    ,
    document.getElementById('main')
  )

}

renderApp()

import './app.scss'

import React from 'react'
import { connect } from 'react-redux'
import * as R from 'ramda'

import { fetchInitialData } from './actions'

import { Switch, Route } from 'react-router'

import SearchView from '../search/searchView'
import EditJobView from '../job/edit/editJobView'

class App extends React.Component {

  constructor () {
    super()
    this.createRoute = this.createRoute.bind(this)
  }

  componentDidMount () {
    this.props.fetchInitialData()
  }

  createRoute (component) {
    const {i18n} = this.props

    return (...args) => React.createElement(
      component,
      {
        ...args,
        i18n
      }
    )
  }

  render () {
    const {appReady} = this.props
    return appReady
      ? <Switch>
        <Route exact path="/" render={this.createRoute(SearchView)}/>
        <Route exact path="/app/jobs/job" render={this.createRoute(EditJobView)}/>
        <Route exact path="/app/jobs/job/:id" render={this.createRoute(EditJobView)}/>
      </Switch>
      : null
  }

}

const mapStateToProps = state => ({
  i18n: R.path(['app', 'i18n'], state),
  appReady: !!R.path(['app', 'i18n'], state)
})

export default connect(mapStateToProps, {fetchInitialData})(App)
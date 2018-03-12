import './app.scss'

import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import * as R from 'ramda'

import { fetchInitialData } from './actions'

import Header from '../app-components/header'
import Footer from '../app-components/footer'

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

    return (args) =>
      React.createElement(
        component,
        {...args, i18n}
      )
  }

  render () {
    const {appReady, i18n} = this.props

    return appReady
      ? <React.Fragment>
        <Header i18n={i18n}/>
        <Switch>
          <Route exact path="/" render={this.createRoute(SearchView)}/>
          <Route exact path="/app/jobs/job" render={this.createRoute(EditJobView)}/>
          <Route exact path="/app/jobs/job/:id" render={this.createRoute(EditJobView)}/>
        </Switch>
        <Footer i18n={i18n}/>
      </React.Fragment>
      : null
  }

}

const mapStateToProps = state => ({
  i18n: R.path(['app', 'i18n'], state),
  appReady: !!R.path(['app', 'i18n'], state)
})

export default withRouter(
  connect(mapStateToProps, {fetchInitialData})(App)
)
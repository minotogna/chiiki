import './app.scss'

import React from 'react'

import { Switch, Route } from 'react-router'

import SearchView from '../search/searchView'
import EditJobView from '../job/edit/editJobView'

const App = () => {

  return <Switch>
    <Route exact path="/" component={SearchView}/>
    <Route exact path="/app/jobs/job" component={EditJobView}/>
    <Route exact path="/app/jobs/job/:id" component={EditJobView}/>

  </Switch>

}

export default App
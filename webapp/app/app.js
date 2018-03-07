import React from 'react'

import {Switch, Route} from 'react-router'

import SearchView from '../search/searchView'
import EditJobView from '../job/editJobView'

const App = () => {

  return <Switch>
    <Route exact path="/" component={SearchView} />
    <Route exact path="/index.html" component={SearchView} />
    <Route path="/jobs/job" component={EditJobView} />

  </Switch>

}

export default App
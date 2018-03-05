import * as R from 'ramda'
import React from 'react'
import Route from 'route-parser'

import SearchView from './search/searchView'
import view1 from './view1'
import view2 from './view2'

const routeMappings = {
  '/': SearchView,
  '/index.html': SearchView,
  '/view1': view1,
  '/view1/:p1': view1,
  '/view2': view2
}

const routes = R.pipe(
  R.keys,
  R.map(k => ({route: new Route(k), component: routeMappings[k]}))
)(routeMappings)

export default routes

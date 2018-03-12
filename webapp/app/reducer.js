import * as R from 'ramda'

import { exportReducer } from '../app-utils/reducerUtils'

import { appInitialDataLoaded } from './actions'

const actionHandlers = {
  [appInitialDataLoaded]: (state, action) => R.assoc('i18n', action.i18n, state)
}

export default exportReducer(actionHandlers)

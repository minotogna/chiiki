import * as R from 'ramda'

import { exportReducer } from '../app-utils/reducerUtils'

import {
  jobEditValidationUpdated,
  jobListLoaded
} from './actions'

const actionHandlers = {

  [jobEditValidationUpdated]: (state, action) =>
    R.assocPath(['edit', 'validation'], action.validation, state),

  [jobListLoaded]: (state, action) =>
    R.assocPath(['list', 'all'], action.jobs, state)

}

export default exportReducer(actionHandlers)
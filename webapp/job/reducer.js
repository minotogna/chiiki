import * as R from 'ramda'

import { exportReducer } from '../app-utils/reducerUtils'

import {
  jobEditJobLoaded,
  jobEditValidationUpdated,
  jobListLoaded
} from './actions'

const actionHandlers = {

  [jobEditJobLoaded]: (state, action) =>
    R.assocPath(['edit', 'job'], action.job, state),

  [jobEditValidationUpdated]: (state, action) =>
    R.assocPath(['edit', 'validation'], action.validation, state),

  [jobListLoaded]: (state, action) =>
    R.assocPath(['list', 'all'], action.jobs, state)

}

export default exportReducer(actionHandlers)
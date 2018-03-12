import * as R from 'ramda'

import { exportReducer } from '../app-utils/reducerUtils'

import {
  jobEditJobUpdated,
  jobListLoaded
} from './actions'

const actionHandlers = {

  [jobEditJobUpdated]: (state, action) => R.pipe(
    R.assocPath(['edit', 'job'], action.job),
    R.assocPath(['edit', 'validation'], action.validation)
  )(state),


  [jobListLoaded]: (state, action) =>
    R.assocPath(['list', 'all'], action.jobs, state)

}

export default exportReducer(actionHandlers)
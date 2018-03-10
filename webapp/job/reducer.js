import * as R from 'ramda'

import { exportReducer } from '../app-utils/reducerUtils'

import { editJobValidationStatusChange } from './actions'

const actionHandlers = {
  [editJobValidationStatusChange]: (state, action) => R.assocPath(['edit', 'validation'], action.validation, state)
}

export default exportReducer(actionHandlers)
import { combineReducers } from 'redux'

import app from './reducer'
import job from '../job/reducer'

export default combineReducers({
  app,
  job
})
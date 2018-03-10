import axios from 'axios'


import { validateJob } from '../../common/job/jobValidator'

export const editJobValidationStatusChange = 'editJob/validation/statusChange'

export const postJob = job => async dispatch => {
  const validation = validateJob(job)

  if (validation.valid) {
    //post
    await axios.post('/api/jobs/job', job)
  } else {
    dispatch({type: editJobValidationStatusChange, validation})
  }
}
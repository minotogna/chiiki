import { validateJob } from '../../common/job/jobValidator'

export const editJobValidationStatusChange = 'editJob/validation/statusChange'

export const postJob = job => dispatch => {
  const validation = validateJob(job)

  if (validation.valid) {
    //post
  } else {
    dispatch({type: editJobValidationStatusChange, validation})
  }
}
import axios from 'axios'

import { validateJob } from '../../common/job/jobValidator'

export const jobListLoaded = 'job/list/loaded'
export const jobEditValidationUpdated = 'job/edit/ValidationUpdated'

export const postJob = job => async dispatch => {
  try {
    const validation = validateJob(job)

    if (validation.valid) {
      //post
      await axios.post('/api/jobs/job', job)
      window.location = '/'
    } else {
      dispatch({type: jobEditValidationUpdated, validation})
    }

  } catch (err) {
    alert('An error occurred ' + err)
  }
}

export const listJobs = () => async dispatch => {
  try {
    const jobs = await axios.get('/api/jobs')
    dispatch({type: jobListLoaded, jobs})
  } catch (err) {
    alert('An error occurred ' + err)
  }
}
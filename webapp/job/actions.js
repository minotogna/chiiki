import * as R from 'ramda'

import { get, post } from '../app-utils/ajaxUtils'

import { validateJob, validateJobField } from '../../common/job/jobValidator'

export const jobListLoaded = 'job/list/loaded'
export const jobEditJobUpdated = 'job/edit/updated'

//get list
export const listJobs = () => async dispatch => {
  const jobs = await get('/api/jobs')
  dispatch({type: jobListLoaded, jobs})
}

//get one
export const findJob = (id) => async dispatch => {
  const job = id
    ? await get(`/api/jobs/job/${id}`)
    : {}
  dispatch({type: jobEditJobUpdated, job, validation: {}})
}

//edit methods

export const updateJobField = (job, field, value) => (dispatch, getState) => {
  const jobUpdated = R.assoc(field, value, job)

  const validation = R.path(['job', 'edit', 'validation'], getState())
  const validationUpdated = validateJobField(jobUpdated, validation, field)

  dispatch({type: jobEditJobUpdated, job: jobUpdated, validation: validationUpdated})
}

export const postJob = job => async dispatch => {
  const validation = validateJob(job)

  if (validation.valid) {
    //post
    await post('/api/jobs/job', job)
    window.location = '/'
  } else {
    dispatch({type: jobEditJobUpdated, job, validation})
  }
}
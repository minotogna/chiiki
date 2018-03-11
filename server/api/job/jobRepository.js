const {map, one, any} = require('../../db/db')
const {toUTCSelectParam} = require('../../db/dbUtils')

// ===== persist methods
const persistJob = async job =>
  job.id
    ? await updateJob(job)
    : await insertJob(job)

const updateJob = async job =>
  await one(`
    UPDATE job  
    SET data =  $1
    WHERE id = $2
    RETURNING id`,
    [job, job.id],
    () => job
  )

const insertJob = async job =>
  await one(`
    INSERT INTO job (data)
    VALUES ($1)
    RETURNING id, added_time`,
    [job],
    res => ({
      id: res.id,
      addedTime: res.added_time,
      ...job
    })
  )

// ===== get methods
const listJobs = async () => {
  return await map(`
    SELECT id, ${toUTCSelectParam('added_time')}, data 
    FROM job
    ORDER BY added_time DESC`,
    [],
    job => ({
      id: job.id,
      addedTime: job.added_time,
      ...job.data
    }))
}

// ===== get methods
const findJob = async (id) => {
  return await one(`
    SELECT id, ${toUTCSelectParam('added_time')}, data 
    FROM job
    WHERE id = ($1)
    ORDER BY added_time DESC`,
    [id],
    job => ({
      id: job.id,
      addedTime: job.added_time,
      ...job.data
    }))
}

module.exports = {
  persistJob,
  listJobs,
  findJob
}
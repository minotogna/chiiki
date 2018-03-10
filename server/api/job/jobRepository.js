const {map, one} = require('../../db/db')
const {toUTCSelectParam} = require('../../db/dbUtils')

// ===== persist methods
const persistJob = async job => {
  return await one(`
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
}

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

module.exports = {
  persistJob,
  listJobs
}
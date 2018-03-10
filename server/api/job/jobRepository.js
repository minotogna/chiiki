const db = require('../../db/db')
const {toUTCSelectParam} = require('../../db/dbUtils')

// ===== persist methods
const persistJob = async job => {

  const res = await db.tx(t => {
    return t.one(`
      INSERT INTO job (data)
      VALUES ($1)
      RETURNING id, added_time
      `, [job])
  })

  return {
    id: res.id,
    addedTime: res.added_time,
    ...job
  }

}

// ===== get methods
const listJobs = async () => {
  const jobs = await db.any(`
    SELECT id, ${toUTCSelectParam('added_time')}, data 
    FROM job
  `)

  return jobs.map(job => ({
    id: job.id,
    addedTime: job.added_time,
    ...job.data
  }))
}

module.exports = {
  persistJob,
  listJobs
}
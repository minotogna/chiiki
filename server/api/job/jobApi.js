const {responseErr} = require('../../utils/requestUtils')
const {persistJob, listJobs} = require('./jobRepository')

module.exports.init = app => {

  // save job
  app.post('/jobs/job', async (req, res) => {
    try {
      const job = await persistJob(req.body)
      res.send(job)
    } catch (err) {
      responseErr(res, err)
    }
  })

  //list all jobs
  app.get('/jobs', async (req, res) => {
    try {
      const jobs = await listJobs()
      res.send(jobs)
    } catch (err) {
      responseErr(res, err)
    }
  })

}
const {responseErr} = require('../../utils/requestUtils')

const {persistJob, listJobs, findJob} = require('./jobRepository')

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

  //get methods
  app.get('/jobs', async (req, res) => {
    try {
      const jobs = await listJobs()
      res.send(jobs)
    } catch (err) {
      responseErr(res, err)
    }
  })

  app.get('/jobs/job/:id', async (req, res) => {
    try {
      const jobs = await findJob(req.params.id)
      res.send(jobs)
    } catch (err) {
      responseErr(res, err)
    }
  })

}
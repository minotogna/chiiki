import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import * as R from 'ramda'

import FeaturedJobs from './featuredJobs'
import FilterJobs from './filterJobs'

//import 'velocity-react'
import Velocity from 'velocity-react/lib/velocity-animate-shim'

const EmptyList = () => <div className="row">
  <div className="col">
    <hr className="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary"/>
    <h3 className="mb-3 font-weight-bold text-uppercase">
      We couldn't find any jobs! Please, try a different search..
    </h3>
  </div>
</div>

const JobCard = ({job}) => <div className="card px-3 py-4 mb-3 row-hover pos-relative">
  <div className="row align-items-center ">
    <span className="pos-absolute pos-t pos-l bg-primary text-white text-xs px-1">featured</span>
    <Link to={`/app/jobs/job/${job.id}`} className="btn ">Edit Job(temp-link)</Link>
    <div className="col-md-2">
      <img src="assets/img/customers/customer-1.png" alt="COMPANY"
           className="img-fluid d-none d-md-block"/>
    </div>
    <div className="col-md-8">
      <h4 className="mb-0">
        {job.title}
      </h4>
      <p className="text-muted mb-2 text-sm">
        @ <a href="#" className="font-weight-bold text-muted">{job.companyName}</a>
        {'\xA0'}(Senior level, {job.employmentStatus})
      </p>
      <p className="text-muted mb-2 text-sm">
        <span className="d-block d-md-inline">
          <i className="fa fa-map-marker-alt"></i> {job.location}
        </span>
        <span className="d-block d-md-inline">
          <i className="far fa-money-bill-alt ml-md-3"></i> {job.salary}
        </span>
        {
          job.remoteAllowed
            ? <span className="d-block d-md-inline">
              <i className="fa fa-globe text-primary ml-md-3"></i> Remote OK
            </span>
            : null
        }
      </p>
    </div>
    <div className="col-md-2 text-md-center">
      <button className="btn btn-danger text-uppercase font-weight-bold d-lg-block w-100"
              onClick={() => {}}>Apply
      </button>
      <button className="btn btn-sm btn-link"><i className="fa fa-heart"></i> Shortlist</button>
    </div>
  </div>
</div>

const JobList = ({jobs}) => {

  return <div className="row">


    <FilterJobs jobs={jobs}/>


    <div className="col-lg-9 pull-lg-3 mb-3">

      {/*======= JOB GROUP*/}
      <div>
        <hr className="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary"/>
        <h3 className="mb-3 font-weight-bold text-uppercase">
          TODO Group jobs by date or?: Today <span className="text-xs text-muted font-weight-normal text-normalcase op-7">Feb 3rd 2017</span>
        </h3>

        {jobs.map((job, i) =>
          <JobCard key={i} job={job}/>
        )}

        <div className="card px-3 py-4 mb-3 row-hover pos-relative">
          <div className="row align-items-center ">
            <div className="col-md-2">
              <img src="assets/img/customers/customer-1.png" alt="RRT Productions"
                   className="img-fluid d-none d-md-block"/>
            </div>
            <div className="col-md-8">
              <h4 className="mb-0">
                Bootstrap Designer/Developer
              </h4>
              <p className="text-muted mb-2 text-sm">@ <a href="#" className="font-weight-bold text-muted">RRT
                Productions</a> (Senior level, Contract)</p>
              <p className="text-muted mb-2 text-sm">
                <span className="d-block d-md-inline"><i className="fa fa-map-marker-alt"></i> Europe Based</span>
                <span className="d-block d-md-inline"><i
                  className="far fa-money-bill-alt ml-md-3"></i> $70USD/hour</span>
                <span className="d-block d-md-inline"><i
                  className="fa fa-globe text-primary ml-md-3"></i> Remote OK</span>
              </p>
            </div>
            <div className="col-md-2 text-md-center">
              <a href="#" className="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
              <button className="btn btn-sm btn-link"><i className="fa fa-heart"></i> Shortlist</button>
            </div>
          </div>
        </div>

        <div className="card px-3 py-4 mb-3 row-hover card-outline-primary pos-relative">
          <div className="row align-items-center ">
            <span className="pos-absolute pos-t pos-l bg-primary text-white text-xs px-1">featured</span>
            <div className="col-md-2">
              <img src="assets/img/customers/customer-2.png" alt="TSU" className="img-fluid d-none d-md-block"/>
            </div>
            <div className="col-md-8">
              <h4 className="mb-0">
                Drupal Developer
              </h4>
              <p className="text-muted mb-2 text-sm">@ <a href="#"
                                                          className="font-weight-bold text-muted">TSU</a> (Senior
                level, Full Time Employment)</p>
              <p className="text-muted mb-2 text-sm">
                <span className="d-block d-md-inline"><i className="fa fa-map-marker-alt"></i> London, UK</span>
                <span className="d-block d-md-inline"><i
                  className="far fa-money-bill-alt ml-md-3"></i> $70USD/hour</span>
              </p>
            </div>
            <div className="col-md-2 text-md-center">
              <a href="#" className="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
              <button className="btn btn-sm btn-link"><i className="fa fa-heart"></i> Shortlist</button>
            </div>
          </div>
        </div>

      </div>


      <div className="bg-light p-4">
        <h3 className="font-weight-bold mb-2">
          Got skills?
        </h3>
        <h4 className="font-weight-normal text-muted mb-3">
          Get employed, upload your CV today and start showcasing you & your skills!
        </h4>
        <a href="#" className="btn btn-primary btn-rounded">Get Started</a>
      </div>
    </div>
  </div>
}

class SearchResult extends React.Component {

  componentDidMount () {
    const node = ReactDOM.findDOMNode(this)

    Velocity(node, 'scroll', {
      duration: 500,
      queue: false,
      offset: -50
    })
  }

  render () {
    const {jobs} = this.props

    return <div id="content" className="pt-5 pb-6 bg-white pos-relative pos-zindex-10">

      <FeaturedJobs jobs={jobs}/>

      <div className="container">
        {
          R.isEmpty(jobs)
            ? <EmptyList/>
            : <JobList jobs={jobs}/>
        }
      </div>

    </div>
  }

}

export default SearchResult
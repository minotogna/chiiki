import './style.scss'

import React from 'react'
import { connect } from 'react-redux'
import * as R from 'ramda'

import { listJobs } from '../job/actions'

import PageTemplate from '../app-components/pageTemplate'
import SearchResult from './searchResult/searchResult'

class SearchView extends React.Component {

  render () {
    const {listJobs, jobs, i18n} = this.props

    return <PageTemplate i18n={i18n}>
      <div className="h-100">
        <div
          className="bg-white overlay text-center text-lg-left py-5 py-lg-10 d-flex flex-column justify-content-center search__bg">
          <div className="container pt-5 mt-5">
            <h2 className="display-4 text-light mb-3">
              Find your <span className="font-weight-bold">dream job!</span>
            </h2>

            <div
              className="row mb-2 w-auto w-lg-80 position-relative align-items-center">
              <div className="col-lg-9 mb-3">
                <i
                  className="fa fa-search fa-2x text-light absolute-top-left mt-2 ml-3 d-none d-lg-block"></i>
                <input
                  className="form-control form-control-lg border-0 bg-transparent noshadow form-control-dark text-center text-lg-left pl-lg-5"
                  type="text" placeholder="Job title ie. Web Developer"/>
                <hr className="hr-inverse hr-lg mx-auto mt-1 mb-0"/>
              </div>
              <div className="col-lg-3">
                <button
                  className="btn btn-dark btn-rounded btn-lg px-5 py-lg-3 px-lg-5 d-lg-block w-100"

                  onClick={() => listJobs()}>
                  Search
                </button>
              </div>
            </div>

            <h6 className="text-light size my-0 font-weight-normal"
                data-animate="fadeIn" data-animate-delay="0.6">
              <span>Currently listing <span className="font-weight-bold">234 jobs.</span></span>
            </h6>
          </div>
        </div>
      </div>

      {
        R.isNil(jobs)
          ? null
          : <SearchResult jobs={jobs}/>

      }


    </PageTemplate>

  }
}

const mapStateToProps = state => ({
  jobs: R.path(['job', 'list', 'all'], state)
})

export default connect(mapStateToProps, {listJobs})(SearchView)
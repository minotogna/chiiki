import './style.scss'

import React from 'react'
import { connect } from 'react-redux'
import * as R from 'ramda'

import { listJobs } from '../job/actions'

import PageTemplate from '../app-components/pageTemplate'
import SearchResult from './searchResult/searchResult'

class SearchView extends React.Component {

  render () {
    const {listJobs, jobs} = this.props

    return <PageTemplate>


      <div id="highlighted" className="search__container">
        <div
          className="bg-white overlay overlay-gradient-flip overlay-op-8 text-center text-lg-left py-5 py-lg-10 flex-valign search__bg"
          data-toggle="full-height"
          data-breakpoint="992">
          <div data-toggle="sticky"
               data-settings='{"persist":true, "breakpoint":992}'
               className="pos-t-auto">
            <div className="container pt-6" data-scroll="scrollax">
              <h2 className="display-4 text-white mb-3" data-animate="fadeIn"
                  data-animate-delay="0.2">
                Find your <span className="font-weight-bold">dream job!</span>
              </h2>

              <div
                className="row mb-2 w-auto w-lg-80 pos-relative align-items-center"
                data-animate="fadeIn" data-animate-delay="0.4">
                <div className="col-lg-9 mb-3">
                  <i
                    className="fa fa-search text-white icon-2x pos-absolute pos-l mt-2 ml-3 d-none d-lg-block"></i>
                  <input
                    className="form-control form-control-lg form-control-transparent form-control-dark text-center text-lg-left pl-lg-5"
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

              <h5 className="text-grey my-0 font-weight-normal"
                  data-animate="fadeIn" data-animate-delay="0.6">
                <span>Currently listing <span className="font-weight-bold">234 jobs.</span></span>
              </h5>
            </div>
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
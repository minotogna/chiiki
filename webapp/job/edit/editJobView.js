import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import * as R from 'ramda'

import PageTemplate from '../../app-components/pageTemplate'
import EditJobForm from './editJobForm'

import { postJob, findJob, updateJobField } from '../actions'

class EditJobView extends React.Component {

  componentDidMount () {
    this.props.findJob(this.props.jobId)
    ReactDOM.findDOMNode(this).scrollIntoView()
  }

  render () {
    const {job, validation, postJob, updateJobField} = this.props

    const onChange = (prop, value) => updateJobField(job, prop, value)
    const onSubmit = () => postJob(job)

    return <PageTemplate>
      <div className="container-fluid app-container">

        <div className="row justify-content-center">
          <div className="col-md-8">
            {
              job
                ? <EditJobForm job={job} validation={validation} onChange={onChange} onSubmit={onSubmit}/>
                : null
            }
          </div>
        </div>

      </div>
    </PageTemplate>

  }

}

const mapStateToProps = (state, props) => ({
  validation: R.path(['job', 'edit', 'validation'], state),
  job: R.path(['job', 'edit', 'job'], state),
  jobId: R.path(['match', 'params', 'id'], props)
})

export default connect(
  mapStateToProps,
  {
    postJob,
    findJob,
    updateJobField
  }
)(EditJobView)
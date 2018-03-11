import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import * as R from 'ramda'

import PageTemplate from '../../app-components/pageTemplate'

import formFields from './editJobFormFields'

import { postJob, findJob } from '../actions'

class EditJobView extends React.Component {

  constructor () {
    super()
    this.state = {job: {}}
  }

  fieldValidation (fieldName) {
    return R.pipe(
      R.defaultTo({}),
      R.prop(fieldName),
      R.defaultTo({valid: true})
    )(this.props.validation)
  }

  componentWillReceiveProps (nextProps) {

    if (nextProps.job && !this.props.job) {
      this.setState({job: nextProps.job})
    }
  }

  componentWillMount () {
    if (this.props.jobId)
      this.props.findJob(this.props.jobId)
  }

  componentDidMount () {
    ReactDOM.findDOMNode(this).scrollIntoView()
  }

  render () {

    const {job} = this.state
    const {validation, postJob} = this.props

    const onChange = (prop, value) => {
      this.setState({job: R.assoc(prop, value, job)})
    }

    return <PageTemplate>
      <div className="container-fluid app-container">

        <div className="row justify-content-center">
          <div className="col-md-8">

            <form className="edit-job__form">

              {/*header*/}
              <div className="row justify-content-center">
                <div className="col-md-6">
                  <hr className="hr-lg mt-1 mb-2 w-20 ml-0 hr-primary"/>
                  <h3 className="text-left text-uppercase mt-0 mb-4">
                    Post a new job opportunity
                  </h3>
                </div>
              </div>

              {/*form fields*/}
              {
                formFields.map((formField, i) => {

                  return React.createElement(
                    formField.component,
                    {
                      key: i,
                      job: job,
                      onChange: onChange,
                      validation: this.fieldValidation(formField.props.field),
                      ...formField.props
                    },
                  )
                })
              }

              {
                validation && !validation.valid
                  ? <div className="row mt-md-1 mb-md-1 justify-content-center">
                    <div className="col text-center">
                      <div className="text-danger font-weight-bold">
                        There are errors in the form, please fix them before proceeding
                      </div>
                    </div>
                  </div>
                  : null
              }

              {/*submit*/}
              <div className="row mt-md-5 mb-md-5 justify-content-center">
                <div className="col text-center">
                  <button type="button" className="btn btn-lg btn-outline-secondary px-md-5 mx-1 mx-md-2">Cancel
                  </button>
                  <button type="button"
                          className="btn btn-lg btn-primary px-md-5 mx-1 mx-md-2"
                          onClick={() => postJob(job)}>
                    Submit
                  </button>
                </div>
              </div>

            </form>

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

export default connect(mapStateToProps, {postJob, findJob})(EditJobView)
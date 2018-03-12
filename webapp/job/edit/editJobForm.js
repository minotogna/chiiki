import React from 'react'

import formFields from './editJobFormFields'
import * as R from 'ramda'

const fieldValidation = (validation, fieldName) =>
  R.pipe(
    R.prop(fieldName),
    R.defaultTo({valid: true})
  )(validation)

const EditJobForm = ({job, validation, onChange, onSubmit}) => {

  return <form className="edit-job__form">

    {/*header*/}
    <div className="row justify-content-center">
      <div className="col-md-6">
        <hr className="hr-lg mt-1 mb-2 w-20 ml-0 border-primary"/>
        <h3 className="text-left text-uppercase font-weight-bold mt-0 mb-4">
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
            validation: fieldValidation(validation, formField.props.field),
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
                onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>

  </form>

}

export default EditJobForm

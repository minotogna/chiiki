import React from 'react'
import PageTemplate from '../../app-components/pageTemplate'

import formFields from './editJobFormFields'

const EditJobForm = () => {

  return <form className="edit-job__form">

    <div className="row justify-content-center">
      <div className="col-md-6">
        <hr className="hr-lg mt-1 mb-2 w-20 ml-0 hr-primary"/>
        <h3 className="text-left text-uppercase mt-0 mb-4">
          Post a new job opportunity
        </h3>
      </div>
    </div>

    {
      formFields.map((formField, i) => {

        return React.createElement(
          formField.component,
          {
            key: i,
            ...formField.props,
          },
        )
      })
    }

    <div className="row mt-md-5 mb-md-5 justify-content-center">
      <div className="col text-center">
        <button type="button" className="btn btn-lg btn-outline-secondary px-md-5 mx-1 mx-md-2">Cancel</button>
        <button type="button" className="btn btn-lg btn-primary px-md-5 mx-1 mx-md-2">Submit</button>
      </div>
    </div>

  </form>
}

class EditJobView extends React.Component {

  render () {
    return <PageTemplate>
      <div className="container-fluid app-container">

        <div className="row justify-content-center">
          <div className="col-md-8">
            <EditJobForm/>
          </div>
        </div>

      </div>
    </PageTemplate>
  }

}

export default EditJobView
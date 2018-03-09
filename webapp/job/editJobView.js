import React from 'react'
import PageTemplate from '../app-components/pageTemplate'
import DateRangePicker from '../app-components/form/dateRangePicker'

const EditJobTextInputRow = ({field, label, placeholder}) =>
  <div className="form-group row">
    <label htmlFor={field}
           className="col-sm-2 col-form-label text-md-right">{label}</label>
    <div className="col">
      <input type="email"
             className="form-control"
             id={field}
             placeholder={placeholder}/>
    </div>
  </div>

const EditJobForm = () => {

  return <form>

    <div className="row justify-content-center">
      <div className="col-md-6">
        <hr className="hr-lg mt-1 mb-2 w-20 ml-0 hr-primary"/>
        <h3 className="text-left text-uppercase mt-0 mb-4">Post a new job
          opportunity</h3>
      </div>
    </div>

    <EditJobTextInputRow field="companyName"
                         label="Company name"
                         placeholder="Name"/>
    <EditJobTextInputRow field="companyEmail"
                         label="Company email"
                         placeholder="Email"/>

    <EditJobTextInputRow field="title"
                         label="Job title"
                         placeholder="Job title"/>

    <div className="form-group row">
      <label
             className="col-sm-2 col-form-label text-md-right">Application period</label>
      <div className="col">
        <DateRangePicker />
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
import React from 'react'
import PageTemplate from '../app-components/pageTemplate'

const EditJobTextInputRow = ({field}) =>
  <div className="form-group row">
    <label for={field} className="col-sm-2 col-form-label">Email</label>
    <div className="col">
      <input type="email"
             className="form-control"
             id={field}
             placeholder="Email"/>
    </div>
  </div>

const EditJobForm = () => {

  return <form>
    <EditJobTextInputRow field="email"/>
  </form>
}

class EditJobView extends React.Component {

  render () {
    return <PageTemplate>
      <div className="container-fluid">
        <EditJobForm/>
      </div>
    </PageTemplate>
  }

}

export default EditJobView
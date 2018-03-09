import './syle.scss'

import React from 'react'

import PageTemplate from '../app-components/pageTemplate'
import DateRangePicker from '../app-components/form/dateRangePicker'

const EditJobTextInputRow = ({field, label, placeholder}) =>
  <div className="form-group row">
    <label htmlFor={field}
           className="col-sm-2 col-form-label text-md-right">{label}</label>
    <div className="col">
      <input type="text"
             className="form-control"
             id={field}
             placeholder={placeholder}/>
    </div>
  </div>

const EditJobTextAreaInputRow = ({field, label, placeholder, rows = 4}) =>
  <div className="form-group row">
    <label htmlFor={field}
           className="col-sm-2 col-form-label text-md-right">{label}</label>
    <div className="col">
      <textarea className="form-control" id={field} rows={rows}
                placeholder={placeholder}></textarea>
    </div>
  </div>

const EditJobSelectInputRow = ({field, label, placeholder = 'Select', options = []}) =>
  <div className="form-group row">
    <label htmlFor={field}
           className="col-sm-2 col-form-label text-md-right">{label}</label>
    <div className="col">
      <select className="form-control" id={field} value={'option-disabled'}
              onChange={() => {}}>
        <option disabled={true} value={'option-disabled'}>{placeholder}</option>
        {
          options.map(option => <option key={option.key}
                                        value={option.key}>{option.label}</option>)
        }
      </select>
    </div>
  </div>

const EditJobBooleanInputRow = ({field, label}) =>
  <div className="form-group row">
    <label
      className="col-sm-2 col-form-label text-md-right">{label}</label>
    <div className="col">

      <div className="form-check-inline">
        <label className="form-check-label">
          <input type="radio" className="form-check-input" value="true"/>
          Yes
        </label>
      </div>
      <div className="form-check-inline">
        <label className="form-check-label">
          <input type="radio" className="form-check-input" value="false"/>
          No
        </label>
      </div>

    </div>
  </div>

const ApplicationPeriod = ({field, label}) => <div className="form-group row">
  <label className="col-sm-2 col-form-label text-md-right">
    {label}
  </label>
  <div className="col">
    <DateRangePicker/>
  </div>
</div>

const EditJobForm = () => {
  const jobSectors = [
    {key: 'accountancy', label: 'Accountancy, banking and finance'},
    {key: 'business', label: 'Business, consulting and management'},
    {key: 'charityVoluntary', label: 'Charity and voluntary work'},
    {key: 'creativeArtDesign', label: 'Creative arts and design'},
    {key: 'engineeringManufacturing', label: 'Engineering and manufacturing'},
    {key: 'environmentAgriculture', label: 'Environment and agriculture'},
    {key: 'healthcare', label: 'Healthcare'},
    {key: 'it', label: 'IT'},
  ]

  const employmentStatuses = [
    {key: 'permanent', label: 'Permanent'},
    {key: 'contract', label: 'Contract'},
    {key: 'internship', label: 'Internship'},
    {key: 'partner', label: 'Partner'},
  ]

  const qualificationRequirements = [
    {key: 'highSchool', label: 'High school'},
    {key: 'university3years', label: 'University 3 years'},
    {key: 'university5years', label: 'University 5 years'},
    {key: 'phd', label: 'Phd'},
  ]

  const formFields = [
    {
      component: EditJobTextInputRow,
      props: {
        field: 'companyName',
        label: 'Company name',
        placeholder: 'Name',
      },
    },
    {
      component: EditJobTextInputRow,
      props: {
        field: 'companyEmail',
        label: 'Company email',
        placeholder: 'Email',
      },
    },
    {
      component: EditJobTextInputRow,
      props: {field: 'title', label: 'Job title', placeholder: 'Job title'},
    },
    {
      component: ApplicationPeriod,
      props: {field: 'applicationPeriod', label: 'Application Period'},
    },
    {
      component: EditJobTextAreaInputRow,
      props: {
        field: 'description',
        label: 'Job description',
        placeholder: 'Add a description (e.g. expected outcomes..)',
      },
    },

    {
      component: EditJobSelectInputRow,
      props: {
        field: 'jobSection',
        label: 'Job Sector',
        placeholder: 'Choose',
        options: jobSectors,
      },
    },

    {
      component: EditJobTextInputRow,
      props: {
        field: 'otherKeywords',
        label: 'Other keywords',
        placeholder: 'Keywords',
      },
    },

    {
      component: EditJobSelectInputRow,
      props: {
        field: 'employmentStatus',
        label: 'Employment status',
        placeholder: 'Choose',
        options: employmentStatuses,
      },
    },

    {
      component: EditJobBooleanInputRow,
      props: {field: 'trialPeriod', label: 'Trial period'},
    },

    {
      component: EditJobBooleanInputRow,
      props: {field: 'partimeAllowed', label: 'Part time allowed'},
    },

    {
      component: EditJobTextInputRow,
      props: {
        field: 'location',
        label: 'Activity location',
        placeholder: 'Address, City, Region...',
      },
    },
    {
      component: EditJobTextInputRow,
      props: {
        field: 'vacation',
        label: 'Vacation / Holiday',
        placeholder: 'No of days/months',
      },
    },
    {
      component: EditJobTextInputRow,
      props: {
        field: 'salary',
        label: 'Salary',
        placeholder: 'Salary per month/year and currency (JPY, USD, EUR)',
      },
    },

    {
      component: EditJobTextAreaInputRow,
      props: {
        field: 'personDescription',
        label: 'Person description',
        placeholder: 'Add a description of the ideal candidate',
        rows: 2,
      },
    },

    {
      component: EditJobTextAreaInputRow,
      props: {
        field: 'selectionCriteria',
        label: 'Selection criteria',
        placeholder: 'Add a description of the selection criteria',
        rows: 2,
      },
    },

    {
      component: EditJobSelectInputRow,
      props: {
        field: 'qualificationRequirements',
        label: 'Qualification requirements',
        placeholder: 'Choose',
        options: qualificationRequirements,
      },
    },

    {
      component: EditJobTextInputRow,
      props: {
        field: 'welfarePayments',
        label: 'Welfare payments',
        placeholder: 'Welfare payments',
      },
    },

    {
      component: EditJobTextInputRow,
      props: {
        field: 'variousAllowances',
        label: 'Various allowances',
        placeholder: 'Various allowances',
      },
    },

    {
      component: EditJobTextAreaInputRow,
      props: {
        field: 'image3months',
        label: 'Image of 3 months after joining the company',
        placeholder: 'Image of 3 months after joining the company',
        rows: 2
      }
    },

    {
      component: EditJobTextAreaInputRow,
      props: {
        field: 'selectionProcess',
        label: 'Selection process',
        placeholder: 'Selection process',
        rows: 2
      }
    },
    {
      component: EditJobTextAreaInputRow,
      props: {
        field: 'challenge',
        label: 'The challenge of this work',
        placeholder: 'The challenge of this work',
        rows: 2
      }
    },
    {
      component: EditJobTextAreaInputRow,
      props: {
        field: 'vision',
        label: 'Our vision and mission',
        placeholder: 'Our vision and mission',
        rows: 2
      }
    },
    {
      component: EditJobTextAreaInputRow,
      props: {
        field: 'representativeMessage',
        label: 'Representative message',
        placeholder: 'Representative message',
        rows: 2
      }
    },
  ]

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


    {/*// nice to have dropdown for select. todo*/}
    {/*<div className="row">*/}
    {/*<div className="input-group-prepend">*/}
    {/*<button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</button>*/}
    {/*<div className="dropdown-menu">*/}
    {/*<a className="dropdown-item" href="#">Action</a> <a className="dropdown-item" href="#">Another action</a> <a className="dropdown-item" href="#">Something else here</a>*/}
    {/*<div role="separator" className="dropdown-divider"></div>*/}
    {/*<a className="dropdown-item" href="#">Separated link</a>*/}
    {/*</div>*/}
    {/*</div>*/}
    {/*</div>*/}

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
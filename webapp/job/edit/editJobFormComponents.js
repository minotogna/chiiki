import React from 'react'

import DateRangePicker from '../../app-components/form/dateRangePicker'

export const EditJobTextInputRow = ({job, field, label, placeholder, onChange, validation}) =>
  <div className="form-group row mb-md-4">
    <label htmlFor={field}
           className="col-sm-2 col-form-label text-md-right">{label}</label>
    <div className="col">
      <input type="text"
             className={`form-control${validation.valid ? '' : ' is-invalid'}`}
             id={field}
             placeholder={placeholder}
             value={job[field] ? job[field] : ''}
             onChange={e => onChange(field, e.target.value)}
      />
      {
        validation.valid
          ? null
          : <div className="invalid-feedback">{validation.error}</div>
      }
    </div>
  </div>

export const EditJobTextAreaInputRow = ({job, field, label, placeholder, rows = 4, onChange}) =>
  <div className="form-group row mb-md-4">
    <label htmlFor={field}
           className="col-sm-2 col-form-label text-md-right">{label}</label>
    <div className="col">
      <textarea className="form-control"
                id={field}
                rows={rows}
                placeholder={placeholder}
                value={job[field] ? job[field] : ''}
                onChange={e => onChange(field, e.target.value)}
      ></textarea>

    </div>
  </div>

export const EditJobSelectInputRow = ({job, field, label, placeholder = 'Select', options = [], onChange}) =>
  <div className="form-group row mb-md-4">
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

export const EditJobBooleanInputRow = ({job, field, label, onChange}) =>
  <div className="form-group row mb-md-4">
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

export const ApplicationPeriod = ({job, field, label, onChange}) =>
  <div className="form-group row mb-md-4">
    <label className="col-sm-2 col-form-label text-md-right">
      {label}
    </label>
    <div className="col">
      <DateRangePicker/>
    </div>
  </div>

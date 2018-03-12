import React from 'react'

import DateRangePicker from '../../app-components/form/dateRangePicker'

export const EditJobTextInputRow = ({i18n, job, field, label, placeholder, onChange, validation}) =>
  <div className="form-group row mb-md-4">
    <label htmlFor={field}
           className="col-sm-2 col-form-label d-flex align-items-center">{i18n.t(`editJob.property.${field}`)}</label>
    <div className="col d-flex align-items-center">
      <input type="text"
             className={`form-control${validation.valid ? '' : ' is-invalid'}`}
             id={field}
             placeholder={i18n.t(`editJob.propertyPlaceholder.${field}`)}
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

export const EditJobTextAreaInputRow = ({i18n, job, field, label, placeholder, rows = 4, onChange}) =>
  <div className="form-group row mb-md-4">
    <label htmlFor={field}
           className="col-sm-2 col-form-label d-flex align-items-center">{label}</label>
    <div className="col d-flex align-items-center">
      <textarea className="form-control"
                id={field}
                rows={rows}
                placeholder={placeholder}
                value={job[field] ? job[field] : ''}
                onChange={e => onChange(field, e.target.value)}
      ></textarea>

    </div>
  </div>

export const EditJobSelectInputRow = ({i18n, job, field, label, placeholder = 'Select', options = [], onChange}) =>
  <div className="form-group row mb-md-4">
    <label htmlFor={field}
           className="col-sm-2 col-form-label d-flex align-items-center">{label}</label>
    <div className="col d-flex align-items-center">
      <select className="form-control"
              id={field}
              value={job[field] ? job[field] : 'option-placeholder'}
              onChange={e => onChange(field, e.target.value)}>
        <option disabled={true} value={'option-placeholder'}>{placeholder}</option>
        {
          options.map(option => <option key={option.key}
                                        value={option.key}>{option.label}</option>)
        }
      </select>
    </div>
  </div>

export const EditJobBooleanInputRow = ({i18n, job, field, label, onChange}) =>
  <div className="form-group row mb-md-4">
    <label
      className="col-sm-2 col-form-label d-flex align-items-center">{label}</label>
    <div className="col d-flex align-items-center">

      <div className="form-check-inline">
        <label className="form-check-label">
          <input type="radio"
                 className="form-check-input"
                 value="true"
                 name={field}
                 checked={!!(job[field] && job[field] === 'true')}
                 onChange={e => onChange(field, e.target.value)}/>
          Yes
        </label>
      </div>
      <div className="form-check-inline">
        <label className="form-check-label">
          <input type="radio"
                 className="form-check-input"
                 value="false"
                 name={field}
                 checked={!!(job[field] && job[field] === 'false')}
                 onChange={e => onChange(field, e.target.value)}/>
          No
        </label>
      </div>

    </div>
  </div>

export const ApplicationPeriod = ({i18n, job, field, label, onChange}) => {
  const fromField = `${field}From`
  const toField = `${field}To`

  return <div className="form-group row mb-md-4">
    <label className="col-sm-2 col-form-label d-flex align-items-center">
      {label}
    </label>
    <div className="col d-flex align-items-center">
      <DateRangePicker
        from={job[fromField]}
        to={job[toField]}
        onFromChange={value => onChange(fromField, value)}
        onToChange={value => onChange(toField, value)}
      />
    </div>
  </div>
}

import React from 'react'

import DateRangePicker from '../app-components/form/dateRangePicker'

export const EditJobTextInputRow = ({field, label, placeholder}) =>
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

export const EditJobTextAreaInputRow = ({field, label, placeholder, rows = 4}) =>
  <div className="form-group row">
    <label htmlFor={field}
           className="col-sm-2 col-form-label text-md-right">{label}</label>
    <div className="col">
      <textarea className="form-control" id={field} rows={rows}
                placeholder={placeholder}></textarea>
    </div>
  </div>

export const EditJobSelectInputRow = ({field, label, placeholder = 'Select', options = []}) =>
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

export const EditJobBooleanInputRow = ({field, label}) =>
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

export const ApplicationPeriod = ({field, label}) => <div
  className="form-group row">
  <label className="col-sm-2 col-form-label text-md-right">
    {label}
  </label>
  <div className="col">
    <DateRangePicker/>
  </div>
</div>

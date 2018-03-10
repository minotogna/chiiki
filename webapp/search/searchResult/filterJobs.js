import React from 'react'

const FilterJobs = ({jobs}) => {
  return <div className="col-lg-3 order-lg-2 mb-4 mb-lg-0">
    <div data-toggle="sticky"
         data-settings='{"parent":"#content","mind":"#header", "top":10, "breakpoint":992}'>

      <hr className="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary"/>
      <h3 className="text-uppercase mb-3">
        Filter Jobs
      </h3>

      <div className="p-3 bg-light">
        <h4>
          Location
        </h4>
        <div className="pos-relative">
          <i className="fa fa-map-marker-alt icon-1x pos-absolute pos-l mt-1"></i>
          <input className="form-control form-control-transparent pl-4" type="text"
                 placeholder="Location ie. London"/>
          <hr className="mt-1 mb-0"/>
        </div>

        <h4 className="mt-3">
          Remote OK
        </h4>
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" value=""/>
            Remote OK
          </label>
        </div>

        <hr className="my-3"/>
        <h4>
          Job Type
        </h4>
        <div className="checkboxes">
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" value=""/>
              Freelance
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" value=""/>
              Full Time
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" value=""/>
              Part Time
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" value=""/>
              Internship
            </label>
          </div>
        </div>
        <hr className="my-3"/>
        <button className="btn btn-primary btn-block btn-rounded">Filter</button>
      </div>

    </div>

  </div>
}

export default FilterJobs
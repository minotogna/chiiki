import React from 'react'

const FilterJobs = ({jobs}) => {
  return <div className="col-lg-3 order-lg-2 mb-4 mb-lg-0">
    <div>

      <hr className="hr-lg mt-0 mb-2 w-10 ml-0 border-primary"/>
      <h4 className="text-uppercase mb-3 font-weight-bold">
        Filter Jobs
      </h4>

      <div className="p-3 bg-light">
        <h5 className="font-weight-bold">
          Location
        </h5>
        <div className="pos-relative">
          <i className="fa fa-map-marker-alt position-absolute mt-1"
             style={{fontSize:'1.4rem'}}/>
          <input className="form-control border-0 bg-transparent noshadow pl-4" type="text"
                 placeholder="Location ie. London"/>
          <hr className="mt-1 mb-0"/>
        </div>

        <h5 className="mt-3 font-weight-bold">
          Remote OK
        </h5>
        <div className="form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" value=""/>
            Remote OK
          </label>
        </div>

        <hr className="my-3"/>
        <h5 className="font-weight-bold">
          Job Type
        </h5>
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
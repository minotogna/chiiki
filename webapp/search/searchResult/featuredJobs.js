import React from 'react'


const FeaturedJobs = ({jobs}) =>{
  return <div className="container pb-6">

    <hr className="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary"/>
    <h3 className="text-left text-uppercase mt-0 mb-3">
      Featured <span className="font-weight-bold">Jobs</span>
    </h3>

    <div className="row text-left">

      <div className="col-lg-4 d-lg-flex mb-3">
        <div className="px-3 pb-3 pt-6 overlay overlay-gradient-flip overlay-op-8 rounded flex-ew flex-valign-b"
             data-bg-img="assets/img/homes/code.jpg">
          <h2 className="text-white text-uppercase font-weight-bold mb-0 display-4">
            <span data-toggle="count-to" data-to="238" data-from="0">0</span>
          </h2>
          <p className="text-white text-uppercase mb-0">Developer Jobs</p>
          <hr className="hr-lg mt-2 mb-0 w-20 ml-0 hr-primary"/>
        </div>
      </div>

      <div className="col-lg-4 d-lg-flex mb-3">
        <div className="px-3 pb-3 pt-6 overlay overlay-gradient-flip overlay-op-8 rounded flex-ew flex-valign-b"
             data-bg-img="assets/img/homes/desk.jpg">
          <h2 className="text-white text-uppercase font-weight-bold mb-0 display-4">
            <span data-toggle="count-to" data-to="538" data-from="0">0</span>
          </h2>
          <p className="text-white text-uppercase mb-0">Admin Jobs</p>
          <hr className="hr-lg mt-2 mb-0 w-20 ml-0 hr-primary"/>
        </div>
      </div>

      <div className="col-lg-4 d-lg-flex mb-3">
        <div className="px-3 pb-3 pt-6 overlay overlay-gradient-flip overlay-op-8 rounded flex-ew flex-valign-b"
             data-bg-img="assets/img/homes/happy.jpg">
          <h2 className="text-white text-uppercase font-weight-bold mb-0 display-4">
            <span data-toggle="count-to" data-to="138" data-from="0">0</span>
          </h2>
          <p className="text-white text-uppercase mb-0">Freelance Jobs</p>
          <hr className="hr-lg mt-2 mb-0 w-20 ml-0 hr-primary"/>
        </div>
      </div>

    </div>

  </div>
}


export default FeaturedJobs
import './style.scss'

import React from 'react'

import PageTemplate from '../app-components/pageTemplate'

class SearchView extends React.Component {
  render () {

    return <PageTemplate>


      <div id="highlighted" className="search__container">
        <div
          className="bg-white overlay overlay-gradient-flip overlay-op-8 text-center text-lg-left py-5 py-lg-10 flex-valign search__bg"
          data-toggle="full-height"
          data-breakpoint="992">
          <div data-toggle="sticky"
               data-settings='{"persist":true, "breakpoint":992}'
               className="pos-t-auto">
            <div className="container pt-6" data-scroll="scrollax">
              <h2 className="display-4 text-white mb-3" data-animate="fadeIn"
                  data-animate-delay="0.2">
                Find your <span className="font-weight-bold">dream job!</span>
              </h2>
              <form
                className="row mb-2 w-auto w-lg-80 pos-relative align-items-center"
                data-animate="fadeIn" data-animate-delay="0.4">
                <div className="col-lg-9 mb-3">
                  <i
                    className="fa fa-search text-white icon-2x pos-absolute pos-l mt-2 ml-3 d-none d-lg-block"></i>
                  <input
                    className="form-control form-control-lg form-control-transparent form-control-dark text-center text-lg-left pl-lg-5"
                    type="text" placeholder="Job title ie. Web Developer"/>
                  <hr className="hr-inverse hr-lg mx-auto mt-1 mb-0"/>
                </div>
                <div className="col-lg-3">
                  <a href="#content"
                     className="btn btn-dark btn-rounded btn-lg px-5 py-lg-3 px-lg-5 d-lg-block"
                     data-toggle="scroll-link">
                    Search
                  </a>
                </div>
              </form>
              <h5 className="text-grey my-0 font-weight-normal"
                  data-animate="fadeIn" data-animate-delay="0.6">
                <span>Currently listing <span className="font-weight-bold">234 jobs.</span></span>
              </h5>
            </div>
          </div>
        </div>
      </div>

    <div id="content" className="pt-5 pb-6 bg-white pos-relative pos-zindex-10">
      <div className="container pb-6">
        <hr className="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary" />
        <h3 className="text-left text-uppercase mt-0 mb-3">
          Featured <span className="font-weight-bold">Jobs</span>
        </h3>
        <div className="row text-left">
          <div className="col-lg-4 d-lg-flex mb-3">
            <div className="px-3 pb-3 pt-6 overlay overlay-gradient-flip overlay-op-8 rounded flex-ew flex-valign-b" data-bg-img="assets/img/homes/code.jpg">
              <h2 className="text-white text-uppercase font-weight-bold mb-0 display-4">
                <span data-toggle="count-to" data-to="238" data-from="0">0</span>
              </h2>
              <p className="text-white text-uppercase mb-0">Developer Jobs</p>
              <hr className="hr-lg mt-2 mb-0 w-20 ml-0 hr-primary" />
            </div>
          </div>
          <div className="col-lg-4 d-lg-flex mb-3">
            <div className="px-3 pb-3 pt-6 overlay overlay-gradient-flip overlay-op-8 rounded flex-ew flex-valign-b" data-bg-img="assets/img/homes/desk.jpg">
              <h2 className="text-white text-uppercase font-weight-bold mb-0 display-4">
                <span data-toggle="count-to" data-to="538" data-from="0">0</span>
              </h2>
              <p className="text-white text-uppercase mb-0">Admin Jobs</p>
              <hr className="hr-lg mt-2 mb-0 w-20 ml-0 hr-primary" />
            </div>
          </div>
          <div className="col-lg-4 d-lg-flex mb-3">
            <div className="px-3 pb-3 pt-6 overlay overlay-gradient-flip overlay-op-8 rounded flex-ew flex-valign-b" data-bg-img="assets/img/homes/happy.jpg">
              <h2 className="text-white text-uppercase font-weight-bold mb-0 display-4">
                <span data-toggle="count-to" data-to="138" data-from="0">0</span>
              </h2>
              <p className="text-white text-uppercase mb-0">Freelance Jobs</p>
              <hr className="hr-lg mt-2 mb-0 w-20 ml-0 hr-primary" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 order-lg-2 mb-4 mb-lg-0">
            <div data-toggle="sticky" data-settings='{"parent":"#content","mind":"#header", "top":10, "breakpoint":992}'>
              <hr className="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary" />
              <h3 className="text-uppercase mb-3">
                Filter Jobs
              </h3>
              <div className="p-3 bg-light">
                <h4>
                  Location
                </h4>
                <div className="pos-relative">
                  <i className="fa fa-map-marker-alt icon-1x pos-absolute pos-l mt-1"></i>
                  <input className="form-control form-control-transparent pl-4" type="text" placeholder="Location ie. London"/>
                    <hr className="mt-1 mb-0" />
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
                  <hr className="my-3" />
                    <a href="#" className="btn btn-primary btn-block btn-rounded">Filter</a>
              </div>
            </div>
          </div>
          <div className="col-lg-9 pull-lg-3 mb-3">
            <hr className="hr-lg mt-0 mb-2 w-10 ml-0 hr-primary" />
            <h3 className="mb-3 font-weight-bold text-uppercase">
              Today <span className="text-xs text-muted font-weight-normal text-normalcase op-7">Feb 3rd 2017</span>
            </h3>
            <div className="card px-3 py-4 mb-3 row-hover pos-relative">
              <div className="row align-items-center ">
                <div className="col-md-2">
                  <img src="assets/img/customers/customer-1.png" alt="RRT Productions" className="img-fluid d-none d-md-block" />
                </div>
                <div className="col-md-8">
                  <h4 className="mb-0">
                    Bootstrap Designer/Developer
                  </h4>
                  <p className="text-muted mb-2 text-sm">@ <a href="#" className="font-weight-bold text-muted">RRT Productions</a> (Senior level, Contract)</p>
                  <p className="text-muted mb-2 text-sm">
                    <span className="d-block d-md-inline"><i className="fa fa-map-marker-alt"></i> Europe Based</span>
                    <span className="d-block d-md-inline"><i className="far fa-money-bill-alt ml-md-3"></i> $70USD/hour</span>
                    <span className="d-block d-md-inline"><i className="fa fa-globe text-primary ml-md-3"></i> Remote OK</span>
                  </p>
                </div>
                <div className="col-md-2 text-md-center">
                  <a href="#" className="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" className="text-muted text-xs op-7"><i className="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>

            <div className="card px-3 py-4 mb-3 row-hover card-outline-primary pos-relative">
              <div className="row align-items-center ">
                <span className="pos-absolute pos-t pos-l bg-primary text-white text-xs px-1">featured</span>
                <div className="col-md-2">
                  <img src="assets/img/customers/customer-2.png" alt="TSU" className="img-fluid d-none d-md-block" />
                </div>
                <div className="col-md-8">
                  <h4 className="mb-0">
                    Drupal Developer
                  </h4>
                  <p className="text-muted mb-2 text-sm">@ <a href="#" className="font-weight-bold text-muted">TSU</a> (Senior level, Full Time Employment)</p>
                  <p className="text-muted mb-2 text-sm">
                    <span className="d-block d-md-inline"><i className="fa fa-map-marker-alt"></i> London, UK</span>
                    <span className="d-block d-md-inline"><i className="far fa-money-bill-alt ml-md-3"></i> $70USD/hour</span>
                  </p>
                </div>
                <div className="col-md-2 text-md-center">
                  <a href="#" className="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" className="text-muted text-xs op-7"><i className="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>
            <hr className="hr-lg mt-6 mb-2 w-10 ml-0 hr-primary" />
            <h3 className="mt-0 mb-3 font-weight-bold text-uppercase">
              Yesterday <span className="text-xs text-muted font-weight-normal text-normalcase op-7">Feb 2nd 2017</span>
            </h3>

            <div className="card px-3 py-4 mb-3 row-hover pos-relative">
              <div className="row align-items-center ">
                <div className="col-md-2">
                  <img src="assets/img/customers/customer-1.png" alt="RRT Productions" className="img-fluid d-none d-md-block" />
                </div>
                <div className="col-md-8">
                  <h4 className="mb-0">
                    Bootstrap Designer/Developer
                  </h4>
                  <p className="text-muted mb-2 text-sm">@ <a href="#" className="font-weight-bold text-muted">RRT Productions</a> (Senior level, Contract)</p>
                  <p className="text-muted mb-2 text-sm">
                    <span className="d-block d-md-inline"><i className="fa fa-map-marker-alt"></i> Europe Based</span>
                    <span className="d-block d-md-inline"><i className="far fa-money-bill-alt ml-md-3"></i> $70USD/hour</span>
                    <span className="d-block d-md-inline"><i className="fa fa-globe text-primary ml-md-3"></i> Remote OK</span>
                  </p>
                </div>
                <div className="col-md-2 text-md-center">
                  <a href="#" className="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" className="text-muted text-xs op-7"><i className="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>

            <div className="card px-3 py-4 mb-3 row-hover card-outline-primary pos-relative">
              <div className="row align-items-center ">
                <span className="pos-absolute pos-t pos-l bg-primary text-white text-xs px-1">featured</span>
                <div className="col-md-2">
                  <img src="assets/img/customers/customer-2.png" alt="TSU" className="img-fluid d-none d-md-block" />
                </div>
                <div className="col-md-8">
                  <h4 className="mb-0">
                    Drupal Developer
                  </h4>
                  <p className="text-muted mb-2 text-sm">@ <a href="#" className="font-weight-bold text-muted">TSU</a> (Senior level, Full Time Employment)</p>
                  <p className="text-muted mb-2 text-sm">
                    <span className="d-block d-md-inline"><i className="fa fa-map-marker-alt"></i> London, UK</span>
                    <span className="d-block d-md-inline"><i className="far fa-money-bill-alt ml-md-3"></i> $70USD/hour</span>
                  </p>
                </div>
                <div className="col-md-2 text-md-center">
                  <a href="#" className="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" className="text-muted text-xs op-7"><i className="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>

            <div className="card px-3 py-4 mb-3 row-hover pos-relative">
              <div className="row align-items-center ">
                <div className="col-md-2">
                  <img src="assets/img/customers/customer-3.png" alt="Bergman Foremann" className="img-fluid d-none d-md-block" />
                </div>
                <div className="col-md-8">
                  <h4 className="mb-0">
                    UX Designer
                  </h4>
                  <p className="text-muted mb-2 text-sm">@ <a href="#" className="font-weight-bold text-muted">Bergman Foremann</a> (Senior level, Full Time Employment)</p>
                  <p className="text-muted mb-2 text-sm">
                    <span className="d-block d-md-inline"><i className="fa fa-map-marker-alt"></i> New York, US</span>
                    <span className="d-block d-md-inline"><i className="far fa-money-bill-alt ml-md-3"></i> $70000000USD/year + benefits</span>
                    <span className="d-block d-md-inline"><i className="fa fa-globe text-primary ml-md-3"></i> Remote OK</span>
                  </p>
                </div>
                <div className="col-md-2 text-md-center">
                  <a href="#" className="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" className="text-muted text-xs op-7"><i className="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>

            <div className="card px-3 py-4 mb-3 row-hover pos-relative">
              <div className="row align-items-center ">
                <div className="col-md-2">
                  <img src="assets/img/customers/customer-4.png" alt="PinPixel" className="img-fluid d-none d-md-block" />
                </div>
                <div className="col-md-8">
                  <h4 className="mb-0">
                    Server Support Manager
                  </h4>
                  <p className="text-muted mb-2 text-sm">@ <a href="#" className="font-weight-bold text-muted">PinPixel</a> (Senior level, Contract)</p>
                  <p className="text-muted mb-2 text-sm">
                    <span className="d-block d-md-inline"><i className="fa fa-map-marker-alt"></i> Europe Based</span>
                    <span className="d-block d-md-inline"><i className="far fa-money-bill-alt ml-md-3"></i> $70USD/hour</span>
                    <span className="d-block d-md-inline"><i className="fa fa-globe text-primary ml-md-3"></i> Remote OK</span>
                  </p>
                </div>
                <div className="col-md-2 text-md-center">
                  <a href="#" className="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" className="text-muted text-xs op-7"><i className="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>

            <div className="card px-3 py-4 mb-3 row-hover pos-relative">
              <div className="row align-items-center ">
                <div className="col-md-2">
                  <img src="assets/img/customers/customer-5.png" alt="FNC" className="img-fluid d-none d-md-block" />
                </div>
                <div className="col-md-8">
                  <h4 className="mb-0">
                    Drupal Developer
                  </h4>
                  <p className="text-muted mb-2 text-sm">@ <a href="#" className="font-weight-bold text-muted">FNC</a> (Senior level, Full Time Employment)</p>
                  <p className="text-muted mb-2 text-sm">
                    <span className="d-block d-md-inline"><i className="fa fa-map-marker-alt"></i> London, UK</span>
                    <span className="d-block d-md-inline"><i className="far fa-money-bill-alt ml-md-3"></i> $70USD/hour</span>
                  </p>
                </div>
                <div className="col-md-2 text-md-center">
                  <a href="#" className="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" className="text-muted text-xs op-7"><i className="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>
            <hr className="hr-lg mt-6 mb-2 w-10 ml-0 hr-primary" />
            <h3 className="mt-0 mb-3 font-weight-bold text-uppercase">
              This Months Jobs <span className="text-xs text-muted font-weight-normal text-normalcase op-7">Feb 2017</span>
            </h3>

            <div className="card px-3 py-4 mb-3 row-hover pos-relative">
              <div className="row align-items-center ">
                <div className="col-md-2">
                  <img src="assets/img/customers/customer-1.png" alt="RRT Productions" className="img-fluid d-none d-md-block" />
                </div>
                <div className="col-md-8">
                  <h4 className="mb-0">
                    Bootstrap Designer/Developer
                  </h4>
                  <p className="text-muted mb-2 text-sm">@ <a href="#" className="font-weight-bold text-muted">RRT Productions</a> (Senior level, Contract)</p>
                  <p className="text-muted mb-2 text-sm">
                    <span className="d-block d-md-inline"><i className="fa fa-map-marker-alt"></i> Europe Based</span>
                    <span className="d-block d-md-inline"><i className="fa fa-money-bill-alt ml-md-3"></i> $70USD/hour</span>
                    <span className="d-block d-md-inline"><i className="fa fa-globe text-primary ml-md-3"></i> Remote OK</span>
                  </p>
                </div>
                <div className="col-md-2 text-md-center">
                  <a href="#" className="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" className="text-muted text-xs op-7"><i className="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>

            <div className="card px-3 py-4 mb-3 row-hover card-outline-primary pos-relative">
              <div className="row align-items-center ">
                <span className="pos-absolute pos-t pos-l bg-primary text-white text-xs px-1">featured</span>
                <div className="col-md-2">
                  <img src="assets/img/customers/customer-2.png" alt="TSU" className="img-fluid d-none d-md-block" />
                </div>
                <div className="col-md-8">
                  <h4 className="mb-0">
                    Drupal Developer
                  </h4>
                  <p className="text-muted mb-2 text-sm">@ <a href="#" className="font-weight-bold text-muted">TSU</a> (Senior level, Full Time Employment)</p>
                  <p className="text-muted mb-2 text-sm">
                    <span className="d-block d-md-inline"><i className="fa fa-map-marker-alt"></i> London, UK</span>
                    <span className="d-block d-md-inline"><i className="fa fa-money-bill-alt ml-md-3"></i> $70USD/hour</span>
                  </p>
                </div>
                <div className="col-md-2 text-md-center">
                  <a href="#" className="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" className="text-muted text-xs op-7"><i className="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>

            <div className="card px-3 py-4 mb-3 row-hover pos-relative">
              <div className="row align-items-center ">
                <div className="col-md-2">
                  <img src="assets/img/customers/customer-3.png" alt="Bergman Foremann" className="img-fluid d-none d-md-block" />
                </div>
                <div className="col-md-8">
                  <h4 className="mb-0">
                    UX Designer
                  </h4>
                  <p className="text-muted mb-2 text-sm">@ <a href="#" className="font-weight-bold text-muted">Bergman Foremann</a> (Senior level, Full Time Employment)</p>
                  <p className="text-muted mb-2 text-sm">
                    <span className="d-block d-md-inline"><i className="fa fa-map-marker-alt"></i> New York, US</span>
                    <span className="d-block d-md-inline"><i className="fa fa-money-bill-alt ml-md-3"></i> $70000000USD/year + benefits</span>
                    <span className="d-block d-md-inline"><i className="fa fa-globe text-primary ml-md-3"></i> Remote OK</span>
                  </p>
                </div>
                <div className="col-md-2 text-md-center">
                  <a href="#" className="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" className="text-muted text-xs op-7"><i className="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>

            <div className="card px-3 py-4 mb-3 row-hover pos-relative">
              <div className="row align-items-center ">
                <div className="col-md-2">
                  <img src="assets/img/customers/customer-4.png" alt="PinPixel" className="img-fluid d-none d-md-block" />
                </div>
                <div className="col-md-8">
                  <h4 className="mb-0">
                    Server Support Manager
                  </h4>
                  <p className="text-muted mb-2 text-sm">@ <a href="#" className="font-weight-bold text-muted">PinPixel</a> (Senior level, Contract)</p>
                  <p className="text-muted mb-2 text-sm">
                    <span className="d-block d-md-inline"><i className="fa fa-map-marker-alt"></i> Europe Based</span>
                    <span className="d-block d-md-inline"><i className="fa fa-money-bill-alt ml-md-3"></i> $70USD/hour</span>
                    <span className="d-block d-md-inline"><i className="fa fa-globe text-primary ml-md-3"></i> Remote OK</span>
                  </p>
                </div>
                <div className="col-md-2 text-md-center">
                  <a href="#" className="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" className="text-muted text-xs op-7"><i className="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>

            <div className="card px-3 py-4 mb-3 row-hover pos-relative">
              <div className="row align-items-center ">
                <div className="col-md-2">
                  <img src="assets/img/customers/customer-5.png" alt="FNC" className="img-fluid d-none d-md-block" />
                </div>
                <div className="col-md-8">
                  <h4 className="mb-0">
                    Drupal Developer
                  </h4>
                  <p className="text-muted mb-2 text-sm">@ <a href="#" className="font-weight-bold text-muted">FNC</a> (Senior level, Full Time Employment)</p>
                  <p className="text-muted mb-2 text-sm">
                    <span className="d-block d-md-inline"><i className="fa fa-map-marker-alt"></i> London, UK</span>
                    <span className="d-block d-md-inline"><i className="fa fa-money-bill-alt ml-md-3"></i> $70USD/hour</span>
                  </p>
                </div>
                <div className="col-md-2 text-md-center">
                  <a href="#" className="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" className="text-muted text-xs op-7"><i className="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>

            <div className="card px-3 py-4 mb-3 row-hover card-outline-primary pos-relative">
              <div className="row align-items-center ">
                <span className="pos-absolute pos-t pos-l bg-primary text-white text-xs px-1">featured</span>
                <div className="col-md-2">
                  <img src="assets/img/customers/customer-6.png" alt="Siqueira" className="img-fluid d-none d-md-block" />
                </div>
                <div className="col-md-8">
                  <h4 className="mb-0">
                    UX Designer
                  </h4>
                  <p className="text-muted mb-2 text-sm">@ <a href="#" className="font-weight-bold text-muted">Siqueira</a> (Senior level, Full Time Employment)</p>
                  <p className="text-muted mb-2 text-sm">
                    <span className="d-block d-md-inline"><i className="fa fa-map-marker-alt"></i> New York, US</span>
                    <span className="d-block d-md-inline"><i className="fa fa-money-bill-alt ml-md-3"></i> $70000000USD/year + benefits</span>
                    <span className="d-block d-md-inline"><i className="fa fa-globe text-primary ml-md-3"></i> Remote OK</span>
                  </p>
                </div>
                <div className="col-md-2 text-md-center">
                  <a href="#" className="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" className="text-muted text-xs op-7"><i className="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>

            <div className="card px-3 py-4 mb-3 row-hover card-outline-primary pos-relative">
              <div className="row align-items-center ">
                <span className="pos-absolute pos-t pos-l bg-primary text-white text-xs px-1">featured</span>
                <div className="col-md-2">
                  <img src="assets/img/customers/customer-7.png" alt="Bouldrian" className="img-fluid d-none d-md-block" />
                </div>
                <div className="col-md-8">
                  <h4 className="mb-0">
                    Server Support Manager
                  </h4>
                  <p className="text-muted mb-2 text-sm">@ <a href="#" className="font-weight-bold text-muted">Bouldrian</a> (Senior level, Contract)</p>
                  <p className="text-muted mb-2 text-sm">
                    <span className="d-block d-md-inline"><i className="fa fa-map-marker-alt"></i> Europe Based</span>
                    <span className="d-block d-md-inline"><i className="fa fa-money-bill-alt ml-md-3"></i> 30euro/hour</span>
                    <span className="d-block d-md-inline"><i className="fa fa-globe text-primary ml-md-3"></i> Remote OK</span>
                  </p>
                </div>
                <div className="col-md-2 text-md-center">
                  <a href="#" className="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" className="text-muted text-xs op-7"><i className="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>

            <div className="card px-3 py-4 mb-3 row-hover pos-relative">
              <div className="row align-items-center ">
                <div className="col-md-2">
                  <img src="assets/img/customers/customer-8.png" alt="Krollon" className="img-fluid d-none d-md-block" />
                </div>
                <div className="col-md-8">
                  <h4 className="mb-0">
                    Drupal Developer
                  </h4>
                  <p className="text-muted mb-2 text-sm">@ <a href="#" className="font-weight-bold text-muted">Krollon</a> (Senior level, Full Time Employment)</p>
                  <p className="text-muted mb-2 text-sm">
                    <span className="d-block d-md-inline"><i className="fa fa-map-marker-alt"></i> London, UK</span>
                    <span className="d-block d-md-inline"><i className="fa fa-money-bill-alt ml-md-3"></i> $70USD/hour</span>
                  </p>
                </div>
                <div className="col-md-2 text-md-center">
                  <a href="#" className="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" className="text-muted text-xs op-7"><i className="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>

            <div className="card px-3 py-4 mb-3 row-hover pos-relative">
              <div className="row align-items-center ">
                <div className="col-md-2">
                  <img src="assets/img/customers/customer-9.png" alt="Stern Hegoland" className="img-fluid d-none d-md-block" />
                </div>
                <div className="col-md-8">
                  <h4 className="mb-0">
                    UX Designer
                  </h4>
                  <p className="text-muted mb-2 text-sm">@ <a href="#" className="font-weight-bold text-muted">Stern Hegoland</a> (Senior level, Full Time Employment)</p>
                  <p className="text-muted mb-2 text-sm">
                    <span className="d-block d-md-inline"><i className="fa fa-map-marker-alt"></i> New York, US</span>
                    <span className="d-block d-md-inline"><i className="fa fa-money-bill-alt ml-md-3"></i> $70000000USD/year + benefits</span>
                    <span className="d-block d-md-inline"><i className="fa fa-globe text-primary ml-md-3"></i> Remote OK</span>
                  </p>
                </div>
                <div className="col-md-2 text-md-center">
                  <a href="#" className="btn btn-danger text-uppercase font-weight-bold d-lg-block">Apply</a>
                  <a href="#" className="text-muted text-xs op-7"><i className="fa fa-heart"></i> Shortlist</a>
                </div>
              </div>
            </div>

            <div className="bg-light p-4">
              <h3 className="font-weight-bold mb-2">
                Got skills?
              </h3>
              <h4 className="font-weight-normal text-muted mb-3">
                Get employed, upload your CV today and start showcasing you & your skills!
              </h4>
              <a href="#" className="btn btn-primary btn-rounded">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>



  </PageTemplate>

  }
}
export default SearchView
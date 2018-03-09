import './header.scss'

import React from 'react'

import { Link } from 'react-router-dom'

const Header = () => {
  return <div id="header">

    <div className="header">
      <div className="header-inner container">
        <div className="header-brand">
          <Link to="/" className="header-brand-text header-brand-text-sm"
                title="Home">
            <h1>
              <span className="header-brand-text-alt">Chii</span>ki<span
              className="header-brand-text-alt">.</span>
            </h1>
          </Link>
          <div className="header-divider d-none d-lg-block"></div>
          <div className="header-slogan text-sm d-none d-lg-block">
            Something here?
          </div>
        </div>
        <div className="header-block order-12">

          <a href="#top"
             className="btn btn-link btn-icon text-white op-6 header-btn float-right d-lg-none"
             data-toggle="jpanel-menu" data-target=".navbar-main"
             data-direction="right">
            <i className="fa fa-bars"></i>
          </a>
        </div>

        <div className="navbar navbar-expand-md">
          <div className="navbar-main collapse">
            <ul
              className="nav navbar-nav mr-lg-2 dropdown-effect-fade">
              <li className="nav-item d-lg-flex">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home nav-link-icon"></i>
                  <span className="d-none">Home</span>
                </Link>
              </li>
              {/*<li className="nav-item d-lg-flex dropdown">*/}
              {/*<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Jobs</a>*/}
              {/*<div className="dropdown-menu dropdown-menu-right dropdown-menu-nobullets">*/}
              {/*<a href="#" className="dropdown-item"><i className="fa fa-drupal dropdown-icon" aria-hidden="true"></i> Drupal Jobs</a>*/}
              {/*<a href="#" className="dropdown-item"><i className="fa fa-paint-brush dropdown-icon" aria-hidden="true"></i> Designer Jobs</a>*/}
              {/*<a href="#" className="dropdown-item"><i className="fa fa-apple dropdown-icon" aria-hidden="true"></i> iOS Jobs</a>*/}
              {/*<a href="#" className="dropdown-item"><i className="fa fa-android dropdown-icon" aria-hidden="true"></i> Android Jobs</a>*/}
              {/*</div>*/}
              {/*</li>*/}
              {/*<li className="nav-item d-lg-flex dropdown">*/}
              {/*<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Job Pages</a>*/}
              {/*<div className="dropdown-menu dropdown-menu-right dropdown-menu-dark"> <a href="#" className="dropdown-item">Full Demo Coming Soon!</a> </div>*/}
              {/*</li>*/}
            </ul>
          </div>
          <Link to="/app/jobs/job"
                className="btn btn-primary btn-rounded btn-sm text-uppercase font-weight-bold">
            Post Job
          </Link>
        </div>
      </div>
    </div>
  </div>
}

export default Header

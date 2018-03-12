import './header.scss'

import React from 'react'

import { Link } from 'react-router-dom'

const Header = ({i18n}) => {
  return   <div className="header py-1 py-lg-3 fixed-top text-light">
      <div className="header-inner d-flex justify-content-between container">
        <div className="header-brand d-flex align-items-center">
          <Link to="/" className="brand-link text-primary font-weight-bold"
                title="Home">
            <h3 className="m-0">
              <span className="text-light">Chii</span>ki<span className="text-light">.</span>
            </h3>
          </Link>
          <div className="header-divider d-none d-lg-block"></div>
          <div className="text-sm d-none d-lg-block">
            Something here?
          </div>
        </div>


        <div className="navbar navbar-expand-md">
          <div className="navbar-main">
            <ul
              className="nav navbar-nav mr-1 mr-md-2 mr-lg-3  dropdown-effect-fade">
              <li className="nav-item d-lg-flex">
                <Link to="/" className="text-light">
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
            {i18n.t('header.postJob')}
          </Link>
        </div>

      {/*<div className="header-block order-12 d-lg-none">*/}
      <div className="header-block order-12 d-none">

        <a href="#top"
           className="btn btn-link btn-icon text-white op-6 header-btn float-right"
           data-toggle="jpanel-menu" data-target=".navbar-main"
           data-direction="right">
          <i className="fa fa-bars"></i>
        </a>
      </div>

      </div>
    </div>
}

export default Header

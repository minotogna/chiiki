import React from 'react'

export default () => {
  return <footer className="py-3 bg-dark2 border-top border-primary ">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-light">
          <p className="mb-0 text-sm">Copyright 2018 &copy; AppStrap</p>
          <ul className="list-inline footer-links mb-0 text-sm">
            <li className="list-inline-item">
              <a href="#" className="text-light">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-light">Privacy</a>
            </li>
            <li className="list-inline-item">
              <a href="#" className="text-light">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <div className="float-md-right ml-md-auto">
            <a href="#" className="btn btn-sm btn-icon btn-dark btn-circle">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="btn btn-sm btn-icon btn-dark btn-circle">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="btn btn-sm btn-icon btn-dark btn-circle">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="btn btn-sm btn-icon btn-dark btn-circle">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#top" className="btn btn-sm btn-icon btn-dark btn-circle"
               title="Back to top">
              <i className="fa fa-chevron-up"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
}

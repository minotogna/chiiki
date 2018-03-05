import React from 'react'

export default () => {
  return <footer id="footer" className="py-3">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p className="mb-0 text-sm">Copyright 2018 &copy; AppStrap</p>
          <ul className="list-inline footer-links mb-0 text-sm">
            <li className="list-inline-item"><a href="#">Terms</a></li>
            <li className="list-inline-item"><a href="#">Privacy</a></li>
            <li className="list-inline-item"><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div className="col-md-6 flex-valign">
          <div className="float-md-right ml-md-auto">
            <a href="#" className="btn btn-sm btn-icon btn-dark btn-rounded">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="btn btn-sm btn-icon btn-dark btn-rounded">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="btn btn-sm btn-icon btn-dark btn-rounded">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="btn btn-sm btn-icon btn-dark btn-rounded">
              <i className="fab fa-google-plus-g"></i>
            </a>
            <a href="#top" className="btn btn-sm btn-icon btn-dark btn-rounded"
               title="Back to top">
              <i className="fa fa-chevron-up"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
}

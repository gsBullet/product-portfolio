"use client";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.css";

const banner = () => {
  return (
    <div className="container">
      <div className="banner-option">
        <div className="product-banner">
          <div className="banner-header ">
            <h4 className="text-center text-capitalize fw-semibold text-light ">
              MOST POWERFUL
            </h4>
            <h1 className="text-center text-capitalize fw-bold text-light fs-1">
              Active School Management
            </h1>
            <p className="col-xxl-6 col-12 col-lg-6 col-md-8 col-sm-12 m-auto text-light  text-center">
              A powerful platform to make you an eCommerce <br /> entrepreneur
            </p>
            <div className="banner-button mt-5">
              <div className="d-flex justify-content-center align-items-center gap-4 flex-column flex-md-row flex-md-row flex-lg-row flex-xxl-row">
                <a
                  className="btn btn-outline-light text-capitalize px-3"
                  href=""
                >
                  browse frontend
                </a>
                <a
                  className="btn btn-outline-light text-capitalize px-3"
                  href=""
                >
                  browse Admin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default banner;

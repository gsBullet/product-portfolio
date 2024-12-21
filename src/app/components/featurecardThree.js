"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.css";
const featurecardThree = () => {
  return (
    <div className="container">
      <div className="product-card mt-3">
        <div className="featureProductFlex">
          <div className="card col-12 col-sm-5 col-md-5 col-lg-3 col-xxl-3 p-3">
            <div className="text-center min-vh-25">
              <span>
                <i className="fa-solid fa-users fs-1 text-secondary"></i>
              </span>
              <h4 className="text-secondary fw-bold">
                Administration & Management
              </h4>
            </div>
          </div>
          <div className="card col-12 col-sm-5 col-md-5 col-lg-3 col-xxl-3 p-3">
            <div className="text-center min-vh-25">
              <span>
                <i className="fa-solid fa-dumpster fs-1 text-secondary"></i>
              </span>
              <h4 className="text-secondary fw-bold">Academic Management</h4>
            </div>
          </div>
          <div className="card col-12 col-sm-5 col-md-5 col-lg-3 col-xxl-3 p-3">
            <div className="text-center min-vh-25">
              <span>
                <i className="fa-solid fa-cart-plus fs-1 text-secondary"></i>
                {/* <i class="fa fa-cart-plus" aria-hidden="true"></i> */}
              </span>
              <h4 className="text-secondary fw-bold">
                Communication & Collaboration
              </h4>
            </div>
          </div>
          <div className="card col-12 col-sm-5 col-md-5 col-lg-3 col-xxl-3 p-3">
            <div className="text-center min-vh-25">
              <span>
                <i className="fa-solid fa-users fs-1 text-secondary"></i>
              </span>
              <h4 className="text-secondary fw-bold">Financial Management</h4>
            </div>
          </div>
          <div className="card col-12 col-sm-5 col-md-4 col-lg-3 col-xxl-3 p-3">
            <div className="text-center min-vh-25">
              <span>
                <i className="fa-solid fa-dumpster fs-1 text-secondary"></i>
              </span>
              <h4 className="text-secondary fw-bold">
                Examination & Certificatione
              </h4>
            </div>
          </div>
          <div className="card col-12 col-sm-5 col-md-5 col-lg-3 col-xxl-3 p-3">
            <div className="text-center min-vh-25">
              <span>
                <i className="fa-solid fa-users fs-1 text-secondary"></i>
              </span>
              <h4 className="text-secondary fw-bold">Transport & Logistics</h4>
            </div>
          </div>
         
          <div className="card col-12 col-sm-5 col-md-5 col-lg-3 col-xxl-3 p-3">
            <div className="text-center min-vh-25">
              <span>
                <i className="fa-solid fa-cart-plus fs-1 text-secondary"></i>
                {/* <i class="fa fa-cart-plus" aria-hidden="true"></i> */}
              </span>
              <h4 className="text-secondary fw-bold">
                Online Learning Integration
              </h4>
            </div>
          </div>{" "}
          <div className="card col-12 col-sm-5 col-md-5 col-lg-3 col-xxl-3 p-3">
            <div className="text-center min-vh-25">
              <span>
                <i className="fa-solid fa-cart-plus fs-1 text-secondary"></i>
                {/* <i class="fa fa-cart-plus" aria-hidden="true"></i> */}
              </span>
              <h4 className="text-secondary fw-bold">
                Extracurricular & Event Participation
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default featurecardThree;

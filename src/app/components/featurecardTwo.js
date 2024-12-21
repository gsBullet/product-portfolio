"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.css";
const featurecardTwo = () => {
  return (
    <div className="container">
      <div className="product-card mt-3">
        <div className="featureProductFlex">
          <div className="card col-12 col-sm-5 col-md-5 col-lg-3 col-xxl-3 p-3">
            <div className="text-center min-vh-25">
              <span>
                <i className="fa-solid fa-dumpster fs-1 text-secondary"></i>
              </span>
              <h4 className="text-secondary fw-bold">
                Event & Calendar Management
              </h4>
            </div>
          </div>
          <div className="card col-12 col-sm-5 col-md-5 col-lg-3 col-xxl-3 p-3">
            <div className="text-center min-vh-25">
              <span>
                <i className="fa-solid fa-cart-plus fs-1 text-secondary"></i>
                {/* <i className="fa fa-cart-plus" aria-hidden="true"></i> */}
              </span>
              <h4 className="text-secondary fw-bold">
                Inventory & Asset Management
              </h4>
            </div>
          </div>

          
          <div className="card col-12 col-sm-5 col-md-5 col-lg-3 col-xxl-3 p-3">
            <div className="text-center min-vh-25">
              <span>
                <i className="fa-solid fa-cart-plus fs-1 text-secondary"></i>
                {/* <i className="fa fa-cart-plus" aria-hidden="true"></i> */}
              </span>
              <h4 className="text-secondary fw-bold">
                Student Rewards & Recognition
              </h4>
            </div>
          </div>

          <div className="card col-12 col-sm-5 col-md-5 col-lg-3 col-xxl-3 p-3">
            <div className="text-center min-vh-25">
              <span>
                <i className="fa-solid fa-dumpster fs-1 text-secondary"></i>
              </span>
              <h4 className="text-secondary fw-bold">
                {" "}
                Learning Content Management
              </h4>
            </div>
          </div>
          <div className="card col-12 col-sm-5 col-md-5 col-lg-3 col-xxl-3 p-3">
            <div className="text-center min-vh-25">
              <span>
                <i className="fa-solid fa-cart-plus fs-1 text-secondary"></i>
                {/* <i className="fa fa-cart-plus" aria-hidden="true"></i> */}
              </span>
              <h4 className="text-secondary fw-bold">100% response design</h4>
            </div>
          </div>

          
          <div className="card col-12 col-sm-5 col-md-4 col-lg-3 col-xxl-3 p-3">
            <div className="text-center min-vh-25">
              <span>
                <i className="fa-solid fa-cart-plus fs-1 text-secondary"></i>
                {/* <i className="fa fa-cart-plus" aria-hidden="true"></i> */}
              </span>
              <h4 className="text-secondary fw-bold">Integration & Security</h4>
            </div>
          </div>
          <div className="card col-12 col-sm-5 col-md-4 col-lg-3 col-xxl-3 p-3">
            <div className="text-center min-vh-25">
              <span>
                <i className="fa-solid fa-cart-plus fs-1 text-secondary"></i>
                {/* <i className="fa fa-cart-plus" aria-hidden="true"></i> */}
              </span>
              <h4 className="text-secondary fw-bold">
                Customization & Personalization
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default featurecardTwo;

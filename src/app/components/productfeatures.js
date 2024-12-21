"use client";
import FeatureCardOne from "./featurecardone";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.css";
const productfeatures = () => {
  return (
    <div className="container">
      <div className="product-features">
        <div className="d-block">
          <h1 className="fw-bolder text-dark text-center fs-1 text-capitalize">
            Core Features
          </h1>
          <p className="col-10 col-sm-8 col-md-5 col-lg-5 col-xxl-4 m-auto text-center">
            Standard Multivendor system with well-decorated frontend & exclusive
            features.
          </p>

          <div className="core-feature mb-3">
            <FeatureCardOne />
          </div>
        </div>
      </div>
    </div>
  );
};

export default productfeatures;

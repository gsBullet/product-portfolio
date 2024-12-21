"use client";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import "../globals.css";
const smartpricingoptions = () => {
  return (
    <div className="container">
      <div className="smart-pricing">
        <div className="" id="pricing-plans">
          {/* <!-- ***** Section Title Start ***** --> */}
          <h1 className="fw-bolder text-center fs-1 text-capitalize">
            Smart Pricing Plans
          </h1>

          {/* <!-- ***** Section Title End ***** --> */}

          <div className="d-flex justify-content-around align-items-center flex-column flex-sm-column flex-md-column flex-lg-row flex-xxl-row mt-5">
            {/* <!-- ***** Pricing Item Start ***** --> */}
            <div className="col-lg-3 col-md-8 col-xxl-3 col-sm-12 col-12">
              <div className="pricing-item">
                <div className="pricing-header">
                  <h3 className="pricing-title">BASIC PLAN</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="currency">$</span>
                    <span className="price">10.90</span>
                    <span className="period">/Month</span>
                  </div>
                  <ul className="list">
                    <li className="active">Unlimited Website</li>
                    <li className="active">Unlimited Users</li>
                    <li className="active">5 GB Bandwidth</li>
                    <li className="active">Highest Speed</li>
                    <li>Data Security and Backups</li>
                    <li>1 GB Storage</li>
                    <li>24x7 Great Support</li>
                    <li>Monthly Reports and Analytics</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <Link href="#" className="btn-primary-line">
                    Select Plan
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- ***** Pricing Item End ***** -->

        <!-- ***** Pricing Item Start ***** --> */}
            <div className="col-lg-3 col-md-8 col-xxl-3 col-sm-12 col-12">
              <div className="pricing-item active">
                <div className="pricing-header">
                  <h3 className="pricing-title">ADVANCED PLAN</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="currency">$</span>
                    <span className="price">21.90</span>
                    <span className="period">/Month</span>
                  </div>
                  <ul className="list">
                    <li className="active">Unlimited Website</li>
                    <li className="active">Unlimited Users</li>
                    <li className="active">15 GB Bandwidth</li>
                    <li className="active">Highest Speed</li>
                    <li className="active">Data Security and Backups</li>
                    <li className="active">1 GB Storage</li>
                    <li>24x7 Great Support</li>
                    <li>Monthly Reports and Analytics</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <Link href="#" className="btn-primary-line">
                    Select Plan
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- ***** Pricing Item End ***** --> */}

            {/* <!-- ***** Pricing Item Start ***** --> */}
            <div className="col-lg-3 col-md-8 col-xxl-3 col-sm-12 col-12">
              <div className="pricing-item">
                <div className="pricing-header">
                  <h3 className="pricing-title">EXPERT PLAN</h3>
                </div>
                <div className="pricing-body">
                  <div className="price-wrapper">
                    <span className="currency">$</span>
                    <span className="price">43.90</span>
                    <span className="period">/Month</span>
                  </div>
                  <ul className="list">
                    <li className="active">Unlimited Website</li>
                    <li className="active">Unlimited Users</li>
                    <li className="active">15 GB Bandwidth</li>
                    <li className="active">Highest Speed</li>
                    <li className="active">Data Security and Backups</li>
                    <li className="active">1 GB Storage</li>
                    <li className="active">24x7 Great Support</li>
                    <li className="active">Monthly Reports and Analytics</li>
                  </ul>
                </div>
                <div className="pricing-footer">
                  <Link href="#" className="btn-primary-line">
                    Select Plan
                  </Link>
                </div>
              </div>
            </div>
            {/* <!-- ***** Pricing Item End ***** --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default smartpricingoptions;

"use client";
import { FaShoppingCart, FaTags } from "react-icons/fa";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

const orderpricingbtn = () => {
  return (
    <div className="container">
      <div className="order-pricing-container">
        <div className="fixed-btn-container">
          <div className="btn-wrapper">
            <FaShoppingCart className="icon" />
            <span className="btn-text">Order Now</span>
          </div>

          <div className="btn-wrapper">
            <Link href={"#buy-product-section"}>
              <FaTags className="icon" />
              <span className="btn-text">Pricing</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default orderpricingbtn;

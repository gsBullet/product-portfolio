"use client";

import Image from "next/image";
import Logo from "../assects/logo/logobig.png";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="container">
      <div className="px-3">
        <div className="d-flex align-items-center justify-content-center flex-column flex-md-row justify-content-md-between">
          <div className="logo ps-3">
            <Image
              src={Logo}
              alt="logo"
              height={50}
              className="img-fluid"
              priority
            />
          </div>
          <div className="product_navbar my-2">
            <ul className="d-flex justify-content-end list-unstyled m-0">
              <li className="navLinkItem">
                <Link
                  className="btn btn-success fs-6 px-3"
                  href="#promo-container-img"
                >
                  Promo
                </Link>
              </li>
              <li className="navLinkItem">
                <Link
                  className="btn btn-success fs-6 px-3"
                  href="#buy-product-section"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

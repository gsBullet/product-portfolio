"use client";
import "bootstrap/dist/css/bootstrap.css";
import "../globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import mastercard from "@/app/assects/getway/master-card.png";
import visa from "@/app/assects/getway/visa.png";
import discover from "@/app/assects/getway/discover.png";
import amex from "@/app/assects/getway/amex.png";
import jcb from "@/app/assects/getway/jcb.png";
import nogod from "@/app/assects/getway/nogod.png";
import bkash from "@/app/assects/getway/bkash.png";
import rocket from "@/app/assects/getway/rocket.png";
import paypal from "@/app/assects/getway/paypal.png";

const paymentgetway = () => {
  return (
    <div className="container">
      <div className="payment-getway ">
        <div className="getway-header mb-5">
          <h1 className="fw-bolder text-dark text-center fs-1 text-capitalize">
            Multiple Payment Gateways
          </h1>
          <p className="text-center col-12 col-sm-12 col-md-8 col-lg-6 col-xxl-6 m-auto">
            Active eCommerce CMS comes with various types of payment options.
            You can take payments from your customers according to your suitable
            gateways.
          </p>
        </div>
        <div className="getway-cards mt-3">
          <div className="multipleGetWays">
            <Image
              src={visa}
              width={80}
              height={80}
              alt=""
              className="img-thumbnail"
            />
            <Image
              src={mastercard}
              width={80}
              height={80}
              alt=""
              className="img-thumbnail"
            />

            <Image
              src={jcb}
              width={80}
              height={80}
              alt=""
              className="img-thumbnail"
            />
            <Image
              src={bkash}
              width={80}
              height={120}
              alt=""
              className="img-thumbnail"
            />
            <Image
              src={nogod}
              width={80}
              height={80}
              alt=""
              className="img-thumbnail"
            />
            <Image
              src={rocket}
              width={80}
              height={80}
              alt=""
              className="img-thumbnail"
            />
            <Image
              src={paypal}
              width={80}
              height={80}
              alt=""
              className="img-thumbnail"
            />
            <Image
              src={amex}
              width={80}
              height={80}
              alt=""
              className="img-thumbnail"
            />
            <Image
              src={discover}
              width={80}
              height={80}
              alt=""
              className="img-thumbnail"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default paymentgetway;

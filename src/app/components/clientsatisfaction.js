"use client";
import "bootstrap/dist/css/bootstrap.css";
import "../globals.css";
import Image from "next/image";
import ClientImage from "@/app/assects/img/clientS.jpg";

const clientsatisfaction = () => {
  return (
    <div className="container">
      <div className=" mb-3">
        <div className="product-client">
          <h1 className="fs-1 fw-bolder text-capitalize text-center">
            Why Our Client More satisfaction
          </h1>
          <div className="card-body mt-5">
            <div className="d-flex justify-content-between  flex-sm-column flex-column flex-xl-row flex-xxl-row flex-lg-row flex-md-row ">
              <div className="client-img ">
                <Image
                  src={ClientImage}
                  width={500}
                  height={500}
                  alt="client image"
                  className="img-thumbnail border-0"
                />
              </div>
              <div className="client-info col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-6 card">
                <p className="text-center fs-5 p-5">
                  The admin panel of Active eCommerce CMS serves as the central
                  hub for managing your entire online business. It empowers you
                  to oversee every aspect of your eCommerce operations, from
                  handling customers and products to managing orders, sellers,
                  and shops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default clientsatisfaction;

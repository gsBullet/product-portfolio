"use client";
import "bootstrap/dist/css/bootstrap.css";
import "../globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import dbms from "@/app/assects/dbms/dbms.png";
import Image from "next/image";

const frameworksupport = () => {
  return (
    <div className="container">
      <div className="frame-work-support ">
        <div className="text-center col-lg-7 col-md-8 col-sm-12 col-12 col-xxl-7 m-auto ">
          <div className="frame-work m-0">
            <Image
              width={80}
              height={80}
              src={dbms}
              alt="dbms"
              className="img-fluid"
            />
            <h3 className="fw-bolder text-dark text-center fs-1 text-capitalize mt-3">
              MERN based NODE script
            </h3>
            <p className="text-center text-secondary m-0">
              Active eCommerce CMS is a robust platform that can help to manage
              an eCommerce business. This software is developed by the MERN
              framework. JavaScript JS, JavaScript JSON, HTML, CSS, NODE, and
              SQL files are included.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default frameworksupport;

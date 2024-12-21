"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Administration from "@/app/assects/feature/administration.png";
import analysis from "@/app/assects/feature/analysis2.png";
import MultipleCampus from "@/app/assects/feature/campusm.png";
import Fee from "@/app/assects/feature/fee.png";
import Finance from "@/app/assects/feature/finance.png";
import Learning from "@/app/assects/feature/learning.png";
import Report from "@/app/assects/feature/report.png";
import StudentInfo from "@/app/assects/feature/std-info.png";
import StudentManagement from "@/app/assects/feature/stdm.png";
import TeacherManagement from "@/app/assects/feature/tms.png";
import Structure from "@/app/assects/feature/structure.png";
import Transport from "@/app/assects/feature/transport.png";
import Image from "next/image";

const featurecardone = () => {
  return (
    <div className="container">
      <div className="featureProductFlex mt-3">
        <div className=" d-flex justify-content-center gap-5 flex-wrap m-auto">
          <div className=" col-12 col-sm-12 col-md-3 col-lg-3 col-xxl-3">
            <div className="card fixed-card-height text-center">
              <div className="card-body">
                <Image
                  src={StudentManagement}
                  alt="Student Management"
                  width={80}
                  height={80}
                />
                <h5 className="text-dark fw-bold pt-3">Student Management</h5>
              </div>
            </div>
          </div>
          <div className=" col-12 col-sm-12 col-md-3 col-lg-3 col-xxl-3">
            <div className="card  fixed-card-height text-center">
              <div className="card-body">
                <Image
                  src={TeacherManagement}
                  alt="Teacher Management"
                  width={80}
                  height={80}
                />
                <h5 className="text-dark fw-bold pt-3">Teacher Management</h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xxl-3">
            <div className="card text-center">
              <div className="card-body">
                <Image
                  src={Administration}
                  alt="Advanced Administrative Tools"
                  width={80}
                  height={80}
                />
                <h5 className="text-dark fw-bold pt-3">
                  Advanced Administrative Tools
                </h5>
              </div>
            </div>
          </div>
          <div className=" col-12 col-sm-12 col-md-3 col-lg-3 col-xxl-3">
            <div className="card fixed-card-height text-center">
              <div className="card-body">
                <Image
                  src={Fee}
                  alt="Fee & Finance Extensions"
                  width={80}
                  height={80}
                />
                <h5 className="text-dark fw-bold pt-3">
                  Fee & Finance Extensions
                </h5>
              </div>
            </div>
          </div>
          <div className=" col-12 col-sm-12 col-md-3 col-lg-3 col-xxl-3">
            <div className="card fixed-card-height text-center">
              <div className="card-body">
                <Image
                  src={Finance}
                  alt="Advanced Financial Management"
                  width={80}
                  height={80}
                />
                <h5 className="text-dark fw-bold pt-3">
                  Advanced Financial Management
                </h5>
              </div>
            </div>
          </div>
          <div className=" col-12 col-sm-12 col-md-3 col-lg-3 col-xxl-3">
            <div className="card fixed-card-height text-center">
              <div className="card-body">
                <Image
                  src={analysis}
                  alt="Learning Analytics & Insights"
                  width={80}
                  height={80}
                />
                <h5 className="text-dark fw-bold pt-3">
                  Learning Analytics & Insights
                </h5>
              </div>
            </div>
          </div>
          <div className="card fixed-card-height col-12 col-sm-12 col-md-3 col-lg-3 col-xxl-3">
            <div className="card-body text-center">
              <Image
                src={StudentInfo}
                alt="Student Information System"
                width={80}
                height={80}
              />
              <h5 className="text-dark fw-bold pt-3">
                Student Information System (SIS)
              </h5>
            </div>
          </div>
          <div className="card fixed-card-height col-12 col-sm-12 col-md-3 col-lg-3 col-xxl-3">
            <div className="card-body text-center">
              <Image
                src={Learning}
                alt="Academic & Learning Enhancements"
                width={80}
                height={80}
              />
              <h5 className="text-dark fw-bold pt-3">
                Academic & Learning Enhancements
              </h5>
            </div>
          </div>

          <div className="card fixed-card-height col-12 col-sm-12 col-md-3 col-lg-3 col-xxl-3">
            <div className="card-body text-center">
              <Image
                src={Structure}
                alt="Academic Structure Management"
                width={80}
                height={80}
              />
              <h5 className="text-dark fw-bold pt-3">
                Academic Structure Management
              </h5>
            </div>
          </div>
          <div className="card fixed-card-height col-12 col-sm-12 col-md-3 col-lg-3 col-xxl-3">
            <div className="card-body text-center">
              <Image
                src={Transport}
                alt="Transport & Fleet Management"
                width={80}
                height={80}
              />
              <h5 className="text-dark fw-bold pt-3">
                Transport & Fleet Management
              </h5>
            </div>
          </div>
          <div className=" col-12 col-sm-12 col-md-3 col-lg-3 col-xxl-3">
            <div className=" card fixed-card-height">
              <div className="card-body text-center">
                <Image
                  src={MultipleCampus}
                  alt="Multi-Campus Management"
                  width={80}
                  height={80}
                />
                <h5 className="text-dark fw-bold pt-3">
                  Multi-Campus Management
                </h5>
              </div>
            </div>
          </div>
          <div className=" col-12 col-sm-12 col-md-3 col-lg-3 col-xxl-3">
            <div className="card fixed-card-height text-center">
              <div className="card-body ">
                <Image
                  src={Report}
                  alt="Reporting & Analytics"
                  width={80}
                  height={80}
                />
                <h5 className="text-dark fw-bold pt-3">
                  Reporting & Analytics
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default featurecardone;

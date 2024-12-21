"use client";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import AllInOne from "@/app/assects/img/all-in-one.png";
import MultipleCampus from "@/app/assects/img/campus.png";
import UserFrindly from "@/app/assects/img/user-friendly.png";
import CloudSecurity from "@/app/assects/img/cloud-security.png";
import Assesement from "@/app/assects/img/assesement.png";
import Analysis from "@/app/assects/img/analysis.png";
import Curriculum from "@/app/assects/img/curriculum.png";
import AssignmentTracking from "@/app/assects/img/assigned.png";
import AcademicCalender from "@/app/assects/img/calendar.png";
import AattendenceCheck from "@/app/assects/img/check.png";
import FeeManagement from "@/app/assects/img/fee-management.png";
import HostelManagement from "@/app/assects/img/hostel.png";
import StaffPayroll from "@/app/assects/img/staffpayroll.png";
import ExpenseTracking from "@/app/assects/img/expense-tracking.png";
import StdPortals from "@/app/assects/img/stdportals.png";
import teacherCollaboration from "@/app/assects/img/teachercollaboration.png";
import SystemUpdate from "@/app/assects/img/systemupdate.png";
import Auditlogs from "@/app/assects/img/auditlogs.png";
const chooseproduct = () => {
  return (
    <div className="container">
      <div className="product-choose-container">
        <div className="product-choose-header mb-5">
          <h1 className="fw-bolder text-dark text-center fs-1 text-capitalize">
            Why choose our product
          </h1>
          <p className="text-center col-12 col-sm-12 col-md-6 col-lg-6 col-xxl-5 m-auto">
            An efficient and thoughtfully streamlined product posting option for
            admins and sellers makes it possible to provide an industry-leading
            standard
          </p>
        </div>

        <div className="product-choose-body  mb-3  text-center">
          <div className="d-flex  flex-wrap gap-5 justify-content-center ">
            <div className=" col-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3">
              <div className="choose-product-height card  text-center">
                <div className="card-body">
                  <Image
                    src={AllInOne}
                    alt="All-in-One Platform"
                    width={100}
                    height={100}
                    className="img-thumbnail"
                  />
                  <h5 className="card-title fw-bold mt-3 ">
                    All-in-One Platform
                  </h5>
                  <p className="card-text">
                    Manage everything from admissions to exams, communication,
                    and more
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3 ">
              <div className="choose-product-height text-center card ">
                <div className="card-body">
                  <Image
                    src={MultipleCampus}
                    alt="All-in-One Platform"
                    width={100}
                    height={100}
                    className="img-thumbnail"
                  />

                  <h5 className="card-title fw-bold mt-3">
                    Multi-Campus Support
                  </h5>
                  <p className="card-text">
                    Manage multiple branches under one platform.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3">
              <div className="card text-center">
                <div className="card-body">
                  <Image
                    src={UserFrindly}
                    alt="All-in-One Platform"
                    width={100}
                    height={100}
                    className="img-thumbnail"
                  />
                  <h5 className="card-title fw-bold mt-3">
                    User-Friendly Interface
                  </h5>
                  <p className="card-text">
                    Intuitive design for all users, including students,
                    teachers, and staff.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3">
              <div className="choose-product-height card text-center">
                <div className="card-body">
                  <Image
                    src={CloudSecurity}
                    alt="cloud-security"
                    width={100}
                    height={100}
                    className="img-thumbnail"
                  />
                  <h5 className="card-title fw-bold mt-3">
                    Cloud & On-Premises Deployment
                  </h5>
                  <p className="card-text">
                    Choose the best hosting option for your school.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3">
              <div className="choose-product-height card text-center">
                <div className="card-body">
                  <Image
                    src={Assesement}
                    alt="exam-assessment"
                    width={100}
                    height={100}
                    className="img-thumbnail"
                  />
                  <h5 className="card-title fw-bold mt-3">
                    Exam & Assessment Management
                  </h5>
                  <p className="card-text">
                    Conduct online and offline exams, generate report cards, and
                    more.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3">
              <div className="card text-center">
                <div className="card-body">
                  <Image
                    src={Analysis}
                    alt="analysis-insights"
                    width={100}
                    height={100}
                    className="img-thumbnail"
                  />
                  <h5 className="card-title fw-bold mt-3">
                    Learning Analytics & Insights
                  </h5>
                  <p className="card-text">
                    AI-powered performance analytics for personalized learning
                    paths.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3">
              <div className="card text-center">
                <div className="card-body">
                  <Image
                    src={Curriculum}
                    alt="All-in-One Platform"
                    width={100}
                    height={100}
                    className="img-thumbnail"
                  />
                  <h5 className="card-title fw-bold mt-3">
                    Course & Curriculum Management
                  </h5>
                  <p className="card-text">
                    Easily design, update, and manage academic courses.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3">
              <div className="card text-center">
                <div className="card-body">
                  <Image
                    src={AssignmentTracking}
                    alt="All-in-One Platform"
                    width={100}
                    height={100}
                    className="img-thumbnail"
                  />
                  <h5 className="card-title fw-bold mt-3">
                    Assignment & Homework Tracking
                  </h5>
                  <p className="card-text">Assign and review homework online</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3">
              <div className="card text-center">
                <div className="card-body">
                  <Image
                    src={AcademicCalender}
                    alt="All-in-One Platform"
                    width={100}
                    height={100}
                    className="img-thumbnail"
                  />
                  <h5 className="card-title fw-bold mt-3">
                    Academic Calendar & Schedules
                  </h5>
                  <p className="card-text">
                    Centralized calendar for classes, exams, and events.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3">
              <div className="choose-product-height card text-center">
                <div className="card-body">
                  <Image
                    src={AattendenceCheck}
                    alt="All-in-One Platform"
                    width={100}
                    height={100}
                    className="img-thumbnail"
                  />
                  <h5 className="card-title fw-bold mt-3">
                    Attendance Tracking
                  </h5>
                  <p className="card-text">Manual attendance tracking.</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3">
              <div className="choose-product-height card text-center">
                <div className="card-body">
                  <Image
                    src={FeeManagement}
                    alt="All-in-One Platform"
                    width={100}
                    height={100}
                    className="img-thumbnail"
                  />
                  <h5 className="card-title fw-bold mt-3">
                    Fee Management System
                  </h5>
                  <p className="card-text">
                    Automate fee collection, billing, and online payments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3">
              <div className="card text-center">
                <div className="card-body">
                  <Image
                    src={HostelManagement}
                    alt="All-in-One Platform"
                    width={100}
                    height={100}
                    className="img-thumbnail"
                  />
                  <h5 className="card-title fw-bold mt-3">
                    Hostel & Accommodation Management
                  </h5>
                  <p className="card-text">
                    Assign rooms, track payments, and monitor student welfare.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3">
              <div className="card text-center">
                <div className="card-body">
                  <Image
                    src={StaffPayroll}
                    alt="All-in-One Platform"
                    width={100}
                    height={100}
                    className="img-thumbnail"
                  />
                  <h5 className="card-title fw-bold mt-3">
                    HR & Staff Payroll Management
                  </h5>
                  <p className="card-text">
                    Manage teacher and staff salaries, benefits, and leaves
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3">
              <div className="card text-center">
                <div className="card-body">
                  <Image
                    src={ExpenseTracking}
                    alt="All-in-One Platform"
                    width={100}
                    height={100}
                    className="img-thumbnail"
                  />
                  <h5 className="card-title fw-bold mt-3">
                    Budget & Expense Tracking
                  </h5>
                  <p className="card-text">
                    Track school expenses and generate financial reports.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3">
              <div className="choose-product-height card text-center">
                <div className="card-body">
                  <Image
                    src={StdPortals}
                    alt="All-in-One Platform"
                    width={100}
                    height={100}
                    className="img-thumbnail"
                  />
                  <h5 className="card-title fw-bold mt-3">
                    Parent & Student Portals
                  </h5>
                  <p className="card-text">
                    Provide updates on attendance, grades, and school events.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3 ">
              <div className="card text-center">
                <div className="card-body">
                  <Image
                    src={teacherCollaboration}
                    alt="All-in-One Platform"
                    width={100}
                    height={100}
                    className="img-thumbnail"
                  />
                  <h5 className="card-title fw-bold mt-3">
                    Teacher Collaboration Tools:
                  </h5>
                  <p className="card-text">
                    Facilitate file sharing, joint lesson planning, and
                    discussions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3">
              <div className="card text-center">
                <div className="card-body">
                  <Image
                    src={Auditlogs}
                    alt="All-in-One Platform"
                    width={100}
                    height={100}
                    className="img-thumbnail"
                  />
                  <h5 className="card-title fw-bold mt-3">
                    Audit Logs & History Tracking
                  </h5>
                  <p className="card-text">
                    Maintain records of user activities and system changes.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xxl-3">
              <div className="card text-center">
                <div className="card-body">
                  <Image
                    src={SystemUpdate}
                    alt="All-in-One Platform"
                    width={100}
                    height={100}
                    className="img-thumbnail"
                  />
                  <h5 className="card-title fw-bold mt-3">
                    System Maintenance & Updatest
                  </h5>
                  <p className="card-text">
                    Enjoy regular feature updates and system improvements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default chooseproduct;

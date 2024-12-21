"use client";
import "bootstrap/dist/css/bootstrap.css";
import "../globals.css";

import Image from "next/image";

import Telephone from "../assects/footer/telephone-call.png";
import Telegram from "../assects/footer/telegram.png";
import Mail from "../assects/footer/mail.png";
import Whatsapp from "../assects/footer/whatsapp.png";
import Facebook from "../assects/footer/facebook.png";
import Twitter from "../assects/footer/twitter.png";
import Linkedin from "../assects/footer/linkedin.png";
import Instragram from "../assects/footer/instagram.png";
import Youtube from "../assects/footer/youtube.png";
import CompanyLogo from "../assects/logo/logobig.png";

const footer = () => {
  return (
    <div className="container pt-3">
      <div className="foooter-ground-container">
        <div className="row justify-content-around  flex-column flex-sm-columd flex-md-row flex-lg-row flex-xxl-row gap-5 mb-3">
          <div className="col-12 col-sm-12 col-md-5 col-lg-3 col-xxl-3 text-center">
            <div className="text-center">
              <div className="text-light text-center">
                <div className="mb-4 text-start">
                  <Image
                    src={CompanyLogo}
                    className="bg-light"
                    alt="company logo"
                  />
                </div>
                <div className="d-flex justify-content-center align-items-center justify-content-lg-start align-items-lg-start justify-content-md-start align-items-md-start align-items-sm-start justify-content-sm-start  gap-4">
                  <div className="">
                    <Image
                      src={Telephone}
                      alt="Whatsapp"
                      width={30}
                      className="bg-light rounded"
                    />
                  </div>
                  <div>
                    <p>+8801719229596</p>
                    <p>+8801719229596</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center justify-content-lg-start align-items-lg-start justify-content-md-start align-items-md-start align-items-sm-start justify-content-sm-start  gap-4">
                  <div>
                    <Image
                      src={Whatsapp}
                      alt="Whatsapp"
                      width={30}
                      className="bg-light rounded"
                    />
                  </div>
                  <div>
                    <p>+8801719229596</p>
                  </div>
                </div>

                <div className="d-flex justify-content-center align-items-center justify-content-lg-start align-items-lg-start justify-content-md-start align-items-md-start align-items-sm-start justify-content-sm-start  gap-4">
                  <div>
                    <Image
                      src={Telegram}
                      alt="Telegram"
                      width={30}
                      className="bg-light rounded"
                    />
                  </div>
                  <div>
                    <p>+8801719229595</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center justify-content-lg-start align-items-lg-start justify-content-md-start align-items-md-start align-items-sm-start justify-content-sm-start  gap-4">
                  <div>
                    <Image
                      src={Mail}
                      alt="Mail"
                      width={30}
                      className="bg-light rounded"
                    />
                  </div>
                  <div>
                    <p>echparkitofficial@gmail.com</p>
                  </div>
                </div>
                <p>আমাদের সোশাল মিডিয়া সমূহ</p>
                <div className="d-flex align-items-center justify-content-center gap-4">
                  <Image
                    src={Facebook}
                    alt="Telephone"
                    width={20}
                    className="bg-light rounded"
                  />
                  <Image
                    src={Youtube}
                    alt="Telephone"
                    width={20}
                    className="bg-light rounded"
                  />
                  <Image
                    src={Twitter}
                    alt="Telephone"
                    width={20}
                    className="bg-light rounded"
                  />{" "}
                  <Image
                    src={Instragram}
                    alt="Telephone"
                    width={20}
                    className="bg-light rounded"
                  />
                  <Image
                    src={Linkedin}
                    alt="Telephone"
                    width={20}
                    className="bg-light rounded"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-12 col-sm-5 col-md-5 col-lg-3 col-xxl-3">b</div> */}
          <div className="col-12 col-sm-12 col-md-5 col-lg-3 col-xxl-3">
            <div className="text-light">
              <h3 className="text-light mb-5 text-lg-start text-center text-md-start text-xxl-start">
                আমাদের সেবা সমূহঃ
              </h3>
              <p className="text-lg-start text-center text-md-start text-xxl-start">
                স্কুল ম্যানেজমেন্ট{" "}
              </p>
              <p className="text-lg-start text-center text-md-start text-xxl-start">
                বিজনেস ম্যানেজমেন্ট{" "}
              </p>
              <p className="text-lg-start text-center text-md-start text-xxl-start">
                এলএমএস{" "}
              </p>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-5 col-lg-3 col-xxl-3">
            <div className="">
              <h4 className="text-light mb-5 text-lg-start text-center text-md-start text-xxl-start ">
                ঠিকানা
              </h4>
              <address className="text-light text-lg-start text-center text-md-start text-xxl-start">
                বাড়ি ৩১, লেন ০১, ব্লক বি, সেকশন ০৬, মিরপুর, ঢাকা, বাংলাদেশ।{" "}
                <br />
                (প্রশিকা মোড়ের পাশে)
              </address>
            </div>
          </div>
        </div>
        <div className="border-top border-2 border-success pt-3 pb-1 w-100 text-center m-0">
          <p className="text-light p-0">
            Copyright © 2024 Techparkit. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default footer;

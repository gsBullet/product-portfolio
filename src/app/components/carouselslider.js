"use client";
import "../globals.css";
import Image from "next/image";
import One from "../assects/img/1.jpg";
import Two from "../assects/img/2.jpg";
import Three from "../assects/img/3.jpg";
import Four from "../assects/img/4.jpg";
import Five from "../assects/img/5.jpg";
import "bootstrap/dist/css/bootstrap.css";

const carouselslider = () => {
  return (
    <div className="container">
      <div className="carousel-slider">
        <div className="">
          <div className="mb-5">
            <h1 className=" fs-1 text-center fw-bolder text-capitalize">
              frontend design
            </h1>
          </div>

          <div className="container mb-3 text-center">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              {/* <!-- Carousel Indicators --> */}
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="4"
                  aria-label="Slide 5"
                ></button>
              </div>

              {/* <!-- Carousel Inner (Slides) --> */}
              <div className="carousel-inner">
                {/* <!-- Slide 1 --> */}
                <div className="carousel-item active" data-slide-number="1">
                  <div>
                    <Image
                      src={One}
                      alt="First slide"
                      className="img-thumbnail max-vh-70 "
                    />
                  </div>
                </div>
                {/* <!-- Slide 2 --> */}
                <div className="carousel-item" data-slide-number="2">
                  <div>
                    <Image
                      src={Two}
                      alt="Second slide"
                      className="img-thumbnail max-vh-70 "
                    />
                  </div>
                </div>
                {/* <!-- Slide 3 --> */}
                <div className="carousel-item" data-slide-number="3">
                  <div>
                    <Image
                      src={Three}
                      alt="Third slide"
                      className="img-thumbnail max-vh-70 "
                    />
                  </div>
                </div>
                {/* <!-- Slide 4 --> */}
                <div className="carousel-item" data-slide-number="4">
                  <div>
                    <Image
                      src={Four}
                      alt="Fourth slide"
                      className="img-thumbnail max-vh-70 "
                    />
                  </div>
                </div>
                {/* <!-- Slide 5 --> */}
                <div className="carousel-item" data-slide-number="5">
                  <div>
                    <Image
                      src={Five}
                      alt="Fifth slide"
                      className="img-thumbnail max-vh-70 "
                    />
                  </div>
                </div>
              </div>

              {/* <!-- Carousel Controls --> */}
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default carouselslider;

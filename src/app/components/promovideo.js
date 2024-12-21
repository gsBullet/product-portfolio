"use client";
import "bootstrap/dist/css/bootstrap.css";
import "../globals.css";
const promovideo = () => {
  return (
    <div className="container">
      {/* <div className="promo-container-img"> */}
      <div id="promo-container-img" className="promo-video ">
        <div className="promo-video-header">
          <h1 className="fw-bolder text-dark text-center fs-1 text-capitalize">
            watch promo
          </h1>
          <p className="text-center text-muted">
            Complete system for your eCommerce business
          </p>
        </div>
        <div className="promo-thumbnail mb-3">
          <div className="promo-container-video ">
            <div className="promo-container ">
              <dotlottie-player
                src="https://lottie.host/eaf8ef83-9c33-4235-9025-e767a97ff3eb/fIVzyJFWs0.lottie"
                background="transparent"
                speed="1"
                className="promo-btn"
                loop
                autoplay
              ></dotlottie-player>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default promovideo;

<script
  src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs"
  type="module"
  async
></script>;

"use client";

import Nav from "./components/nav";
import OrderPricingBtn from "./components/orderpricingbtn";
import Banner from "./components/banner";
import PromoVideo from "./components/promovideo";
import AccordianObject from "./components/accordianobjects";
import CarouselSlider from "./components/carouselslider";
import ProductFeatures from "./components/productfeatures";
import ClientSatisfaction from "./components/clientsatisfaction";
import ChooseProduct from "./components/chooseproduct";
import PaymentGateway from "./components/paymentgetway";
import FrameWorkSupport from "./components/frameworksupport";
import SocialMediaSeo from "./components/socialmediaseo";
import SmartPricingOptions from "./components/smartpricingoptions";
import ProductFooter from "./components/footer";

import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

const Page = () => {
  return (
    <main>
      <section className="header-section   bg-0">
        <Nav />
      </section>
      <section className="ordernow-pricing-section-btn ">
        <OrderPricingBtn />
      </section>
      <section className="banner-section  bg-1">
        <Banner />
      </section>
      <section className="watch-promo-video  bg-0">
        <PromoVideo />
      </section>

      <section className="product-accordian  bg-1">
        <AccordianObject />
      </section>
      <section className="product-slider-section bg-0">
        <CarouselSlider />
      </section>
      <section className="productFeature-section  bg-1">
        <ProductFeatures />
      </section>
      <section className="why-choose-our-product  bg-0">
        <ChooseProduct />
      </section>
      <section className="payment-gateway-section  bg-1">
        <PaymentGateway />
      </section>
      <section className="framework-support-section  bg-0">
        <FrameWorkSupport />
      </section>
      <section className="sms-section  bg-1">
        <SocialMediaSeo />
      </section>
      <section className="client-satisfaction  bg-0">
        <ClientSatisfaction />
      </section>
      <section id="buy-product-section" className="buy-product-section   bg-1">
        <SmartPricingOptions />
      </section>
      <section className="footer-section">
        <ProductFooter />
      </section>
    </main>
  );
};

export default Page;

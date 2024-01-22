import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./Testomonial.css";

const Testomonial = () => {
  return (
    <>
      <div className="TestomonialPart">
        <div className="container">
          <div className="TestomoniaWrapper__titel">
            <h1 className="TestomoniaWrapper__titelText">Our Testimonials</h1>
          </div>
          <div className="TestomoniaWrapper">
            <div className="TestomoniaWrapper__left">
              <div className="Wrapper__box"></div>
            </div>
            <div className="TestomoniaWrapper__right">
              <p className="TestomoniaWrapper__ditels">
                Lunar Strategy helped us with our digital marketing for 4 months
                now and still helps us. Great service and highly recommended.
              </p>
              <a href="#" className="TestomoniaWrapper__link">
                — Kimmo Hakonen - Skrum Master at DaGear AB
              </a>
              <RiArrowLeftSLine className="TestomoniaWrapper__icon" />
              <MdOutlineKeyboardArrowRight className="TestomoniaWrapper__icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testomonial;

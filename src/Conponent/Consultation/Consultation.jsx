import React from "react";
import "./Consultation.css";
import Button from "../CommonComponent/button";

const Consultation = () => {
  return (
    <div className="ConsultationPart">
      <div className="container">
        <div className="ConsultationWrapper">
          <div className="ConsultationWrapper__left">
            <h1 className="WrapperLeft__titel">
              Book A Free Digital Marketing Consultation
            </h1>
          </div>
          <div className="ConsultationWrapper__right">
            <input
              type="text"
              placeholder="Your Email"
              className="WrapperRight__Email"
            />
            <Button btnstyle="meetingWrapper__btn">Book my free meeting</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;

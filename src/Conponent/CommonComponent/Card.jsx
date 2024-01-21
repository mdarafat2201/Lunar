import React from "react";
import "../BusinessCard/BusinessCart.css";

const Card = ({ className, children, CardTilte, CartDetails }) => {
  return (
    <div className={className}>
      <h1 className="Card__tilte">
        {CardTilte ? CardTilte : `Top 5 SaaS Businesses – August 2021`}
      </h1>
      <p className="Cart__details">
        {CartDetails
          ? CartDetails
          : ` Are you currently using one of the top SaaS businesses, according to the
        team at Lunar Strategy? Check out this list of our top SaaS`}
      </p>
      {children}
    </div>
  );
};

export default Card;

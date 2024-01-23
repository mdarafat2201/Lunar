import React from "react";
import "./Articles.css";
import Card from "../CommonComponent/Card";
const Articles = () => {
  return (
    <div className="ArticlesPart">
      <div className="container">
        <div className="ArticlesWrpper">
          <div className="ArticlesWrpper__left">
            <h1 className="ArticlesWrpperLeft__titel">
              Digital Marketing Articles
            </h1>
          </div>
          <div className="ArticlesWrpper__center">
            <Card />
          </div>
          <div className="ArticlesWrpper__right"></div>
        </div>
      </div>
    </div>
  );
};

export default Articles;

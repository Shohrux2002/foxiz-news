import React from "react";
import "./sponsored.scss";
import "../basicnews/basicnews.scss";
import avatar from "../../images/emm.jpg";
import buy from "../../images/728ad-dark.jpg";
import man from "../../images/t12-330x220.jpg";
import woman from "../../images/v4-330x220.jpg";

const Sponsored = () => {
  return (
    <div className="sponsored">
      <div className="flex  sponsored--top ">
        <div className="sponsored--technology flex">
          <button className="btn btn-technology">technology</button>
          <h2 className="theme">
            How My Phone’s Most rgba(66, 68, 77, 0.212)My Life
          </h2>

          <div className="basic--author flex">
            <div className="avatar flex">
              <img src={avatar} alt="avatar" className="avatar--img" />
              <h3 className="avatar--name">Taylor Emma</h3>
              <p className="avatar--date">Aug 8, 2021</p>
            </div>
            <i class="fi fi-bookmark"></i>
          </div>
        </div>
        <img className="sponsored--man" src={man} alt="man" />

        <div className="sponsored--technology flex">
          <button className="btn btn-travel">travel</button>
          <h2 className="theme">
            How My Phone’s Most Annoying Feature Saved My Life
          </h2>

          <div className="basic--author flex">
            <div className="avatar flex">
              <div className="rainbow">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="avatar--name">9,6</h3>
              <p className="avatar--date">out of 10</p>
              <h3 className="avatar--name">Good Place</h3>
            </div>
            <i class="fi fi-bookmark"></i>
          </div>
        </div>
        <img className="sponsored--man" src={woman} alt="man" />
      </div>
      <div className="sponsored--last">
        <h3>- Sponsored -</h3>
        <img src={buy} alt="buy" className="sponsored--img" />
      </div>
    </div>
  );
};

export default Sponsored;

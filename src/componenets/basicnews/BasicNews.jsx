import React from "react";
import "./basicnews.scss";
import avatar from "../../images/emm.jpg";
const BasicNews = () => {
  return (
    <div className="grid basic">
      <div className="basic--technology flex">
        <button className="btn btn-technology">technology</button>
        <h1 className="theme">
          How My Phone’s Most Annoying Feature Saved My Life
        </h1>
        <p>
          Modern technology has become a total phenomenon for civilization, the
          defining force of a new social order in which efficiency is no longer
          an option but a necessity imposed on all human activity.
        </p>
        <div className="basic--author flex">
          <div className="avatar flex">
            <img src={avatar} alt="avatar" className="avatar--img" />
            <h3 className="avatar--name">Taylor Emma</h3>
            <p className="avatar--date">Aug 8, 2021</p>
          </div>
          <i class="fi fi-bookmark"></i>
        </div>
      </div>
      <div className="basic--business flex">
        <button className="btn btn-business">business</button>
        <h2 className="theme">
          How My Phone’s Most Annoying Feature Saved My Life
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
      <div className="basic--politics flex">
        <button className="btn btn-politics">politics</button>
        <h2 className="theme">
          How My Phone’s Most Annoying Feature Saved My Life
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
    </div>
  );
};

export default BasicNews;

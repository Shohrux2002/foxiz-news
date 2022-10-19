import React from "react";
import top from "../../images/ad-top.jpg";
import "./navbar.scss";
import "../../icons/css/uxwing-iconsfont.min.css";
const Navbar = () => {
  return (
    <div>
      <img className="top-img" src={top} alt="top" />

      <nav className="navbar">
        <div className="navbar--left">
          <img
            className="logo-dark"
            src="https://foxiz.themeruby.com/default/wp-content/uploads/sites/2/2021/12/logo-light.svg"
            alt=""
          />
          <div className="navbar--left__menu">
            <div className="home">
              <a href="#">Home</a>
              <i class="fi fi-angle-bottom"></i>
              <div className="bottom-line"></div>
            </div>
            <div className="home">
              <a href="#">Politics</a>
              <i class="fi fi-angle-bottom"></i>
              <div className="bottom-line-2"></div>
            </div>
            <div className="home">
              <a href="#">Texnology</a>
              <i class="fi fi-angle-bottom"></i>
              <div className="bottom-line-2"></div>
            </div>
            <div className="home">
              <a href="#">Post</a>
              <i class="fi fi-angle-bottom"></i>
              <div className="bottom-line-2"></div>
            </div>
            <div className="home">
              <i class="fi fi-bookmark"></i>
              <a href="#">Bookmarks</a>

              <div className="bottom-line-2"></div>
            </div>
            <div className="home">
              <a href="#">Pages</a>
              <i class="fi fi-angle-bottom"></i>
              <div className="bottom-line-2"></div>
            </div>
            <div className="home more">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="navbar--right">
          <button className="btn-red">Sign in</button>
          <i class="fi fi-bell">
            <div className="noti"></div>
          </i>
          <i class="fi fi-search"></i>
          <div className="day-colors"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

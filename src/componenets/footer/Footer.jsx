import "./footer.scss";
import React from "react";
import logo from "../../images/footer-s-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--about">
        <h1 className="footer-h1">//</h1>

        <h4>
          We influence 20 million users and <br /> is the number one business
          and <br />
          technology news network on the <br /> planet
        </h4>
      </div>
      <div className="footer--quicklink">
        <h3 className="heading-name">Quick Link</h3>
        <h3>
          <a href="#" className="red-leters">
            my bookmark
          </a>
        </h3>
        <h3>
          <a href="#" className="red-leters">
            interests
          </a>
        </h3>
        <h3>
          <a href="#" className="red-leters">
            contact us
          </a>
        </h3>
        <h3>
          <a href="#" className="red-leters">
            blog index
          </a>
        </h3>
      </div>
      <div className="footer--quicklink">
        <h3 className="heading-name">Top Categories</h3>
        <h3>
          <a href="#" className="red-leters">
            business
          </a>
        </h3>
        <h3>
          <a href="#" className="red-leters">
            Politics
          </a>
        </h3>
        <h3>
          <a href="#" className="red-leters">
            tech
          </a>
        </h3>
        <h3>
          <a href="#" className="red-leters">
            health
          </a>
        </h3>
      </div>
      <div className="footer--signup">
        <h3 className="heading-name">Sign Up for Our Newsletter</h3>
        <p className="footer-p">
          Subscribe to our newsletter to get our newest articles <br />{" "}
          instantly!
        </p>
        <form action="" className="footer-form">
          <input
            type="text"
            placeholder="Your email address"
            className="footer--input"
          />
          <button className="btn-red">Sign Up Now</button>
        </form>
        <div className="check">
          <input type="checkbox" name="" id="" />
          <label className="check-box-label" htmlFor="">
            I have read and agree to the terms & conditions
          </label>
        </div>
      </div>
      <div className="footer--bottom">
        <div className="footer--logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="footer--bottom__right">
          <h3>Follow US</h3>
          <i class="fi fi-facebook"></i>
          <i class="fi fi-twitter"></i>
          <i class="fi fi-youtube"></i>
        </div>
      </div>
      <div className="copyright-inner">
        <p>
          © 2022 Foxiz News Network. Ruby Design Company. All Rights Reserved.
        </p>
        <ul>
          <li>
            <a href="#" className="red-leters">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="red-leters">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="red-leters">
              Complaint
            </a>
          </li>
          <li>
            <a href="#" className="red-leters">
              Advertise
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./editor.scss";
import avatar from "../../images/emm.jpg";
import naushnik from "../../images/t102-615x410.jpg";
const Editor = () => {
  return (
    <div className="editor">
      <h3 className="section--name">Editor's Pick</h3>
      <div className="flex editor--consair">
        <div className="flex  editor--left ">
          <div className="flex editor--teme">
            <h2>Corsair HS80 RGB Wireless Gaming Headset Review</h2>
            <div className="flex align-items-center">
              <div className="stars flex">
                <i class="fi fi-star-full"></i>
                <i className="fi fi-star-full"></i>
                <i className="fi fi-star-full"></i>
                <i className="fi fi-star-full"></i>
                <i className="fi fi-star-full"></i>
              </div>
              <h3 className="avatar--name">9,6</h3>
              <p className="avatar--date">out of 10</p>
              <h3 className="avatar--name">Good Place</h3>
            </div>
            <div className="editor--author flex">
              <div className="avatar flex">
                <img src={avatar} alt="avatar" className="avatar--img" />
                <h3 className="avatar--name">Taylor Emma</h3>
                <p className="avatar--date">Aug 8, 2021</p>
              </div>
              <i class="fi fi-bookmark"></i>
            </div>
          </div>
          <button className="btn btn-technology ffff">technology</button>
          <img src={naushnik} className="editor--img" alt="naushnik" />
        </div>
        <div className="editor--weather">
          <div class="rb-weather-wrap flex">
            <div class="rb-w-title h4 btn-red"> Weather</div>
            <div class="rb-w-header flex">
              <div class="col-left">
                <div class="rb-w-big-icon ">
                  {" "}
                  <svg
                    class="svg-icon svg-moon-full"
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    width={"150px"}
                  >
                    <g>
                      <path
                        fill="none"
                        stroke="#72b9d5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"
                      ></path>
                      <animateTransform
                        attributeName="transform"
                        dur="10s"
                        repeatCount="indefinite"
                        type="rotate"
                        values="-5 32 32;15 32 32;-5 32 32"
                      ></animateTransform>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="col-right flex flex-colum">
                <div class="rb-w-units h6 gradus flex ">
                  {" "}
                  <span>9</span>{" "}
                  <span class="ruby-degrees">
                    {" "}
                    <sup>°C</sup>{" "}
                  </span>
                </div>
              </div>
            </div>
            <div class="rb-w-stats flex today" svg>
              <div class="col-left">
                <div class="rb-header-name h6"> New York</div>
                <div class="rb-w-desc"> clear sky</div>
              </div>
              <div class="col-right">
                <div class=" rb-weather-highlow flex ">
                  {" "}
                  <span class="icon-hight">
                    <svg
                      class="svg-icon svg-hight"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      width={"30px"}
                    >
                      <g>
                        <path
                          fill="none"
                          stroke="#ef4444"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          d="M32 44V20l-5.79 6.89L32 20l5.78 6.89"
                        ></path>
                        <animateTransform
                          attributeName="transform"
                          begin="0s"
                          dur="1.5s"
                          keyTimes="0.0; 0.5; 0.9; 1.0"
                          repeatCount="indefinite"
                          type="translate"
                          values="0 0; 0 0; 0 -9; 0 -9"
                        ></animateTransform>
                        <animate
                          attributeName="opacity"
                          dur="1.5s"
                          keyTimes="0.0; 0.3; 0.8; 0.9; 1.0"
                          repeatCount="indefinite"
                          values="0; 1; 1; 0; 0"
                        ></animate>
                      </g>
                    </svg>
                  </span>{" "}
                  <span class="text-hight">
                    11<sup>°</sup>
                  </span>{" "}
                  <span>_</span>
                  <span class="icon-low">
                    <svg
                      class="svg-icon svg-low"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      width={"30px"}
                    >
                      <g>
                        <path
                          fill="none"
                          stroke="#2885c7"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="3"
                          d="M32 20v24l-5.79-6.89L32 44l5.78-6.89"
                        ></path>
                        <animateTransform
                          attributeName="transform"
                          begin="0s"
                          dur="1.5s"
                          keyTimes="0.0; 0.5; 0.9; 1.0"
                          repeatCount="indefinite"
                          type="translate"
                          values="0 0; 0 0; 0 9; 0 9"
                        ></animateTransform>
                        <animate
                          attributeName="opacity"
                          dur="1.5s"
                          keyTimes="0.0; 0.3; 0.8; 0.9; 1.0"
                          repeatCount="indefinite"
                          values="0; 1; 1; 0; 0"
                        ></animate>
                      </g>
                    </svg>
                  </span>{" "}
                  <span class="text-low">
                    3<sup>°</sup>
                  </span>
                </div>
                <div class="rb-w-humidity flex">
                  {" "}
                  <span class="icon-humidity">
                    <svg
                      class="svg-icon svg-raindrop"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      width={"30px"}
                    >
                      <path
                        fill="none"
                        stroke="#2885c7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M32 17c-6.09 9-10 14.62-10 20.09a10 10 0 0020 0C42 31.62 38.09 26 32 17z"
                      ></path>
                    </svg>
                  </span>{" "}
                  <span>65%</span>
                </div>
                <div class="ruby-weather-wind">
                  {" "}
                  <span class="icon-windy">
                    <svg
                      class="svg-icon svg-windy"
                      aria-hidden="true"
                      role="img"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 64 64"
                      width={"30px"}
                    >
                      <g>
                        <path
                          fill="none"
                          stroke="#dddddd"
                          stroke-linecap="round"
                          stroke-miterlimit="10"
                          stroke-width="3"
                          d="M43.64 20a5 5 0 113.61 8.46h-35.5M29.14 44a5 5 0 103.61-8.46h-21"
                        ></path>
                        <animateTransform
                          attributeName="transform"
                          dur="2s"
                          repeatCount="indefinite"
                          type="translate"
                          values="-8 2; 0 -2; 8 0; 0 1; -8 2"
                        ></animateTransform>
                      </g>
                    </svg>
                  </span>{" "}
                  <span>3 km/h </span>
                </div>
              </div>
            </div>
            <div class="w-forecast-wrap flex week">
              <div class="w-forecast-day forecast-day-5">
                <div class="w-forecast-day h6">Sun</div>
                <div class="w-forecast-icon">
                  <svg
                    class="svg-icon svg-day-sunny"
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                  >
                    <g>
                      <path
                        fill="#f59e0b"
                        d="M32 23.36A8.64 8.64 0 1123.36 32 8.66 8.66 0 0132 23.36m0-3A11.64 11.64 0 1043.64 32 11.64 11.64 0 0032 20.36z"
                      ></path>
                      <path
                        fill="none"
                        stroke="#f59e0b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        d="M32 15.71V9.5"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          calcMode="spline"
                          dur="5s"
                          keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                          keyTimes="0; .5; 1"
                          repeatCount="indefinite"
                          values="3 6; 6 6; 3 6"
                        ></animate>
                      </path>
                      <path
                        fill="none"
                        stroke="#f59e0b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        d="M32 48.29v6.21"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          calcMode="spline"
                          dur="5s"
                          keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                          keyTimes="0; .5; 1"
                          repeatCount="indefinite"
                          values="3 6; 6 6; 3 6"
                        ></animate>
                      </path>
                      <path
                        fill="none"
                        stroke="#f59e0b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        d="M43.52 20.48l4.39-4.39"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          calcMode="spline"
                          dur="5s"
                          keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                          keyTimes="0; .5; 1"
                          repeatCount="indefinite"
                          values="3 6; 6 6; 3 6"
                        ></animate>
                      </path>
                      <path
                        fill="none"
                        stroke="#f59e0b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        d="M20.48 43.52l-4.39 4.39"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          calcMode="spline"
                          dur="5s"
                          keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                          keyTimes="0; .5; 1"
                          repeatCount="indefinite"
                          values="3 6; 6 6; 3 6"
                        ></animate>
                      </path>
                      <path
                        fill="none"
                        stroke="#f59e0b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        d="M20.48 20.48l-4.39-4.39"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          calcMode="spline"
                          dur="5s"
                          keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                          keyTimes="0; .5; 1"
                          repeatCount="indefinite"
                          values="3 6; 6 6; 3 6"
                        ></animate>
                      </path>
                      <path
                        fill="none"
                        stroke="#f59e0b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        d="M43.52 43.52l4.39 4.39"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          calcMode="spline"
                          dur="5s"
                          keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                          keyTimes="0; .5; 1"
                          repeatCount="indefinite"
                          values="3 6; 6 6; 3 6"
                        ></animate>
                      </path>
                      <path
                        fill="none"
                        stroke="#f59e0b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        d="M15.71 32H9.5"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          calcMode="spline"
                          dur="5s"
                          keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                          keyTimes="0; .5; 1"
                          repeatCount="indefinite"
                          values="3 6; 6 6; 3 6"
                        ></animate>
                      </path>
                      <path
                        fill="none"
                        stroke="#f59e0b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        d="M48.29 32h6.21"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          calcMode="spline"
                          dur="5s"
                          keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                          keyTimes="0; .5; 1"
                          repeatCount="indefinite"
                          values="3 6; 6 6; 3 6"
                        ></animate>
                      </path>
                      <animateTransform
                        attributeName="transform"
                        dur="45s"
                        from="0 32 32"
                        repeatCount="indefinite"
                        to="360 32 32"
                        type="rotate"
                      ></animateTransform>
                    </g>
                  </svg>
                </div>
                <div class="w-forecast-temp">
                  17 <sup>°C</sup>
                </div>
              </div>
              <div class="w-forecast-day forecast-day-5">
                <div class="w-forecast-day h6">Mon</div>
                <div class="w-forecast-icon">
                  <svg
                    class="svg-icon svg-cloudy"
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                  >
                    <defs>
                      <clipPath id="forecast_cloudy_2">
                        <path
                          fill="none"
                          d="M41.8 20.25l4.48 6.61.22 4.64 5.31 2.45 1.69 5.97h8.08L61 27l-9.31-8.5-9.89 1.75z"
                        ></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#forecast_cloudy_2)">
                      <path
                        fill="none"
                        stroke="#9ca3af"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z"
                      ></path>
                      <animateTransform
                        attributeName="transform"
                        dur="7s"
                        repeatCount="indefinite"
                        type="translate"
                        values="-2.1 0; 2.1 0; -2.1 0"
                      ></animateTransform>
                    </g>
                    <g>
                      <path
                        fill="none"
                        stroke="#dddddd"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
                      ></path>
                      <animateTransform
                        attributeName="transform"
                        dur="7s"
                        repeatCount="indefinite"
                        type="translate"
                        values="-3 0; 3 0; -3 0"
                      ></animateTransform>
                    </g>
                  </svg>
                </div>
                <div class="w-forecast-temp">
                  19 <sup>°C</sup>
                </div>
              </div>
              <div class="w-forecast-day forecast-day-5">
                <div class="w-forecast-day h6">Tue</div>
                <div class="w-forecast-icon">
                  <svg
                    class="svg-icon svg-day-sunny"
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                  >
                    <g>
                      <path
                        fill="#f59e0b"
                        d="M32 23.36A8.64 8.64 0 1123.36 32 8.66 8.66 0 0132 23.36m0-3A11.64 11.64 0 1043.64 32 11.64 11.64 0 0032 20.36z"
                      ></path>
                      <path
                        fill="none"
                        stroke="#f59e0b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        d="M32 15.71V9.5"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          calcMode="spline"
                          dur="5s"
                          keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                          keyTimes="0; .5; 1"
                          repeatCount="indefinite"
                          values="3 6; 6 6; 3 6"
                        ></animate>
                      </path>
                      <path
                        fill="none"
                        stroke="#f59e0b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        d="M32 48.29v6.21"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          calcMode="spline"
                          dur="5s"
                          keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                          keyTimes="0; .5; 1"
                          repeatCount="indefinite"
                          values="3 6; 6 6; 3 6"
                        ></animate>
                      </path>
                      <path
                        fill="none"
                        stroke="#f59e0b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        d="M43.52 20.48l4.39-4.39"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          calcMode="spline"
                          dur="5s"
                          keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                          keyTimes="0; .5; 1"
                          repeatCount="indefinite"
                          values="3 6; 6 6; 3 6"
                        ></animate>
                      </path>
                      <path
                        fill="none"
                        stroke="#f59e0b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        d="M20.48 43.52l-4.39 4.39"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          calcMode="spline"
                          dur="5s"
                          keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                          keyTimes="0; .5; 1"
                          repeatCount="indefinite"
                          values="3 6; 6 6; 3 6"
                        ></animate>
                      </path>
                      <path
                        fill="none"
                        stroke="#f59e0b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        d="M20.48 20.48l-4.39-4.39"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          calcMode="spline"
                          dur="5s"
                          keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                          keyTimes="0; .5; 1"
                          repeatCount="indefinite"
                          values="3 6; 6 6; 3 6"
                        ></animate>
                      </path>
                      <path
                        fill="none"
                        stroke="#f59e0b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        d="M43.52 43.52l4.39 4.39"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          calcMode="spline"
                          dur="5s"
                          keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                          keyTimes="0; .5; 1"
                          repeatCount="indefinite"
                          values="3 6; 6 6; 3 6"
                        ></animate>
                      </path>
                      <path
                        fill="none"
                        stroke="#f59e0b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        d="M15.71 32H9.5"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          calcMode="spline"
                          dur="5s"
                          keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                          keyTimes="0; .5; 1"
                          repeatCount="indefinite"
                          values="3 6; 6 6; 3 6"
                        ></animate>
                      </path>
                      <path
                        fill="none"
                        stroke="#f59e0b"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="3"
                        d="M48.29 32h6.21"
                      >
                        <animate
                          attributeName="stroke-dasharray"
                          calcMode="spline"
                          dur="5s"
                          keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                          keyTimes="0; .5; 1"
                          repeatCount="indefinite"
                          values="3 6; 6 6; 3 6"
                        ></animate>
                      </path>
                      <animateTransform
                        attributeName="transform"
                        dur="45s"
                        from="0 32 32"
                        repeatCount="indefinite"
                        to="360 32 32"
                        type="rotate"
                      ></animateTransform>
                    </g>
                  </svg>
                </div>
                <div class="w-forecast-temp">
                  21 <sup>°C</sup>
                </div>
              </div>
              <div class="w-forecast-day forecast-day-5">
                <div class="w-forecast-day h6">Wed</div>
                <div class="w-forecast-icon">
                  <svg
                    class="svg-icon svg-cloudy"
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                  >
                    <defs>
                      <clipPath id="forecast_cloudy_4">
                        <path
                          fill="none"
                          d="M41.8 20.25l4.48 6.61.22 4.64 5.31 2.45 1.69 5.97h8.08L61 27l-9.31-8.5-9.89 1.75z"
                        ></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#forecast_cloudy_4)">
                      <path
                        fill="none"
                        stroke="#9ca3af"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z"
                      ></path>
                      <animateTransform
                        attributeName="transform"
                        dur="7s"
                        repeatCount="indefinite"
                        type="translate"
                        values="-2.1 0; 2.1 0; -2.1 0"
                      ></animateTransform>
                    </g>
                    <g>
                      <path
                        fill="none"
                        stroke="#dddddd"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
                      ></path>
                      <animateTransform
                        attributeName="transform"
                        dur="7s"
                        repeatCount="indefinite"
                        type="translate"
                        values="-3 0; 3 0; -3 0"
                      ></animateTransform>
                    </g>
                  </svg>
                </div>
                <div class="w-forecast-temp">
                  21 <sup>°C</sup>
                </div>
              </div>
              <div class="w-forecast-day forecast-day-5">
                <div class="w-forecast-day h6">Thu</div>
                <div class="w-forecast-icon">
                  <svg
                    class="svg-icon svg-cloudy"
                    aria-hidden="true"
                    role="img"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                  >
                    <defs>
                      <clipPath id="forecast_cloudy_5">
                        <path
                          fill="none"
                          d="M41.8 20.25l4.48 6.61.22 4.64 5.31 2.45 1.69 5.97h8.08L61 27l-9.31-8.5-9.89 1.75z"
                        ></path>
                      </clipPath>
                    </defs>
                    <g clip-path="url(#forecast_cloudy_5)">
                      <path
                        fill="none"
                        stroke="#9ca3af"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z"
                      ></path>
                      <animateTransform
                        attributeName="transform"
                        dur="7s"
                        repeatCount="indefinite"
                        type="translate"
                        values="-2.1 0; 2.1 0; -2.1 0"
                      ></animateTransform>
                    </g>
                    <g>
                      <path
                        fill="none"
                        stroke="#dddddd"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
                      ></path>
                      <animateTransform
                        attributeName="transform"
                        dur="7s"
                        repeatCount="indefinite"
                        type="translate"
                        values="-3 0; 3 0; -3 0"
                      ></animateTransform>
                    </g>
                  </svg>
                </div>
                <div class="w-forecast-temp">
                  18 <sup>°C</sup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Editor;

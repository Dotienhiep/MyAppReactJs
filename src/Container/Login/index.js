import React from "react";
import "../Login/login.css";
// import { TweenMax, Power2, Expo } from "gsap";

const Login = () => {
  return (
    <div>
      <form>
        <div className="svgContainer">
          <div>
            {/*  fix */}
            <svg
              className="mySVG"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 200 200"
            >
              <defs>
                <circle id="armMaskPath" cx="100" cy="100" r="100" />
              </defs>
              <clipPath id="armMask">
                <use xlinkHref="#armMaskPath" overflow="visible" />
              </clipPath>
              <circle cx="100" cy="100" r="100" fill="#a9ddf3" />
              <g className="body">
                <path
                  className="bodyBGchanged"
                  style={{ display: "none" }}
                  fill="#FFFFFF"
                  d="M200,122h-35h-14.9V72c0-27.6-22.4-50-50-50s-50,22.4-50,50v50H35.8H0l0,91h200L200,122z"
                />
                <path
                  className="bodyBGnormal"
                  stroke="#3A5E77"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="#FFFFFF"
                  d="M200,158.5c0-20.2-14.8-36.5-35-36.5h-14.9V72.8c0-27.4-21.7-50.4-49.1-50.8c-28-0.5-50.9,22.1-50.9,50v50 H35.8C16,122,0,138,0,157.8L0,213h200L200,158.5z"
                />
                <path
                  fill="#DDF1FA"
                  d="M100,156.4c-22.9,0-43,11.1-54.1,27.7c15.6,10,34.2,15.9,54.1,15.9s38.5-5.8,54.1-15.9 C143,167.5,122.9,156.4,100,156.4z"
                />
              </g>
              <g className="earL">
                <g
                  className="outerEar"
                  fill="#ddf1fa"
                  stroke="#3a5e77"
                  strokeWidth="2.5"
                >
                  <circle cx="47" cy="83" r="11.5" />
                  <path
                    d="M46.3 78.9c-2.3 0-4.1 1.9-4.1 4.1 0 2.3 1.9 4.1 4.1 4.1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <g className="earHair">
                  <rect x="51" y="64" fill="#FFFFFF" width="15" height="35" />
                  <path
                    d="M53.4 62.8C48.5 67.4 45 72.2 42.8 77c3.4-.1 6.8-.1 10.1.1-4 3.7-6.8 7.6-8.2 11.6 2.1 0 4.2 0 6.3.2-2.6 4.1-3.8 8.3-3.7 12.5 1.2-.7 3.4-1.4 5.2-1.9"
                    fill="#fff"
                    stroke="#3a5e77"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
              <g className="earR">
                <g className="outerEar">
                  <circle
                    fill="#DDF1FA"
                    stroke="#3A5E77"
                    strokeWidth="2.5"
                    cx="153"
                    cy="83"
                    r="11.5"
                  />
                  <path
                    fill="#DDF1FA"
                    stroke="#3A5E77"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M153.7,78.9c2.3,0,4.1,1.9,4.1,4.1c0,2.3-1.9,4.1-4.1,4.1"
                  />
                </g>
                <g className="earHair">
                  <rect x="133" y="64" fill="#FFFFFF" width="15" height="35" />
                  <path
                    fill="#FFFFFF"
                    stroke="#3A5E77"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M143.6,62.8c4.9,4.6,8.4,9.4,10.6,14.2c-3.4-.1-6.8-.1-10.1.1c4,3.7,6.8,7.6,8.2,11.6c-2.1,0-4.2,0-6.3,0.2c2.6,4.1,3.8,8.3,3.7,12.5c-1.2-.7-3.4-1.4-5.2-1.9"
                  />
                </g>
              </g>
              <g className="eyeL">
                <circle
                  className="eyeball"
                  cx="60"
                  cy="96"
                  r="3.1"
                  fill="#3a5e77"
                />
                <circle className="iris" cx="60" cy="96" r="1.6" fill="#fff" />
                <circle
                  className="pupil"
                  cx="60"
                  cy="96"
                  r="0.7"
                  fill="#3a5e77"
                />
              </g>
              <g className="eyeR">
                <circle
                  className="eyeball"
                  cx="140"
                  cy="96"
                  r="3.1"
                  fill="#3a5e77"
                />
                <circle className="iris" cx="140" cy="96" r="1.6" fill="#fff" />
                <circle
                  className="pupil"
                  cx="140"
                  cy="96"
                  r="0.7"
                  fill="#3a5e77"
                />
              </g>
              <g className="mouth">
                <path
                  className="tongue"
                  fill="#FF485F"
                  d="M100,140c2-1.5,3.5-4.4,3.5-4.4s1.5,2.9,3.5,4.4c3,2.2,5,4.5,5,7c0,5.5-6,10-13.5,10S86,152.5,86,147 C86,144.5,97,142.2,100,140z"
                />
                <path
                  className="mouthBG"
                  fill="#FFFFFF"
                  d="M108,149.9c0,0-0.8-3.3-3-5.3c-1.3-1.1-3.1-2.1-5.2-2.2c-2.4-0.1-4.4,1.1-5.7,2.3 c-2.1,2.1-3.3,5.3-3.3,5.3s-5.1-6.9-0.8-9.9c1.8-1.5,4.6-3,9.8-3.2c4.5-0.2,7.5,1.4,9.3,2.8C113.9,142.9,108,149.9,108,149.9z"
                />
                <path
                  style={{ fill: "#3A5E77" }}
                  d="M91,140c0,0,4-2.4,9.5-2.6c5.5-0.2,9.8,2.6,9.8,2.6s1.3-0.3,2.5-0.4c1.8-0.2,4.5,0.1,7.3,1 c-0.2,0.4-0.5,0.8-0.7,1.2c-2.2-1.2-4.8-1.7-7.4-1.6c-1.3,0-2.5,0.2-3.5,0.5c-1.6,0.5-3.2,1.2-4.8,2c-2,1-4,2.2-5.8,3.7 c-2.1,1.8-3.4,4.1-3.8,6.4c-1.5-2.1-2.5-4.8-2.5-7.6C91,141.2,91,140,91,140z"
                />
              </g>
              <g className="face">
                <path
                  className="face"
                  fill="#DDF1FA"
                  stroke="#3A5E77"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M83,115h34c0,0,8.1,12.7,0,20.9c-3,3.2-6.6,5.9-10.8,7.6c-4.1,1.6-8.5,2.5-13.2,2.5c-4.6,0-9-0.9-13.1-2.5 c-4.2-1.7-7.9-4.4-10.8-7.6C74.9,127.7,83,115,83,115z"
                />
                <path
                  className="hair"
                  fill="#FFFFFF"
                  stroke="#3A5E77"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M108.5,99c-0.1,0-2.9-7-8.5-7s-8.5,7-8.5,7"
                />
              </g>
              <g className="feet">
                <g className="footL">
                  <path
                    fill="#FFFFFF"
                    stroke="#3A5E77"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M65,193c0,0,7.2,5,14.2,0"
                  />
                  <path
                    fill="#FFFFFF"
                    stroke="#3A5E77"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M65,193c0,0,0.4,4.5,3.5,4.5s6.9,0,6.9,0"
                  />
                </g>
                <g className="footR">
                  <path
                    fill="#FFFFFF"
                    stroke="#3A5E77"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M135,193c0,0-7.2,5-14.2,0"
                  />
                  <path
                    fill="#FFFFFF"
                    stroke="#3A5E77"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M135,193c0,0-0.4,4.5-3.5,4.5s-6.9,0-6.9,0"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <div class="inputGroup inputGroup1">
          <label for="loginEmail" id="loginEmailLabel">
            Email
          </label>
          <input type="email" id="loginEmail" maxlength="254" />
        </div>
        <div class="inputGroup inputGroup2">
          <label for="loginPassword" id="loginPasswordLabel">
            Password
          </label>
          <input type="password" id="loginPassword" />
          <label id="showPasswordToggle" for="showPasswordCheck">
            Show
            <input id="showPasswordCheck" type="checkbox" />
            <div class="indicator"></div>
          </label>
        </div>
        <div class="inputGroup inputGroup3">
          <button id="login">Log in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

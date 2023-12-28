import styled from "styled-components";

export const BannerWrapper = styled.div`
  font-family: "Roboto", sans-serif;
  overflow: hidden;
  text-align: center;
  line-height: 1.4;
  width: 100%;
  z-index: 100;
  margin-top: 90px;
  #canvas {
    z-index: 10000000000;
  }
  .container {
    height: 60vh;
    background-color: transparent;
  }
  .content {
    color: #000;
    padding: 0 2rem;
  }
  .content {
    color: #000;
    padding: 0 2rem;
  }
  .container,
  .content,
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content,
  .footer {
    width: 100%;
    position: relative;
    z-index: 10;
  }
  .container,
  .content {
    flex-direction: column;
  }
  .footer {
    flex-wrap: wrap;
    max-width: 600px;
    animation: hieu_ung_wave 0.5s 0.5s forwards;
  }
  .footer a {
    text-decoration: none;
    max-width: 40%;
    padding: 12px 18px;
    margin: 20px auto 0 auto;
    cursor: pointer;
    color: #000;
    border: 2px solid;
    outline: none;
    transition: all 0.3s;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
      0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12);
  }
  .footer a:hover {
    background-color: #fff;
    color: #222;
    background-color: #fff;
  }
  .text,
  .title {
    backface-visibility: hidden;
  }
  .title {
    font-size: 6rem;
    font-weight: 500;
    animation: hieu_ung_wave 0.5s fowards;
    color: #000;
  }
  .text {
    max-width: 50rem;
    font-weight: 500;
    font-size: 1.4rem;
    padding: 2rem 0;
    color: #000;
    animation: hieu_ung_wave 0.5s 0.3s fowards;
  }
  .wave {
    opacity: 0.6;
    position: absolute;
    top: 250px;
    left: 50%;
    width: 6000px;
    height: 6000px;
    background: #cd1917;
    margin-left: -3000px;
    transform-origin: 50% 50%;
    border-radius: 46%;
    animation: wave 12s infinite linear;
    pointer-events: none;
  }
  .wave2 {
    animation: wave 28s infinite linear;
    opacity: 0.3;
  }
  .wave3 {
    animation: wave 20s infinite linear;
    opacity: 0.8;
  }
  .wave {
  }
  .container {
    position: relative;
    background-image: url(/assets/images/bg-banner-top.png);
    background-repeat: no-repeat;
    background-position: center top;
    background-size: cover;
    z-index: 9;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .container .banner {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  @keyframes hieu_ung_wave {
    from {
      transform: translateY(2rem);
      opacity: 0.6;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes wave {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .text {
    color: #cd1917;
  }
  .footer a {
    color: #cd1917;
  }
  .title {
    color: #cd1917;
  }
`;

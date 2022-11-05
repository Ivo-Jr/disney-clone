import styled, { keyframes } from 'styled-components';

import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const animate = keyframes`
  0%{
    transform: translateX(100px);
    opacity: 0;
  }
  50%{
    opacity: .3;
  }
  100%{
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    display: flex !important;  
    align-items: center !important;

    height: 100%;
    opacity: 0;
    /* width: 5vw; */
    z-index: 1;

    &:hover { 
      opacity: 1;
      transition: opacity .3s ease 0s;  
    }
  }
  
  .slick-prev {
    justify-content: flex-end !important;
    left: -28px;

    &:before {
      content: url('/svg/arrow-left.svg');
      width: 40px !important;
      transform: translate(30%, 0%);
    }

    //lg
    @media only screen and (min-width: 1025px){
      width: 50px;
      transform: translate(-50%, -50%);

      &:before {
        transform: translate(0%, 0%);
      }
    }
  }

  .slick-next {
    justify-content: center !important;
    right: -28px;

    &:before {
      content: url('/svg/arrow-rigth.svg');
      width: 40px !important;
      transform: translate(-30%, 0%);
    }

    //lg
    @media only screen and (min-width: 1025px){
      width: 50px;
      transform: translate(50%, -50%);

      &:before{
        transform: translate(0%, 0%);
      }
    }
  }

  ul {
    position: absolute;
    bottom: 8px;
    text-align: right;
    margin: 0px;
    padding: 0px;
    right: 30px;
    width: 100%;
  }

  .slick-dots li{
    margin: .5px;
  }

  ul li button {
    &:before {
      font-size: 8px;  
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: rgb(249, 249, 249);
  }

  .slick-list {
    overflow: initial;
  }
  
  .slick-active div div a div img{
    animation: ${animate} 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 150ms;
  }
`;

export const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    margin: 0px 10px;
    
    img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
    }

    &:hover {
      padding: 0;
      transition-duration: .2s;
      -webkit-user-drag: none;
      
      &:after {
        content: '';
        border: 3px solid rgba(249, 249, 249, .8);
        border-radius: 4px;
        position: absolute;
        inset: 0px;
      }
    }
  }

  div {
    position: absolute;
    top: 0px;
  }
`;

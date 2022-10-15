import styled from 'styled-components';

import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const Container = styled.div``;

export const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index:1;


    &:hover {
      opacity: 1;
      transition: opacity .3s ease 0s;  
    }
  }

  ul li button {
    &:before {
      font-size: 10px;  
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: rgb(249, 249, 249);
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

export const Wrap = styled.div``;

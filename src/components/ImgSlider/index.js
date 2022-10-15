import React from 'react';

import { 
  Container,
  Carousel,
  Wrap
} from './styles';

export const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="/">
          <img src="/images/slider-deadpool.jfif" alt="deadpool"/>
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="/images/slider-logan.jfif" alt="logan"/>
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="/images/slider-hulk.jfif" alt="hulk"/>
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="/images/slider-hocus.jfif" alt="hocus" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="/images/slider-pinocchio.jfif" alt="pinocchio" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="/images/slider-tierra.jfif" alt="tierra" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="/images/slider-los.jfif" alt="los" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="/images/slider-werewolf.jfif" alt="werewolf" />
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="/images/slider-thor.jfif" alt="thor" />
        </a>
      </Wrap>
    </Carousel>
  )
} 
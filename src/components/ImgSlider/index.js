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
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a href="/home">
          <img src="/images/slider-deadpool.jfif" alt="deadpool"/>
          <div>
            <img src="/images/description-deadpool.png" alt="deadpool" />
          </div>  
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="/images/slider-logan.jfif" alt="logan"/>
          <div>
            <img src="/images/description-logan.png" alt="logan" />
          </div>  
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="/images/slider-assembled.jfif" alt="hulk"/>
          <div>
            <img src="/images/description-assembled.png" alt="hulk" />
          </div>  
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="/images/slider-wakanda.jfif" alt="hulk"/>
          <div>
            <img src="/images/description-wakanda.png" alt="hulk" />
          </div>  
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="/images/slider-hocus.jfif" alt="hocus" />
          <div>
            <img src="/images/description-hocus.png" alt="hocus" />
          </div>  
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="/images/slider-pinocchio.jfif" alt="pinocchio" />
          <div>
            <img src="/images/description-pinocchio.png" alt="deadpool" />
          </div>  
        </a>
      </Wrap>
      {/* <Wrap>
        <a href="/">
          <img src="/images/slider-tierra.jfif" alt="tierra" />
          <div>
            <img src="/images/description-tierra.png" alt="deadpool" />
          </div>  
        </a>
      </Wrap> */}
      <Wrap>
        <a href="/">
          <img src="/images/slider-los.jfif" alt="los" />
          <div>
            <img src="/images/description-los.png" alt="deadpool" />
          </div>  
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="/images/slider-werewolf.jfif" alt="werewolf" />
          <div>
            <img src="/images/description-werewolf.png" alt="deadpool" />
          </div>  
        </a>
      </Wrap>
      <Wrap>
        <a href="/">
          <img src="/images/slider-thor.jfif" alt="thor" />
          <div>
            <img src="/images/description-thor.png" alt="deadpool" />
          </div>  
        </a>
      </Wrap>
    </Carousel>
  )
} 
import React from 'react';
import { useMovie } from '../../hooks/movies';
import { SkeletonLoad } from '../Skeleton';

import { 
  Carousel,
  Wrap
} from './styles';

export const ImgSlider = () => {
  const { carousel } = useMovie();

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
      {carousel 
        ? carousel.map((carousel, idx) => (
            <Wrap key={idx}>
              <a href={`/detail/${carousel.id}`}>
                <img src={carousel.cardImg} alt={carousel.title}/>
                <div>
                  <img src={carousel.cardImgTitle} alt={carousel.title} />
                </div>  
              </a>
            </Wrap>
          )) 
        : <SkeletonLoad cards={1}/>
      } 
    </Carousel>
  )
} 
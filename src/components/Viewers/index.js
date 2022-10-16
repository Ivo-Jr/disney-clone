import React from 'react';

import { 
  Container, 
  Wrap
} from './styles';

export const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewer-disney.png" alt="disney"/>
        <video 
          autoPlay={true} 
          loop={true} 
          playsInline={true} 
          src="/videos/disney-video.mp4" 
          type="video/mp4"
        />
      </Wrap>
      <Wrap>
        <img src="/images/viewer-pixar.png" alt="pixar" />
        <video 
          autoPlay={true} 
          loop={true} 
          playsInline={true} 
          src="/videos/pixar-video.mp4" 
          type="video/mp4"
        />
      </Wrap>
      <Wrap>
        <img src="/images/viewer-marvel.png" alt="marvel" />
        <video 
          autoPlay={true} 
          loop={true} 
          playsInline={true} 
          src="/videos/marvel-video.mp4" 
          type="video/mp4"
        />
      </Wrap>
      <Wrap>
        <img src="/images/viewer-star.png" alt="star" />
        <video 
          autoPlay={true} 
          loop={true} 
          playsInline={true} 
          src="/videos/star-video.mp4" 
          type="video/mp4"
        />
      </Wrap>
      <Wrap>
        <img src="/images/viewer-national.png" alt="national" />
        <video 
          autoPlay={true} 
          loop={true} 
          playsInline={true} 
          src="/videos/national-video.mp4" 
          type="video/mp4"
        />
      </Wrap>
    </Container>
  )
}
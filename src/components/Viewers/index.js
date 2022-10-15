import React from 'react';

import { 
  Container, 
  Wrap
} from './styles';

export const Viewers = () => {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewer-disney.png" alt="disney" />
      </Wrap>
      <Wrap>
        <img src="/images/viewer-pixar.png" alt="pixar" />
      </Wrap>
      <Wrap>
        <img src="/images/viewer-marvel.png" alt="marvel" />
      </Wrap>
      <Wrap>
        <img src="/images/viewer-star.png" alt="star" />
      </Wrap>
      <Wrap>
        <img src="/images/viewer-national.png" alt="national" />
      </Wrap>
    </Container>
  )
}
import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Container,
  Content,
  Wrap
} from './styles';

export const Featured = () => {
  return(
    <Container>
      <h4>Featured Marvel</h4>
      <Content>
        <Wrap>
          <Link to="">
            <img 
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F55A42F25F3F398E7CA6A89D4ECDFBDA804D283B7EABC31C156085824292E212/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal" 
              alt="" 
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="">
            <img 
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F55A42F25F3F398E7CA6A89D4ECDFBDA804D283B7EABC31C156085824292E212/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal" 
              alt="" 
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="">
            <img 
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F55A42F25F3F398E7CA6A89D4ECDFBDA804D283B7EABC31C156085824292E212/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal" 
              alt="" 
            />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="">
            <img 
              src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F55A42F25F3F398E7CA6A89D4ECDFBDA804D283B7EABC31C156085824292E212/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal" 
              alt="" 
            />
          </Link>
        </Wrap>
      </Content>
    </Container>
  )
}
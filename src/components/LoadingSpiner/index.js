import React from 'react';

import { Container } from './styles';

export const LoadingSpiner = () => {
  return(
    <Container>
      <img 
        src="https://static-assets.bamgrid.com/product/disneyplus/images/disney-circular-loader.665d0aa1d24f682fed030803f4e96e2f.png" 
        alt="loading" 
      />
    </Container>
  )
}
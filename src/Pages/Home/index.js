import React from 'react';
import { ImgSlider } from '../../components/ImgSlider';
import { Viewers } from '../../components/Viewers';

import { 
  Container,
} from './styles';

export const Home = () => {
  return(
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  );
}

import React from 'react';

import { MovieProvider } from '../../hooks/movies';
import { Featured } from '../../components/Featured';
import { ImgSlider } from '../../components/ImgSlider';
import { NewDisney } from '../../components/NewDisney';
import { Recommends } from '../../components/Recommends';
import { Trending } from '../../components/Trending/inedx';
import { Viewers } from '../../components/Viewers';

import { Container } from './styles';

export const Home = () => {
  return(
    <MovieProvider>
      <Container>
        <ImgSlider />
        <Viewers />
        <Recommends />
        <NewDisney />
        <Featured />
        <Trending />
      </Container>
    </MovieProvider>
  );
}

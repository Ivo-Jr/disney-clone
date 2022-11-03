import React from 'react';
import { SkeletonTheme } from 'react-loading-skeleton';

import { MovieProvider } from '../../hooks/movies';
import { Featured } from '../../components/Featured';
import { ImgSlider } from '../../components/ImgSlider';
import { NewDisney } from '../../components/NewDisney';
import { Recommends } from '../../components/Recommends';
import { Trending } from '../../components/Trending/inedx';
import { Viewers } from '../../components/Viewers';

import { Container } from './styles';
import { Footer } from '../../components/Footer';

export default function Home() {
  return(
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <MovieProvider>
        <>
          <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Featured />
            <Trending />
          </Container>
          <Footer />
        </>
      </MovieProvider>
    </SkeletonTheme>
  );
}

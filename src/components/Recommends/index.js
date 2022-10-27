import React from 'react';
import { Link } from 'react-router-dom';
// import Skeleton  from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css'

import { useMovie } from '../../hooks/movies';

import { 
  Container,
  Content,
  Wrap
} from './styles';
import { SkeletonCard } from '../SkeletonCard';

export const Recommends = () => {
  const { recommends } = useMovie();

  return(
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        { recommends && 
            recommends.map((recommend, key) => (
              <Wrap key={key}>
                <Link to="">
                  <img 
                    src={recommend.cardImg} 
                    alt={recommend.title} 
                    />
                </Link>
              </Wrap>
            ))
          || 
          <SkeletonCard cards={4}/> }
      </Content>
    </Container>
  )
}
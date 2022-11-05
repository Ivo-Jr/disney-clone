import React from 'react';
import { Link } from 'react-router-dom';

import { useMovie } from '../../hooks/movies';
import { SkeletonCard } from '../SkeletonCard';

import { 
  Container,
  Content,
  Wrap
} from './styles';

export const Recommends = () => {
  const { recommends } = useMovie();

  return(
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        { recommends 
          ? recommends.map((recommend, idx) => (
              <Wrap key={idx}>
                <Link to={`/detail/${recommend.id}`}>
                  <img 
                    src={recommend.cardImg} 
                    alt={recommend.title} 
                    />
                </Link>
              </Wrap>
            ))
          : <SkeletonCard cards={4}/> }
      </Content>
    </Container>
  )
}
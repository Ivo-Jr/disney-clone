import React from 'react';
import { Link } from 'react-router-dom';

import { useMovie } from '../../hooks/movies';
import { SkeletonCard } from '../SkeletonCard';

import { 
  Container,
  Content,
  Wrap
} from './styles';

export const NewDisney = () => {
  const { newsDisney } = useMovie();

  return(
    <Container>
      <h4>New to Disney+</h4>
      <Content>
        { newsDisney 
          ? newsDisney.map((disney, idx) => (
              <Wrap key ={idx}>
                <Link to={`/detail/${disney.id}`}>
                  <img 
                    src={disney.cardImg} 
                    alt={disney.title}
                  />
                </Link>
              </Wrap>
            ))
          : <SkeletonCard cards={4} />
        }
      </Content>
    </Container>
  )
}
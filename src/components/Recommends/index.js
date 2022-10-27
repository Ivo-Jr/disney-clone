import React from 'react';
import { Link } from 'react-router-dom';

import { useMovie } from '../../hooks/movies';

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
        }
      </Content>
    </Container>
  )
}
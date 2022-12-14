import React from 'react';
import { Link } from 'react-router-dom';

import { useMovie } from '../../hooks/movies';
import { SkeletonLoad } from '../Skeleton';

import { 
  Container,
  Content,
  Wrap
} from './styles';

export const Trending = () => {
  const { trending } = useMovie();

  return(
    <Container>
      <h4>Trending</h4>
      <Content>
        { trending 
          ? trending.map((trend, idx) => (
              <Wrap key={idx}>
                <Link to={`/detail/${trend.id}`}>
                  <img 
                    src={trend.cardImg}
                    alt={trend.title}
                  />
                </Link>
              </Wrap>
            ))
          : <SkeletonLoad cards={4} />
        }
      </Content>
    </Container>
  )
}
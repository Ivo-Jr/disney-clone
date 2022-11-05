import React from 'react';
import { Link } from 'react-router-dom';

import { useMovie } from '../../hooks/movies';
import { SkeletonLoad } from '../Skeleton';

import { 
  Container,
  Content,
  Wrap
} from './styles';

export const Featured = () => {
  const { featured } = useMovie();

  return(
    <Container>
      <h4>Featured Marvel</h4>
      <Content>
        { featured 
          ? featured.map((feature, idx) => (
              <Wrap key={idx}>
                <Link to={`/detail/${feature.id}`}>
                  <img 
                    src={feature.cardImg} 
                    alt={feature.title}
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
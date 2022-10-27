import React from 'react';
import Skeleton  from 'react-loading-skeleton';

import 'react-loading-skeleton/dist/skeleton.css';

import { Wrap } from './styles';

export const SkeletonCard = ({ cards }) => {
  return(
    Array(cards)
      .fill(0)
      .map((_, idx) => (
        <Wrap key={idx}>
          <Skeleton className= "skeleton" />
        </Wrap>
      ))
  )
}
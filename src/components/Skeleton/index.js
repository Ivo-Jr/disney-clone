import React from 'react';

import Skeleton  from 'react-loading-skeleton';
import { Wrap } from './styles';
import 'react-loading-skeleton/dist/skeleton.css';

export const SkeletonSlide = () => {
  return(
    <Wrap>
      <Skeleton className= "skeleton" />
    </Wrap>
  )
}
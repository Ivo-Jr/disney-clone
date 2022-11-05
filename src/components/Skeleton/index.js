import React from 'react';

import Skeleton  from 'react-loading-skeleton';
import { SliderWrap, ThumbnailWrap } from './styles';
import 'react-loading-skeleton/dist/skeleton.css';

export const SkeletonLoad = ({ cards }) => {
  return(
    Array(cards).fill(0)
      .map((_, idx) => (
        cards > 1 
          ? 
            <ThumbnailWrap key={idx}>
              <Skeleton className= "skeleton" />
            </ThumbnailWrap>
          :
            <SliderWrap key={idx}>
              <Skeleton className= "skeleton" />
            </SliderWrap>
      ))
  )
}
import React from 'react';
import compile from './compile';

export default ({ icon, width="1em", height="1em", ...rest}) => (
  <svg
    viewBox={compile[icon].viewbox}
    width={width}
    height={height}
    {...rest}
  >{compile[icon].d.map((d, i) => 
    <path
      key={i}
      d={d}
      fill={compile[icon].fill ? compile[icon].fill[i] : ''}
      stroke={compile[icon].stroke ? compile[icon].stroke[i] : ''}
      strokeWidth={compile[icon].strokeWidth ? compile[icon].strokeWidth[i] : ''}
    />)}
    {(compile[icon].circle) ? <circle 
                                cx={compile[icon].circle.cx}
                                cy={compile[icon].circle.cy}
                                r={compile[icon].circle.r}
                                fill={compile[icon].circle.fill ? compile[icon].circle.fill : ''} 
                              />
                            : '' }
  </svg>
)
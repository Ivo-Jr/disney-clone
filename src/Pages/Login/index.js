import React from 'react';

import { 
  Container,
  ContentCTA,
  WrapperCTA,
  Description,
  CTALogoOne,
  CTAButton,
  BgImage,
 } from './styles';

export const Login = () => {
  return (
    <Container>
      <ContentCTA>
        <WrapperCTA>
          <Description>
            Enjoy the greatest stories, all in one place.
          </Description>
          <CTALogoOne src="/images/cta-logo.svg" alt="cta-logo"/>
          <CTAButton>
            CHOOSE YOUR PLAN
          </CTAButton>
          <BgImage />
        </WrapperCTA>
      </ContentCTA>
    </Container>
  )
}

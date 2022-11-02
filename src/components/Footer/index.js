import React from 'react-router-dom';

import { 
  Container, 
  Logo,
  Content,
  FirstButtonsSession,
  SecondButtonsSession,
  ButtonControl,
  FooterInfo,
  Reserved
} from './styles';

export const Footer = () => {
  return(
    <Container>
      <Logo>
        <img src="/images/cta-logo.svg" alt="disney-footer" />
      </Logo>

      <Content>
        <FirstButtonsSession>
          <ButtonControl>
            Privacy Policy
          </ButtonControl>
          <ButtonControl>
            Data Protection in Brazil
          </ButtonControl>
          <ButtonControl>
            Subscriber Agreement
          </ButtonControl>
          <ButtonControl>
            Help
          </ButtonControl>
        </FirstButtonsSession>
        
        <SecondButtonsSession>
          <ButtonControl>
            Supported Devices
          </ButtonControl>
          <ButtonControl>
            About Us
          </ButtonControl>
          <ButtonControl>
            Interest-based Ads
          </ButtonControl>
        </SecondButtonsSession>

        <FooterInfo>
          Disney+ is a paid service, based on subscription and subject to terms and conditions. The Disney+ service is marketed by The Walt Disney Company (Brazil) Ltda., World Trade Center, Av. Das Nações Unidas, 12.551, 12.555, 12.559, Piso 10, São Paulo / SP - CEP 04578-903, Brazil and CNPJ / M 73.042.962 / 0004-20
        </FooterInfo>
      </Content>

      <Reserved>
        © Disney. All Rights Reserved.
      </Reserved>
    </Container>
  )
} 
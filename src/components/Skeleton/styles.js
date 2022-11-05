import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  
  overflow: hidden;
  transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;

  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
  rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  
  .react-loading-skeleton {
    display: inline-flex !important;
  }
 
  
  .skeleton {
    @media only screen and (max-width: 430px) {
      padding: 10%;
    }

    @media only screen and (min-width: 431px) and (max-width: 580px){
      padding: 10.4%;
    }

    @media only screen and (min-width: 581px) and (max-width: 700px){
      padding: 10.9%;
    }

    @media only screen and (min-width: 701px) and (max-width: 830px){
      padding: 11%;
    }

    @media only screen and (min-width: 831px) and (max-width: 960px){
      padding: 11.4%;
    }
    
    @media only screen and (min-width: 961px) and (max-width: 1040px){
      padding: 11.8%;
    }

    @media only screen and (min-width: 1040px) and (max-width: 1800px){
      padding: 12%;
    }

    @media only screen and (min-width: 1800px) and (max-width: 2400px){
      padding: 12.2%;
    }

    @media only screen and (min-width: 1800px) and (max-width: 2400px){
      padding: 12.2%;
    }

    @media only screen and (min-width: 2401px) {
      padding: 12.4%;
    }
  } 
`;


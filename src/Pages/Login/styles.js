import styled from "styled-components";

export const Container = styled.main`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;

  // md
  @media only screen and (min-width: 769px) and (max-width: 1024px){
    height: auto;
  }
`;

export const ContentCTA = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: relative;

  min-height: 100%;
  padding: 5.6vw;

  // sm
  @media only screen and (max-width: 768px){
    padding: 50vw 5vw 20vw;
    min-height: 70vh;

    justify-content: center;
  }

  // md
  @media only screen and (min-width: 769px) and (max-width: 1024px){
    padding-top: 50vw;

    justify-content: center;
    min-height: 70vh;

    width: 100%;
  }

`;

export const WrapperCTA = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  // sm
  @media only screen and (max-width: 768px){
    max-width: 500px;
  }

  //md
  @media only screen and (min-width: 769px) and (max-width: 1024px){
    max-width: 600px;
  }
  
  //lg
  @media only screen and (min-width: 1025px){
    max-width: 640px;

    width: 50%;
  }

`;

export const Description = styled.h3`
  margin-bottom: 16px;

  font-style: normal;
  text-align: center;
  
  // sm
  @media only screen and (max-width: 769px){
    margin-top: 25px;

    font-size: 22px;
    font-weight: 400;

    line-height: 32px;
    letter-spacing: .2px;
  }

  // md
  @media only screen and (min-width: 769px) and (max-width: 1024px){
    margin-top: 40px;
    
    max-width: 600px;
    
    font-size: 24px;
    font-weight: 400;
    line-height: 34px;
    letter-spacing: .2px;

  }

  // lg
  @media only screen and (min-width: 1024px){
    margin-top: 40px;
    margin-bottom: 24px;

    font-size: 28px;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: -.6px;
  }

`;

export const CTALogoOne = styled.img`
  margin-bottom: 12px;
  min-height: 1px;
  display: block;
  max-width: 320px;
  /* width: 100%; */

  // sm
  @media only screen and (max-width: 768px){
    max-width: 180px;
    
    margin-bottom: 3vw;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px){
    margin-bottom: 3vw;
    max-width: 320px;
  }

  @media only screen and (min-width: 1025px){
    margin-bottom: 2vw
  }
`;

export const CTAButton = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  font-size: 18px;

  background-color: #6421ff;
  padding: 16.5px 0;
  margin-bottom: 20px;

  height: 68px;
  color: #f9f9f9;
  
  border: 1px solid transparent;
  border-radius: 4px;

  text-decoration: none;
  cursor: pointer;

  transition: all .2s ease 0s;

  font-weight: 400;
  letter-spacing: 1px;

  // sm
  @media only screen and (max-width: 768px){
    height: 50px;

    font-size: 15px;
    line-height: 15px;

    letter-spacing: 1px;
  }

  // md
  @media only screen and (min-width: 769px) and (max-width: 1024px){
    padding: 23.5px 33px 20.5px;

    font-size: 18px;
    line-height: 18px;

    letter-spacing: 1px;
  }

  // lg
  @media only screen and (min-width: 1025px){
    padding: 23.5px 33px 20.5px;

    font-size: 18px;
    line-height: 18px;

    letter-spacing: .5px;
  }

  &:hover{
    background-color: #7828FF;
  }
`;

export const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;

  // images sm and md
  @media only screen and (max-width: 1024px){
    background-image: url("/images/background-login-sm-md.jfif");
    background-size: 100%;
    display: block;
  }

  // image lg
  @media only screen and (min-width: 1025px){
    background-image: url("/images/background-login-lg.jfif");
    background-size: 100%;
    display: block;
  }
`;

import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  margin-top: 0px;
  padding: 19px 0px 0px 0px;
  
  width: 100%;

  color: #cacaca;
  background-color: #0e0b14;
`;

export const Logo = styled.a`
  display: inline-block;
  width: 94px;
  margin: 6px 14px 4px 0px;
  max-height: 70px;
  font-size: 0;

  transition: all .2s ease 0s;
  
  img {
    display: block;
    width: 100%;
    height: 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  margin: 0px auto;
  -webkit-box-pack: center;
  justify-content: center;
  flex-flow: row wrap;
  max-width: 500px;
  text-align: center;
`;

export const FirstButtonsSession = styled.section`
  display: flex;
`;

export const ButtonControl = styled.a`
  margin: 11px 5px 10px;
  padding: 1px 6px;

  font-size: 12px;
  letter-spacing: -.1px;
  line-height: 1.5;

  color: #cacaca;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:hover{
    color: #f9f9f9;
    transition: all .3s ease;
  }
`;

export const SecondButtonsSession = styled(FirstButtonsSession)``;

export const FooterInfo = styled.p`
  font-size: 12px;
  letter-spacing: -.1px;
  line-height: 1.5;
  width: auto;

  text-align: center;
  margin: 0px;
  margin-right: 1.75rem;
  margin-left: 1.75rem;
`;

export const Reserved = styled(FooterInfo)`
  padding-bottom: 1.5rem;
  padding-top: 0.5rem;

`;
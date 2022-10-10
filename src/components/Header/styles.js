import styled, {css} from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  background-color: #040714;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

export const NavMenu = styled.nav`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  padding: 0px;
  position: relative;
  margin: auto;
  margin-left: 18px;

  a {
    display: flex;
    align-items: center;
    padding: 0px;

    & + a {
      margin-left: 12px;
    }
    
    img {
      height: 20px;

      // lg
      @media only screen and (min-width: 1024px){
        width: 24px;
      }
    }

    span {
      color: rgba(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px 0px 8px;
      white-space: nowrap;
      position: relative;

    &:before {
      content: "";
      background-color: rgba(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      bottom: -6px;
      height: 2px;
      left: 0;
      opacity: 0;
      position: absolute;
      right: 0;
      transform-origin: left center;
      
      transform: scaleX(0);
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      visibility: hidden;
      width: auto;
    
    }
  }

    &:hover {
      span:before{
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  /* @media(max-width: 768px){
    display: none;
  } */
`;

export const Logo = styled.a`
  display: inline-block;
  padding: 0;
  width: 80px;
  margin: 4px 14px 4px 19px;
  max-height: 70px;
  font-size: 0;

  transition: all .2s ease 0s;
  
  img {
    display: block;
    width: 100%;
  }

  ${props => props.logged ?
    css`
    
    `
      :
    css`
      margin: 0px 32px 0px 0px;
      
      img {
        width: 79px;
        height: 48px;
      }
    `
  }

`;

export const Login = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;
  width: auto;
  
  margin: 5px;
  padding: 8px 16px;

  font-size: 18px;
  line-height: 18px;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  border-radius: 4px;
  border: 1px solid #f9f9f9;

  cursor: pointer;

  transition: all .2s ease 0s;

  background-color: rgb(0, 0, 0, 0.8);

  &:hover {
    color: rgb(0, 0, 0, 0.8);
    background: #f9f9f9; 
    
  }

`;


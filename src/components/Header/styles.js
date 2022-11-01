import styled, {css} from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${props => props.logged ? '72px' : '70px'};
  background-color: ${props => props.scroll ? '#040714' : 'transparent'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;

  transition: all 0.2s ease-in-out 0s;

  &:after {
    content: '';
    position: absolute;
    height: 170px;
    right: 0px;
    left: 0px;
    top: 0px;
    transition: height 300ms ease 0s;
    background: linear-gradient(to top, 
      rgba(0, 0, 0, 0), 
      rgba(0, 0, 0, 0.03) 15%, 
      rgba(0, 0, 0, 0.125) 30%, 
      rgba(0, 0, 0, 0.25) 46%, 
      rgba(0, 0, 0, 0.4) 61%, 
      rgba(0, 0, 0, 0.553) 75%, 
      rgba(0, 0, 0, 0.694) 88%, 
      rgba(0, 0, 0, 0.8));
    z-index: -1;
    pointer-events: none;
  }
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
  margin-left: 0px;

  transition: all 200ms ease 0s;

  a {
    display: flex;
    align-items: center;
    padding: 0px;

    margin: 0px 18px;
    
    img {
      height: 20px;
      width: 24px;
    }

    // lg
    @media only screen and (max-width: 1023px){
      margin: 0px 12px;
      
      img{
        height: 24px;
        width: 24px;
      }
    }

    span {
      color: rgba(249, 249, 249);
      font-size: 13.21px;
      font-weight: bold;
      letter-spacing: 1px;
      line-height: 1.08;
      
      margin-left: 8px;
      white-space: nowrap;
      position: relative;

      @media screen and (max-width: 1023px){
        margin: 13px 0px 13px 8px;
      }

    &:before {
      content: "";
      background-color: rgba(249, 249, 249);
      border-radius: 0px 0px 4px 4px;
      bottom: -7px;
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

  .more-icon{
    img {
      position: relative;

      top: -2px;
      left: 2px;

      height: 36px;
      width: 36px;
    }
  }

  ${props => props.className && css`    
    span:nth-child(-n+3) {
      display: none;
    }
  `}

  /* @media(max-width: 768px){
    display: none;
  } */
`;

export const Logo = styled.a`
  display: inline-block;
  padding: 0;
  width: 80px;
  margin: 4px 14px 5px 19px;
  max-height: 70px;
  font-size: 0;

  transition: all .2s ease 0s;
  
  img {
    display: block;
    width: 100%;
  }

  ${props => props.logged &&
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

export const UserImg = styled.img`
  height: 100%;
  width: 100%;
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  color: #CACACA;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: max-content;
  visibility: hidden;

  &:hover{
    color: #fff;
  } 

  span {
    display: flex !important;
  }
`;

export const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s;

  cursor: pointer;

  // lg
  img {
    height: 20px;
    width: 24px;

    @media only screen and (max-width: 1023px){
      height: 24px;
      width: 24px;
    }
  }
  

  &:hover ${Dropdown}{
    visibility: visible;
  }
`;
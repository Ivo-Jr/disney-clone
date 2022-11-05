import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 0 26px;
  
  h4 {
    letter-spacing: .11px;
    
    // lg
    @media only screen and (min-width: 1024px){
      font-size: 20px;
      line-height: 1.4;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px){
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

export const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(.25, .46, .45, .94) 0s;
  border: 3px solid rgba(249, 249, 249, .1);

  img {
    display: block;
    inset: 0px;
    height: 100%;
    width: 100%;
    object-fit: fill;
    opacity: 1;
    position: absolute;
    transition: all 200ms ease-in-out 0s;
    z-index: 1;
    top: 0; 
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0PX 48px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, .8); 
  }
`;
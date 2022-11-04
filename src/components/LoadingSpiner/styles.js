import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`; 

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  overflow-x: hidden;

  img{
    width: 92px;
    height: 92px;
    animation: ${rotate} 2s linear infinite;
  }
`;

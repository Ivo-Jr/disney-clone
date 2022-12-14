import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow: hidden;
  
  display: block;
  /* top: 72px; */
  padding: 0 calc(3.5vw + 5px);
  padding-top: 72px;
  
  &:after {
    background: url("/images/background-home.png") center center / cover
    no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`
import styled from 'styled-components';

export const Main = styled.div`
  background-color: rgb(26, 29, 41);
  position: absolute;
  top: 0px;
  transition: opacity 200ms ease 0s;
  width: 100%;
  z-index: -1;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;

  #background {
    background-color: rgb(26, 29, 41);
    position: fixed;
    height: 100vh;
    top: 0px;
    transition: opacity 200ms ease 0s;
    width: 100%;
    z-index: -3;
  }
`;

export const Content = styled.div`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 24px);
`;

export const Background = styled.div`
  left: 0px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;

  div {
    background-image: radial-gradient(farthest-side at 73% 21%, transparent, rgb(26, 29, 41));
    position: absolute;
    inset: 0px;
  }

  img {
    width: 100vw;
    /* height: 100vw; */

    /* @media (max-width: 768px) {
      width: initial;
    } */
  }
`;

export const ImageTitle = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  -webkit-box-pack: start;

  margin: 0px auto;
  /* height: 30vw; */
  /* min-height: 170px; */
  /* padding-bottom: 24px; */
  width: 100%;
  padding: 56px 0px 16px 0px;
  
    img {
      max-width: 341px;
      min-width: 100px;
      width: 35vw; 
    }
`;

export const ContentMeta = styled.div`
  max-width: 874px;
`;

export const InfoMovie = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;

  min-height: 20px;

  font-size: 12px;
  letter-spacing: -.1px;
  line-height: 1.5;
`;

export const Classification = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 0px 5px;

  img {
    height: 20px;
    margin-right: 4px;
  }
`;

export const Genre = styled.div`
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  margin: calc(28px) -8px -4px;
  min-height: 56px;

  // md
  @media (max-width: 768px) {
    /* margin: calc(28px) 0px -4px; */
  }
`;

export const Player = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  height: 56px;
  margin: 4px 12px;
  padding: 0px 24px;
  border-radius: 4px;

  font-size: 15px;
  font-weight: 600;
  line-height: 1.6;
  letter-spacing: 1px;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  text-transform: uppercase;
  
  color: #0e0b14;
  background: rgb (249, 249, 249);
  border: none;

  cursor: pointer;
  transition: all .2s ease-in-out;

  span{
    margin-left: 12px;
  }

  img {
    width: 32px
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    margin: 0.25rem 0.5rem;
    padding: 0 1rem;
    
    height: 32px;

    letter-spacing: 1.5px;
    font-weight: 900;
    font-size: 12px;
  }
`;

export const Trailer = styled(Player)`
  span{
    margin: 0px;
  }

  background: rgba(0, 0, 0, 0.8);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover{
    color: rgba(0, 0, 0, 0.8);
    background: rgb(249, 249, 249)
  }

  // md
  @media (max-width: 768px) {
    height: 26px;
  }
`;

export const MoreOptions = styled.div`
  display: flex;
  align-items: center;
  margin: 4px 8px;
`;

export const AddList = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: 0px 1rem 0px 0px;
  padding: 0px;
  
  height: 2.75rem;
  width: 2.75rem;
  font-size: 15px;
  background-color: rgba(0, 0, 0, 0.8);

  border: 2px solid #f9f9f9;
  border-radius: 50%;

  cursor: pointer;

  svg {
    fill: #f9f9f9;
    height: 40px;
    width: 40px;
  }

  &:hover{
    transition: all .1s ease-out;
    background-color: rgb(249, 249, 249);

    svg{
      fill: #000;
    }
  }
`;

export const GroupWatch = styled(AddList)`
  margin: 0px;
`;

export const Description = styled.p`
  font-size: 20px;
  letter-spacing: -.1px;
  line-height: 1.6;
  
  margin: 0;
  padding-bottom: 1rem;
  padding-top: 1rem;
  
  color: #f9f9f9;

  // md
  @media (max-width: 748px) {
    font-size: 14px;
  }
`;


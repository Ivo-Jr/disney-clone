import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { db, collection, getDocs } from '../../services/firebase';
import { Footer } from '../Footer';
import { LoadingSpiner } from '../LoadingSpiner';
import SvgIcon from '../SvgIcon';

import { 
  Main,
  Container, 
  Content,
  Background,
  ImageTitle,
  InfoMovie,
  Classification,
  Genre,
  ContentMeta,
  Controls,
  Player,
  Trailer,
  MoreOptions,
  AddList,
  GroupWatch,
  Description
} from './styles';

export default function Details() {
  const [ data, setData ] = useState();
  const [ loading, setLoading ] = useState(false);
  const { id } = useParams();

  const handleData = async () => {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "movies"));

    try {
      querySnapshot.forEach((doc) => {
        if(doc.id === id){
          setData(doc.data());
        }
      });

    }catch(error) {
      console.error(error);

    }finally {
      setLoading(false);
    }
  }

  const onTopPage = () => {
    window.scroll(0,0);
  }

  useEffect(() => {
    handleData();
  },[id]);

  useEffect(() => {
    onTopPage();
  },[]);

  return(
    <Main>
      <Container>
      <div id="background"/>
      {loading && data === undefined 
        ? <LoadingSpiner />
        : 
        <Content>
            <Background>
              <img 
                src={data?.backgroundImg} 
                alt={data?.title}
              />
              <div/>
            </Background>
          
            <ImageTitle>
              <img 
                src={data?.titleImg} 
                alt={data?.title}
              />
            </ImageTitle>

            <ContentMeta>
              <InfoMovie>
                <Classification>
                  {data?.rating && <img src={data?.rating} alt="rating" /> }
                  {data?.audioDescription && <img src={data?.audioDescription} alt="audioDescription" />}
                  {data?.closedCaption && <img src={data?.closedCaption} alt="closedCaption" />}
                  <span>{data?.subTitle}</span>
                </Classification>
                <Genre>
                  <span>{data?.genre}</span>
                </Genre>
              </InfoMovie>

                <Controls>
                  <Player>
                    <img src="/svg/player.svg" alt="player" />
                    <span>Play</span>
                  </Player>
                  <Trailer>
                    <span>Trailer</span>
                  </Trailer>
                  <MoreOptions>
                    <AddList>
                      <SvgIcon icon='buttonMore'/>
                    </AddList>
                    <GroupWatch>
                      <SvgIcon icon='groupWhatch' />
                    </GroupWatch>
                  </MoreOptions>
                </Controls>

              <Description>
                {data?.description}
              </Description>
            </ContentMeta>
        </Content>
      }
      </Container>
      <Footer />
    </Main>
  )
}
import React from 'react';

import SvgIcon from '../SvgIcon';

import { 
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
  GroupWatch
} from './styles';


export const Details = () => {
  return(
    <Container>
      <Content>
        <Background>
          <img 
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/828AF40EDE4540DA40EF2C9EF36478B17902BE9C7EDC3D8775BCF59EE93C0623/scale?width=1440&aspectRatio=1.78&format=jpeg" 
            alt="" 
          />
          <div/>
        </Background>
        
        <ImageTitle>
          <img 
            src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F988E2991497FC0A735399EF5E091A186E8710435DE23071024E57839F27B58C/scale?width=1440&aspectRatio=1.78&format=png" 
            alt="" 
          />
        </ImageTitle>

        <ContentMeta>
          <InfoMovie>
            <Classification>
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CDE50F2C44291438DE12A9AFD52DD99D0A127BA83993A8CD4296AEE7C6BBCDE9/scale?width=240" alt="rating" />
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FD4912EB883B7CCB847EB9C62E1FC853D547CAF7DF940B9086AE35AFAD0848AB/scale?width=240" alt="audioDecription" />
              <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FAE63AC7AC11C27C949E1856CF188BF09FC20EA52AEA3B65B43C24EEB5F29BFD/scale?width=240" alt="impared" />
              <span>2021 • 1 Season</span>
            </Classification>
            <Genre>
              <span>Romance, Drama, Science Fiction, Fantasy, Super Hero</span>
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

        </ContentMeta>
      </Content>
    </Container>
  )
}
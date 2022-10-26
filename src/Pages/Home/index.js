import React, { useState, useMemo } from 'react';
import { db, onSnapshot, collection } from '../../services/firebase';

import { Featured } from '../../components/Featured';
import { ImgSlider } from '../../components/ImgSlider';
import { NewDisney } from '../../components/NewDisney';
import { Recommends } from '../../components/Recommends';
import { Trending } from '../../components/Trending/inedx';
import { Viewers } from '../../components/Viewers';

import { 
  Container,
} from './styles';

export const Home = () => {
  const [recommends, setRecommends] = useState();
  const [featured, setFeatured] = useState();
  const [trending, setTrending] = useState();
  const [newsDisney, setNewsDisney] = useState();

  let recommendsArray = [];
  let featuredArray = [];
  let trendingArray = [];
  let newsDisneyArray = [];
  
  useMemo(() => {
    onSnapshot(collection(db, 'movies'), (snapshot) => {
      snapshot.docs.map((doc) => {
        switch(doc.data().type){
          case 'recommended':
            recommendsArray = [...recommendsArray, {id: doc.id, ...doc.data()}];
            setRecommends(recommendsArray);
            break;
            
          case 'featured':
            featuredArray = [ ...featuredArray,  {id: doc.id, ...doc.data()}];
            setFeatured(featuredArray);
            break;

          case 'trending':
            trendingArray = [ ...trendingArray, {id: doc.id, ...doc.data()}];
            setTrending(trendingArray);
            break;

          case 'new':
            newsDisneyArray = [ ...newsDisneyArray, {id: doc.id, ...doc.data()}];
            setNewsDisney(newsDisneyArray)
            break;

          default:
            return;
        }
      })
    })
  },[]);
  
  console.log(recommends);
  console.log(featured);
  console.log(trending);
  console.log(newsDisney);


  return(
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Featured />
      <Trending />
    </Container>
  );
}

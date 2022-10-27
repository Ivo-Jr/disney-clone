import React, { useState, useMemo, useContext, createContext } from 'react';

import { onSnapshot, collection, db } from '../services/firebase';

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
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

  return(
    <MovieContext.Provider
      value={{
        recommends,
        featured,
        trending,
        newsDisney
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}

export const useMovie = () => {
  const contex = useContext(MovieContext);
  const { recommends, featured, trending, newsDisney } = contex;
  return { recommends, featured, trending, newsDisney }
}
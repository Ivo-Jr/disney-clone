import React, { useState } from 'react';

import {
  Nav, 
  Logo,
  NavMenu,
  Login
} from './styles';

export const Header = (props) => {
  const [logged, setLogged] = useState(true);
  // const [scroll, setScroll] = useState(false);
  // const handleScroll = () => {
  //     window.addEventListener('scroll', () => {
  //         if(window.scrollY > 90) {
  //             setScroll(true)
  //         }else setScroll(false);
  //     });
  //     return () => {
  //         window.removeEventListener('scroll')
  //     };
  // }
  
  // useEffect(() => {
  //     handleScroll();
  // },[]);

  return(
    <Nav logged={logged}>
      <Logo logged={logged}>
        <img src={logged ? `/images/logoLogged.svg` : `/images/logo.svg`} alt="logo-disney" />
      </Logo>
      <NavMenu logged={logged}>
        <a href="/home">
          <img src="/images/home-icon.svg" alt="home" />
          <span>HOME</span>
        </a>
        <a href="/">
          <img src="/images/search-icon.svg" alt="search" />
          <span>SEARCH</span>
        </a>
        <a href="/" className="more-icon">
          <img src="/images/more-icon.svg" alt="more" />
          <span>WATCHLIST</span>
        </a>
        <a href="/">
          <img src="/images/star-icon.svg" alt="star" />
          <span>ORIGINALS</span>
        </a>
        <a href="/">
          <img src="/images/movie-icon.svg" alt="movie" />
          <span>MOVIES</span>
        </a>
        <a href="/">
          <img src="/images/tv-icon.svg" alt="tv" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Login>
        Log in
      </Login>
    </Nav>
  )
}
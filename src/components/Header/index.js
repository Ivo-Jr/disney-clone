import React, {useState} from 'react';

import {
  Nav, 
  Logo,
  NavMenu,
  Login
} from './styles';

export const Header = (props) => {
  const [logged, setLogged] = useState(false);

  return(
    <Nav>
      <Logo logged={logged}>
      
        <img src="/images/logoLogged.svg" alt="logo-disney" />
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
        <a href="/">
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
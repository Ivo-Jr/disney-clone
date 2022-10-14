import React, { useState, useEffect, useMemo } from 'react';
import { auth, 
  provider, 
  signInWithPopup,
  signOut, 
  onAuthStateChanged
} from '../../services/firebase';
import { useAuth } from '../../hooks/auth';
import { avatar } from '../../utils/avatars';

import {
  Nav, 
  Logo,
  NavMenu,
  Login,
  UserImg,
  SignOut,
  Dropdown
} from './styles';

export const Header = (props) => {
  const { user, logged, logIn } = useAuth();
  
  const profileImg = useMemo(() => {
    const index = Math.floor(Math.random() * avatar.length);
    return avatar[index]
  },[user]);

  const handleAuth = () => {
    if(!user){
      signInWithPopup(auth, provider).then((result) => {
        const email = result.user.email;
        const name = result.user.displayName;

        const photo = profileImg;

        logIn(name, email, photo);

      }).catch((error) => {
        alert(error.message)
      })
    } else if(user){
      signOut(auth).then(() => {
        console.log('VAI SAIR!')
      })
      .catch((err) => alert(err.message))
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      console.log(user, 'OI')
    })
  },[]);

  
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

      {!logged ? 
        <Login onClick={handleAuth}>
          Log in
        </Login>
        :
        <>
          <NavMenu>
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

          <SignOut>
              <UserImg src={user?.photo} alt={user?.name}/>
              <Dropdown id="signOut">
                <span onClick={handleAuth}>Sign out</span>
              </Dropdown>
          </SignOut>
        </>
      }
    </Nav>
  )
}
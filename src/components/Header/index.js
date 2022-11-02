import React, { useState, useEffect, useMemo } from 'react';
import { 
  auth, 
  provider, 
  signInWithPopup,
  signOut, 
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

export const Header = () => {
  const [ scroll, setScroll ] = useState(false);
  const [ compressionMenu, setCompressionMenu ] = useState(() => {
    if(window.innerWidth  < 1024) {
      return true
    } else { return false}
  });
  const { user, logged, logIn, logOut } = useAuth();

  const profileImg = useMemo(() => {
    const index = Math.floor(Math.random() * avatar.length);
    return avatar[index]
  },[user]);

  const handleScroll = () => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 90) {
        setScroll(true)
      }else setScroll(false);
    });
    return () => {
      window.removeEventListener('scroll')
    };
  }

  const handleWidth = () => {
    window.addEventListener('resize', () => {
      let width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

      if(width < 1024){
        setCompressionMenu(true)
      } else setCompressionMenu(false)
    });
    return () => {
      window.removeEventListener('resize')
    };
  }

  const handleAuth = () => {
    if(!logged){
      signInWithPopup(auth, provider).then((result) => {
        const email = result.user.email;
        const name = result.user.displayName;
        const photo = profileImg;

        logIn(name, email, photo);

      }).catch((error) => {
        alert(error.message)
      })
    } 
    else if(logged){
      signOut(auth).then(() => {
        logOut();
        console.log('log Out!');
      })
      .catch((err) => alert(err.message))
    }
  };

  useEffect(() => {
    handleScroll();
    handleWidth();
  },[]);

  return(
    <Nav scroll={scroll} logged={logged}>
      <Logo href="/home" logged={logged}>
        <img src={logged ? `/images/logoLogged.svg` : `/images/logo.svg`} alt="logo-disney" />
      </Logo>
      
      {!logged ? 
        <Login onClick={handleAuth}>
          Log in
        </Login>
        :
        <>
          <NavMenu className={compressionMenu && 'compresion'}>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="home" />
              <span>HOME</span>
            </a>
            <a href="/home">
              <img src="/images/search-icon.svg" alt="search" />
              <span>SEARCH</span>
            </a>
            <a href="/home" className="more-icon">
              <img src="/images/more-icon.svg" alt="more" />
              <span>WATCHLIST</span>
            </a>

            { compressionMenu 
              ?
                <SignOut>
                  <img className="compression-icon" src="/images/expanding-icon.svg" alt="expanding" />
                  <Dropdown className="">
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
                  </Dropdown>
                </SignOut>
              : <>
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
                </>
            }
          </NavMenu>

          <SignOut>
              <UserImg id="userPhoto" src={user?.photo} alt={user?.name}/>
              <Dropdown id="signOut">
                <span onClick={handleAuth}>Sign out</span>
              </Dropdown>
          </SignOut>
        </>
      }
    </Nav>
  )
}
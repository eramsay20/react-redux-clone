import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProfileButton from './ProfileButton';
// import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks; // declare variable to store which links to render

  if (sessionUser) { // if logged in, only show Profile button
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else { // else, render login & signup links instead
    sessionLinks = (
      <>
        <NavLink className='nav__link' to="/login" style={{ marginLeft: '.5rem' }}> Log In</NavLink>
        <NavLink className='nav__link' to="/signup" style={{ marginLeft: '.5rem' }}> Sign Up</NavLink>
      </>
    );
  }

  return (
    <>
        <NavLink exact className='nav__link' to="/">Home</NavLink>
        {isLoaded && sessionLinks}
    </>
  );
}

export default Navigation;

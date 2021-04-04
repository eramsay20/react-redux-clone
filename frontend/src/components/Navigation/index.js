import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import LoginFormModal from '../LoginFormModal'
import SignupFormModal from '../SignupFormModal'
import * as sessionActions from '../../store/session';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  // declare variable to store which links to render
  let sessionLinks;

  // log out button functionality
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  if (sessionUser) { // if logged in, only show Profile button
    sessionLinks = (
      <>
        <img alt={`logo`} style={{width: '18px', marginRight: '-5px'}} src="https://github.com/eramsay20/ebrite/blob/master/wiki-resources/user-profile-icon.png?raw=true"></img>
       <NavLink className="nav-link" to="/profile" style={{ marginLeft: '.5rem' }}>
        Profile
       </NavLink>
       <NavLink onClick={logout} className="nav-link" to="/" style={{ marginLeft: '.5rem' }}>Log Out</NavLink>
      </>
    );
  } else { // else, render login & signup links instead
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <>  <div style={{display: 'flex', flexDirection: 'flex-start', alignItems: 'center', justifyContent: 'flex-start', marginLeft:'30px'}}>
          <NavLink style={{marginRight:'100px'}} exact to="/">
            <img alt={`logo`} style={{width: '70px'}} src="https://github.com/eramsay20/ebrite/blob/master/wiki-resources/ebrite_logo_trans.png?raw=true"></img>
          </NavLink>
          <div className={`search-bar`}>Search events</div>
        </div>
        <div style={{display: 'flex', flexDirection: 'flex-end', alignItems: 'center'}}>
          {isLoaded && sessionLinks}
        </div>
    </>
  );
}

export default Navigation;

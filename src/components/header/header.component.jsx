import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import Logo from '../../assets/lipreme.png';
import './header.styles.scss';

const Header = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img className='logo' src={Logo} alt='Lipreme Logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        Shop
      </Link>
      <Link className='option' to='/contact'>
        Contact
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className='option' to='/sign-in'>
          Sign In
        </Link>
      )}
    </div>
  </div>
);

export default Header;

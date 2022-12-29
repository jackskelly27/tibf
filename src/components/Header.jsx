import React from 'react'
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <div class="header">
      <NavLink to="/hearit" className={({ isActive }) => (isActive ? 'active navlink' : 'navlink')}>
        Hear It
      </NavLink>
      <a href="/" trel="noopener noreferrer">
        <img src="/logo.png" alt="longhorn logo" class="logo"/>
      </a>
      <NavLink to="/seeit" className={({ isActive }) => (isActive ? 'active navlink' : 'navlink')}>
        See It
      </NavLink>
    </div>
  )
}

export default Header
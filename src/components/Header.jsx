import React from 'react'
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <div class="header">
        <a href="/hearit" trel="noopener norefferer">
          <h1>
            <NavLink to="/hearit" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Hear It
           </NavLink>
          </h1>
        </a>
        <a href="/" trel="noopener noreferrer">
          <img src="/logo.png" alt="longhorn logo" class="logo"/>
        </a>
        <a href="/seeit" trel="noopener norefferer">
          <h1>
            <NavLink to="/seeit" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              Seet It
            </NavLink>
          </h1>
        </a>
    </div>
  )
}

export default Header
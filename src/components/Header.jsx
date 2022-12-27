import React from 'react'

function Header() {
  return (
    <div class="header">
        <a href="/hearit" trel="noopener norefferer">
          <h1>Hear It</h1>
        </a>
        <a href="/" trel="noopener noreferrer">
          <img src="/logo.png" alt="longhorn logo" class="logo"/>
        </a>
        <a href="/seeit" trel="noopener norefferer">
          <h1>See It</h1>
        </a>
    </div>
  )
}

export default Header
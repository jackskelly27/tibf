import React from 'react'

const today = new Date();

function Footer() {
  return (
    <div className="footer">
      <h3>Jacks Kelly &copy; {today.getFullYear()}</h3>
    </div>
  )
}

export default Footer


import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {

  const [toggleNav, SetToggleNav] = useState(false)
  // const [location, setlocation] = ('/')
  // const navigate = useNavigate ()

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      document.getElementById('header').classList.add('sticky')
    } else {
      document.getElementById('header').classList.remove('sticky')
    }
  })

  // useEffect(() => { 
  //   window.scrollTo(0, 0);
  // }, [location])

  return (
    <>
      <>

        <header id="header" >
          <nav className="container">
            <div className="logo">
              <h4 className="mb-0">Eset</h4>
            </div>
            <div className="nav-link" id="menu" style={{ transform: !toggleNav ? 'translate(-120%)' : 'translate(0%)' }}>
              <div className="mid-logo p-3">
              Eset
              </div>
              <ul className="mb-0">
                <li><Link to="/" className="links" onClick={() => {SetToggleNav(false)}}>Home</Link></li>
                <li><Link to="/about" className="links" onClick={() => {SetToggleNav(false)}}>About us </Link></li>
                <li><Link to="/service" className="links"onClick={() => {SetToggleNav(false)}}>Service</Link></li>
                <li><Link to="/blog" className="links" onClick={() => {SetToggleNav(false)}}>Blog</Link></li>
                <li><Link to="/contact" className="links" onClick={() => {SetToggleNav(false)   }}>Contact</Link></li>
              </ul>
            </div>
            <div className="toggle-btn" onClick={() => SetToggleNav(!toggleNav)}>
              <span className={`${toggleNav === true && 'span_ro_fs'}`}></span>
              <span style={{ display: toggleNav === true && 'none' }}></span>
              <span className={`${toggleNav === true && 'span_ro_ls'}`}></span>
            </div>
          </nav>
        </header>
      </>
    </>
  )
}

export default Header
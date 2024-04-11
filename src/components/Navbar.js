import React from 'react'
import { Link } from 'react-router-dom'

import cart from './images/cart.svg';
import userimg from './images/user.svg';

export default function Navbar() {
  return (
    <>
      	<nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

        <div className="container">
            <Link className="navbar-brand" to='/'>Furni<span>.</span></Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsFurni">
                <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                    <li><Link className="nav-link" to='/'>Home</Link></li>
                    <li><Link className="nav-link" to='/shop'>Shop</Link></li>
                    <li><Link className="nav-link" to='/aboutus'>About us</Link></li>
                    <li><Link className="nav-link" to='/services'>Services</Link></li>
                    <li><Link className="nav-link" to='/blog'>Blog</Link></li>
                    <li><Link className="nav-link" to='/contactus'>Contact us</Link></li>
                </ul>

                <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                    <li><a className="nav-link" href="#"><img src={userimg}/></a></li>
                    <li><Link className="nav-link" to='/cart'><img src={cart}/></Link></li>
                </ul>
            </div>
        </div>
        </nav>
    </>
  )
}


import React from 'react';
export default function Navbar(props) {
  return (
<>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a classname="navbar-brand">
      <img
        src="images/marvel-logo.jpg"
        alt="images"
        width={100}
        height={40}
        className="d-inline-block align-text-top"
      />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
    <span className="navbar-toggler-icon"/>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <a className="favbar" href="#/">
          Favourites
        </a>  
        <a className="nav-link active" aria-current="page" href="!#">
          Home
        </a>
      </div>
    </div>
  </div>
</nav>
</>
  )
}

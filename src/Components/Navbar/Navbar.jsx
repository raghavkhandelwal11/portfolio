import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return (
    // <div id='top-navbar'>
    //     <div style={{color: "rgb(42, 101, 93)", fontSize: "1.75vw", fontWeight: 650}}>
    //         Raghav Khandelwal
    //     </div>

    //     <div id="navbar-flex">
    //         <div className='navbar-flex-item'><Link className='fix-01' to="#top-navbar" smooth>Home</Link></div>
    //         <div className='navbar-flex-item'><Link className='fix-01' to="#about-me-id" smooth>About</Link></div>
    //         <div className='navbar-flex-item'><Link className='fix-01' to="#portfolio-id" smooth>Portfolio</Link></div>
    //         <div className='navbar-flex-item'><Link className='fix-01' to="#resume-id" smooth>Resume</Link></div>
    //         <div className='navbar-flex-item'><Link className='fix-01' to="#contact-id" smooth>Contact</Link></div>
    //     </div>

        <nav className="navbar navbar-expand-md fixed-top" style={{backgroundColor: "rgb(253, 240, 223)", width: '100%'}}>
  <div className='container-fluid'>
    <a style={{color: "rgb(42, 101, 93)", fontWeight: "600"}} className="navbar-brand ms-5" href="#">Raghav Khandelwal</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 me-5">
          <li className="nav-item me-5">
            <button className="nav-link active" aria-current="page" ><Link data-bs-dismiss="offcanvas" className='fix-01' to="#top-navbar" smooth>Home</Link></button>
          </li>
          <li className="nav-item"> <hr /></li>
          <li className="nav-item me-5">
            <button className="nav-link active" aria-current="page" data-bs-dismiss="offcanvas"><Link  className='fix-01' to="#about-me-id" smooth>About</Link></button>
          </li>
          <li className="nav-item"> <hr /></li>
          <li className="nav-item me-5">
            <button className="nav-link active" aria-current="page" data-bs-dismiss="offcanvas"><Link  className='fix-01' to="#portfolio-id" smooth>Portfolio</Link></button>
          </li>
          <li className="nav-item"> <hr /></li>
          <li className="nav-item me-5">
            <button className="nav-link active" aria-current="page" data-bs-dismiss="offcanvas"><Link  className='fix-01' to="#resume-id" smooth>Resume</Link></button>
          </li>
          <li className="nav-item"> <hr /></li>
          <li className="nav-item me-5">
            <button className="nav-link active" aria-current="page" data-bs-dismiss="offcanvas"><Link className='fix-01' to="#contact-id" smooth>Contact</Link></button>
          </li>
          <li className="nav-item"> <hr /></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    // </div>
  )
}

export default Navbar;
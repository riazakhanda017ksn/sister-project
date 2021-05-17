import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    
   
    return (
        
<nav class='navbar navbar-expand-lg navbar-light sticky sticky-top'>
  <div class="container">
    <a class="navbar-brand" href="#">
        <span className='mr-4'>Anima</span>
        
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav navbar-customize navItem">
         <li>
             <Link to='/home'>Home</Link>
         </li>
         <li>
             <Link to='/about'>About</Link>
         </li>
         <li> 
             <Link to='/dashboard'>Dashboard</Link>  
         </li>
         <li>
             <Link to='/contact'>Contact</Link>
         </li>
         
      </ul>
    </div>
  </div>
</nav>
       
    );
};

export default Navbar;
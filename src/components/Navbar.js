import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = class extends React.Component {

  componentDidMount() {
    // Get all "navbar-burger" elements
   const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
   if ($navbarBurgers.length > 0) {
 
     // Add a click event on each of them
     $navbarBurgers.forEach( el => {
       el.addEventListener('click', () => {
 
         // Get the target from the "data-target" attribute
         const target = el.dataset.target;
         const $target = document.getElementById(target);
 
         // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
         el.classList.toggle('is-active');
         $target.classList.toggle('is-active');
 
       });
     });
   }
 }
 
 render() {
   return (
  <header> 
  <div className="header-primary"> 
       
       
    <div className="right-nav">
      <ul>
        <li><a href="#intro">About</a></li>
        <li><a href="#livestream">Livestream</a></li>
        <li><a href="#transition">Transition Plan</a></li>
        <li><a href="#news">News</a></li>
      </ul>
    </div>
    <div id="cplogo">
      <Link to="/" className="navbar-item" title="Logo">
        <img src={logo} alt="Cal Poly Corporation" style={{ width: '88px' }} />
        <span>Vista Grande<br/>Dining Complex</span>
      </Link>
    </div>
  </div>
  </header>
  )}
}

export default Navbar

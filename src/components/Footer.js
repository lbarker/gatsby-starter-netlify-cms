import React from 'react'
import logo from '../img/logo-white.svg'

const Footer = class extends React.Component {
render() {
   return (
    <footer> 
        <div className="wrapper"> 
            <div className="footer-logo">
                <img src={logo} alt="Cal Poly Corporation" />
            </div>
            <div className="contact">
                <p>
                    1 Grand Avenue<br/>
                    Building 15<br/>
                    San Luis Obispo, CA 93407
                </p>
                <p>
                    Have questions?<br/>
                    <span className="email">cpcmedia@calpoly.edu</span>
                </p>
            </div>
            <div className="footer-nav">
                <ul>
                
                    <li><a href="https://www.calpolycorporation.com/">Cal Poly Corporation</a></li>
                    <li><a href="https://www.calpolydining.com/">Campus Dining</a></li>
                    <li><a href="https://www.bkstr.com/calpolystore/home/en">University Store and Cal Poly Downtown</a></li>
                    <li><a href="https://www.calpolyconferences.org/">Cal Poly Conference & Event Planing</a></li>
                    <li><a href="https://www.calpolydining.com/">Cal Poly Print and Copy</a></li>
                    <li><a href="http://www.bellamontanahomes.com/">Bella Montana Homes</a></li>
                </ul>
            </div>
            <div className="about-cd">
                <p>Cal Poly Corporation provides vital commercial services, research support, administrative services and funding resources to advance Cal Poly. It is a self-supporting, 501c3, nonprofit and does not receive any state funding.</p>
            </div>
        </div>
        <div className="copyright">
            <ul>
                <li><a href="http://www.calpoly.edu/" rel="noopener noreferrer" target="_blank">Cal Poly Home</a></li>
                <li><a href="https://www.calpolycorporation.org/web-accessibility-statement/" rel="noopener noreferrer" target="_blank">Web Accessibility Statement</a></li>
                <li><a href="https://www.calpolycorporation.org/terms-of-use-and-privacy-policy/" rel="noopener noreferrer" target="_blank">Privacy Notice</a></li>
            </ul>
            <p>© Cal Poly Corporation Dining 2019. All rights reserved.</p>
        </div>
    </footer>
  )}
}

export default Footer


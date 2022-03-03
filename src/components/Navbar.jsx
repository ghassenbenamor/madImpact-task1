import React from 'react'
import logo from '../images/logoBig.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
     <div className="logo"><img src={logo} alt="logo"/></div> 
      <ul>
        <Link exact to='/madImpact-task1-remake'><li>ACCUEIL</li></Link>
        <Link to="/agence"><li>AGENCE</li></Link>
        <Link to='realisations'><li>RÉALISATION</li></Link>
        <li>BLOG</li>
        <li id='li'>CONTACTEZ-NOUS</li>
      </ul>
      <button className='navbarBtn'>Demande de devis</button>
    </div>
  )
}

export default Navbar
import React from 'react'
import logo from '../images/logoBig.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="logo" className='logo' />
      <ul>
        <li>ACCUEIL</li>
        <li>AGENCE</li>
        <li>RÉALISATION</li>
        <li>BLOG</li>
        <li id='li'>CONTACTEZ-NOUS</li>
      </ul>
      <button className='navbarBtn'>Demande de devis</button>
    </div>
  )
}

export default Navbar
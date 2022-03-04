import React from 'react'
import introAgence from '../images/introAgence.png'
import {FaCheck} from 'react-icons/fa'

const IntroAgence = () => {
  const iconStyles = {color:'#FCC32D'}
  return (
    <div className='introAgence'>
      <div className='introAgenceContainer'>
        <div className="introAImg">
            <img src={introAgence} alt='introImage' />
          </div>
        <div className="introAgenceText">
          <h4 className='introAgenceTitle'>VOTRE AGENCE WEB ET MOBILE À LYON</h4>
          <p id='txtIntroAgence'>Penseurs créatifs, marketeurs technophiles, amoureux des marques 
            et toujours au service de vous objectifs d'affaires. Notre agence à 
            Lyon vous accompagne dans le développement de sites web et les</p>
          <div className="introAgenceLines">
            <div className='line'>
                 <h2><FaCheck style={iconStyles}/></h2> 
                  <p>Notre expertise nous permet une vision globale de la réalité de nos clients et justifie l'importance
                  inestimable de la qualité dans les réalisations de nos mandats.</p>
            </div>
            <div className="line">
               <h2><FaCheck style={iconStyles} /></h2>
              <p>C'est pourquoi autant de clients de toute la France, de la suisse nous font   confiance dans la réalistion  de leurs projets interactifs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroAgence
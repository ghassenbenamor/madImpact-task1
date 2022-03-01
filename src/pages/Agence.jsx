import React from 'react'
import Agency from '../components/agency'
import Contact from '../components/Contact'
import IntroAgence from '../components/IntroAgence'
import Pub from '../components/Pub'
import Team from '../components/Team'


const Agence = () => {
  return (
    <div>
      <IntroAgence/>
      <Team/>
      <Pub/>
      <Agency/> 
        <Contact/>
        
    </div>
  )
}

export default Agence
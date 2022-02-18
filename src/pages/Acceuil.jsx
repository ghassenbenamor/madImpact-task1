import React from 'react'
import AccueilIntro from '../components/AccueilIntro'
import Brands from '../components/Brands'
import Method from '../components/Method'
import References from '../components/References'
import Service from '../components/Service'
import Reputation from "../components/Reputation"
import About from '../components/About'

const Acceuil = () => {
  return (
    <div>
        <AccueilIntro/>
        <Service/>
        <About/>
        <Method/>
        <References/>
        <Brands/>
        <p className="specialTitle" style={{textAlign:"center"}}>Notre réputation</p>
        <h4 style={{textAlign:"center",fontSize:"2vw"}}>Ce que nos clients disent de nous</h4>
        <Reputation/>
       
    </div>
  )
}

export default Acceuil
import React from 'react'
import img from '../images/illustrationSmall.png'
const About = () => {
return (

    <div class="about">
        
        <img src={img} alt="" class="about-image"/>
        
        <div class="about-text">
        <p class="specialTitle" > Â propos</p>
        <h4 style={{fontWeight:"bold"}}>Notre créativité est partout </h4> 
        <p >Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Sint autem ratione minima 
            accusamus nam dignis suscit dolore magna</p>
            <button class="about-button">Voir plus</button>
        </div>
    </div>
  )       
}       
    
export default About ;
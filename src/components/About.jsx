import React from 'react'
import img from '../images/illustrationSmall.png'
const About = () => {
    return (

        <div class="about">
            <div className='aboutImg'><img src={img} alt="" /></div>
            <div class="abouText">
                <p class="specialTitle" > Â propos</p>
                <h4 style={{ fontWeight: "bold" }}>Notre créativité est partout </h4>
                <p className='aboutPara'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
                <button class="aboutButton">Voir plus</button>
            </div>
        </div>
    )
}

export default About;
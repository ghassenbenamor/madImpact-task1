import React from 'react'
import pubImg from "../images/pubImg.png";
import cloud from '../images/cloud.png'

const Pub = () => {
  return (
    <div className="pub">
      <div className="pub-container">
        <img src={cloud} alt="xloud" className="cloud1" />
        <img src={cloud} alt="xloud" className="cloud2" />
        <div className="pub-text" >
          <h4>Vous rêvez, Mad Impact crée.</h4>
          <button className='pub-btn'>Vous verrez, c'est stimulant !</button>
        </div>
        <img src={cloud} alt="xloud" className="cloud3" />
        <img src={pubImg} alt="pub" className="pubImg" />
        <img src={cloud} alt="xloud" className="cloud4" />
      </div>
    </div>
  )
}

export default Pub
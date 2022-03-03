import React from 'react'
import play from '../images/play.png'
import introImg from '../images/introSmall.png'
const AccueilIntro = () => {
  return (
    <div className='accueilIntro'>
      <div className="introContainer">
        <div className="acceuilIntroText">
          <h3 id='introTitle'>Devenez la meilleure <br /> version digitale de <br />vous-même !</h3>
          <p>Incredible luctus nec ullamcorper mattis pulvinar dapibus leo</p>
          <div className="acceuilIntroBtnPlay">
            <button className="acceuilIntroBtn">C'est parti</button>
            <div className="acceuilIntroPlay">
              <div className="play">
               <img src={play} alt="play"/> 
              </div>
              
              <p id='playVideo'>Play video</p>
            </div>
          </div>
        </div>
        <div className="introImg"><img src={introImg} alt=""/></div>
        
      </div>
    </div>
  )
}

export default AccueilIntro
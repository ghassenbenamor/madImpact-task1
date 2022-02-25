import React from 'react'
import refref from '../images/refref.png'
const NosRealisations = () => {
  return (
    <div className='nosRealisations'>
        <div className='realContainer'>
        <img src={refref} alt="ref" className='realImg' />
        <div className="realisationsText">
            <h4>Nos réalisations</h4>
            <p>Lorem ipsum dolor sit amet, 
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</p>
        </div>
        </div>
    </div>
  )
}

export default NosRealisations
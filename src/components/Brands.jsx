import React from 'react'
import anoxy from '../images/anoxySmall.png'
import elena from '../images/elenaSmall.png'
import coucous from '../images/couscousSmall.png'
import newDeal from '../images/newDealSmall.png'
import rezFood from '../images/rezFoodSmall.png'
import wok from '../images/wokSmall.png'

const Brands = () => {
  return (
    <div className='brands'>
        <p>Ils nous ont fait confiance...</p>
        <div class="clients-logo">
            <img src={anoxy} alt=""/>
            <img src={wok} alt=""/>
            <img src={rezFood} alt=""/>
            <img src={newDeal} alt=""/>
            <img src={elena} alt=""/>
            <img src={wok} alt=""/>
            <img src={coucous} alt=""/>
            <img src={anoxy} alt=""/>
            <img src={wok} alt=""/>
            <img src={rezFood} alt=""/>
            <img src={coucous} alt=""/>
        
   
    </div>
    </div>
  )
}

export default Brands
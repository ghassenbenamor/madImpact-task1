import React from 'react'
import contactImg from '../images/erp.png';
const Contact = () => {
  return (
    <div className='contact'>
      <div className="contactText">
         <h4 className="specialTitle">Nous contacter</h4>
         <h4>Vous voulez en faire partie ?</h4>
         <p>Incredible luctus nec ullamcorper mattis pulvinar dapibus leo</p>
         <button className='contactBtn'>Restons en contact</button>
      </div>
      <img src={contactImg} alt=""  className='contactImg'/>
      </div>
  )
}

export default Contact
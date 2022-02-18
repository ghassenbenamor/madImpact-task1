import React from 'react'
import tel from '../images/tel.png'
import design from '../images/design.png'
import web from '../images/web.png'
import guy from '../images/guyLittle.png'
import crm from '../images/crm.png'
import maintenance from '../images/maintenance.png'
const Service = () => {
  return (
    <div className='service'>
        <h4 style={{textAlign:'center' , fontSize:'50px'}}>Quels services nous fournissons</h4> 
        <p style={{textAlign:'center' , fontSize:'20px'}}>Nous nous engageons à fournir à nos clients un service exceptionnel tout en offrant à nos employés la meilleure formation.</p>
        <div className="serviceContainer">
        <div className="left">
           <div className="serviceLeft">
               <div className="serviceText">
                  <h4 className='serviceName'>DÉVELOPPEMENT WEB SPÉCIFIQUE</h4> 
                  <p>Lorem ipsum dolor sit amet, consectetur quam</p>
               </div>
               <img src={web} alt=""   className='serviceImg'/>
               </div> 
               <div className="serviceLeft">
               <div className="serviceText">
                  <h4 className='serviceName'>DÉVELOPPEMENT MOBILE</h4> 
                  <p>Lorem ipsum dolor sit amet, consectetur quam</p>
               </div>
               <img src={tel} alt=""  className='serviceImg' />
               </div> 
               <div className="serviceLeft">
               <div className="serviceText">
                  <h4 className='serviceName'>DESIGN GRAPHIQUE</h4> 
                  <p>Lorem ipsum dolor sit amet, consectetur quam</p>
               </div>
               <img src={design} alt="" className='serviceImg' />
               </div> 
        </div>
        <img src={guy} alt="" id='guy'/>
        <div className="right">
            <div className="serviceRight">
                <img src={maintenance} alt="" className='serviceImg' />
                <div className="serviceTextRight">
                <h4 className='serviceName'>MAINTENANTCE</h4>
                <p>Lorem ipsum dolor sit amet, consectetur quam</p>
                </div>
            </div>
            <div className="serviceRight" id='one'>
                <img src={crm} alt=""  className='serviceImg'/>
                <div className="serviceTextRight">
                <h4 className='serviceName'>ERP / CRM</h4>
                <p>Lorem ipsum dolor sit amet, consectetur quam</p>
                </div>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Service
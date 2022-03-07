import React from 'react'
import avatar1 from '../images/avataaars.png'
import avatar2 from '../images/avataaars2.png'
import avatar4 from '../images/avataaars4.png'
import avatar5 from '../images/avataaars1.png'
const Reputation = () => {
    return (
        <div className='reputation'>
            
        <div className="wrapper">

                    <div class="messages-slider">
                        <div class="message-avatar-name">
                            <div class="message">
                                <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                </p>
                            </div>
                          <div className='av'><img src={avatar1} alt="" class="avatar" /></div>  
                            <p>Karlee Burgess</p>
                        </div>
                        <div class="message-avatar-name">
                            <div class="message">
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
                                </p>
                            </div>
                          <div className='av'> <img src={avatar2} alt="" class="avatar" /></div> 
                            <p>Ringit Singh</p>
                        </div>
                        <div class="message-avatar-name">
                            <div class="message">
                                <p>  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                                </p>
                            </div>
                           <div className='av'><img src={avatar4} alt="" class="avatar" /></div> 
                            <p>John Doe</p>
                        </div>
                        <div class="message-avatar-name">
                            <div class="message">
                                <p>  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero </p>

                            </div>
                            <div className='av'><img src={avatar1} alt="" class="avatar" /></div>
                            <p>Lina Burgess</p>
                        </div>
                        <div class="message-avatar-name">
                            <div class="message">
                                <p>  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero 
                                </p>
                            </div>
                            <div className='av'><img src={avatar5} alt="" class="avatar" /></div>
                            <p>Eddy Mc</p>
                        </div>
                    </div>
                </div>
                </div>
       
    )
}

export default Reputation
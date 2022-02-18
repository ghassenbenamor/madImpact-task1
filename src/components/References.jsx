import React, { useState } from 'react'
import check from '../images/check.png'
import tel1 from '../images/tel1.png'
import tel2 from '../images/tel2.png'
import tab from '../images/tab.png'
import pc from '../images/pc.png'
import pc2 from '../images/pc2.png'
import pc3 from '../images/pc3.png'
import pc4 from '../images/pc4.png'

const References = () => {
    const [selected, setSelected] = useState("tout")
    return (
        <div className='references'>
            <p className="specialTitle">  Références</p>
            <div className="refContainer">
                <div className="refMenuBar">
                    <button className="refBtns" onClick={() => setSelected("tout")}>Tout</button>
                    <button className="refBtns" onClick={() => setSelected("mobile")}>Mobile</button>
                    <button className="refBtns" onClick={() => setSelected("web")}>Web</button>
                    <button className="refBtns" onClick={() => setSelected("ui")}>UI / UX</button>
                    <button className="refBtns" onClick={() => setSelected("erp")}>ERP / CRM </button>
                </div>
                <div className="refTemplatesContainer">
                    { selected === "tout" &&
                        <div className='template'> 
                        <div className="templateText">
                            <h4>Toutes nos références</h4>
                            <div className='textCheck'>
                                <img src={check} alt="check" className='check'/>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                            </div>
                            <div className='textCheck'>
                                <img src={check} alt="check" className='check'/>
                                <p>sed diam nonumy</p>
                            </div>
                            <div className='textCheck'>
                                <img src={check} alt="check" className='check' />
                                <p>Eirmod tempor invidunt ut labore</p>
                            </div>
                            </div>
                            <div className="templateSlider">
                                <img src={tel1} alt="" className='sliderImg sone' />
                                <img src={pc} alt="" className='sliderImg' />
                                <img src={tel2} alt="" className='sliderImg' />
                                <img src={tab} alt=""  className='sliderImg'/>
                                <img src={tel1} alt="" className='sliderImg' />
                                <img src={pc2} alt=""  className='sliderImg'/>
                                <img src={tel2} alt="" className='sliderImg'/>
                            </div>
                        </div>
                    }
                    { selected === "mobile" &&
                        <div className='template'> 
                        <div className="templateText">
                            <h4>Applications Mobile Natif</h4>
                            <div className='textCheck'>
                                <img src={check} alt="check" className='check'/>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                            </div>
                            <div className='textCheck'>
                                <img src={check} alt="check" className='check'/>
                                <p>sed diam nonumy</p>
                            </div>
                            <div className='textCheck'>
                                <img src={check} alt="check" className='check' />
                                <p>Eirmod tempor invidunt ut labore</p>
                            </div>
                            </div>
                            <div className="templateSlider">
                                <img src={tel1} alt="" className='sliderImg sone' />
                                <img src={tel2} alt="" className='sliderImg' />
                                <img src={tel1} alt="" className='sliderImg' />
                                <img src={tel2} alt=""  className='sliderImg'/>
                                <img src={tel1} alt="" className='sliderImg' />
                                <img src={tel2} alt=""  className='sliderImg'/>
                                <img src={tel1} alt="" className='sliderImg'/>
                            </div>
                        </div>
                    }
                    { selected === "web" &&
                        <div className='template'> 
                        <div className="templateText">
                            <h4>Développement web sur mesure</h4>
                            <div className='textCheck'>
                                <img src={check} alt="check" className='check'/>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                            </div>
                            <div className='textCheck'>
                                <img src={check} alt="check" className='check'/>
                                <p>sed diam nonumy</p>
                            </div>
                            <div className='textCheck'>
                                <img src={check} alt="check" className='check' />
                                <p>Eirmod tempor invidunt ut labore</p>
                            </div>
                            </div>
                            <div className="templateSlider">
                                <img src={pc} alt="" className='sliderImg sone' />
                                <img src={pc2} alt="" className='sliderImg' />
                                <img src={pc3} alt="" className='sliderImg' />
                                <img src={pc4} alt=""  className='sliderImg'/>
                                
                            </div>
                        </div>
                    }
                    { selected === "erp" &&
                        <div className='template'> 
                        <div className="templateText">
                            <h4>ERP / CRM</h4>
                            <div className='textCheck'>
                                <img src={check} alt="check" className='check'/>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                            </div>
                            <div className='textCheck'>
                                <img src={check} alt="check" className='check'/>
                                <p>sed diam nonumy</p>
                            </div>
                            <div className='textCheck'>
                                <img src={check} alt="check" className='check' />
                                <p>Eirmod tempor invidunt ut labore</p>
                            </div>
                            </div>
                            <div className="templateSlider">
                                <img src={tab} alt="" className='sliderImg sone' />
                                <img src={tab} alt="" className='sliderImg' />
                                <img src={tab} alt="" className='sliderImg' />
                                <img src={tab} alt=""  className='sliderImg'/>
                                
                            </div>
                        </div>
                    }
                    { selected === "ui" &&
                        <div className='template'> 
                        <div className="templateText">
                            <h4>UI / UX</h4>
                            <div className='textCheck'>
                                <img src={check} alt="check" className='check'/>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                            </div>
                            <div className='textCheck'>
                                <img src={check} alt="check" className='check'/>
                                <p>sed diam nonumy</p>
                            </div>
                            <div className='textCheck'>
                                <img src={check} alt="check" className='check' />
                                <p>Eirmod tempor invidunt ut labore</p>
                            </div>
                            </div>
                            <div className="templateSlider">
                                <img src={tel1} alt="" className='sliderImg sone' />
                                <img src={tel2} alt="" className='sliderImg' />
                                <img src={tel2} alt="" className='sliderImg' />
                                <img src={tel1} alt=""  className='sliderImg'/>
                                
                            </div>
                        </div>
                    }
                </div>

            </div>
        </div>
    )
}

export default References
import React from 'react'
import { useState } from 'react'
import b1 from '../images/b1.png'
import b2 from '../images/b2.png'
import b3 from '../images/b3.png'
import b4 from '../images/b4.png'
import checkImg from '../images/check.png';
import missionImg from '../images/missionimg.png';
import dude from '../images/guyLittle.png';
import bg from '../images/illustrationSmall.png';
import cible from '../images/cible.png'
import arbre from '../images/arbre.png'
import lamp from '../images/lamp.png'

const Agency = () => {
    const [clicked, setClicked] = useState("mission")
    return (
        <div className='agency'>
            <div className='partOne'>
                <div className="agencyText">
                    <p className="specialTitle">L'agence</p>
                    <h4>
                        Nous aimons créer & propulser des marques qui se démarquent.
                    </h4>
                    <p className='texto'>
                        La technologie ne doit jamais étre une contrainte. Nous l'envisageons comme le catalyseur de vos résultats.
                    </p>
                    <div className="agencyCheck">
                        <img src={checkImg} alt="" className='check' />
                        <p>Stratégie</p>
                    </div>
                    <div className="agencyCheck">
                        <img src={checkImg} alt="" className='check' />
                        <p>UX Design</p>
                    </div>
                    <div className="agencyCheck">
                        <img src={checkImg} alt="" className='check' />
                        <p>SEO</p>
                    </div>
                    <div className="agencyCheck">
                        <img src={checkImg} alt="" className='check' />
                        <p>Analyse</p>
                    </div>
                    <div className="agencyCheck">
                        <img src={checkImg} alt="" className='check' />
                        <p>Production</p>
                    </div>
                </div>


                <div className="agencyMenu">
                    <div className="menuBar">
                        
                        
                         <button className="menuBtn" onClick={() => setClicked("mission")} tabIndex={0}><img src={cible} className='oimg' alt='o'/>Mission</button>
                            
                        
                     
                         <button className="menuBtn" onClick={() => setClicked("vision")} tabIndex={1}><img src={lamp} className='oimg' alt='o'/>Vision</button>
                            
                      
                    
                         <button className="menuBtn" onClick={() => setClicked("histoire")} tabIndex={2}><img src={arbre} className='oimg iilg' alt='o'/>Histoire</button>
                        
                    </div>
                    <div className='containerPlace'>
                        {clicked === "mission" &&
                            <div className="inner">
                                <p className='innerP'>Chez Mad impact, nous sommes d'avis que 
                                    les défis du web se relèvent  collecteivement. 
                                    Une force sur laquelle nous comptons pour 
                                    établir des stratégies puissantes et concevoir 
                                    des outils performants.</p>
                                <img src={missionImg} alt="" className='innerImg' />
                            </div>
                        }
                        {clicked === "vision" &&
                            <div className="inner">
                                <p className='innerP'>Partenariat pour cela, nous abordons les  relation-clients commme un partenariat à long
                                    terme.
                                </p>

                                <img src={dude} alt="" className='dude'/>
                            </div>
                        }
                        {clicked === "histoire" &&
                            <div className="inner">
                                <p className='innerP specialInner'>Depuis 10 ans, Mad impact essaye de se 
                                    positonner comme un leader dans  le développement
                                    de sites web et d'applications mobiles en ligne en Québec. Notre experience 
                                    et la constate évolution de l'environnement 
                                    technologique dans lesquelles oeuvre notre agence nous ont menés à la maitrise de 
                                    nombresues technologies et d'une  méthdologie de travail rigoureuse.
                                </p>
                                <img src={bg} alt="" id='bg'/>
                            </div>
                        }
                    </div>

                </div>

            </div>


            <div className='partTwo'>
                <div className="box">
                    <h2>350</h2>
                    <p>PROJETS</p>
                    <img src={b1} alt="" />
                </div>
                <div className="box">
                    <h2>300</h2>
                    <p>CLIENTS ACTIFS</p>
                    <img src={b2} alt="" />
                </div>
                <div className="box">
                    <h2>400</h2>
                    <p>TASSES DE CAFÉ</p>
                    <img src={b3} alt="" />
                </div>
                <div className="box">
                    <h2>350</h2>
                    <p>CLIENTS SATISFAITS</p>
                    <img src={b4} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Agency
import React from 'react'
import circles from '../images/circles.png'
const Method = () => {
    return (
        <div className='method'>
            <p className="specialTitle" style={{ textAlign: "center",marginTop:"5%" }}>Notre méthode</p>
            <h4 id='methodIntro'>Comment nous procédons</h4>
            <div className="methodContainer">
               <div className='circles'><img src={circles} alt="circles" /></div> 

                <div className='methodItem item1'>
                    <h5><span>1.</span>CONTACT</h5>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
                </div>
                <div className='methodItem item2'>
                    <h5><span>2.</span>ESTIMATION</h5>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
                </div>
                <div className='methodItem item3'>
                    <h5><span>3.</span>RECHERCHE</h5>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
                </div>
                <div className='methodItem item4'>
                    <h5><span>4.</span>PRODUCTION</h5>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
                </div>
            </div>
        </div>

    )
}

export default Method
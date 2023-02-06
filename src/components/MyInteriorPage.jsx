import React, { useState } from 'react'
// import './InteriorPage.css'
import mainImage from '../interior-consultant-master/photo1.png'
import cardImage from '../interior-consultant-master/photo2.png'
import NavOverlay from './NavOverlay';
export default function MyInteriorPage() {

  const [menu , setMenu] = useState(false);

  
  return (
    <div className='interiorPage'>
        <div className='header'>
          <button className='headerButton'>
          This Interior
          </button>
          <nav>
            <ul className="nav mainNav" >
                <li><a href='/' >Home</a></li>
                <li><a href='/' >Collection</a></li>
                <li><a href='/' >About</a></li>
                <li><a href='/' >Contact</a></li>
            </ul>
          </nav>
            <span className='hamburgerIcon' onClick={()=>setMenu(true)}> &#x2630; </span>
        </div>
        {          menu && <NavOverlay setMenu={setMenu}/>
}
    <div className='mainSection'>
          <div className='text'>
            <h2>Modern interior</h2>
            <p>
            A full-Service residential & commercial interior design
            and stagingcompany offering professional organizing & eco-services.
            </p>
            <div className='mainButton'>
            <button>Read more </button>
            <span className='arrow'>&#8594;</span>
            </div>

          </div>
          <div className='imageSection' >
                <img className='mainImage' src={mainImage} alt='mainImage'/>
              
         
              <div className='card'>
                    <div className='info'>
                          <img src={cardImage} alt='cardImage' className='cardImage'/>
                      <div className='subDate'>
                          <p className='name'>
                            Aliza Webber
                          </p>
                          <span>
                          Interior designer
                          </span>
                      </div>
                    </div>
                    <p>
                    Designed in 2020 by Aliza Webber
                    </p>
              </div>
          </div>

    </div>



    </div>
  )
}

import React from 'react'
import img from '../404-not-found-master/404-not-found-master/Scarecrow.png'
import './NotFoundPage.css'
export default function NotFoundPage() {
  return (<div className='NotFound'>
  <nav>404 Not found
            </nav>
    <div className='NotFoundPage'>
            

<div className='image '>
          <img src={img} alt='Scarecrow' />
      </div>

    <div>
          <h1> I have bad news for you </h1>
          <p> The Page you are looking for might removed or is temporary unavailable</p>

          <button >Back Home Page</button>
    </div>



    </div>
    </div>
  )
}

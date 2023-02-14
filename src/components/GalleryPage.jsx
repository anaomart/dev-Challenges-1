import React from 'react'
// import './GalleryPage.css'
import profileImage from '../my-gallery-master/profilePhoto.png'
import profile1 from '../my-gallery-master/photo1.png'
import profile2 from '../my-gallery-master/photo2.png'
import profile3 from '../my-gallery-master/photo3.png'
import profile4 from '../my-gallery-master/photo_4.png'
import profile5 from '../my-gallery-master/photo5.png'
import profile6 from '../my-gallery-master/photo6.png'
export default function GalleryPage() {
  return (
    <div className='galleryPage'>
        <div className='card'>
            <div className='info'>
                <img src={profileImage} alt='profileImage' />
                <h2>Rodney Cotton </h2>
                <span>Rodney Cotton</span>
            </div>
            <div className='info-numbers'>
                <div>
                    <p>100</p>
                    <span>Posts</span>
                </div>
                <div>
                    <p>2,242</p>
                    <span>Follower</span>
                </div>
                <div>
                    <p>1,432</p>
                    <span>Following</span>
                </div>
                 </div>
        </div>
        <section>
            <img className='photo1' src={profile1} alt='GalleryImage' />
            <img className='photo2' src={profile2} alt='GalleryImage' />
            <img className='photo3' src={profile3} alt='GalleryImage' />
            <img className='photo4 noHeight' src={profile4} alt='GalleryImage' />
            <img className='photo5' src={profile5} alt='GalleryImage' />
            <img  className='photo6'src={profile6} alt='GalleryImage' />

        </section>




    </div>
  )
}

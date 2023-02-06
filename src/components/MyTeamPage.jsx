import React from 'react'
// import './MyTeamPage.css'
import photo1 from '../my-team-page-master/my-team-page-master/photo1.png'
import photo2 from '../my-team-page-master/my-team-page-master/photo2.png'
import photo3 from '../my-team-page-master/my-team-page-master/photo3.png'
import photo4 from '../my-team-page-master/my-team-page-master/photo4.png'
import photo5 from '../my-team-page-master/my-team-page-master/photo5.png'
import photo6 from '../my-team-page-master/my-team-page-master/photo6.png'
export default function MyTeamPage() {
    return (
        <div className='MyTeamPage'>
            <div className='text'>

                <h2>The creative crew </h2>

                <div>
                    <h3>Who we are</h3>

                    <p>
                    We are team of creatively diverse. 
                    driven. innovative individuals working
                    in various locations from the world.

                    </p>
                </div>
            </div>
            <div className='cards'>
                <div className="card"  data-job='Product owner'>
                    <div className= 'image'>
                        <img src={photo1} alt='avatar'/>
                    </div>
                    <span>Bill Mahoney</span>
                </div>
                <div className="card down"  data-job='Art director'>
                    <div>
                        <img src={photo2} alt='avatar'/>
                    </div>
                    <span>Saba Cabrera</span>
                </div>
                <div className="card"  data-job='Tech Lead'>
                    <div>
                        <img src={photo3} alt='avatar'/>
                    </div>
                    <span>Shae Le</span>
                </div>
                <div className="card"  data-job='UX Designer'>
                    <div>
                        <img src={photo4} alt='avatar'/>
                    </div>
                    <span>Skylah Lu</span>
                </div>
                <div className="card down"  data-job='Developer'>
                    <div>
                        <img src={photo5} alt='avatar'/>
                    </div>
                    <span>Griff Richards
</span>
                </div>
               
                <div className="card"  data-job='DEverloper'>
                    <div>
                        <img src={photo6} alt='avatar'/>
                    </div>
                    <span>Stan John
</span>
                </div>
            </div>
        </div>
)
}

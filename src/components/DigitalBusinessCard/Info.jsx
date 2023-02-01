import React from 'react'
import image from "../../images/me.JPG"
export default function Info() {
  return (
    // <div className='info'>
    <>
        <div className="img-box">
        <img src={image} alt="" srcset=""   />
        </div>
        <h1 className='info-name'>Abdurzaq</h1>
        <h5 className='info-job'>Frontend Developer</h5>
        <h6 className='info-web'>ADQ.website</h6>
        <div className="button-box">
            <button className='email button'>
                 <i class="fa-solid fa-envelope"></i>
                <span> Email</span>
            </button>
            <button className='linkedin button'>
                <i class="fa-brands fa-linkedin"></i>
                <span>Linkedin</span>
            </button>
        </div>
    {/* </div> */}
    </>
  )
}

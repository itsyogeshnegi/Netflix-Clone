import React from 'react'
import './Profile.css'
const Profile = () => {
    return (
        <div className='profilePage'>
            <div className='profilePageUpper'>
                <div className='upper'>
                    <i class="fa-solid fa-bell"></i>
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div className='lower'>
                    <button id='none'><i class="fa-solid fa-heart"></i> Follow</button>
                    {/* <button id='none'><i class="fa-solid fa-plus" ></i> View More</button> */}
                </div>
            </div>
            <div className='profilePageLower'>
                <div className='lowerLeft'>
                    <div className='profileSide'>
                        <div className='profilePhoto'>
                        </div>

                    </div>
                    <div className='profileName'>
                        <div className='CheckName'>
                            <h2>Your Name</h2>
                            <h4>Email@gmail.com</h4>
                        </div>
                        <div className='promotions'>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-whatsapp"></i>
                        <i class="fa-brands fa-pinterest"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-twitch"></i>
                        <i class="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div className='lowerRight'></div>
            </div>
        </div>
    )
}

export default Profile

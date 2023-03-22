import React from 'react'
import './NetflixHomePage.css'
import TopBar from '../../Components/HomePageComponents/TopBar/TopBar'
import NetflixSlider from '../../Components/HomePageComponents/NetflixSlider/NetflixSlider'
import NetflixBanner from '../../Components/HomePageComponents/NetflixBanners/NetflixBanner'
const NetflixHomePage = () => {
    return (
        <div className='Netflix-Home'>
            <TopBar />
            <NetflixSlider />
            <NetflixBanner />
        </div>
    )
}

export default NetflixHomePage

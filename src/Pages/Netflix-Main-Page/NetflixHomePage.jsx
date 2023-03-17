import React from 'react'
import './NetflixHomePage.css'
import TopBar from '../../Components/HomePageComponents/TopBar/TopBar'
import NetflixSlider from '../../Components/HomePageComponents/NetflixSlider/NetflixSlider'
const NetflixHomePage = () => {
    return (
        <div className='Netflix-Home'>
            <TopBar />
            {/* <NetflixSlider /> */}
        </div>
    )
}

export default NetflixHomePage

import React from 'react'
import Main_Mini_component from '../../Components/Mini-Sliders/Main_Mini_component'
import Slider from '../../Components/Slider-Page/Slider'
import Asked_Questions from '../../Components/Asked-Questions/Asked_Questions'
import Footer from '../../Components/Footer/Footer'
const Introduction = () => {
    return (
        <div className='Introduction'>
            <Slider />
            <Main_Mini_component />
            <Asked_Questions />
            <Footer />
        </div>
    )
}

export default Introduction

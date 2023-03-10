import React from 'react'
import './Mini_Slider.css'
const Mini_Slider = ({ heading, text, photos, reverse }) => {
    return (
        <div className={`mini_slider ${reverse && "reverse"}`}>
            <div className='tv_text'><h1>{heading}</h1><br /><h3>{text}</h3></div>
            <div className='tv_images'>{photos}</div>
        </div>
    )
}

export default Mini_Slider

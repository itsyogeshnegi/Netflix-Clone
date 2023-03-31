import React, { useState } from 'react'
import './TopBar.css';
import { Link } from "react-router-dom"
const TopBar = () => {

    const [show, handleShow] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 95) {
            handleShow(true);
        } else handleShow(false);
    });

    return (
        <div className={`nav_logo ${show && "nav__bar__shadow"}`}>
            <div className='MainLogo'>
                <img className='banner_logo'
                    src='/Netflix_logo1.png' alt='NetFlix_Icon' />
            </div>

            <div className='optins'>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
            </div>
            <div className='LogOut'>
                <i class="fa-solid fa-magnifying-glass" id="block"></i>
                <i class="fa-solid fa-bell" id="block"></i>
               <Link to={"/profile"} style={{"height":"100%"}}><img src='/NetflixAvatar.png' height={"100%"} title="Profile" /></Link> 
                <Link to={"/"} style={{color:"white", "paddingLeft":"20px"}}><i class="fa-solid fa-right-from-bracket" title='Log Out'></i></Link>
            </div>

        </div>
    )
}

export default TopBar

import React from 'react'
import './Stepthree.css'
import { Link } from "react-router-dom"
const Stepthree = () => {
    return (
        <div className='stepthree'>
            <div className='stepthree_logo'>
                <img src='/Netflix_logo1.png' style={{ height: "100%" }} />
            </div>
            <hr />

            <div className='Finish_setting'>
                <div className='manyIcons'>
                    <i class="fa-solid fa-laptop" id='laptop'></i>
                    <i class="fa-solid fa-desktop" id='desktop'></i>
                    <i class="fa-solid fa-tablet" id='tablet'></i>
                    <i class="fa-solid fa-mobile-button" id='mobile'></i>
                </div>

                <div className='finshText'>
                    <p>STEP 3 OF 3</p>
                    <h2>Finish setting up your <br /> account</h2>
                </div>

                <div className='manypara'>
                    <p>Netflix is personalised for you. Create a password to watch on any device at any time.</p>
                </div>

                <div className='finishButton'>
                    <button><Link to={"/login"} style={{ textDecoration: "none", color: "white" }}>Next</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Stepthree

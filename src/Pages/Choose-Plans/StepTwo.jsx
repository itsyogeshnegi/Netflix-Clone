import React from 'react'
import './StepTwo.css'
import { Link } from "react-router-dom"
const StepTwo = () => {
    return (
        <div className='steptwo'>
            <div className='two_logo'><img src='/Netflix_logo1.png' /></div>
            <hr />
            <div className='two_text'>
                <p>STEP 1 OF 2</p>
                <h1>Choose the plan that’s right for you</h1>
                <p><i class="fa-solid fa-check"></i> Watch all you want. Ad-free.</p>
                <p><i class="fa-solid fa-check"></i>Recommendations just for you.</p>
                <p><i class="fa-solid fa-check"></i>Change or cancel your plan anytime.</p>
            </div>

            <div className='two_plans'>
                <div className='plans_started1'>
                    <div className='box1'></div>
                    <div className='box2'>Monthly price</div>
                    <hr />
                    <div className='box2'>Video quality</div>
                    <hr />
                    <div className='box2'>Resolution</div>
                    <hr />
                    <div className='box2'>Devices you can use to watch</div>
                </div>
                <div className='plans_started'>
                    <div className='box1'>
                        <div className='tag_box'>Mobile</div>
                    </div>
                    <div className='box2'>₹149</div>
                    <hr />
                    <div className='box2'>Good</div>
                    <hr />

                    <div className='box2'>480p</div>
                    <hr />

                    <div className='box3'>
                        <i class="fa-solid fa-mobile"></i>
                        <i class="fa-solid fa-tablet"></i>
                    </div>
                </div>
                <div className='plans_started'>
                    <div className='box1'>
                        <div className='tag_box'>Basic</div>
                    </div>
                    <div className='box2'>₹199</div>
                    <hr />

                    <div className='box2'>Good</div>
                    <hr />

                    <div className='box2'>720p</div>
                    <hr />

                    <div className='box3'>
                        <i class="fa-solid fa-mobile"></i>
                        <i class="fa-solid fa-tablet"></i>
                        <i class="fa-solid fa-computer"></i>
                        <i class="fa-solid fa-tv"></i>
                    </div>
                </div>
                <div className='plans_started'>
                    <div className='box1'>
                        <div className='tag_box'>Standard</div>
                    </div>
                    <div className='box2'>₹499</div>
                    <hr />

                    <div className='box2'>Better</div>
                    <hr />

                    <div className='box2'>1080p</div>
                    <hr />

                    <div className='box3'>
                        <i class="fa-solid fa-mobile"></i>
                        <i class="fa-solid fa-tablet"></i>
                        <i class="fa-solid fa-computer"></i>
                        <i class="fa-solid fa-tv"></i>
                    </div>
                </div>
                <div className='plans_started'>
                    <div className='box1'>
                        <div className='tag_box'>Premium</div>
                    </div>
                    <div className='box2'>₹649</div>
                    <hr />

                    <div className='box2'>Best</div>
                    <hr />

                    <div className='box2'>4K-HD</div>
                    <hr />

                    <div className='box3'>
                        <i class="fa-solid fa-mobile"></i>
                        <i class="fa-solid fa-tablet"></i>
                        <i class="fa-solid fa-computer"></i>
                        <i class="fa-solid fa-tv"></i>
                    </div>
                </div>

            </div>
            <div className='two_buttons'>
                <p>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.</p>
                <br />
                <p>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
                <button><Link to={"/stepthree"} style={{ textDecoration: "none", color: "white" }}>Next</Link></button>
            </div>
        </div>
    )
}

export default StepTwo

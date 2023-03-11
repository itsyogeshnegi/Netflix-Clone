import React from 'react'
import './Slider.css'
import Login from '../../Pages/Login/Login'
import { Link } from 'react-router-dom'
const Slider = () => {
    return (
        <div className='Slider'>
            {/* <img src="https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/eb90437e-a876-47c3-a138-ca27772a4d2a/IN-en-20230306-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/eb90437e-a876-47c3-a138-ca27772a4d2a/IN-en-20230306-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/eb90437e-a876-47c3-a138-ca27772a4d2a/IN-en-20230306-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/eb90437e-a876-47c3-a138-ca27772a4d2a/IN-en-20230306-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt=""></img> */}
            <div className='Header'>
                <div className='logo'>
                    <img src='/Netflix_logo1.png' />
                </div>
                <div className='sign-up'>
                    <div className='drop_down'>
                        <i class="fa-solid fa-globe"></i>
                        <select>
                            <option value={"English"} >English</option>
                            <option value={"Hindi"}>Hindi</option>
                        </select>
                    </div>

                    <button><Link to={"/signup"}>Sign-up</Link></button>
                </div>
            </div>
            <div className='Center_Box'>
                <div className='text1'>
                    <h1>Unlimited movies, TV<br /> shows and more.</h1>
                </div>
                <div className='text2'>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                </div>
                <div className='text3'>
                    <p>Ready to watch? Enter your email to create or restart your membership.</p>
                </div>
                <div className='text'>
                    <input type={"email"} placeholder="Email Address" required title='login_page' /><button><Link to={'/login'}>Get Started</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Slider

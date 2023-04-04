import React from 'react'
import './Asked_Questions.css'
import Questions_box from './Questions_box'
import { Link } from "react-router-dom"
const Asked_Questions = () => {
    return (
        <div className='Main_Asked_Questions'>
            <div className='Main_Asked_top'><h1>Frequently Asked Questions</h1></div>
            <div className='center_Asked'>
                <Questions_box
                    Questions={"What is Netflix ?"}
                    Answers={"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices."}
                />
                <Questions_box
                    Questions={"How much does Netflix cost ?"}
                    Answers={"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."}
                />
                <Questions_box
                    Questions={"Where can i watch ?"}
                    Answers={"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
                    }
                />
                <Questions_box
                    Questions={"How do i cancel ?"}
                    Answers={"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."}
                />
                <Questions_box
                    Questions={"What can i watch on Netflix ? "}
                    Answers={"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."}
                />
                <Questions_box
                    Questions={"Is Netflix good for kids"}
                    Answers={"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space."}
                />
            </div>
            <div className='bottom_Asked'>
                {/* <div className='bottom_inside'> */}
                <div className='text'>
                    <input type={"email"} placeholder="Email Address" required /><button><Link to={"/login"} style={{textDecoration:"none" , color:"white"}}>Get Started</Link></button>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Asked_Questions

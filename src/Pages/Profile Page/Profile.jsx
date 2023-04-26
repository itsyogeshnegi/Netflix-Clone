import React, { useState } from 'react'
import './Profile.css'
import { getDatabase, ref, child, get } from "firebase/database";
import firebase from 'firebase/app';
const Profile = () => {

    // const [myName, setMyName] = useState("")
    // const [email, setemail] = useState("")

    // const dbRef = ref(getDatabase());

    // const myData = () => {
    //     get(dbRef, `User/${email}`).then((snapshot) => {
    //         if (snapshot.exists()) {
    //             console.log(snapshot.val());
    //         } else {
    //             console.log("No data available");
    //         }
    //     }).catch((error) => {
    //         console.error(error);
    //     });
    // }

    return (
        <div className='profilePage'>
            <div className='profilePageUpper'>
                <div className='upper'>
                    <i class="fa-solid fa-bell"></i>
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div className='lower'>
                    <button id='none'><i class="fa-solid fa-heart"></i> Follow</button>
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
                            {/* <button onClick={myData} style={{ width: "40%", "height": "50px" }}>MY DATA</button> */}
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
                <div className='lowerRight'>
                    <div className='lowerRight-Box'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi ullam sit magnam obcaecati ex, fugit esse maiores eius nam officiis sint sunt. Modi laborum hic cumque odit. Nam aliquam quas laborum, reprehenderit, perspiciatis officia quos, magni nisi iure vel enim repellendus assumenda aut quam odio incidunt commodi non. Porro consequuntur minima veritatis doloremque similique rerum, accusamus magnam sed sint officiis sit ad nostrum voluptatem distinctio harum perspiciatis est expedita voluptatibus quisquam nulla quasi eum. Architecto explicabo asperiores est sunt repudiandae reprehenderit excepturi, totam provident, vero reiciendis facilis cum consequatur dolorem assumenda quas delectus dicta. Temporibus neque, doloremque architecto magni tempora iusto ipsum, nam totam atque vero quaerat ab nisi nobis sapiente eos libero consectetur aspernatur at officiis numquam animi quidem perferendis nesciunt? Sit maxime voluptates voluptatum officiis rerum error, aut eos asperiores nam illo sunt nesciunt aliquid possimus aperiam, eaque vero veniam quae. Atque assumenda, sint libero ipsum ut veritatis.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile

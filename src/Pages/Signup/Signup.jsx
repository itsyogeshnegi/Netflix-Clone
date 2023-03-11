import React from 'react'
import './Signup.css'
const Signup = () => {
    return (
        <div className='signup'>
            <h1>Sign-Up</h1>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Signup

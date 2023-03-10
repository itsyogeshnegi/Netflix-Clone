import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <div className='Login'>
            <form>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

export default Login

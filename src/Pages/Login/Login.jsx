import React, { useState } from 'react'
import './Login.css'
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom'
import StepOne from '../Choose-Plans/StepOne';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    //getting email password
    const userName = localStorage.getItem("email")
        ? localStorage.getItem("email")
        : "admin@admin.com";
    const userPassword = localStorage.getItem("password")
        ? localStorage.getItem("password")
        : "admin";

    //submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === userName && password === userPassword) {
            toast.success("Login Success");
            navigate("/stepone");
        } else {
            toast.error("Invalid Email OR password");
        }
    };

    return (
        <div className='Login'>
            <h1>Log-In</h1>
            <form>
                <input type="email" placeholder='Email' value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <input type="password" placeholder='Password' value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type="submit" onClick={handleSubmit}>SUBMIT</button>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default Login

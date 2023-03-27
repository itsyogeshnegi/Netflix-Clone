import React, { useState } from 'react'
import './Login.css'
import { toast, ToastContainer } from "react-toastify";
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import StepOne from '../Choose-Plans/StepOne';
import 'react-toastify/dist/ReactToastify.css';
import { get, getDatabase, ref, child, Database } from 'firebase/database'
import { app } from '../../Firebaseconnection'


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const auth = getAuth(app);

    //getting email password
    // const userName = localStorage.getItem("email")
    //     ? localStorage.getItem("email")
    //     : "admin@admin.com";
    // const userPassword = localStorage.getItem("password")
    //     ? localStorage.getItem("password")
    //     : "admin";

    //submit function
    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "") {
            toast.warning("Fill your Email")
        }
        else if (password === "") {
            toast.warning("Fill your Password")
        }
        else {
            signInWithEmailAndPassword(auth, email, password)
                .then((value) => navigate("/stepone"))
                .catch((err) => toast.error("Invaild Id or Password"))
        }
    };

    return (
        <div className='Login'>
            <form>
                <h1>Log In</h1>

                <input type="email" placeholder='Email' value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <input type="password" placeholder='Password' value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type="submit" onClick={handleSubmit}>SUBMIT</button>
                <p>New to Netflix? <Link to="/signup" style={{ color: "white" }}> Sign up now</Link></p>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={1000}
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

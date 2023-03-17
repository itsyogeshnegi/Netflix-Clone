import React, { useState } from 'react'
import './Signup.css'
import { getDatabase } from "firebase/database"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from '../../Firebaseconnection'
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const db = getDatabase(app);
    const auth = getAuth(app);
    const navigate = useNavigate();

    const sendData = async (e) => {

        e.preventDefault();
        var atposition = email.indexOf("@");
        var dotposition = email.lastIndexOf(".");

        if (name === "") {
            toast.error("Name is required")
        }
        else if (email === "") {
            toast.warning("Email is required")
        }
        else if (atposition < 3 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
            toast.error(" Wrong Email")
        }
        else if (password === "") {
            toast.error("password is required")
        }
        else if (password.length < 6) {
            toast.warning("Your password minimum 6 digit")
        }
        else {
            toast.success("Create Done",
                createUserWithEmailAndPassword(auth, email, password).then((value) => console.log("create Done")))
            navigate("/");
        };
    }

    return (
        <div className='signup' >
            <form>
                <h1>Sign Up</h1>

                <input
                    name='name'
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                // required
                />

                <input
                    name='email'
                    type="email"
                    placeholder='Email'
                    // required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    name='password'
                    type="password"
                    placeholder='Password'
                    value={password}
                    // required
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" onClick={sendData}>SUBMIT</button>
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
        </div >
    )
}

export default Signup

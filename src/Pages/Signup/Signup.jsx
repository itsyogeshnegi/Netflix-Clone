import React, { useState } from 'react'
import './Signup.css'
import { getDatabase, ref, set, onValue, DataSnapshot, push } from "firebase/database"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from '../../Firebaseconnection'
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const db = getDatabase(app);
    const navigate = useNavigate();

    // const sendData = (e) => {
    //     e.preventDefault()
    //     if (name === "") {
    //         alert("Name is required")
    //     }
    //     else if (email === "") {
    //         alert("Email is required")
    //     }
    //     else if (password === "") {
    //         alert("password is required")
    //     }
    //     else {
    //         localStorage.setItem("name", name);
    //         localStorage.setItem("email", email);
    //         localStorage.setItem("password", password);
    //         toast.success("submit is Done")
    //     }
    // }

    const sendData = async (e) => {

        e.preventDefault();
        var atposition = email.indexOf("@");
        var dotposition = email.lastIndexOf(".")

            ; if (name === "") {
                toast.error("Name is required")
            }
        else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length || email === "") {
            toast.error("Email is required")
        }
        else if (password === "") {
            toast.error("password is required")
        }
        else {
            toast.success(

                // db.push("root/users", { name, email, password })

                push(ref(db, "users/"), {
                    name,
                    email,
                    password
                })
            )
            navigate("/");
        };
    }

    return (
        <div className='signup' >
            <h1>Sign-Up</h1>
            <form>
                <input
                    name='name'
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <input
                    name='email'
                    type="email"
                    placeholder='Email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    name='password'
                    type="password"
                    placeholder='Password'
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" onClick={sendData}>SUBMIT</button>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={3000}
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

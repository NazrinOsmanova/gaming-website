import React from 'react'
import Nav from './nav'
import Header from './header'
import Footer from './footer'
import userPhoto from '../Images/userPhoto.png'
import { Link } from 'react-router-dom';
import { useState } from 'react'

const Login = () => {
    const [isLocked, setIsLocked] = useState(true);
    const shadow = () => {
        document.querySelector(".loginMain .container").classList.add("shadow")
    }
    const deleteShadow = (e) => {
        e.target.classList.remove("shadow")
    }
    const lock = () => {
        setIsLocked(!isLocked);
    }
    return (
        <>
            <Header />
            <Nav />
            <main className='loginMain'>
                <div onMouseOver={shadow} onMouseLeave={deleteShadow} className="container">
                    <img src={userPhoto} alt="userPhoto" />
                    <h3>Create an Account</h3>
                    <form action="/login">
                        <div>
                            <i className="fa-solid fa-file-signature"></i>
                            <input type="text" placeholder='Enter your name' />
                        </div>
                        <div>
                            <i className="fa-solid fa-user-ninja"></i>
                            <input type="text" placeholder='Enter your user name' />
                        </div>
                        <div>
                            <i onClick={lock} className={isLocked ? "fa-solid fa-lock" : "fa-solid fa-unlock"}></i>
                            <input type={isLocked ? "password" : "text"} placeholder='Enter your password' />
                        </div>
                        <button>Login</button>
                    </form>
                    <div className="down">
                        <p>Already have an account? <i className="fa-solid fa-arrow-right"></i> </p>
                        <Link to="/signin2">
                            <p>Sign In</p>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Login
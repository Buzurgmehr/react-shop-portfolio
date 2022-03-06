import React from 'react'
import Header from '../components/Header'
import '../styles/SignUp.scss'
const SignUp = () => {
    return (
        <div>
            <Header/>
            <div className="forms">
                <form action="" className="form">
                    <label htmlFor="">UserName</label>
                    <input type="text" placeholder="Username"/>
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Email"/>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Password"/>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
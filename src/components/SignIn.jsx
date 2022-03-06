import React from 'react'
import '../styles/SignIn.scss'
import Header from '../components/Header'

const SignIn = () => {
    return (
        <div>
            <Header/>
            <div className="forms">
                <form action="" className="form">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Email"/>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Password"/>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default SignIn
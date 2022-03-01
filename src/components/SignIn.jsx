import React from 'react'
import '../styles/SignIn.scss'


const SignIn = () => {
  return (
      <div className="forms">
          <form action="" className="form">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Email" />
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Password" />
              <button type="submit">Sign In</button>
          </form>
    </div>
  )
}

export default SignIn
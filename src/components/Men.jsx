import React from 'react'
import Header from '../components/Header'
import  '../styles/Men.scss'
const Men = () => {
  return (
      <div>
            <Header/>
            <div className="men">
                <div className="men-header">
                    <h1>Coming Soon</h1>
                    <p>Available in 2023</p>
                </div>
                <div className="look">
                    <p>With many new brands</p>
                    <button>Take a look</button>
                </div>
            </div>
        </div>
  )
}

export default Men
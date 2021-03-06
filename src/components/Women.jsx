import React from 'react'
import Header from '../components/Header'
import '../styles/Women.scss'

const Women = () => {
    return (
        <div>
            <Header/>
            <div className="women">
                <div className="women-header">
                    <h1>Women Collections</h1>
                    <p>Available in May</p>
                </div>
                <div className="look">
                    <p>Till 05.2022 special discount for all products</p>
                    <button>All Products</button>
                </div>
            </div>
        </div>
    )
}

export default Women
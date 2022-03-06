import React from 'react'
import {Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import '../styles/Header.scss';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul className="ul-items">
                    <li className="li-items">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/women"}>Women</Link>
                        <Link to={"/men"}>Men</Link>
                        <Link to={"/kids"}>Kids</Link>
                        <Link to={"/discount"} className="orange">Discount</Link>
                    </li>
                </ul>
                <div className="logo">

                    <h1>
                        <Link to={"/"}/>E-Market</h1>
                </div>
                <div className="right">
                    <div className="search">
                        <SearchIcon className="search-icon"/>
                        <button className="search-btn">Search</button>
                    </div>
                    <div className="right-buttons">
                        <button>
                            <Link to={"/sign-in"}>
                                Sign In</Link>
                        </button>
                        <button>
                            <Link to={"/sign-up"}>
                                Sign Up</Link>
                        </button>
                        <AddShoppingCartIcon className="basket"/>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
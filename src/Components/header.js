import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Images/logo.PNG';

const Header = () => {
    const location = useLocation();

    const slider = () => {
        if (document.querySelector("nav") && !document.querySelector("nav").classList.contains("block")) {
            document.querySelector("nav").classList.add("block");
        } else if (document.querySelector("nav")) {
            document.querySelector("nav").classList.remove("block");
        }
    };

    window.addEventListener('resize', function () {
        if (window.innerWidth <= 500) {
            if (document.querySelector("input")) {
                document.querySelector("input").placeholder = 'Search';
            }
        }
    });

    return (
        <>
            <header>
                <div className="left">
                    {
                        (location.pathname !== '/login' && location.pathname !== '/signin2') && (
                            <i onClick={slider} className="fa-solid fa-sliders"></i>
                        )
                    }
                    <Link to="/gaming-website">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="search">
                    <input type="text" placeholder='Enter game name' />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="right">
                    <Link to="/login">
                        <button>Log in</button>
                    </Link>
                    <Link to="/signin2">
                        <i className="fa-regular fa-user"></i>
                    </Link>
                </div>
            </header>
        </>
    );
}

export default Header;

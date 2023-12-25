import React from 'react'
import { Link } from 'react-router-dom';

const footer = () => {
    return (
        <>
            <footer>
                <div className="up">
                    <p>New games are on the way! The game collection on the site will expand over time.</p>
                    <ul className='ul1' >
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                    <ul className='ul1'>
                        <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa-brands fa-whatsapp"></i></a></li>
                    </ul>
                </div>
                <div className="down">
                    <p>Created by
                        <Link to="https://github.com/NazrinOsmanova">
                            Nazryn
                        </Link>
                    </p>
                </div>
            </footer>
        </>
    )
}

export default footer
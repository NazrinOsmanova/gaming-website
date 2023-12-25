import React from 'react'

const nav = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><a href="#"><i className="fa-solid fa-house"></i>Home</a></li>
                    <li><a href="#"><i className="fa-solid fa-meteor"></i>New</a></li>
                    <li><a href="#"><i className="fa-solid fa-star"></i>Trending</a></li>
                </ul>
                <ul>
                    <li><a href="#"><i className="fa-solid fa-user-plus"></i>2 Player</a></li>
                    <li><a href="#"><i className="fa-brands fa-space-awesome"></i>Action</a></li>
                    <li><a href="#"><i className="fa-solid fa-bicycle"></i>Bike</a></li>
                    <li><a href="#"><i className="fa-solid fa-house"></i>Card</a></li>
                    <li><a href="#"><i className="fa-solid fa-palette"></i>Painting</a></li>
                    <li><a href="#"><i className="fa-solid fa-brush"></i>Color</a></li>
                </ul>
            </nav>
        </>
    )
}

export default nav
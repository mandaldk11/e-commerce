import React from 'react'
import './style.css'
import { BsCart } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function SideNavBar() {
    return (
        <div className='sidebar'>

            <Link to='/'> <li style={{ color: 'white' }}><i class="fa-duotone fa-house"></i> Home</li></Link>

            <Link to='/carrier'>  <li style={{ color: 'white' }}><i class="fa-light fa-truck-fast"></i>Carrier</li> </Link>
            <Link to='/contact'>  <li style={{ color: 'white',textDecoration:'none' }}><i class="fa-solid fa-phone"></i>Contact Us</li> </Link>

            <Link to='/cart'><li style={{ color: 'white' }}><BsCart />cart</li></Link>

            <Link to='/about' style={{ color: 'white' }} ><li><i class="fa-solid fa-earth-americas"></i>About</li></Link>

        </div>
    )
}

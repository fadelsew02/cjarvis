
import React from 'react'
import logo from '../../assets/logo.jpg'

const Header = () => {
  return (
        <header>
        <div class="logo">
            <a href="./index.html">
                <img src={logo} alt="logo CJARVIS"/>
            </a>
        </div>
        <nav>
            <ul>
                <li>
                    <a href="./index.html" class="active">Home</a>
                </li>
                <li>
                    <a href="./index.html">Services</a>
                </li>
                <li>
                    <a href="./index.html">FAQ</a>
                </li>
                <li>
                    <a href="./index.html">Contact</a>
                </li>
                <li>
                    <a href="./index.html" class="btn">Sign up</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
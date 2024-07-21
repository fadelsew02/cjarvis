
import React from 'react'
import logo from '../../assets/logo.jpg'

const Footer = () => {
  return (
    <footer>
        <div className="top">
            <div className="app">
                <img src={logo} alt=""/>
                <p> CJARVIS is an AI assistant designed for students. It's an everyday companion with which you can converse</p>
            </div>
            <div className="others">
                <div className="quick-links">
                    <h3>Quick links</h3>
                    <div className="links">
                        <a href="./index.html">Blog</a>
                        <a href="./index.html">FAQ</a>
                        <a href="./index.html">Sign up</a>
                    </div>
                </div>
                <div className="quick-links">
                    <h3>Services</h3>
                    <div className="links">
                        <a href="./index.html">Answering questions</a>
                        <a href="./index.html">Academic performance Optimization</a>
                        <a href="./index.html">Personalized recommendations</a>
                    </div>
                </div>
                <div className="quick-links">
                    <h3>Business Solution</h3>
                    <div className="links">
                        <a href="./index.html">Partnership</a>
                        <a href="./index.html">About Project</a>
                        <a href="./index.html">Corporate</a>
                    </div>
                </div>
            </div>
        </div>
        <hr/>
        <div className="bottom">
            <div className="copyright">
                &copy; CJARVIS 2024
            </div>
            <div className="socials-links">
                <i className="facebook-link">fa</i>
                <i className="twitter-link">tw</i>
                <i className="instagram-link">in</i>
            </div>
        </div>
    </footer>
  )
}

export default Footer
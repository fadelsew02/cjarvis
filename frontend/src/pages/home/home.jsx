import React from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

import ima from '../../assets/presentation.png'
import icon from "../../assets/service-icon.jpg"
import cjarvis from "../../assets/cjarvis-work.png"

import './style.css'

const Home = () => {
  return (

    <>
    <Header/>
    <main>
        <section id="presentation">
            <div className="presentation">
                <h1>
                    We help you create <span>your daily care planning</span>
                </h1>
                <p>
                    An intelligent companion that monitors the daily life (health, course schedule, out-of-className habits, etc.) of the user (the student) to optimize his or her academic performance by ensuring that he or she has the right health habits to reduce the risk of illness.
                </p>
                <div className="btns">
                    <a href="./index.html" className="btn started-btn">Get started</a>
                    <a href="./index.html" className="btn contact-btn">Contact us</a>
                </div>
            </div>
            <div className="img">
                <img src={ima} alt=""/>
            </div>
            <div className="cercles">
                <div className="cercle1"></div>
                <div className="cercle2"></div>
                <div className="cercle3"></div>
            </div>
        </section>
        <section id="services">
            <div className="title">
                <h1>Our services</h1>
                <p>The services provide by CJARVIS include</p>
            </div>
            <div className="services-cards">
                <div className="service-card">
                    <div className="img">
                        <img src={cjarvis} alt="service-cjarvis"/>
                    </div>
                    <h2>Answering questions</h2>
                    <p>
                        Providing answers to academic queries. Assisting with organizational tasks related to academic schedules and daily life.    
                    </p>
                    <a href="./index.html" className="service-read-more-link">
                        Read more
                        <i>icon</i>
                    </a>
                </div>
                <div className="service-card">
                    <div className="img">
                        <img src={icon} alt="service-cjarvis"/>
                    </div>
                    <h2>Optimization of Academic Performance</h2>
                    <p>
                        Monitoring students' schedules. Keeping track of health metrics and lifestyle habits. Offering insights and analysis on academic performance. 
                    </p>
                    <a href="./index.html" className="service-read-more-link">
                        Read more
                        <i>icon</i>
                    </a>
                </div>
                <div className="service-card">
                    <div className="img">
                        <img src={icon} alt="service-cjarvis"/>
                    </div>
                    <h2>Personalized Recommendations</h2>
                    <p>
                        Suggesting personalized advice for balancing studies and well-being.Recommending healthy habits and practices to enhance academic ....
                    </p>
                    <a href="./index.html" className="service-read-more-link">
                        Read more
                        <i>icon</i>
                    </a>
                </div>
            </div>
        </section>
        <section id="how-cjarvis-work">
            <div className="title">
                <p>How CJARVIS works</p>
                <h1>How CJARVIS Works ?</h1>
            </div>
            <div className="all">
                <div className="cjarvis-works">
                    <i className="left">left</i>
                    <div className="cjarvis-work">
                        <img src={cjarvis} alt="How does CJARVIS work?"/>
                        <div>
                            <h4>Monitoring and Data </h4>
                            <p>
                                Collection CJARVIS continuously monitors your activities, health, and lifestyle habits, collecting data for precise analysis.
                            </p>
                        </div>
                    </div>
                    <div className="cjarvis-work">
                        <img src={cjarvis} alt="How does CJARVIS work?"/>
                        <div>
                            <h4>Intelligent Analysis </h4>
                            <p>
                                Using advanced algorithms, CJARVIS analyzes your data to identify areas for improvement and growth opportunities.
                            </p>
                        </div>
                    </div>
                    <div className="cjarvis-work">
                        <img src={cjarvis} alt="How does CJARVIS work?"/>
                        <div>
                            <h4>Personalized Recommendations </h4>
                            <p>
                                Based on the analysis, CJARVIS offers personalized recommendations to enhance your academic performance and well-being.
                            </p>
                        </div>
                    </div>
                    <i className="right">right</i>
                </div>
                <a href="./index.html" className="btn see-all-btn">See all</a>
            </div>
        </section>
    </main>
    <Header/>
    </>
  )
}

export default Home
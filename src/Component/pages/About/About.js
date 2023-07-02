import React from 'react';
import aboutimg from '../../../image/about-img.png'
import { BsFillAwardFill } from "react-icons/bs";
import { FaSuitcaseRolling } from "react-icons/fa";
import { BiHeadphone, BiNavigation } from "react-icons/bi";
import { Link } from 'react-router-dom';
import './about.css'

const About = () => {
    return (
        <div className='main'>
            <section className='about section' id='about'>
                <h2 data-heading="My Intro" className='section_title'>About Me</h2>
                <div className='about_container container grid'>
                    <img src={aboutimg} alt=""className='about-img'/>
                    <div className="about_data">
                    <h3 className="about_heading">Hi ,I'm Mohiuddin Molla ,Based in Bangladesh</h3>
                    <p className="about_discription">Web developer , with extensive knowledge and years of experience,
                        working in web technologies and figma design ,delivering quality work</p>
                    <div className="about_info grid">
                      
                        <div className="about_box">
                        <BsFillAwardFill className='about_icon ' />
                            <h3 className="about_title">Experience</h3>
                            <span className="about_subtitle">1+ Year</span>
                        </div>
                        <div className="about_box">
                            <FaSuitcaseRolling className='about_icon' />
                            <h3 className="about_title">Complete</h3>
                            <span className="about_subtitle">30 Projects</span>
                        </div>
                        <div className="about_box">

                            <BiHeadphone className='about_icon' />
                            <h3 className="about_title">Support</h3>
                            <span className="about_subtitle">Online 24/7</span>
                        </div>
                        
                    </div>
                    <Link to='/contact' className='button'><BiNavigation />Contact Me</Link>
                </div>
                </div>
               
            </section>
        </div>
    );
};

export default About;
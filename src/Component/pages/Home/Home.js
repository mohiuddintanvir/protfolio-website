import React from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineUserAdd, AiOutlineWhatsApp } from "react-icons/ai";
import { BsMessenger, BsFillEnvelopeOpenFill } from "react-icons/bs";
import homeimg from '../../../image/home-img.png'
import About from '../About/About';
import Skills from '../Skills/Skills';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <>
            <div className='main'>
                <section className='home' id='home'>
                    <div className='home_container container grid'>
                        <div className='home_social gap'>
                            <span className='home_social-follow'>Follow Me</span>
                            <div className="home_social-links">
                                <Link to='https://www.facebook.com/profile.php?id=100008659691451' className='home_social-link'><AiFillFacebook /></Link>
                                <Link to='https://www.instagram.com/mohiuddin_tanvir/' className='home_social-link'><AiFillInstagram /></Link>
                                <Link to='https://www.linkedin.com/in/mohiuddin-molla-935562255/' className='home_social-link'><AiFillLinkedin /></Link>
                            </div>

                        </div>

                        <img src={homeimg} alt="" className="home_img" />
                        <div className="home_data gap">
                            <h1 className="home_title">Hi, I'm Mohiuddin Molla</h1>
                            <h3 className="home_subtitle">Frontend Developer</h3>
                            <p className='home_description'>High level experience in web design and development knowledge,producing quality work</p>
                            <button className='button '><Link className='button-text flex'><AiOutlineUserAdd className='button_icon' />More About Me</Link></button>
                        </div>
                        <div className="my_info gap">
                            <div className="info_item">
                                <BsMessenger className='info_icon' />
                                <div>
                                    <h3 className="info_title">
                                        Messanger
                                    </h3>
                                    <span className="info_subtitle">userid </span>
                                </div>
                            </div>
                            <div className="info_item">
                                <AiOutlineWhatsApp className='info_icon' />
                                <div>
                                    <h3 className="info_title">
                                        whatsapp
                                    </h3>
                                    <span className="info_subtitle">+8801688167012</span>
                                </div>
                            </div>
                            <div className="info_item">
                                <BsFillEnvelopeOpenFill className='info_icon' />
                                <div>
                                    <h3 className="info_title">
                                        Email
                                    </h3>
                                    <span className="info_subtitle">mohiuddin.tanvir.mollah@gmail.com</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>


            </div>
            {/* Others components */}
            
        </>

    );
};

export default Home;
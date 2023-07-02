import React from 'react';
import './contact.css'
import { AiFillContacts, AiOutlineWhatsApp } from "react-icons/ai";
import { BsMessenger, BsFillEnvelopeOpenFill } from "react-icons/bs";
import { BiNavigation } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='main'>
            <section className='contact section' id='contact'>
                <h2 data-heading="Get in touch" className="section_title">Contact Me</h2>
                <div className="contact_container container grid">
                    <div className="contact_content">
                        
                        <div className="contact_info">
                            <div className="contact_card">
                                <BsFillEnvelopeOpenFill className='contact_card-icon' />
                                <h3 className="info_card-title">Email</h3>
                                <span className="info_card-subtitle">mohiuddin.tanvir.mollah@gmail.com</span>
                                <span className="contact_button">Write Me<BiNavigation className='contact_button-icon' /></span>
                            </div>
                            <div className="contact_card">
                                <AiOutlineWhatsApp className='contact_card-icon' />
                                <h3 className="info_card-title"> whatsapp</h3>
                                <span className="info_card-subtitle">+8801688167012</span>
                                <span className="contact_button">Write Me<BiNavigation className='contact_button-icon' /></span>
                            </div>
                            <div className="contact_card">
                                <BsMessenger className='contact_card-icon' />
                                <h3 className="info_card-title">Messanger</h3>
                                <span className="info_card-subtitle">userid</span>
                                <span className="contact_button">Write Me<BiNavigation className='contact_button-icon' /></span>
                            </div>
                        </div>
                    </div>
                    <div className="contact_content">
                        <form action="" className="contact_form">
                            <div className="input_continer">
                                <input type="text" placeholder="Username" className="input input-bordered input-primary w-full max-w-xs" />

                            </div>
                            <div className="input_continer">
                                <input type="email" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs" />

                            </div>
                            <div className="input_continer">
                                <input type="tel" placeholder="Phone" className="input input-bordered input-primary w-full max-w-xs" />

                            </div>
                            <div className="input_continer textar">
                                <textarea className="textarea textarea-primary lg:px-[6rem] text-left text-white" placeholder="Message"></textarea>

                            </div>
                            <button type='submit' className='button'><Link className='button-text flex'><BiNavigation className='button_icon' />Send Massage</Link></button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
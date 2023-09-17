import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiOutlineUserAdd, AiOutlineWhatsApp } from "react-icons/ai";
import { BsMessenger, BsFillEnvelopeOpenFill } from "react-icons/bs";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

    useEffect(()=>{
        AOS.init({duration:2000})
           },[])

    return (
        <div className='text-red-500 bg-black  flex justify-center  py-10'>
   <div className='flex justify-between   items-start' data-aos="fade-right">
    <div >
        <h1 className='text-white ' >  </h1>
    </div>
   
    
    <div className="  text-black grid lg:grid-cols-3 items-center lg:mr-10" >
                                <Link to='https://www.facebook.com/profile.php?id=100008659691451' className='text-2xl hover:text-[#EFD30B]' ><AiFillFacebook /></Link>
                                <Link to='https://www.instagram.com/mohiuddin_tanvir/' className='text-2xl hover:text-[#EFD30B]'><AiFillInstagram /></Link>
                                <Link to='https://www.linkedin.com/in/mohiuddin-molla-935562255/' className='text-2xl hover:text-[#EFD30B]'><AiFillLinkedin /></Link>
                            </div>
    
    
   </div>
        </div>
    );
};

export default Footer;
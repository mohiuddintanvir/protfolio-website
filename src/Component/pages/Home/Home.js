import React, { useEffect } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineUserAdd,
  AiOutlineWhatsApp,
  
} from "react-icons/ai";
import { DiDoctrine } from "react-icons/di";
import homeimg from "../../../image/home-img.png";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="  " id="demo-canvas">
        <section className="bg-white grid lg:grid-cols-2 " id="home">
          <div className="  mt-40">
            <img src={homeimg} alt="" className="home_img" />
            <div
              className="md:w-[35.10 rem] md:h-[36 rem] h-96  lg:ms-20 lg:mt-20 ms-4"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
                <p className="text-yellow-500 lg:tracking-[4px]">Figma Designer & Mern Developer</p>
              <h1 className=" lg:text-7xl text-[#000000] lg:mt-3 lg:mb-14 font-semibold">
                Hi, I'm Mohiuddin <span className="thin">Molla</span>
              </h1>
           
              
              <button className="btn btn-warning text-white"><Link to="/about" className="flex justify-center items-center"> <AiOutlineUserAdd className="button_icon  " /> MORE ABOUT ME</Link>  </button>
              <button className="lg:px-10 lg:py-2 btn text-xl bg-[#1111]  text-black ms-2">Hire Me <DiDoctrine className="text-black  " /></button>
            </div>
            <p className="lg:mt-40 ms-20 mt-3 text-black" data-aos="fade-right">Copyright ©2023 All rights reserved | This Website is made with  by <span className='text-[#EFD30B]'>Mohiuddin Molla</span></p>
            
          </div>

          <div className="  ">
            {/* carusal */}
            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="https://i.ibb.co/cX2XXsX/Untitled-design-4.png" class="d-block w-screen lg:w-100 lg:h-[926px]" alt="..." />
                </div>
                <div class="carousel-item ">
                  <img src="https://i.ibb.co/6gnNwZ0/New-cloth-website-3.png" class="d-block w-100 lg:h-[926px]" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="https://i.ibb.co/z5GprvY/New-cloth-website-1.png" class="d-block w-100 lg:h-[926px]" alt="..." />
                </div>
              </div>
            
              
            </div>
          </div>
         
        </section>
      </div>
      {/* Others components */}
      {/* <About></About>
      <Skills></Skills>
      <Work></Work>
      <Contact></Contact> */}
    </>
  );
};

export default Home;

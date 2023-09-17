import React, { useEffect } from "react";
import aboutimg from "../../../image/about-img.png";
import { AiFillHtml5,AiFillGithub} from "react-icons/ai";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import {SiFirebase,SiTailwindcss} from "react-icons/si";
import { DiCss3,DiJavascript1,DiReact,DiMongodb } from "react-icons/di";
import { FaSuitcaseRolling } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./about.css";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
  });

  return (
    <div className="bg-white w-screen lg:h-screen ">
      <section className="grid lg:grid-cols-2">
        <div className="lg:mt-20 bg-white">
          <div className="lg:flex hidden lg:w-full" data-aos="fade-right">
            <img
              src="https://i.pinimg.com/564x/77/30/6f/77306f63307d231984e3e9a2d0d333dc.jpg"
              className="lg:w-full "
              alt=""
            />
          </div>
          <div className="mt-3 mb-4">
            <div>
               <h1 className=" text-center text-lg text-yellow-400 mb-4  font-bold">My Skills</h1>
       
            <div className=" flex justify-center">
              <div className="grid lg:grid-cols-5 grid-cols-5 gap-5 ">
                <AiFillHtml5 className="lg:text-5xl text-orange-500" data-aos="zoom-in"/>
              <DiCss3 className="lg:text-5xl text-sky-600" data-aos="zoom-in"/>
              <FaBootstrap className="lg:text-5xl text-indigo-600"  data-aos="zoom-in"/>
              <SiTailwindcss className="lg:text-5xl text-sky-500" data-aos="zoom-in"/>
              <DiJavascript1 className="lg:text-5xl text-amber-400" data-aos="zoom-in"/>
              <DiReact className="lg:text-5xl text-cyan-400" data-aos="zoom-in"/>
              <SiFirebase className="lg:text-5xl text-amber-500" data-aos="zoom-in"/>
              <AiFillGithub className="lg:text-5xl text-zinc-600" data-aos="zoom-in"/>
              <FaNode className="lg:text-5xl text-lime-500" data-aos="zoom-in"/>
              <DiMongodb className="lg:text-5xl text-lime-600" data-aos="zoom-in"/>
              </div>
              
            </div>
            </div>
           
          </div>

          {/* projects info  */}
        </div>

        <div className="bg-black lg:h-screen flex lg:justify-start lg:items-center ">
          <div
            className="ms-3 lg:w-[40rem] w-screen lg:h-96 h-screen"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <h3 className="text-yellow-400 font-['Gruppo'] text-xs">
              ABOUT ME
            </h3>
            <h1 className="lg:text-3xl font-['Prompt']">
              A FIGMA DESIGNER & MERN STACK DEVELOPER
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              vitae itaque iure in debitis, inventore officia libero ea nostrum,
              dolorum tempore dolore! Fugiat dolor sint provident repellat
              vitae, magnam magni.
            </p>
            <div className="lg:flex ">
              <div
                className="
               gap-3 lg:w-[26rem]"
              >
                <p className="mt-5">
                  Name:
                  <span className="text-yellow-400 ms-4"> MOHIUDDIN MOLLA</span>
                </p>
                <p className="mt-2">
                  Date of birth:
                  <span className="text-yellow-400 ms-4">10-MRC-1999</span>
                </p>
                <p className="mt-2">
                  Address:
                  <span className="text-yellow-400 ms-4">
                    NARAYANGONJ ,BANGLADESH
                  </span>
                </p>
              </div>
              <div
                className="
               gap-3 lg:w-[26rem] lg:ms-5"
              >
                <p className="mt-5 ">
                  Zip code:
                  <span className="text-yellow-400 lg:ms-4"> 1400</span>
                </p>
                <p className="mt-2">
                  Email:
                  <span className="text-yellow-400 lg:ms-4">
                    mohiuddin.tanvir.mollah@gmail.com
                  </span>
                </p>
                <p className="mt-2">
                  Phone:
                  <span className="text-yellow-400 lg:ms-4">+8801688167012</span>
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
               <button className="bg-yellow-500 px-10 lg:py-2 text-white mt-5 mb-2 ">
             <a href="resume.pdf" download='resume.pdf'>Download CV</a> 
            </button>
            </div>
           
          </div>
        </div>
      </section>
      {/* skill section */}
     
    </div>
  );
};

export default About;

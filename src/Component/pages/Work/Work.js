import React, { useEffect, useState } from "react";

import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNode } from "react-icons/fa";
import { SiFirebase, SiTailwindcss } from "react-icons/si";
import { DiCss3, DiJavascript1, DiReact, DiMongodb } from "react-icons/di";
import { FaSuitcaseRolling } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./work.css";
import RecentWork from "./RecentWork";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
  // AOS duration
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Aos reload problem solve

  document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
  });
  // See more js
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const worklist = [
    // BonBon
    {
      img: "https://i.ibb.co/brGdXPW/Bobon-resturen.png",
      date: "4-April-2022",
      name: "BONBON RESTURENT & CAFE (MENU) ",
      discribe:
        "Experience the fusion of culinary excellence and cutting-edge technology at BOBON Cafe & Restaurant's online platform. this website, meticulously crafted with React, Tailwind CSS, React Icons, and Daisy UI, offers a seamless and visually stunning way to explore and savor the delectable offerings.",

      role: "Full Stack",
      view: "https://zesty-boba-0547e0.netlify.app/",
      github:"https://github.com/mohiuddintanvir/bonbn-menu",
    },
    // GreenVen
    {
      img: "https://i.ibb.co/8YZ0JBy/Greenven.png",
      date: "4-April-2022",
      name: "GREENVEN (GROSERY WEBSITE)",
      discribe:
        "Experience the future of grocery shopping with Greenven, The one-stop destination for fresh, high-quality produce and pantry essentials. This website, powered by state-of-the-art technologies including React, Tailwind CSS, React Icons, Daisy UI, Node.js, Express, and MongoDB, offers a seamless and efficient way to stock up on peples household needs.",
      tecnology: "React , nodejs,mongodb",
      role: "Full Stack",
      view: "https://green-van-8f6c2.firebaseapp.com/",
      github:"https://github.com/mohiuddintanvir/green-van-client",
    },
    // cloud cloth
    {
      img: "https://i.ibb.co/XbRTTSN/Rymo.png",
      date: "10-june-2023",
      name: "RYMO (CLOUD CLOTH WEBSITE)",
      discribe:
        "Elevate the style and upgrade the wardrobe with Rymo, The ultimate online fashion haven. This website, powered by cutting-edge technologies including React, Tailwind CSS, React Icons, Daisy UI, Node.js, Express, and MongoDB, provides a seamless and stylish way to discover and shop for the latest trends in clothing.",
      tecnology: "React , nodejs,mongodb",
      role: "Full Stack",
      view: "https://elegant-faloodeh-de8f9e.netlify.app/",
      github:"https://github.com/mohiuddintanvir/t-shirt-client",
    },
    // tea
    {
      img: "https://i.ibb.co/J5rzXHQ/Coffee.png",
      date: "4-April-2022",
      name: " COFE (COFFEE SHOP CLOUD)",
      discribe:
        "Awaken the senses and savor the aroma of freshly brewed coffee with Cofe, your go-to destination for premium coffee beans and exquisite brews. This website, powered by the latest technologies including Html & Css offers a delightful and convenient way to explore and purchase your favorite coffee blends.",
      tecnology: "Html,Css,Javascript",
      role: "frontend",
      view: "https://merry-cucurucho-8f5b6b.netlify.app/",
      github:"https://github.com/mohiuddintanvir/cloud-tea-shop",
    },
    // overstock
    {
      img: "https://i.ibb.co/cFyHs9V/Over-Stock.png",
      date: "4-April-2022",
      name: "OVERSTOCK (CLOUD SECONDHAND SHOE MARKET)",
      discribe:
        "Step back in time and rediscover classic footwear at Overstock, your premier online destination for vintage shoe enthusiasts. This website, meticulously crafted with state-of-the-art technologies including React, Tailwind CSS, React Icons, Daisy UI, Node.js, Express, and MongoDB, offers a seamless and stylish way to explore and purchase timeless shoe styles.",
      tecnology: "React , nodejs,mongodb",
      role: "Full Stack",
      view: "https://leafy-kheer-d3dd6b.netlify.app/",
      github:"https://github.com/mohiuddintanvir/overstock-client",
    },
    // pizza
    {
      img: "https://i.ibb.co/Cnq0RHq/pizza.png",
      date: "4-April-2022",
      name: "PIZZA KOI (CLOUD PIZZA SHOP)",
      discribe:
        "Satisfy the pizza cravings and experience a slice of pizza heaven with Pizza Koi, The ultimate online destination for mouthwatering pies. This website, meticulously crafted with cutting-edge technologies including React, Tailwind CSS, React Icons, Daisy UI, Node.js, Express, and MongoDB, offers a seamless and savory way to explore and order your favorite pizzas.",
      tecnology: "React , nodejs,mongodb",
      role: "Full Stack",
      view: "https://over-stck-client.firebaseapp.com/",
      github:"https://github.com/mohiuddintanvir/cloud-pizza-kitchen",
    },
  ];

  const [work, setWork] = useState(worklist);
  // useEffect(() => {
  //   fetch("https://protfolio-website-server.vercel.app/recentwork")
  //     .then(res => res.json())
  //     .then(data => setWork(data))
  // }, [])

  // filter
  const filterItrm = (catagory) => {
    const updateItem = worklist.filter((curelem) => {
      return curelem.role === catagory;
    });
    setWork(updateItem);
  };

  return (
    <div className=" bg-white  w-screen h-screen mb-10">
      <section className="mb-5" id="work">
        <h2 className="font- space-8 text-center lg:text-3xl text-xl font-bold text-[#979696] lg:tracking-[3px] uppercase pt-5">Recent Projects</h2>
        <div className="mb-10 ">
          <div className="mt-5" id="work">
            <div className="flex justify-around gap-4 ms-20 mb-5 text-black font-bold">
              <button className="" onClick={() => setWork(worklist)}>
                All
              </button>
              <button className="" onClick={() => filterItrm("frontend")}>
                Html/css
              </button>
              <button className="" onClick={() => filterItrm("Full Stack")}>
                Reactjs
              </button>
            </div>
          </div>
          {/* projects side  */}

          <div className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-5 bg-white">
            {work.map((wo) => {
              const { img, date, tecnology, role, view, name, discribe,github } = wo;
              return (
                <div className="flex justify-center">
                  <div className="card lg:card-side bg-white w-[1400px] h-[400px] shadow-xl">
                    <figure>
                      <img
                        src={img}
                        className="lg:h-full lg:w-[650px]"
                        alt="Album"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">
                        <span className="text-yellow-400">|</span>
                        <span className="text-sm" data-aos="zoom-in">
                          {name}
                        </span>
                      </h2>
                      {/* small */}
                      <p
                        className="lg:w-[32rem] lg:leading-6  leading-4 lg:hidden "
                        data-aos="fade-up"
                        data-aos-duration="3000"
                      >
                        {isExpanded ? discribe : discribe.slice(0, 100)} {/* Display only the first 150 characters */}
        {!isExpanded && discribe.length > 150 && (
          <span className="inline-block text-yellow-500 hover:underline cursor-pointer" onClick={toggleExpansion}>
            See More
          </span>
        )}
                     {isExpanded && (
          <span className="inline-block text-yellow-500 hover:underline cursor-pointer" onClick={toggleExpansion}>
            See Less
          </span>
        )}  
                      </p>
                      {/* large */}
                      <p className="lg:w-[32rem] lg:leading-6  leading-4 hidden lg:flex"
                        data-aos="fade-up"
                        data-aos-duration="3000">{discribe}</p>




                      <div className="card-actions justify-center mb-5">
                        <button className="btn btn-warning text-white " data-aos="fade-right">
                          {" "}
                          <Link to={view}>SEE LIVE</Link>
                        </button>

                        <button className="btn btn-outline " data-aos="fade-left">
                          <Link to={github}>GITHUB</Link>
                        </button>
                      </div>
                    </div>
                    {/* <div>
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
  </div> */}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;

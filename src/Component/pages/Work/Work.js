import React, { useEffect, useState } from 'react';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
import './work.css'
import RecentWork from './RecentWork';

const Work = () => {
  const worklist=[
   
    
    {
        img:"https://i.ibb.co/nw7x48T/work-1.jpg" ,
        date: "4-April-2022",
      
        tecnology: "React , nodejs,mongodb",
       role: "Full Stack",
        view: "https://green-van-8f6c2.firebaseapp.com/"
    },
    {
        img:"https://i.ibb.co/PwJTfcz/work-2.jpg"  ,
        date: "10-june-2023",
        tecnology: "React , nodejs,mongodb",
       role: "Full Stack",
        view: "https://elegant-faloodeh-de8f9e.netlify.app/" 
    },
    {
        img:"https://i.ibb.co/XVhTxyK/work-3.jpg"  ,
        date: "4-April-2022",
        tecnology: "Html,Css,Javascript",
       role: "frontend",
        view: "https://merry-cucurucho-8f5b6b.netlify.app/"
    },
    {
        img:"https://i.ibb.co/LnXhCPG/work-4.jpg"  ,
        date: "4-April-2022",
       tecnology: "React , nodejs,mongodb",
       role: "Full Stack",
        view: "https://green-van-8f6c2.firebaseapp.com/"
    },
    {
        img:"https://i.ibb.co/Drxw4hs/work-5.jpg"  ,
        date: "4-April-2022",
       tecnology: "React , nodejs,mongodb",
       role: "Full Stack",
        view: "https://green-van-8f6c2.firebaseapp.com/"
    },
    {
        img:"https://i.ibb.co/0h87kWk/work-6.jpg"  ,
        date: "4-April-2022",
        tecnology: "React , nodejs,mongodb",
       role: "Full Stack",
        view: "https://green-van-8f6c2.firebaseapp.com/"
    }



]

  const [work, setWork] = useState(worklist)
  // useEffect(() => {
  //   fetch("https://protfolio-website-server.vercel.app/recentwork")
  //     .then(res => res.json())
  //     .then(data => setWork(data))
  // }, [])


  // filter 
  const filterItrm=(catagory)=>{
const updateItem=worklist.filter((curelem)=>{
return curelem.role===catagory;
});
setWork(updateItem)
  }

  return (
    <div className='main'>
      <section className="work section" id="work">
        <h2 data-heading="All Recent " className='section_title'> Projects</h2>
        <div className='work section ' id='work'>
          <div className='lg:flex lg:justify-around '>

<button className='btn btn-outline btn-warning' onClick={()=>setWork(worklist)}>All</button>
<button className='btn btn-outline btn-warning' onClick={()=>filterItrm('frontend')}>Html/css</button>
<button className='btn btn-outline btn-warning' onClick={()=>filterItrm('Full Stack')}>Reactjs</button>
          </div>
        </div>
        <div className='grid lg:grid-cols-3 gap-3'>
          {

            work.map((wo) =>{
              const {img,date,tecnology,role,view}=wo;
              return(
                
              <div className="card lg:w-96 bg-base-100 shadow-xl">
              <figure><img src={img} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className=" text-black">{role}</h2>
                <div className='flex text-'>
                  <p className='text-[10px]'>Tecnology:{tecnology}</p>
                <p>Date:{date}</p>
                
                </div>
                
                <div className="card-actions justify-end">
                  

                </div>
              </div>

            </div>
              )
            }



)

          }

        </div>
        <RecentWork work={work}></RecentWork>
      </section>






    </div>
  );
};

export default Work;
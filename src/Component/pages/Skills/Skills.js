import React from 'react';
import { FaSwatchbook, FaServer } from "react-icons/fa";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { AiFillCaretDown } from "react-icons/ai";
import './skills.css'

const Skills = () => {


    return (
        <div className='main'>
            <section className="skills section" id="skills">
                <h2 data-heading="My Abilities" className='section_title'>My Experience</h2>

                <div className="join lg:join-horizontal join-vertical w-full">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            <div className="skills_header skills_active" data-targrt="#frontend">
                                <MdOutlineScreenshotMonitor className='skills_icon' />
                                <div>

                                    <h1 className="skills_title">FrontEnd </h1>
                                    <span className='skills_subtitle'>More than 1 years</span>

                                </div>

                            </div>
                        </div>
                        <div className="collapse-content">
                            <div className="skills_group skills-active" collapse-content id="frontend">
                                <div className="skills_list grid" >
                                    <div className="skills_data">
                                        <div className="skills_title">
                                            <h3 className='skills_name'>Html</h3>
                                            <span className='skills_number'>90%</span>
                                        </div>
                                        <div className="skills_ber">
                                            <span className='skills_percentage' style={{ width: "90%" }} ></span>
                                        </div>
                                    </div>
                                    <div className="skills_data">
                                        <div className="skills_title">
                                            <h3 className='skills_name'>Css</h3>
                                            <span className='skills_number'>90%</span>
                                        </div>
                                        <div className="skills_ber">
                                            <span className='skills_percentage' style={{ width: "90%" }}></span>
                                        </div>
                                    </div>
                                    <div className="skills_data">
                                        <div className="skills_title">
                                            <h3 className='skills_name'>Javascript</h3>
                                            <span className='skills_number'>70%</span>
                                        </div>
                                        <div className="skills_ber">
                                            <span className='skills_percentage' style={{ width: "70%" }}></span>
                                        </div>
                                    </div>
                                    <div className="skills_data">
                                        <div className="skills_title">
                                            <h3 className='skills_name'>React</h3>
                                            <span className='skills_number'>70%</span>
                                        </div>
                                        <div className="skills_ber">
                                            <span className='skills_percentage' style={{ width: "70%" }} ></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            <div className="skills_header" data-targrt="#design">
                                <FaSwatchbook className='skills_icon' />
                                <div>
                                    <h1 className="skills_title"> Design</h1>
                                    <span className='skills_subtitle'>More than 1 year</span>

                                </div>

                            </div>
                        </div>
                        <div className="collapse-content">
                            <div className="skills_group">
                                <div className="skills_list grid" collapse-content id="design">
                                    <div className="skills_data">
                                        <div className="skills_title">
                                            <h3 className='skills_name'>Figma</h3>
                                            <span className='skills_number'>80%</span>
                                        </div>
                                        <div className="skills_ber">
                                            <span className='skills_percentage' style={{ width: "80%" }}></span>
                                        </div>
                                    </div>
                                    <div className="skills_data">
                                        <div className="skills_title">
                                            <h3 className='skills_name'>Photoshop</h3>
                                            <span className='skills_number'>60%</span>
                                        </div>
                                        <div className="skills_ber">
                                            <span className='skills_percentage' style={{ width: "60%" }}></span>
                                        </div>
                                    </div>
                                    <div className="skills_data">
                                        <div className="skills_title">
                                            <h3 className='skills_name'>Canva</h3>
                                            <span className='skills_number'>50%</span>
                                        </div>
                                        <div className="skills_ber">
                                            <span className='skills_percentage' style={{ width: "50%" }}></span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="my-accordion-4" />
                        <div className="collapse-title text-xl font-medium">
                            <div className="skills_header" data-targrt="#backend">
                                <FaServer className='skills_icon' />
                                <div>
                                    <h1 className="skills_title">BackEnd Developer</h1>
                                    <span className='skills_subtitle'>More than 1 year</span>

                                </div>

                            </div>
                        </div>
                        <div className="collapse-content">
                            <div className="skills_group" collapse-content id="backend">
                                <div className="skills_list grid">
                                    <div className="skills_data">
                                        <div className="skills_title">
                                            <h3 className='skills_name'>Nodejs</h3>
                                            <span className='skills_number'>70%</span>
                                        </div>
                                        <div className="skills_ber">
                                            <span className='skills_percentage' style={{ width: "70%" }}></span>
                                        </div>
                                    </div>
                                    <div className="skills_data">
                                        <div className="skills_title">
                                            <h3 className='skills_name'>Express</h3>
                                            <span className='skills_number'>60%</span>
                                        </div>
                                        <div className="skills_ber">
                                            <span className='skills_percentage' style={{ width: "60%" }}></span>
                                        </div>
                                    </div>
                                    <div className="skills_data">
                                        <div className="skills_title">
                                            <h3 className='skills_name'>MongoDB</h3>
                                            <span className='skills_number'>70%</span>
                                        </div>
                                        <div className="skills_ber">
                                            <span className='skills_percentage' style={{ width: "70%" }}></span>
                                        </div>
                                    </div>
                                    <div className="skills_data">
                                        <div className="skills_title">
                                            <h3 className='skills_name'>Firebase</h3>
                                            <span className='skills_number'>70%</span>
                                        </div>
                                        <div className="skills_ber">
                                            <span className='skills_percentage' style={{ width: "70%" }}></span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Skills;
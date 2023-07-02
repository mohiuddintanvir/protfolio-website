import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';
import { AiOutlineShareAlt} from "react-icons/ai";

const Header = () => {
    const menulist = [
        <li className='nav_item'>

            <Link to="/" className='nav_link active_link'>Home</Link>
        </li>,
        <li className='nav_item'>

            <Link to="/about" className='nav_link'>About</Link>
        </li>,
        <li className='nav_item'>

            <Link to="/service" className='nav_link'>Services</Link>
        </li>,
        <li className='nav_item'>

            <Link to="/work" className='nav_link'>Work</Link>
        </li>,
        <li className='nav_item'>

            <Link to="/skills" className='nav_link'>Skills</Link>
        </li>,
        <li className='nav_item'>

            <Link to="/contact" className='nav_link'>Contact</Link>
        </li>,
    ]

    return (
        <div>
            <aside className='sideber fixed' id='sideber'>
                <nav className='nav'>
                    <div className='nav_logo'>
                        <Link to="" className='nav_logo-text'>M</Link>
                    </div>
                    <div className='nav_menu'>
                        <div className="menu">
                            <ul className='nav_list'>
{menulist}
                            </ul>
                        </div>
                    </div>
                    <div className="btn_share">
                        <AiOutlineShareAlt className='uil uil-share-alt social_share'/>
                    </div>
                </nav>
            </aside>
        </div>
    );
};

export default Header;
import React,{useState} from "react";
import Logo from "../assets/ritheshLogo.png";
import {FaBars,FaTimes,FaGithub,FaLinkedin,FaInstagram} from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import {BsFillPersonalLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll';
const NavBar=()=>{

    const[nav,setNav]=useState(false);
    const handleClick=()=>{
        setNav(!nav);
    }


    return(
        <div className="fixed top-0 w-full h-[80px] flex justify-between items-center px-4 bg-[#ffff] text-black-300 z-50">
            <div className="flex">
                <img src={Logo} alt="logo" style={{width:'75px'}}/>
                <span className="py-6 mx-2"><span className="text-pink-600 font-bold ">rithu</span><span className="">&lt;/&gt;</span><span className="font-bold"> codes</span></span>
            </div>


        {/* Menu */}
            
                <ul className="hidden md:flex  ">
                    <li className="hover:text-pink-600">
                        <Link 
                            
                             to="home" 
                              
                            smooth={true} 
                            
                            duration={500} 
                            
                         >
                                Home
                        </Link>
                    </li>
                    <li className="hover:text-pink-600">  <Link 
                            
                            to="about" 
                             
                           smooth={true} 
                           
                           duration={500} 
                           
                        >
                               About
                       </Link></li>
                    <li className="hover:text-pink-600">  <Link 
                            
                            to="skills" 
                             
                           smooth={true} 
                           
                           duration={500} 
                           
                        >
                               Skills
                       </Link></li>
                    {/* <li className="hover:text-pink-600">Experience</li> */}
                    <li className="hover:text-pink-600">  <Link 
                            
                            to="experience" 
                             
                           smooth={true} 
                           
                           duration={500} 
                           
                        >
                               Experience
                       </Link></li>
                       <li className="hover:text-pink-600">  <Link 
                            
                            to="contact" 
                             
                           smooth={true} 
                           
                           duration={500} 
                           
                        >
                               Contact
                       </Link></li>
                </ul>
            

            {/* HandBurger menu */}
            {/* <div onClick={handleClick} className="md:hidden z-10">

                {!nav ? <FaBars />:<FaTimes />}

                

            </div> */}

            {/* mobile menu */}
            
                {/* <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen text-zinc-900 bg-white flex flex-col justify-center items-center'}>
                        <li className="py-6 text-xl">Home</li>
                        <li className="py-6 text-xl">About</li>
                        <li className="py-6 text-xl">Skills</li>
                        <li className="py-6 text-xl">Contact Me</li>
                    </ul> */}
            

            {/* soical icon */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                    <a href="https://www.linkedin.com/in/rithesh-nk-6ab7661a4" className="flex justify-between items-center w-full ">
                        LinkedIn <FaLinkedin size={40}/>
                    </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700">
                    <a href="https://github.com/ritheshnk" className="flex justify-between items-center w-full">
                        Github <FaGithub size={40} />
                    </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-600">
                    <a href="https://www.instagram.com/nkrithesh/" className="flex justify-between items-center w-full">
                        Instagram <FaInstagram  size={40}/>
                    </a>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
import React from "react";
import Appium from "../assets/appiumNewLogo.png";
import Boot from "../assets/boot.png";
import Css from "../assets/css.png";
import Cucumber from "../assets/cucumber-removebg-preview.png";
import Github from "../assets/github.png";
import Html from "../assets/html.png";
import Js from "../assets/js.png";
import TestNG from "../assets/testngLogo-removebg-preview.png";
import ReactImage from "../assets/react.png";
import Selenium from "../assets/seleniumNewLgo-removebg-preview.png";
import TailWind from "../assets/tailwindCss-removebg-preview.png";
import Java from "../assets/javaNewLogo-removebg-preview.png";




const Skills = ()=>{
    return(
     
        <div name='skills' className=" text-black w-full h-screen bg-[#B1B2FF] text-black-300    sticky  top-0">
             <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
    
                    <div className="">
                        <p className="text-4xl  font-bold border-b-4 inline border-b-pink-600">Skills</p>
                        <p className="py-4 "></p>
                    </div>
                    
                    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                        <div className="">
                            <img className="w-20 mx-auto" src={Html} alt="html icon" />
                        </div>
                        <div className="">
                            <img className="w-20 mx-auto" src={Css} alt="Css icon" />
                        </div>
                        <div className="">
                            <img className="w-20 mx-auto" src={Js} alt="Js icon" />
                        </div>
                        <div className="">
                            <img className="w-20 mx-auto" src={ReactImage} alt="ReactImage icon" />
                        </div>
                        <div className="">
                            <img className="w-20 mx-auto" src={Java} alt="Java icon" />
                        </div>
                        <div className="">
                            <img className="w-20 mx-auto py-8" src={Selenium} alt="Selenium icon" />
                        </div>
                        <div className="">
                            <img className="w-20 mx-auto py-8" src={Appium} alt="Appium icon" />
                        </div>
                        <div className="">
                            <img className="w-60 mx-auto" src={Cucumber} alt="Cucumber icon" />
                        </div>
                        <div className="">
                            <img className="w-60 mx-auto" src={TailWind} alt="TailWind icon" />
                        </div>
                        <div className="">
                            <img className="w-40 mx-auto py-4" src={TestNG} alt="TestNG icon" />
                        </div>
                       
                    </div>
                
             
                    

                    
                
                </div>
        </div>

);
    
}

export default Skills;
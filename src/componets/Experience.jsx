import React from 'react';
import timeLineElements from "../timeLineElements";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ritheshLogo from "../assets/ritheshLogo.png";
const Experience =()=>{
    return(
        
        <div name='experience' className='bg-[#D2DAFF] sticky text-black w-full h-screen text-black-300 top-0  justify-center items-center p-4 '>
        <div className="p-1">
                        <p className="text-4xl  font-bold border-b-4 inline border-b-pink-600">Experience</p>
                        <p className="py-2"></p>
        </div>
           <VerticalTimeline>
            {
                timeLineElements.map(element =>{
                    return(
                        <VerticalTimelineElement
                        key={element.key}
                        date={element.date}
                        dateClassName='date'
                        icon={<img src={ritheshLogo}/>}
                        
                        >
                            <h2 className='vertical-timeline-element-title'>{element.title}</h2>
                            <h4 className='vertical-timeline-element-subtitle'>{element.Company}</h4>
                            {/* <h4 className='vertical-timeline-element-subtitle'>{element.role}</h4> */}
                            <h4 className='vertical-timeline-element-subtitle'>{element.location}</h4>
                            
                            
                        </VerticalTimelineElement>
                    );
                })
            }
           </VerticalTimeline>
        </div>
    );
}

export default Experience;
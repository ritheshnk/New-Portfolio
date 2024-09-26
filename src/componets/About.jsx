import React, { useState, useEffect } from "react";

const About = () => {

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [experience, setExperience] = useState(8);

  useEffect(() => {
    const checkMonth = () => {
      const newMonth = new Date().getMonth();
      if (newMonth !== currentMonth) {
        setCurrentMonth(newMonth);
        setExperience(prevExperience => prevExperience + 1);
      }
    };

    const intervalId = setInterval(checkMonth, 1000 * 60 * 60 * 24);

    return () => clearInterval(intervalId);
  }, [currentMonth]);

  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300 sticky top-0">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-b-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="text-xl sm:text-4xl font-bold">
            <p>
              Hi. I'm <span className="text-pink-600">Rithesh</span>, nice to meet you. Please take a look around to know more.
            </p>
          </div>
          <div>
            I'm an automation test engineer by profession with about {experience} months of experience, and a passionate developer by skills. 
            I graduated with a degree in computer science. My primary location is Mangalore, and I work in Hyderabad/Bangalore.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

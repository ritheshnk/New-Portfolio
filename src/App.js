
import React from "react";
import NavBar from "./componets/NavBar";
import Home from "./componets/Home";
import About from "./componets/About";
import AboutCopy from "./componets/About copy";
import Skills from "./componets/Skills";
import Contact from "./componets/Contact";
import Experience from "./componets/Experience";
function App() {
  return (
    <div>
       {/* <VerticalTimeline>
      {
        VerticalTimelineElement.map(element=>{
        return(
          <VerticalTimelineElement>
            
          </VerticalTimelineElement>
        );
      })
    }
      
    </VerticalTimeline>  */}
        <NavBar />
        <Home />
        <About />
        {/* <AboutCopy /> */}
        <Skills />
        <Experience />
        <Contact />
    </div>
  );
}

export default App;

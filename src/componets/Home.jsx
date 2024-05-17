import React from 'react';
// import {useReactToPrint} from 'react-to-print';


const Home = () => {
  // const downloadPDF = () => {
  //   // const pdfURL = 'rithesh-portfolio/src/assets/RitheshNK_Main_Resume.pdf';

  //   // Create a temporary anchor tag
  //   const link = document.createElement('a');
  //   // link.href = pdfURL;
  //   link.download = "RitheshNK_Main_Resume.pdf";

  //   // Append the anchor to the body and trigger the click event
  //   document.body.appendChild(link);
  //   link.click();

  //   // Clean up
  //   document.body.removeChild(link);
  // };


// const componentRef=useRef();

// const handlePrint=useReactToPrint({
//     content: ()=>componentRef.current,
// })



  return (
    // talking the size inital is text-2xl as soon as its greqater than sm then size is text-5l
    //sticky top-0'
    <div className='w-full h-screen sticky top-0' name="home">
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-2xl sm:text-5xl text-pink-600'>Hi, my name is </p>
        <h1 className='text-4xl sm:text-6xl font-bold py-5'>Darshan</h1>
        <h2 className='text-2xl sm:text-4xl'>I'm a passionate developer.</h2>
        <h3 className='text-1xl sm:text-3xl'>&</h3>
        <h2 className='text-2xl sm:text-4xl'>An automation tester</h2>
        <div className='px-1 py-5'>
        {/* <a className='border-2 border-solid border-pink-600 rounded-3xl text-pink-600 hover:bg-pink-500 hover:text-white px-4 py-2' href='/rithesh-portfolio/src/assets/RitheshNK_Main_Resume.pdf' download>Download CV</a> */}
        
        {/* <button className='border-2 border-solid border-pink-600 rounded-3xl text-pink-600 hover:bg-pink-500 hover:text-white px-3 py-2 my-2 flex items-center' onClick={downloadPDF}>Download CV <span><HiArrowNarrowRight className='ml-3'/></span></button> */}

        </div>
      </div>
    </div>
  );
};

export default Home;

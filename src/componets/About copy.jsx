const AboutCopy=()=>{
    return(
        //sticky top-0
        <div className='w-full h-screen md:top-0  relative top-0 bg-slate-500' name="Home">
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-2xl sm:text-5xl text-pink-600'>Hi, my name is </p>
        <h1 className='text-4xl sm:text-6xl font-bold py-5'>Rithesh</h1>
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
}

export default AboutCopy;
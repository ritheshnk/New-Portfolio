import React from 'react';

const Contact =()=>{
    return(
        
        <div name="contact"  className='bg-[#FFCBCB] sticky text-black w-full h-screen text-black-300 top-0 flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/zbxdgweb" className='flex flex-col max-w-[600px] w-full'>

                <div className='pb-8'>
                   <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-black'>Contact</p>
                   <p></p> 
                </div>

                <input type="text" name="name" id="" placeholder='Name' className='bg-gray-200 p-2' />
                <input type="text" name="name" id="" placeholder='email' className='my-4 p-2 bg-gray-200' />
                <textarea name="message" id="" rows="10" className='bg-gray-200 p-2' placeholder='Message'></textarea>
                <button className='text-black border-black border-2 hover:text-white hover:bg-pink-600 hover:border-pink-600 px-6 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
            </form>
        </div>
    );
}

export default Contact;
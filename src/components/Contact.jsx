import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center'>
        {/*Contact Form*/}
        <form action="https://getform.io/f/215933ee-0f88-4287-950f-bb25509903d4" method="post" className='flex flex-col w-full max-w-[600px] '>
            <div className='pb-8'>
                <h1 className='text-4xl font-bold border-b-4 inline border-red-700'>Contact</h1>
            </div>

            <input type="text" name="name" id="name" placeholder='Name' className='my-2 p-2 bg-sky-100 text-black'/>
            <input type="email" name="email" id="email" placeholder='Email'  className='my-2 p-2 bg-sky-100 text-black'/>
            <textarea name="message" id="message" placeholder=' Wrote your message here!' rows={5} className='my-2 bg-sky-100 text-black'></textarea>
            <input type="submit" value="Lets Colaborate" className='my-8 px-4 py-3 text-base border-white border-2 rounded-md hover:bg-red-700 hover:border-red-700 mx-auto flex items-center'/>
        </form>
    </div>
  )
}

export default Contact
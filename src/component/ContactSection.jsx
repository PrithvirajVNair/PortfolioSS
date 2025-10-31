import React from 'react'

const ContactSection = () => {
  return (
    <div id='contact' className='bg-[#111827] min-h-screen flex justify-center items-center flex-col'>
        <div className='text-center pt-20'>
            <p className='rounded-3xl inline bg-[#374151] py-1 px-3'>Contact me</p>
        </div>
        <p className='pt-10 text-gray-400 sm:text-base text-sm'>You can contact me through the following.</p>
        <div className='flex justify-center items-center py-10'>
            <a className='text-lg sm:text-3xl px-3 text-gray-400' href=""><i class="fa-brands fa-linkedin-in"></i></a>
            <a className='text-lg sm:text-3xl px-3 text-gray-400' href="mailto:youremail@example.com"><i class="fa-solid fa-envelope"></i></a>
            <a className='text-lg sm:text-3xl px-3 text-gray-400' href=""><i className="fa-brands fa-github"></i></a>
        </div>
    </div>
  )
}

export default ContactSection
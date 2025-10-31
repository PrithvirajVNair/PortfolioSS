import React from 'react'

const ExperienceSection = () => {
    return (
        <div className='bg-[#111827] min-h-screen'>
            <div className='text-center pt-20'>
                <p className='rounded-3xl inline bg-[#374151] py-1 px-3'>Experience</p>
            </div>
            <div className='grid grid-cols-12 pt-20'>
                <div className='sm:col-span-2'></div>
                <div className='col-span-10 sm:col-span-8'>
                    <div className='grid sm:grid-cols-3 bg-[#374151] p-5 my-5 rounded-2xl'>
                        <div>
                            <i className='text-center'>icon</i>
                        </div>
                        <div className='sm:hidden '>
                            <p className=' text-gray-400 py-1 text-sm sm:text-base'>xxx-xxx</p>
                        </div>
                        <div>
                            <h1>JOB TITLE</h1>
                            <ul className='text-gray-400 list-disc text-sm sm:text-base p-5'>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                            </ul>
                        </div>
                        <div className='hidden sm:block'>
                            <p className='text-center text-gray-400 '>xxx-xxx</p>
                        </div>
                    </div>
                </div>
                <div className='sm:col-span-2'></div>
            </div>
        </div>
    )
}

export default ExperienceSection
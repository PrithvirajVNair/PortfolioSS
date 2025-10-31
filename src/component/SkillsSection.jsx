import React from 'react'
import JS from '../assets/icons8-javascript-480 (1).png'

const SkillsSection = () => {
    return (
        <div className='min-h-screen'>
            <div className='text-center pb-10 sm:pb-0 pt-20'>
                <p className='rounded-3xl inline bg-[#374151] py-1 px-3'>Skills</p>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-8 p-5 sm:p-20 text-gray-400'>
                <div className='flex flex-col justify-center items-center text-sm sm:text-base'>
                    <img width={'150px'} src={JS} alt="" />
                    <p>JavaScript</p>
                </div>
                <div className='flex flex-col justify-center items-center text-sm sm:text-base'>
                    <img width={'150px'} src={JS} alt="" />
                    <p>JavaScript</p>
                </div>
                <div className='flex flex-col justify-center items-center text-sm sm:text-base'>
                    <img width={'150px'} src={JS} alt="" />
                    <p>JavaScript</p>
                </div>
                <div className='flex flex-col justify-center items-center text-sm sm:text-base'>
                    <img width={'150px'} src={JS} alt="" />
                    <p>JavaScript</p>
                </div>
                <div className='flex flex-col justify-center items-center text-sm sm:text-base'>
                    <img width={'150px'} src={JS} alt="" />
                    <p>JavaScript</p>
                </div>
                <div className='flex flex-col justify-center items-center text-sm sm:text-base'>
                    <img width={'150px'} src={JS} alt="" />
                    <p>JavaScript</p>
                </div>
                <div className='flex flex-col justify-center items-center text-sm sm:text-base'>
                    <img width={'150px'} src={JS} alt="" />
                    <p>JavaScript</p>
                </div>
                <div className='flex flex-col justify-center items-center text-sm sm:text-base'>
                    <img width={'150px'} src={JS} alt="" />
                    <p>JavaScript</p>
                </div>
                <div className='flex flex-col justify-center items-center text-sm sm:text-base'>
                    <img width={'150px'} src={JS} alt="" />
                    <p>JavaScript</p>
                </div>
                <div className='flex flex-col justify-center items-center text-sm sm:text-base'>
                    <img width={'150px'} src={JS} alt="" />
                    <p>JavaScript</p>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection
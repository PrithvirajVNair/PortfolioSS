import React from 'react'
import PRJ from '../assets/prj.jpg'

const ProjectSection = () => {
    return (
        <div className='min-h-screen'>
            <div className='text-center pt-20'>
                <p className='rounded-3xl inline bg-[#374151] py-1 px-3'>My Works</p>
            </div>
            <div className='p-5 sm:p-20'>


                <div className='grid grid-cols-2 rounded-2xl my-10'>
                    <div className='hidden sm:block p-10 bg-[#374151] rounded-l-2xl'>
                        <img className='rounded-2xl' src={PRJ} alt="" />
                    </div>

                    {/* for small screen */}
                    <div className='block sm:hidden p-5 bg-[#374151] rounded-t-2xl col-span-2'>
                        <img className='rounded-2xl' src={PRJ} alt="" />
                    </div>
                    <div className='p-5 sm:p-10 bg-[#1F2937] rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none sm:col-span-1 col-span-2'>
                        <h1 className='sm:text-2xl font-bold'>WorkName</h1>
                        <p className='py-5 text-sm sm:text-base sm:py-10 text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eum neque distinctio ipsa molestiae, commodi, deleniti alias magnam nisi ipsam id. Assumenda, qui officiis nihil aspernatur nesciunt sint porro beatae.</p>
                        <div className='flex flex-wrap'>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                        </div>
                    </div>
                </div>


                <div className='grid grid-cols-2 rounded-2xl my-10'>
                    {/* for small screen */}
                    <div className='block sm:hidden p-5 bg-[#374151] rounded-t-2xl col-span-2'>
                        <img className='rounded-2xl' src={PRJ} alt="" />
                    </div>
                    <div className='p-5 sm:p-10 bg-[#1F2937] rounded-b-2xl sm:rounded-l-2xl sm:rounded-br-none sm:col-span-1 col-span-2'>
                        <h1 className='sm:text-2xl font-bold'>WorkName</h1>
                        <p className='py-5 text-sm sm:text-base sm:py-10 text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eum neque distinctio ipsa molestiae, commodi, deleniti alias magnam nisi ipsam id. Assumenda, qui officiis nihil aspernatur nesciunt sint porro beatae.</p>
                        <div className='flex flex-wrap'>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                        </div>
                    </div>
                    <div className='hidden sm:block p-10 bg-[#374151] rounded-r-2xl'>
                        <img className='rounded-2xl' src={PRJ} alt="" />
                    </div>
                </div>


                <div className='grid grid-cols-2 rounded-2xl my-10'>
                    <div className='hidden sm:block p-10 bg-[#374151] rounded-l-2xl'>
                        <img className='rounded-2xl' src={PRJ} alt="" />
                    </div>

                    {/* for small screen */}
                    <div className='block sm:hidden p-5 bg-[#374151] rounded-t-2xl col-span-2'>
                        <img className='rounded-2xl' src={PRJ} alt="" />
                    </div>
                    <div className='p-5 sm:p-10 bg-[#1F2937] rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none sm:col-span-1 col-span-2'>
                        <h1 className='sm:text-2xl font-bold'>WorkName</h1>
                        <p className='py-5 text-sm sm:text-base sm:py-10 text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed eum neque distinctio ipsa molestiae, commodi, deleniti alias magnam nisi ipsam id. Assumenda, qui officiis nihil aspernatur nesciunt sint porro beatae.</p>
                        <div className='flex flex-wrap'>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                            <p className='border px-4 py-1 mx-1 my-1 rounded-2xl bg-[#374151] text-gray-400 text-sm sm:text-base'>React</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProjectSection
import './HomeSection.css'
import PFP from '../assets/sharonpfp.jpg'

const HomeSection = () => {
    return (
        <div id='#' className='grid grid-cols-5 pt-25 px-5 sm:px-20 min-h-screen'>
            <div className='sm:hidden col-span-5 flex justify-center items-center'>
                <div className='h-50 w-58 relative'>
                    <div className='h-50 w-58 absolute bottom-0 right-0 bg-[#374151]'>

                    </div>
                    <div className='border-8 border-[#030712] h-50 w-50 absolute -top-3 left-4 home-pic'>
                        {/* <img className='w-50 h-50' src={PFP} alt="" /> */}
                    </div>
                </div>
            </div>
            <div className='col-span-5 sm:col-span-3'>
                <h1 className='text-2xl sm:text-5xl font-bold pt-5 sm:pt-35'>Hi, I'm <span className='text-indigo-800'>Sharon Sunny</span></h1>
                <p className='text-gray-400 py-5 text-sm sm:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque qui, adipisci consequuntur ratione exercitationem necessitatibus expedita, laudantium vitae minima dolor nobis voluptate quia deserunt eaque nostrum corrupti accusantium facere fugit!</p>
                <div className='sm:py-5 text-sm sm:text-base'>
                    <p className='text-gray-400'><i class="fa-solid fa-location-dot"></i> Kerala, India</p>
                </div>
                <div className='py-2 sm:py-5'>
                    <a className='text-gray-400 sm:text-2xl' href=""><i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className='hidden col-span-2 sm:flex justify-center items-center'>
                <div className='h-90 w-90 relative'>
                    <div className='h-80 w-80 absolute bottom-0 right-0 bg-[#374151]'>

                    </div>
                    <div className='border-8 border-[#030712] h-80 w-80 absolute top-0 left-0 home-pic'>
                        {/* <img className='w-78 h-76' src={PFP} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeSection
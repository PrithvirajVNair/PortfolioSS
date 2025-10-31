import './AboutSection.css'

const AboutSection = () => {
  return (
    <div id='about' className='bg-[#111827] min-h-screen'>
      <div className='text-center pt-20'>
        <p className='rounded-3xl inline bg-[#374151] py-1 px-3'>About me</p>
      </div>
      <div className='grid grid-cols-2 pt-20'>
        {/* for small screen */}
        <div className='sm:hidden col-span-5 flex justify-center items-center'>
          <div className='h-60 w-58 relative'>
            <div className='h-60 w-58 absolute bottom-0 right-0 bg-[#374151]'>

            </div>
            <div className='border-8 border-[#111827] h-60 w-50 absolute -top-3 left-4 about-pic'>
              {/* <img className='w-50 h-50' src={PFP} alt="" /> */}
            </div>
          </div>
        </div>
        <div className='hidden sm:flex col-span-2 sm:col-span-1 justify-center items-center'>
          <div className='h-100 w-90 relative'>
            <div className='h-90 w-80 absolute bottom-0 left-0 bg-[#374151]'>

            </div>
            <div className='border-10 border-[#111827] h-90 w-80 absolute top-0 right-0'>

            </div>
          </div>
        </div>
        <div className='col-span-2 sm:col-span-1 p-5'>
          <p className='text-gray-400 text-sm sm:text-base'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit eligendi labore repudiandae, odit nam omnis exercitationem, qui accusantium provident corrupti aperiam? Magni harum vel minima repellat accusamus, laboriosam sunt aspernatur.
            Esse ea incidunt eaque, repellat voluptate suscipit deserunt ipsa alias eligendi ex nam voluptas, non odit quasi, cumque iusto similique consequuntur molestias porro reiciendis id dignissimos. Suscipit sapiente eum dignissimos?
            Nobis modi earum aperiam perferendis exercitationem corrupti, sapiente ab dicta, in numquam doloribus corporis hic ipsa maxime distinctio similique eius delectus temporibus facere. Cupiditate deserunt cum obcaecati incidunt reprehenderit eum!
            Ipsam quidem magnam corporis. Illo, ab maiores id dolor, distinctio deserunt cupiditate consequatur quod ut recusandae perferendis quo? Corporis est in natus vero doloribus totam vitae ipsam consectetur eligendi porro.
            Mollitia optio iure ratione nihil fuga aliquam natus incidunt, quasi porro tempore quaerat. Est dignissimos pariatur magni adipisci deleniti? Velit commodi eos at minima a voluptate. Praesentium modi itaque dignissimos.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
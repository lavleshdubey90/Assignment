import React from 'react'
import heroimage from "../assests/hero_image.png"

const Herosection = () => {
  return (
    <section className='relative w-full bg-themeBlue h-fit md:max-h-[387px] lg:max-h-[474px] xl:max-h-[624px] flex justify-between lg:px-10 xl:px-20 py-10 xl:py-20'>
      <div className='lg:container lg:mx-auto flex flex-col md:flex-row justify-between px-5'>
        <div className="left text-white w-full md:w-1/2 py-10 xl:py-20">
            <div className='w-full lg:w-11/12'>
            <h1 className='w-3/4 md:w-full text-4xl xl:text-5xl leading-tight'>Capture the full potential of commerce</h1>
            <p className='mt-5 text-sm lg:text-base xl:text-lg leading-relaxed w-11/12'>PayPal helps Bussinesses find active buyers, increase conversion across channels, and scale into new markets.</p>
            <button className='px-6 font-bold py-3 mt-5 lg:mt-20 rounded-full border-2 bg-white text-blue-500'>Contact Sales</button>
            </div>
        </div>

        <div className="right sm:min-w-[390px] lg:min-w-[500px] xl:min-w-[645px] md:relative">
            <img src={heroimage} alt="heroimage" className='right-0 top-7 lg:top-6 xl:top-4 2xl:top-4 relative md:absolute' />
        </div>
      </div>
    </section>
  )
}

export default Herosection
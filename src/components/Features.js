import React from 'react';
import connectedImage from "../assests/connected.png";
import innovationImage from "../assests/Innovation2.png"
import intelligentImage from "../assests/intelligent.png"

const Features = () => {
  return (
    <section className='py-20'>
      <div className='px-5 lg:container mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl leading-snug text-themeBlack'>Our connections, innovations, and intelligence make your PayPal your <br /> strategic partner</h2>
        <div className='flex flex-col mx-auto md:flex-row mt-20 gap-20'>

          <div className='md:w-1/3 text-center'>
            <img src={connectedImage} alt="" className='bg-themeBlue rounded-md mx-auto w-24'/>
            <h3 className='text-2xl md:text-3xl mt-4 md:mt-8'>Connected</h3>
            <p className='text-sm md:text-base mt-4 md:mt-8 w-full sm:w-3/4 md:w-full lg:w-3/5 mx-auto'>PayPal is a single point of entry to payments expertise, tools, technology, and data that can help you compete and win.</p>
          </div>

          <div className='md:w-1/3 text-center'>
            <img src={innovationImage} alt="" className='bg-themeBlue rounded-md mx-auto w-24'/>
            <h3 className='text-2xl md:text-3xl mt-4 md:mt-8'>Innovative</h3>
            <p className='text-sm md:text-base mt-4 md:mt-8 w-full sm:w-3/4 md:w-full lg:w-4/6 mx-auto'>Stay agile, ahead of trends, and help safeguard against economic uncertainty with modular solutions that are easy to opertionalize.</p>
          </div>

          <div className='md:w-1/3 text-center'>
            <img src={intelligentImage} alt="" className='bg-themeBlue rounded-md mx-auto w-24'/>
            <h3 className='text-2xl md:text-3xl mt-4 md:mt-8'>Intelligent</h3>
            <p className='text-sm md:text-base mt-4 md:mt-8 w-full sm:w-3/4 md:w-full lg:w-3/5 mx-auto'>With one of the world's largest data sets, we help you understand customer behaviours, detect fraud and capture more revenue across channels, devices and markets.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Features
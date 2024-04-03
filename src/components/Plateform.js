import React from 'react'
import coverImage from "../assests/plateform_cover_image.jpg"
import { BsArrowDownRight } from "react-icons/bs";

const Plateform = () => {
    return (
        <section className='bg-[#2a2a2a]'>
            <div className='lg:container mx-auto px-5 lg:px-0 flex flex-col lg:flex-row justify-between pt-16 xl:pt-20 xl:pb-8 2xl:pt-48 2xl:pb-20'>
                <div className='w-full sm:w-3/4 mx-auto lg:w-3/5 rounded-sm relative -top-6 2xl:-top-36'>
                    <img src={coverImage} alt="Cover Image" className='lg:absolute rounded-sm' />
                </div>
                <div className='text-white pt-5 lg:pt-10 pb-5 lg:pb-10 lg:pl-20 w-full sm:w-3/4 mx-auto lg:w-1/2 xl:w-2/5'>
                    <h3 className='text-3xl xl:text-5xl leading-tight'>Harness our powerful plateform</h3>
                    <p className='my-10 text-sm xl:text-xl'>Accelerate growth and easily scale with our flexible features and tools that can be customized for your exact use cases.</p>
                    <a href="#" className='flex items-center text-base sm:text-lg xl:text-xl w-fit gap-4 font-semibold text-cyan-500 hover:text-blue-500 duration-300'>Learn about our plateform <div className='relative w-8 h-8 rounded-full bg-white/20'><BsArrowDownRight className='top-[7px] -left-1 absolute -rotate-45 scale-150' /></div></a>
                </div>
            </div>
        </section>
        // <section className='bg-[#2a2a2a]'>
        //     <div className='lg:container mx-auto px-5 lg:px-0 flex flex-col lg:flex-row justify-between pt-16 xl:pt-20 xl:pb-8 2xl:pt-48 2xl:pb-20'>
        //         <div className='w-full sm:w-3/4 mx-auto lg:w-3/5 rounded-sm relative -top-6 2xl:-top-36'>
        //             <img src={coverImage} alt="Cover Image" className='lg:absolute rounded-sm' />
        //         </div>
        //         <div className='text-white pt-5 lg:pt-10 pb-5 lg:pb-10 lg:pl-20 w-full sm:w-3/4 mx-auto lg:w-1/2 xl:w-2/5'>
        //             <h3 className='text-3xl xl:text-5xl leading-tight'>Harness our powerful plateform</h3>
        //             <p className='my-10 text-sm xl:text-xl'>Accelerate growth and easily scale with our flexible features and tools that can be customized for your exact use cases.</p>
        //             <a href="#" className='flex items-center text-base sm:text-lg xl:text-xl w-fit gap-4 font-semibold text-cyan-500 hover:text-blue-500 duration-300'>Learn about our plateform <BsArrowDownRight className='-rotate-45 scale-150' /></a>
        //         </div>
        //     </div>
        // </section>
    )
}

export default Plateform
import React from 'react'
import coverImage from "../assests/laptop_cover_image.jpg";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonial = () => {
  return (
    <section className='bg-themeBlue'>
            <div className='lg:container mx-auto px-5 flex flex-col lg:flex-row-reverse justify-between pb-10 pt-20 lg:pb-40 lg:pt-10 2xl:pt-40 2xl:pb-52'>
                <div className='w-full sm:w-3/4 mx-auto lg:w-1/2 xl:w-2/5 rounded-sm relative -top-6 lg:-top-28 2xl:-top-52'>
                    <img src={coverImage} alt="Cover Image" className='lg:absolute rounded-sm' />
                </div>
                <div className='text-white w-fit xl:w-3/5'>
                    <RiDoubleQuotesL className='text-5xl'/>
                    <p className='my-5 w-fit text-base sm:text-lg 2xl:text-2xl'>The truth must be told. We are here because of PayPal. <br className='hidden lg:block' /> I am inspired by what PayPal is doing and we want to <br className='hidden lg:block' /> continue to grow with PayPal</p>
                    <span className='block text-sm sm:text-sm w-fit'>Vipin Sahu</span>
                    <span className='block text-sm sm:text-sm w-fit'>Co-Founder</span>
                    <span className='font-semibold text-sm sm:text-base mt-5 block w-fit'>Webkul</span>
                </div>
            </div>
        </section>
  )
}

export default Testimonial
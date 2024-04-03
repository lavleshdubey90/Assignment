import React from 'react'
import coverImage from "../assests/customer_network_cover_image.jpg";
import { BsArrowDownRight } from "react-icons/bs";

const CustomerNetwork = () => {
    return (
        <section className='py-10'>
            <div className='py-10 md:py-32 lg:py-40 px-5 flex flex-col-reverse gap-10 sm:flex-row justify-between container mx-auto'>
                <div className='w-full sm:w-3/4 lg:w-1/2 xl:w-2/5'>
                    <h3 className='text-3xl xl:text-5xl leading-tight'>Levarage our dedicated customer network</h3>
                    <p className='my-10 text-sm xl:text-xl'>Our global network of 400+ million active accounts buys more and more often with PayPal.<sup>1</sup></p>
                    <a href="#" className='flex items-center text-base sm:text-lg xl:text-xl w-fit gap-4 font-semibold text-cyan-500 hover:text-blue-500 duration-300'>Learn about out extensive network <div className='relative w-8 h-8 rounded-full bg-cyan-400/20'><BsArrowDownRight className='top-[7px] absolute -rotate-45 scale-150' /></div></a>
                </div>

                <div className="right w-full mx-auto sm:w-1/2">
                    <img src={coverImage} alt="" />
                </div>
            </div>
        </section>
    )
}

export default CustomerNetwork
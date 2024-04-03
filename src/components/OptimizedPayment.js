import React from 'react'
import globe from "../assests/globe.png";
import { BsArrowDownRight } from "react-icons/bs";

const OptimizedPayment = () => {
    return (
        <section className='bg-[#0a4437]'>
            <div className="container px-5 flex flex-col-reverse md:flex-row justify-between mx-auto items-center">
                <img src={globe} alt="" className='w-96 xl:w-[40rem]'/>
                <div className='w-full py-5 md:py-0 text-white sm:w-3/4 lg:w-1/2 xl:w-2/5'>
                    <h3 className='text-3xl xl:text-5xl leading-tight'>Optimize your payment processing</h3>
                    <p className='my-10 text-sm xl:text-xl'>Our mix of tools, technology, relationships, and data can help you process more transactions successfully and capture more revenue.</p>
                    <a href="#" className='flex items-center text-base sm:text-lg xl:text-xl w-fit gap-4 font-semibold text-cyan-500 hover:text-blue-500 duration-300'>Learn how to optimize payment processing<div className='relative w-8 h-8 rounded-full bg-cyan-400/20'><BsArrowDownRight className='top-[7px] absolute -rotate-45 scale-150' /></div></a>
                </div>
            </div>
        </section>
    )
}

export default OptimizedPayment
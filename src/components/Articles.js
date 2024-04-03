import React from 'react'
import { BsArrowDownRight } from "react-icons/bs";
import aeroplane from "../assests/aeroplane.png"

const Articles = () => {
    return (
        <section className='lg:container mx-auto px-5 py-20'>

            <div className='flex flex-col md:flex-row'>
                <div className='left h-1/2 pt-20 w-full md:w-1/2 flex flex-col'>
                    <div className='pb-10 md:pb-16 2xl:pb-32 w-full'>
                        <div className=' w-[90%] xl:w-3/4 mx-auto md:mx-0'>

                        <h3 className='text-2xl xl:text-4xl leading-tight'>Case Study: Payout options help reassure sellers as they join Wallmart's Marketplace</h3>
                        <p className='my-5'>America's largest retailer partnered with PayPal to give its curated community of sellers the payout options they needed and grew their network by 130% in the process.</p>
                        <a href="#" className='flex items-center text-base sm:text-lg xl:text-xl w-fit gap-4 font-semibold text-cyan-500 hover:text-blue-500 duration-300'>Read the case study <div className='relative w-8 h-8 rounded-full bg-cyan-400/20'><BsArrowDownRight className='top-[7px] absolute -rotate-45 scale-150' /></div></a>
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='w-[90%] mx-auto md:mx-0 pt-10 md:pt-16 2xl:pt-32 border-t-2 border-gray-300'>
                            <h3 className='text-2xl leading-tight'>Ebook: Everything you need to know about payment processing solutions</h3>
                            <p className='my-5'>Your customers expect a seamless and secure digital purchasing experience. Learn how your business can provide it.</p>
                            <a href="#" className='flex items-center text-base sm:text-lg xl:text-xl w-fit gap-4 font-semibold text-cyan-500 hover:text-blue-500 duration-300'>Read the ebook <div className='relative w-8 h-8 rounded-full bg-cyan-400/20'><BsArrowDownRight className='top-[7px] absolute -rotate-45 scale-150' /></div></a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col right w-full md:w-1/2 mx-auto pt-10 md:pt-0 md:pl-20 my-10 md:my-20 border-t-2 md:border-t-0 md:border-l-2 border-gray-300">
                    <img src={aeroplane} alt="" className='w-full sm:w-3/4 mx-auto md:w-[90%]' />
                    <div className='pt-10 md:pt-20 w-[90%] mx-auto md:w-full'>
                            <h3 className='text-2xl leading-tight'>News: United introduces QR codes to inflight payment options</h3>
                            <p className='my-5'>New partnership enables United customers to buy snacks, drinks, and other inflight purchases by using their PayPal app.</p>
                            <a href="#" className='flex items-center text-base sm:text-lg xl:text-xl w-fit gap-4 font-semibold text-cyan-500 hover:text-blue-500 duration-300'>Read the article <div className='relative w-8 h-8 rounded-full bg-cyan-400/20'><BsArrowDownRight className='top-[7px] absolute -rotate-45 scale-150' /></div></a>
                        </div>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-y-2 p-4 sm:p-8 sm:pl-10 mt-10 bg-[#f5f7fa] gap-x-5 lg:gap-x-10 sm:items-center rounded-sm'>
                <p className='text-lg lg:text-xl text-gray-400'>Looking for an out-of-box solution?</p>
                <a href="#" className='flex items-center text-base md:text-lg lg:text-xl w-fit gap-4 font-semibold text-cyan-500 hover:text-blue-500 duration-300'>See how can you get started today <div className='relative w-8 h-8 rounded-full bg-cyan-400/20'><BsArrowDownRight className='top-[7px] absolute -rotate-45 scale-150' /></div></a>
            </div>

        </section>
    )
}

export default Articles
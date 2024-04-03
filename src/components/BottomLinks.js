import React from 'react'

const BottomLinks = () => {

    const links = ["Accept Payments", "Make Payments", "Manage Risk", "Accelerate Growth", "Streamline Operations"]

    return (
        <div className='py-20 px-5 md:px-10 2xl:px-40'>
            <p className='text-lg'><sup>1</sup>Nielsen Study, Commissioned by PayPal, July 2020 to September 2020 of 15,144 US consumers to understand and measure the impact that PayPal has for US-based large enterprise merchants across different verticals.</p>

            <div className="mt-20 lg:mt-40">
                <div className="flex flex-col lg:flex-row gap-y-20 lg:gap-y-20 gap-x-10 2xl:gap-x-20">
                    <div className='w-full lg:w-2/5'>
                        <h4 className='pb-2 border-b-2 border-gray-300 text-themeBlue font-semibold'>Small-to-Medium Bussiness</h4>

                        <div className="flex flex-col lg:flex-row justify-between">
                            <div className='flex min-w-40 flex-col gap-y-2 lg:gap-y-5 mt-10'>
                                <a href="#" className='font-semibold hover:underline'>Introduction</a>
                                <a href="#" className='font-semibold hover:underline'>Getting Started</a>
                            </div>

                            <div className='flex flex-col gap-y-2 lg:gap-y-5 mt-10'>
                                <a href="#" className='font-semibold hover:underline'>All Solutions</a>

                                <div className='space-y-2'>
                                    {
                                        links.map((item, index) => <a key={index} href="#" className='block hover:underline'>{item}</a>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full lg:w-2/5'>
                        <h4 className='pb-2 border-b-2 border-gray-300 text-themeBlue font-semibold'>Enterprise</h4>

                        <div className="flex flex-col lg:flex-row justify-between">
                            <div className='flex min-w-40 flex-col gap-y-2 lg:gap-y-5 mt-10'>
                                <a href="#" className='font-semibold hover:underline'>Introduction</a>
                                <a href="#" className='font-semibold hover:underline'>Marketplaces & Partners</a>
                            </div>

                            <div className='flex flex-col gap-y-2 lg:gap-y-5 mt-10'>
                                <a href="#" className='font-semibold hover:underline'>Plateform & Solutions</a>

                                <div className='space-y-2'>
                                    {
                                        links.map((item, index) => <a key={index} href="#" className='block hover:underline'>{item}</a>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/5'>
                        <h4 className='pb-2 border-b-2 border-gray-300 text-themeBlue font-semibold'>More</h4>
                        <div className='flex min-w-40 flex-col gap-y-2 lg:gap-y-5 mt-10'>
                            <a href="#" className='font-semibold hover:underline'>Nonprofits</a>
                            <a href="#" className='font-semibold hover:underline'>Pricing</a>
                            <a href="#" className='font-semibold hover:underline'>Resource Center</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomLinks
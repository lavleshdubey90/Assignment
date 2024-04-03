import React from 'react'

const Consumers = () => {
    return (
        <section className='py-20 bg-[#f5f7fa]'>
            <div className='container px-5 pt-5 md:pt-10 lg:pt-20 xl:pt-40 mx-auto flex items-center flex-col md:flex-row justify-between'>
                <div className="left mb-10 md:mb-0 w-full">
                    <h2 className='text-3xl md:text-4xl xl:text-5xl leading-snug'>PayPal is trusted by <br className='hidden md:block'/> bussiness and <br className='hidden md:block'/> consumers around the <br className='hidden md:block'/> world</h2>
                </div>

                <div className='right flex flex-col w-full md:w-1/3 min-w-1/4'>
                    <div className="top flex justify-between gap-20">
                        <div className='w-1/2'>
                            <h3 className='text-3xl xl:text-5xl text-teal-600'>400+</h3>
                            <p className='text-lg text-gray-700 pt-4'>million active customers</p>
                        </div>

                        <div className='w-1/2'>
                            <h3 className='text-3xl xl:text-5xl text-teal-600'>200+</h3>
                            <p className='text-lg text-gray-700 pt-4'>markets around the globe</p>
                        </div>
                    </div>

                    <hr className='border-t my-16 border-gray-400'/>

                    <div className="lower flex justify-between">
                        <div className='w-1/2'>
                            <h3 className='text-3xl xl:text-5xl text-teal-600'>20+</h3>
                            <p className='text-lg text-gray-700 pt-4'>years of experience</p>
                        </div>

                        <div className='w-1/2 ml-20'>
                            <h3 className='text-3xl xl:text-5xl text-teal-600'>30+</h3>
                            <p className='text-lg text-gray-700 pt-4'>million merchants<sup>1</sup></p>
                        </div>
                    </div>
                </div>


                {/* <div className="right grid border-2 border-rose-400 grid-rows-2 grid-cols-2 gap-10">
                    <div>
                        <h3 className='text-3xl xl:text-5xl text-teal-600'>400+</h3>
                        <p className='text-lg text-gray-700 pt-4'>million active customers</p>
                    </div>
                    
                    <div>
                        <h3 className='text-3xl xl:text-5xl text-teal-600'>200+</h3>
                        <p className='text-lg text-gray-700 pt-4'>markets around the globe</p>
                    </div>

                    <div>
                        <h3 className='text-3xl xl:text-5xl text-teal-600'>20+</h3>
                        <p className='text-lg text-gray-700 pt-4'>years of experience</p>
                    </div>
                    <div>
                        <h3 className='text-3xl xl:text-5xl text-teal-600'>30+</h3>
                        <p className='text-lg text-gray-700 pt-4'>million merchants</p>
                    </div>

                </div> */}
            </div>
        </section>
    )
}

export default Consumers
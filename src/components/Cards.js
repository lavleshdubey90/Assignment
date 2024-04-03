import React from 'react'
import salesTeam from "../assests/sales_team.jpg";
import developerDocumentation from "../assests/developer_documentation.jpg"

const Cards = () => {
  return (
    <div className='bg-[#f5f5f5] w-full'>
      <div className='w-[95%] sm:w-3/4 md:w-[80rem] px-5 container flex flex-col md:flex-row gap-y-14 md:gap-x-14 py-14 mx-auto'>
        <div className="p-5 mx-auto lg:p-10 min-h-[30rem] lg:min-h-[40rem] h-full flex flex-col justify-between bg-white">
          <div>
            <img src={salesTeam} alt="" className='' />
            <h2 className='text-2xl lg:text-3xl my-5'>Contact our sales team</h2>
            <p className='text-sm md:text-base'>Learn how payments can be leveraged as a catalyst for growth.</p>
          </div>
          <button className='px-6 lg:w-fit font-bold py-3 rounded-full border-2 bg-[#0070ba] hover:bg-[#003087] duration-300 text-white'>Contact Sales</button>
        </div>

        <div className="p-5 lg:p-10 min-h-[30rem] lg:min-h-[40rem] h-full flex flex-col justify-between bg-white">
          <div>
            <img src={developerDocumentation} alt="" />
            <h2 className='text-2xl lg:text-3xl my-5'>Explore developer documentation</h2>
            <p className='text-sm md:text-base'>See how our flexible and interoperable technology helps to simplify integration.</p>
          </div>
          <button className='px-6 lg:w-fit font-bold py-3 rounded-full border-2 bg-[#0070ba] hover:bg-[#003087] duration-300 text-white'>Visit Developer Docs</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
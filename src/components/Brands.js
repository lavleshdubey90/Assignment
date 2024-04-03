import React from 'react'
import dsw from "../assests/brands/dsw.png";
import fandango from "../assests/brands/fandango.png";
import givedirectly from "../assests/brands/givedirectly.png";
import grubhub from "../assests/brands/grubhub.png";
import kiva from "../assests/brands/kiva.png";
import owc from "../assests/brands/owc.png";
import phoenixSuns from "../assests/brands/PhoenixSuns.png";
import speedway from "../assests/brands/speedway.png";
import spotify from "../assests/brands/spotify.png";
import ultrabeauty from "../assests/brands/ultrabeauty.png";


const Brands = () => {

    return (
        <section className='py-20 md:py-40'>
            <div className='container mx-auto'>
                <h2 className='text-3xl px-5 md:text-4xl w-full lg:w-3/5 text-center mx-auto'>We help drive growth for some of the world's most forward-looking brands</h2>
                <div className="brands mt-20 flex-col items-center justify-center">

                    <div className="grid grid-rows-1 md:grid-rows-2 gap-x-10 md:gap-x-32 lg:gap-x-40 2xl:gap-x-80 gap-y-20 items-center px-5 grid-cols-4">
                        <img src={dsw} alt="" className='w-32' />
                        <img src={fandango} alt="" className='w-60' />
                        <img src={givedirectly} alt="" className='w-60' />
                        <img src={grubhub} alt="" className='w-40' />

                        <img src={kiva} alt="" className='w-32'/>
                        <img src={owc} alt="" className='w-32'/>
                        <img src={phoenixSuns} alt="" className='w-32'/>
                        <img src={speedway} alt="" className='w-32'/>
                    </div>

                    <div className='flex justify-center mt-20 gap-x-10 md:gap-x-32 lg:gap-x-40 2xl:gap-x-80 mx-auto'>
                        <img src={spotify} alt="" className='w-[20vw] md:w-32'/>
                        <img src={ultrabeauty} alt="" className='w-[20vw] md:w-32'/>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Brands
import React from 'react'
import textLogo from "../assests/text_logo.png"
import countryFlag from "../assests/usa_flag.png"

const Footer = () => {

    const topLinks = ["Help", "Contact", "Fees", "Security", "Apps", "Shop", "Enterprise", "Partners", "Feedback"];
    const bottomLinks = ["About", "Newsroom", "Jobs", "Investor Relations", "Values in Action", "Public Policy", "Sitemap"];

    return (
        <footer className='px-5 py-10 md:p-10'>
            <img src={textLogo} alt="PayPal logo" className='w-40'/>

            <div className='text-themeBlue font-bold mt-10'>
                <div className="row flex flex-wrap-reverse gap-y-10 justify-between items-center border-b-2 border-gray-300 py-5">
                    <div className='flex flex-wrap gap-y-3 gap-x-5 md:gap-x-10'>
                        {
                            topLinks.map((item, index) => <a key={index} href='#'>{item}</a>)
                        }
                    </div>

                    <img src={countryFlag} alt="USA flag" className='w-6' />
                </div>

                <div className='flex flex-wrap gap-y-3 justify-between py-5'>
                    <div className='flex flex-wrap gap-y-3 gap-x-5 md:gap-x-10'>
                        {
                            bottomLinks.map((item, index) => <a key={index} href='#'>{item}</a>)
                        }
                    </div>

                    <div className='flex flex-wrap gap-x-5 md:gap-x-10 gap-y-3'>
                        <span className='text-gray-500 font-semibold'>&copy; 1999-2022</span>
                        <a href="#">Accessibility</a>
                        <a href="#">Privacy</a>
                        <a href="#">Cookies</a>
                        <a href="#">Legal</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
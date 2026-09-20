import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin } from 'react-icons/bi'

const Footer = () => {
    return (
        <footer className='bg-zinc-100/90 pt-16 pb-8 border-t border-zinc-200'>
            <div className='max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8'>

                {/* Main 4-Column Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8'>

                    {/* 1. Brand / About Info */}
                    <div className='lg:col-span-4 space-y-4'>
                        <a href="#" className="text-3xl font-extrabold tracking-tight text-zinc-900 inline-block">
                            Gr<span className="text-orange-500 uppercase">o</span>cify
                        </a>
                        <p className='text-zinc-600 text-sm sm:text-base leading-relaxed max-w-sm'>
                            Fresh groceries, organic foods, and daily essentials delivered right to your doorstep with speed and care.
                        </p>
                    </div>

                    {/* 2. Company Links */}
                    <div className='lg:col-span-2'>
                        <h5 className='text-zinc-900 text-lg font-bold mb-4'>Company</h5>
                        <ul className='space-y-3 text-sm sm:text-base'>
                            <li>
                                <a href="#" className='text-zinc-600 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 inline-block'>
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className='text-zinc-600 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 inline-block'>
                                    FAQ'S
                                </a>
                            </li>
                            <li>
                                <a href="#" className='text-zinc-600 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 inline-block'>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* 3. Support Links */}
                    <div className='lg:col-span-2'>
                        <h5 className='text-zinc-900 text-lg font-bold mb-4'>Support</h5>
                        <ul className='space-y-3 text-sm sm:text-base'>
                            <li>
                                <a href="#" className='text-zinc-600 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 inline-block'>
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className='text-zinc-600 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 inline-block'>
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className='text-zinc-600 hover:text-orange-500 hover:translate-x-1 transition-all duration-200 inline-block'>
                                    Help Center
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* 4. Newsletter & Socials */}
                    <div className='lg:col-span-4 space-y-4'>
                        <h5 className='text-zinc-900 text-lg font-bold'>Stay Connected</h5>

                        {/* Social Icons with Smooth Hover Effect */}
                        <div className='flex items-center gap-3'>
                            {[
                                { icon: <BiLogoFacebook size={20} />, label: "Facebook" },
                                { icon: <BiLogoTwitter size={20} />, label: "Twitter" },
                                { icon: <BiLogoInstagram size={20} />, label: "Instagram" },
                                { icon: <BiLogoLinkedin size={20} />, label: "LinkedIn" }
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    aria-label={item.label}
                                    className="w-10 h-10 rounded-full bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-zinc-600 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:-translate-y-1 active:scale-95 transition-all duration-300"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>

                        <p className='text-zinc-600 text-sm pt-1'>
                            Questions or feedback? Subscribe to our newsletter.
                        </p>

                        {/* Newsletter Input */}
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className='flex items-center p-1.5 bg-white border border-zinc-200 rounded-full shadow-sm max-w-sm focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20 transition-all duration-300'
                        >
                            <input
                                type="email"
                                placeholder='Email Address'
                                required
                                className='w-full bg-transparent px-4 py-2 text-zinc-800 placeholder-zinc-400 text-sm outline-none border-none'
                            />
                            <button
                                type="submit"
                                aria-label="Subscribe"
                                className='shrink-0 w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-b from-orange-400 to-orange-500 text-white shadow-sm hover:shadow-orange-500/30 hover:from-orange-500 hover:to-orange-600 active:scale-95 transition-all duration-200 cursor-pointer'
                            >
                                <AiOutlineArrowRight className='text-base' />
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar: Copyright */}
                <div className='mt-12 sm:mt-16 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs sm:text-sm text-zinc-500'>
                    <p>© 2026 Grocify. All rights reserved.</p>
                    <div className='flex gap-4 sm:gap-6'>
                        <a href="#" className='hover:text-orange-500 transition-colors'>Security</a>
                        <a href="#" className='hover:text-orange-500 transition-colors'>Privacy</a>
                        <a href="#" className='hover:text-orange-500 transition-colors'>Cookies</a>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
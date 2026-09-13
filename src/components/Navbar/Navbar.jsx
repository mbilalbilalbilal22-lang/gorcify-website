import React, { useEffect, useState } from 'react'
import { IoSearch, IoMenu, IoClose } from 'react-icons/io5' // Hamburger icons
import { GoHeartFill } from 'react-icons/go'
import { RiShoppingBag4Fill } from 'react-icons/ri' // Note: Make sure 'ri' is from 'react-icons/ri'
import { TbMenu2 } from 'react-icons/tb'
import { ImCross } from 'react-icons/im'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`bg-white fixed top-0 right-0 left-0 z-50 ${isScrolled ? 'shadow-lg' : ''}`}>
      <nav className="max-w-[1150px] h-[12vh] md:h-[14vh] px-10 mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-x-15">
          <li>
            <a href="#" className="font-semibold tracking-wider text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">
              Process
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Nav Action */}
        <div className="flex items-center gap-x-5">
          {/* Search Input Field */}
          <div className="hidden md:flex p-1 border-2 border-orange-500 flex items-center rounded-full">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-red-600 to-orange-400 h-10 w-10 text-white flex justify-center items-center rounded-full">
              <IoSearch />
            </button>
          </div>

          {/* Wishlist Icon */}
          <a href="#" className="text-zinc-800 text-2xl">
            <GoHeartFill />
          </a>

          {/* Cart Icon */}
          <a href="#" className="text-zinc-800 text-2xl">
            <RiShoppingBag4Fill />
          </a>
          
          {/* Hamburger Icon */}
          <a href="#" className="text-zinc-800 text-3xl md:hidden" onClick={toggleMenu}>
            {showMenu ? <ImCross /> : <TbMenu2 />}
          </a>
        </div>

        {/* Mobile Menu */}
        <ul className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-lg p-10 items-center gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 rounded-2xl ${showMenu ? 'left-1/2' : ""}`}>
          <li>
            <a href="#" className="font-semibold tracking-wider text-orange-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">
              Process
            </a>
          </li>
          <li>
            <a href="#" className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500">
              Contact Us
            </a>
          </li>
          <li className="flex p-1 border-2 border-orange-500 flex items-center rounded-full md:hidden">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-red-600 to-orange-400 h-10 w-10 text-white flex justify-center items-center rounded-full">
              <IoSearch />
            </button>
          </li>
        </ul>
        
      </nav>
    </header>
  )
}

export default Navbar
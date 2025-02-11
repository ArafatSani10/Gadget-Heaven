import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import Hero from "./Hero";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            {/* Navbar */}
            <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-7 mx-auto shadow-lg fixed top-0 left-0 w-full z-50">
                <div className="flex items-center justify-between lg:justify-between">
                    {/* Website Name */}
                    <div className="text-white md:text-3xl max-sm:text-xl font-semibold">Gadget Heaven</div>

                    {/* Menu Toggle Button for small screen */}
                    <div className="lg:hidden flex items-center space-x-4">
                        {/* Shopping Cart Icon */}
                        <FaCartShopping className="p-2 text-white border rounded-full w-10 h-9" />
                        
                        {/* Hamburger Icon for small screens */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white text-2xl transition-all duration-300"
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Navbar Links for large screens */}
                    <div className="hidden lg:flex items-center justify-center flex-1 mr-28 space-x-10">
                        <ul className="flex gap-16">
                            <li className="text-white hover:text-blue-500 font-bold text-xl transition duration-300">Home</li>
                            <li className="text-white hover:text-blue-500 font-bold text-xl transition duration-300">Statistics</li>
                            <li className="text-white hover:text-blue-500 font-bold text-xl transition duration-300">Dashboard</li>
                        </ul>
                    </div>

                    {/* Icons for Cart and Heart */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <div className="flex items-center gap-4">
                            <FaCartShopping className="p-2 text-white border rounded-full w-10 h-9" />
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden fixed top-0 right-0 bg-blue-800 w-64 h-auto transition-transform duration-500 ease-in-out ${menuOpen ? "transform translate-x-0" : "transform translate-x-full"}`}
                >
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setMenuOpen(false)}
                            className="text-white text-3xl"
                        >
                            <FaTimes />
                        </button>
                    </div>
                    <ul className="flex flex-col items-center space-y-6 mb-24">
                        <li className="text-white transition duration-300">Home</li>
                        <li className="text-white transition duration-300">Statistics</li>
                        <li className="text-white transition duration-300">Dashboard</li>
                    </ul>
                </div>
            </nav>

            {/* Banner */}
            <div className="mt-[92px]"> {/* Added margin-top to push content below navbar */}
             <Hero></Hero>
            </div>
        </div>
    );
};

export default Navbar;

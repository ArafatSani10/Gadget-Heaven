import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

 
    const location = useLocation();
    const isDetailsPage = location.pathname.includes("/details");
    const isStatisticsPage = location.pathname.includes("/Statistics");
    const isDashboardPage = location.pathname.includes("/dashboard");

    const backgroundClass = isDetailsPage || isStatisticsPage || isDashboardPage ? "bg-white text-black" : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white";

    return (
        <div>
            {/* Navbar */}
            <nav
                className={`${backgroundClass} p-7 mx-auto shadow-lg fixed top-0 left-0 w-full z-50 transition-all duration-300`}
            >
                <div className="flex items-center justify-between lg:justify-between">
                    {/* Website Name */}
                    <div className={`font-semibold ${isDetailsPage || isStatisticsPage || isDashboardPage ? "text-black" : "text-white"} md:text-3xl max-sm:text-xl`}>
                        <NavLink to='/'>
                            Gadget Heaven
                        </NavLink>
                    </div>

                    <div className="lg:hidden flex items-center space-x-4">
                        <FaCartShopping className={`p-2 ${isDetailsPage || isStatisticsPage || isDashboardPage ? "text-black" : "text-white"} border rounded-full w-10 h-9`} />
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={`text-2xl ${isDetailsPage || isStatisticsPage || isDashboardPage ? "text-black" : "text-white"}`}
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Navbar Links for large screens */}
                    <div className="hidden lg:flex items-center justify-center flex-1 mr-28 space-x-10">
                        <ul className="flex gap-16">
                            <NavLink to='/'>
                                <li className={`transition duration-300 ${isDetailsPage || isStatisticsPage || isDashboardPage ? "text-black hover:text-blue-500" : "text-white hover:text-blue-500"} font-bold text-xl`}>Home</li>
                            </NavLink>
                            <NavLink to='/Statistics'>
                                <li className={`transition duration-300 ${isDetailsPage || isStatisticsPage || isDashboardPage ? "text-black hover:text-blue-500" : "text-white hover:text-blue-500"} font-bold text-xl`}>Statistics</li>
                            </NavLink>
                            <NavLink to='/dashboard'>
                                <li className={`transition duration-300 ${isDetailsPage || isStatisticsPage || isDashboardPage ? "text-black hover:text-blue-500" : "text-white hover:text-blue-500"} font-bold text-xl`}>Dashboard</li>
                            </NavLink>
                        </ul>
                    </div>

                    {/* Icons for Cart */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <FaCartShopping className={`p-2 ${isDetailsPage || isStatisticsPage || isDashboardPage ? "text-black" : "text-white"} border rounded-full w-10 h-9`} />
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden fixed top-0 right-0 bg-blue-800 w-64 h-auto transition-transform duration-500 ease-in-out ${menuOpen ? "transform translate-x-0" : "transform translate-x-full"}`}
                >
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setMenuOpen(false)}
                            className={`text-3xl ${isDetailsPage || isStatisticsPage || isDashboardPage ? "text-black" : "text-white"}`}
                        >
                            <FaTimes />
                        </button>
                    </div>
                    <ul className="flex flex-col items-center space-y-6 mb-24">
                        <NavLink to='/'>
                            <li className={`transition duration-300 ${isDetailsPage || isStatisticsPage || isDashboardPage ? "text-black" : "text-white"}`}>Home</li>
                        </NavLink>

                        <NavLink to='/Statistics'>
                            <li className={`transition duration-300 ${isDetailsPage || isStatisticsPage || isDashboardPage ? "text-black" : "text-white"}`}>Statistics</li>
                        </NavLink>

                        <NavLink to='/dashboard'>
                            <li className={`transition duration-300 ${isDetailsPage || isStatisticsPage || isDashboardPage ? "text-black" : "text-white"}`}>Dashboard</li>
                        </NavLink>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

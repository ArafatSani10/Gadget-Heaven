import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const TabList = ({ tablist }) => {
    const location = useLocation();

    return (
        <div className="flex md:w-[1200px] p-6 mt-12 max-sm:flex-col mx-auto md:justify-between md:space-x-10">
            <div
                role="tablist"
                className="tabs border-2 text-black tabs-boxed flex flex-col items-center p-2 space-y-5 rounded-lg shadow-md"
            >
                {tablist.map((category) => {
                    const isActive = location.pathname === `/category/${category.category}`;
                    return (
                        <Link
                            key={category.category}
                            to={`/category/${category.category}`}
                            role="tab"
                            className={`w-full p-6 hover:bg-blue-400 transition duration-200 text-center mx-6 rounded-full gap-y-10 h-[80px] flex items-center shadow-2xl text-xl font-medium text-black ${isActive ? 'bg-blue-500 text-white' : ''
                                }`}
                        >
                            <span>{category.category}</span>
                        </Link>
                    );
                })}
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default TabList;

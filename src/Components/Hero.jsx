import React from 'react';

const Hero = () => {
    return (
        <div className='bg-gradient-to-r from-blue-500 to-indigo-600 text-white'>
            {/* Wrapper for components */}
            <div className="flex flex-col items-center px-4 py-12">
                {/* Content (heading, description, button) */}
                <div className="text-center mt-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Upgrade Your Tech Accessories with <br /> Gadget Heaven Accessories
                    </h1>
                    <p className="mt-4 text-lg md:text-xl">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
                    </p>
                    <button className="mt-6 bg-white text-blue-600 p-4 rounded-full hover:bg-gray-200 transition duration-300">
                        Shop Now
                    </button>
                </div>

                {/* Image, Positioned Below Content */}
                <div className='w-full max-w-[800px] mx-auto mt-8'>
                    <img
                        className='object-cover border-4 p-3  border-white rounded-2xl w-full h-[300px] md:h-[400px]'
                        src="https://i.ibb.co/vCvZ1mTx/banner.jpg"
                        alt="Gadget Heaven Banner"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;

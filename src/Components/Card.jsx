import React from 'react';

const Card = ({ product }) => {
    const { product_title, product_image, category, price, description } = product;

    return (
        <div className="w-full max-sm:w-full mx-auto my-5 p-4 flex flex-col justify-between bg-white border-2 border-gray-300 shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl">
            {/* Product Image */}
            <div className="relative w-full h-auto max-sm:h-64 bg-gray-200 rounded-lg overflow-hidden mb-4">
                <img
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                    src={product_image}
                    alt={product_title}
                />
            </div>

            {/* Card Content */}
            <div className="flex flex-col max-sm:w-full justify-between">
                {/* Product Title */}
                <h2 className="text-xl max-sm:text-lg font-semibold text-gray-800 truncate mb-2">{product_title}</h2>

                {/* Price */}
                <h3 className="text-lg max-sm:text-xl font-semibold text-gray-500 mb-4">{price} USD</h3>

                {/* View Details Button */}
                <button className="px-4 border-2 hover:text-white  py-3 text-black  hover:bg-blue-600 rounded-full transition-colors duration-200">
                    View Details
                </button>
            </div>
        </div>

      
    );
};

export default Card;

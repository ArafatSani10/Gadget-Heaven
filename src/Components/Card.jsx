
import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'; 
import { Link, useLocation } from 'react-router-dom';

const Card = ({ product, handleRemove }) => {
    const { pathname } = useLocation();
    const { id, product_id, product_title, product_image, category, price, description } = product;

 
    const isDashboard = pathname === '/dashboard';

    return (
        <div className={`w-full max-sm:w-full mx-auto my-5 p-4 flex ${isDashboard ? 'flex-row' : 'flex-col'} justify-between bg-white border-2 border-gray-300 shadow-lg rounded-lg transition-all duration-300 hover:shadow-xl relative`}>
            {/* Product Image */}
            <div className={`relative ${isDashboard ? 'w-1/3' : 'w-full'} h-auto max-sm:h-64 bg-gray-200 rounded-lg overflow-hidden mb-4`}>
                <img
                    className="w-full h-full border p-4 object-cover transition-transform duration-300 transform hover:scale-110"
                    src={product_image}
                    alt={product_title}
                />
            </div>

            {/* Card Content */}
            <div className={`flex flex-col ${isDashboard ? 'w-2/3' : 'w-full'} justify-between`}>
                {/* Product Title */}
                <h2 className="text-xl max-sm:text-lg font-semibold text-gray-800 truncate mb-2">{product_title}</h2>

                {/* Price */}
                <h3 className="text-lg max-sm:text-xl font-semibold text-gray-500 mb-4">{price} USD</h3>

                {/* View Details Button */}
                <Link to={`/details/${product_id}`}>
                    <button className="px-4 border-2 hover:text-white py-3 text-black hover:bg-blue-600 rounded-full transition-colors duration-200">
                        View Details
                    </button>
                </Link>
            </div>

     
            {isDashboard && (
                <button
                    onClick={() => handleRemove(product_id)}
                    className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-200 flex items-center justify-center"
                    style={{ marginTop: '-12px', marginRight: '-10px' }} 
                >
                    <FaTrashAlt size={20} />
                </button>
            )}
        </div>
    );
};

export default Card;

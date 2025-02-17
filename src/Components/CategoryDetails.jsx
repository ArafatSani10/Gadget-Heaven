import React, { useState } from 'react';
import { FaCartShopping, FaStar, FaRegStar } from 'react-icons/fa6'; // Importing the star icons
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { addToCart, getAllCart } from '../Utils';

const CategoryDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const filterData = data?.filter(item => item.product_id === id);
    
    if (!filterData || filterData.length === 0) {
        return <p>No product found with the provided ID.</p>;
    }
    const product = filterData[0];
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    const navigate = useNavigate();
   

    // handleCart btn click 
    const handleCart=(product)=>{
        console.log(product)
        addToCart(product)
     
    }
  

    return (
        <div>
            {/* Headline above the product card, with updated position */}
            <div className='mt-24 p-6 mb-6 h-[200px] text-center bg-blue-500 rounded-xl'>
                <h1 className="text-4xl font-semibold text-white">Product Details</h1>
                <p className="text-lg md:w-[800px] mx-auto text-white mt-2">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            {/* Product Card Section */}
            <div className="w-full max-w-screen-xl mx-auto p-6 mt-6 -mt-56 bg-white border-2 shadow-lg rounded-xl flex flex-col lg:flex-row justify-center items-start">
                {/* Product Image with Hover Effect */}
                <div className="relative border-2 p-5 w-[500px] h-[500px] max-sm:w-auto max-sm:h-auto bg-gray-200 rounded-lg overflow-hidden mb-6 lg:mb-0">
                    <img
                        className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                        src={product.product_image}
                        alt={product.product_title}
                    />
                </div>

                {/* Product Details */}
                <div className="product-details lg:w-2/3 pl-0 lg:pl-8 flex flex-col justify-between">
                    {/* Product Title */}
                    <h2 className="text-3xl font-semibold text-gray-900 mb-2">{product.product_title}</h2>

                    {/* Product Price */}
                    <p className="text-2xl font-semibold text-gray-900 mb-2">Price: ${product.price}</p>


                    {/* Product Description */}
                    <p className="text-gray-600 text-lg mb-2">{product.description}</p>




                    {/* Product Specifications */}
                    <div className="mt-4 mb-2">
                        <h3 className="text-xl font-medium mb-2">Specifications:</h3>
                        <ul className="list-disc pl-6 text-gray-700">
                            {product.Specification.map((spec, index) => (
                                <li key={index} className="mb-2">{spec}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Product Rating (Star Rating) */}
                    <div className="rating flex-col mb-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Rating:</h3>

                        {/* Full stars */}
                        <div className="text-lg flex text-yellow-500">
                            {Array(fullStars).fill(<FaStar />)} {/* Render full stars */}

                            {/* Half star */}
                            {halfStar && <FaStar className="text-yellow-300" />}

                            {/* Empty stars */}
                            {Array(emptyStars).fill(<FaRegStar />)} {/* Render empty stars */}
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="add-to-cart-btn border p-4 w-[180px] rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2 mt-2">
                        <button  onClick={()=>handleCart(product)} className="font-bold">Add to Cart</button>
                        <FaCartShopping size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryDetails;

import React, { useEffect, useState } from 'react';
import { getAllCart, removeCart } from '../Utils';
import Card from '../Components/Card';
import { useLocation } from 'react-router-dom';
import { FaSort } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
    const { pathname } = useLocation();

    const handleRemove = (id) => {
        removeCart(id);
        const cart = getAllCart();
        setProducts(cart);
    };

    const [products, setProducts] = useState([]);
    const [isSortedAsc, setIsSortedAsc] = useState(true);
    const [showCart, setShowCart] = useState(true);  // State to show Cart data or not

    useEffect(() => {
        const cart = getAllCart();
        setProducts(cart);
    }, []);

    // Sorting function by price
    const sortByPrice = () => {
        const sorted = [...products].sort((a, b) => {
            return isSortedAsc
                ? a.price - b.price
                : b.price - a.price;
        });
        setProducts(sorted);
        setIsSortedAsc(!isSortedAsc);
    };

    return (
        <div className="mt-24 px-4 md:px-8">
            <Helmet>
                <title>
                    Dashboard || Gadget Heaven
                </title>
            </Helmet>
            {/* Dashboard Header Section */}
            <div className="p-6 mb-8 text-center bg-blue-600 rounded-xl shadow-lg mx-auto">
                <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Dashboard</h1>
                <p className="text-lg md:w-[800px] mx-auto text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>

                <div className='flex items-center justify-center gap-5 mt-5'>
                    {/* Cart Button: On Click, Show Cart Data */}
                    <button
                        onClick={() => setShowCart(true)}
                        className={`font-bold border-2 w-[120px] h-[45px] rounded-full ${showCart ? 'bg-white text-black' : 'bg-blue-500 text-white'}`}
                    >
                        Cart
                    </button>
                    {/* Wishlist Button */}
                    <button
                        onClick={() => setShowCart(false)}
                        className={`font-bold border-2 w-[120px] h-[45px] rounded-full ${!showCart ? 'bg-white text-black' : 'bg-blue-500 text-white'}`}
                    >
                        Wishlist
                    </button>
                </div>
            </div>

            {/* Sort and Purchase Section */}
            {showCart && (
                <div className='flex items-center justify-between gap-5 mb-4'>
                    <h1 className='font-bold md:text-2xl text-xl'>Cart</h1>
                    <div className='flex items-center gap-2'>
                        <button
                            onClick={sortByPrice}
                            className='btn px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2'>
                            Sort by price <FaSort size={20} />
                        </button>
                        <p className='font-bold text-xl bg-blue-300 text-white border p-2 rounded-3xl shadow-xl'>Purchase</p>
                    </div>
                </div>
            )}

            {/* Conditional Rendering of Cart or Wishlist */}
            {showCart ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 md:px-8">
                    {products?.map(product => (
                        <Card handleRemove={handleRemove} key={product.product_id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-lg text-gray-600">
                    <h1 className="flex items-center justify-start font-bold md:text-2xl text-xl"> Wishlist</h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                        {products?.map(product => (
                            <Card handleRemove={handleRemove} key={product.product_id} product={product} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;

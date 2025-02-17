import React, { useEffect, useState } from 'react';
import { getAllCart, removeCart } from '../Utils';
import Card from '../Components/Card';
import { useLocation } from 'react-router-dom';
import { FaSort } from 'react-icons/fa';

const Dashboard = () => {
    const { pathname } = useLocation();

    const handleRemove = (id) => {
        removeCart(id);
        const cart = getAllCart();
        setProducts(cart);
    };

    const [products, setProducts] = useState([]);
    const [isSortedAsc, setIsSortedAsc] = useState(true); 

    useEffect(() => {
        const cart = getAllCart();
        setProducts(cart);
    }, []);

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
        <div className="mt-24">
            {/* Dashboard Header Section */}
            <div className="p-6 mb-8 text-center bg-blue-600 rounded-xl shadow-lg max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">Dashboard</h1>
                <p className="text-lg md:w-[800px] mx-auto text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>

            {/* Sort and Purchase Section */}
            <div className='flex items-center justify-end gap-5 mb-4'>
                <div className='flex items-center gap-2'>
                    <button
                        onClick={sortByPrice}
                        className='btn px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2'>
                        Sort by price <FaSort size={20} />
                    </button>
                </div>
                <p className='font-bold text-xl bg-blue-300 text-white border p-2 rounded-3xl shadow-xl'>Purchase</p>
            </div>

            {/* Product Cards Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 px-4 md:px-8">
                {products?.map(product => (
                    <Card handleRemove={handleRemove} key={product.product_id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;

import React, { useEffect, useState } from 'react';
import { getAllCart, removeCart } from '../Utils';
import Card from '../Components/Card';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const { pathname } = useLocation();
    console.log(pathname);
    const handleRemove = (id) => {
        removeCart(id);
        const cart = getAllCart()
        setProducts(cart)
    }
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const cart = getAllCart()
        setProducts(cart)
    }, [])


    return (
        <div className='mt-24 '>
            <div className="mt-24 p-6 mb-5 h-[200px] text-center bg-blue-500 rounded-xl">
                <h1 className="text-4xl font-semibold text-white">Dashboard</h1>
                <p className="text-lg md:w-[800px] mx-auto text-white mt-2">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
                {products?.map(product => (
                    <Card handleRemove={handleRemove} key={product.id} product={product} />
                ))}


            </div>
        </div>
    );
};

export default Dashboard;
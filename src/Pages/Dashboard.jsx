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
        const updatedCart = products.filter(product => product.product_id !== id);
        setProducts(updatedCart);
        calculateTotal(updatedCart);
    };

    const [products, setProducts] = useState([]);
    const [isSortedAsc, setIsSortedAsc] = useState(true);
    const [showCart, setShowCart] = useState(true);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPurchased, setIsPurchased] = useState(false);

    useEffect(() => {
        const cart = getAllCart();
        setProducts(cart);
        calculateTotal(cart);
    }, []);

    // Calculate total price for all products in the cart
    const calculateTotal = (cart) => {
        const total = cart.reduce((sum, product) => sum + product.price, 0);
        setTotalPrice(total);
    };

    // Sorting by price
    const sortByPrice = () => {
        const sorted = [...products].sort((a, b) => {
            return isSortedAsc ? a.price - b.price : b.price - a.price;
        });
        setProducts(sorted);
        setIsSortedAsc(!isSortedAsc);
        calculateTotal(sorted);
    };

    const handlePurchase = () => {
        if (products.length === 0) {
            alert("Your cart is empty. Please add some items before proceeding!");
        } else {
            setIsModalOpen(true);  // Show the modal
        }
    };

    const proceedPurchase = () => {
        setIsPurchased(true);
        products.forEach(product => {
            removeCart(product.product_id);
        });
        setProducts([]);
        setTotalPrice(0);
        setIsModalOpen(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="mt-24 px-4 sm:px-6 md:px-8">
            <Helmet>
                <title>Dashboard || Gadget Heaven</title>
            </Helmet>
            {/* Dashboard Header Section */}
            <div className="p-6 mb-8 text-center bg-blue-600 rounded-xl shadow-lg mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">Dashboard</h1>
                <p className="text-lg sm:text-xl md:w-[800px] mx-auto text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>

                <div className='flex flex-wrap items-center justify-center gap-5 mt-5'>
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
                <div className='flex flex-wrap items-center justify-between gap-5 mb-4'>
                    <h1 className='font-bold text-xl sm:text-2xl'>Cart</h1>
                    <div className='flex items-center gap-3'>
                        <button
                            onClick={sortByPrice}
                            className='btn px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2'>
                            Sort by price <FaSort size={20} />
                        </button>
                        <p className='font-bold text-xl bg-blue-300 text-white border p-2 rounded-3xl shadow-xl'>
                            Total: ${totalPrice.toFixed(2)} {/* Display the total price */}
                        </p>
                        <button
                            onClick={handlePurchase}
                            className="btn px-4 py-2 bg-green-500 text-white rounded-lg">
                            Purchase
                        </button>
                    </div>
                </div>
            )}

            {/* Conditional Rendering of Cart or Wishlist */}
            {showCart ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8">
                    {products?.map(product => (
                        <Card handleRemove={handleRemove} key={product.product_id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-lg text-gray-600">
                    <h1 className="flex items-center justify-start font-bold sm:text-xl md:text-2xl"> Wishlist</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {products?.map(product => (
                            <Card handleRemove={handleRemove} key={product.product_id} product={product} />
                        ))}
                    </div>
                </div>
            )}

            {/* Modal for Purchase Confirmation */}
            {isModalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                        {/* Success Image */}
                        <div className="flex justify-center mb-4">
                            <img
                                src="https://i.ibb.co.com/gZJqSBgg/Group.png"
                                alt="Success"
                                className="w-16 h-16"
                            />
                        </div>

                        {/* Success Text */}
                        <h2 className="text-2xl font-semibold text-center text-green-500 mb-4">Payment Successful!</h2>
                        <p className='font-bold text-xl text-center'>Thanks for purchasing</p>

                        {/* Total Price Display */}
                        <p className="text-center text-lg mb-4">Your total amount is ${totalPrice.toFixed(2)}.</p>

                        <div className="flex justify-center gap-4">
                            <button
                                onClick={proceedPurchase}
                                className="btn px-4 py-2 bg-green-500 text-white rounded-lg">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;

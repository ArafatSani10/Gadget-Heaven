// src/404.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-extrabold text-red-600">404</h1>
                <p className="text-xl text-gray-700 mt-4">Oops! Page not found.</p>
                <p className="text-lg text-gray-500 mt-2">The page you are looking for doesn't exist or has been moved.</p>
                <Link
                   to='/'
                    className="mt-6 inline-block px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;

import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import toast, { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div>
            <Toaster></Toaster>
            <Navbar />
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;

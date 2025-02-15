import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';


const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;

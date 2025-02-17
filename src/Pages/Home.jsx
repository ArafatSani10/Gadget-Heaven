import React from 'react';
import { Helmet } from 'react-helmet';
import TabList from '../Components/TabList';
import { Outlet, useLoaderData } from 'react-router-dom';
import Hero from '../Components/Hero';


const Home = () => {
    const tablist = useLoaderData();
    // console.log(tablist)
    return (
        <div className='mt-5'>
            <Helmet>
                <title>
                    Home || Gadget Heaven
                </title>
            </Helmet>
            {/* Banner */}
            <div>
                <Hero></Hero>
            </div>
            <div className='mt-52'>
                <TabList tablist={tablist}></TabList>
            </div>
        </div>
    );
};

export default Home;
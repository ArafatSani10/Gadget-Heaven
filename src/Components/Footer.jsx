import React from 'react';

const Footer = () => {
    return (
        <footer className="footer flex flex-col items-center justify-center border-2 bg-base-200 text-center mt-20 text-black p-10">
            {/* Header Section */}
            <div>
                <h1 className="md:text-3xl max-sm:text-xl max-sm:mx-32 mx-32 font-bold">Gadget Heaven</h1>
                <p className="md:text-lg max-sm:text-sm max-sm:mx-5  text-center">Leading the way in cutting-edge technology and innovation</p>
            </div> 
     
            {/* Footer Sections */}
            <div className="flex flex-wrap justify-center gap-16 max-sm:gap-12 md:gap-32">
                {/* Services Section */}
                <nav className="text-center space-y-2">
                    <h6 className="footer-title text-lg font-semibold">Services</h6>
                    <a className="link link-hover block">Product support</a>
                    <a className="link link-hover block">Order tracking</a>
                    <a className="link link-hover block">Shipping & delivery</a>
                    <a className="link link-hover block">Returns</a>
                </nav>

                {/* Company Section */}
                <nav className="text-center space-y-2">
                    <h6 className="footer-title text-lg font-semibold">Company</h6>
                    <a className="link link-hover block">About us</a>
                    <a className="link link-hover block">Careers</a>
                    <a className="link link-hover block">Contact</a>
                </nav>

                {/* Legal Section */}
                <nav className="text-center space-y-2">
                    <h6 className="footer-title text-lg font-semibold">Legal</h6>
                    <a className="link link-hover block">Terms of use</a>
                    <a className="link link-hover block">Privacy policy</a>
                    <a className="link link-hover block">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;

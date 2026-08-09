import React from 'react'
import Navbar from '../Navbar';
import Bokerage from './Bokerage';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

function PricingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Bokerage />
            <OpenAccount />
            <Footer />
        </>
    );
}

export default PricingPage;
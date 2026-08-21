import React from 'react'
import Hero from './Hero'
import Demat from './Demat'
import Account from './Account'
import Faqs from './Faqs'
import OpenAccount from '../OpenAccount';

function Signup() {
    return (
        <>
            <Hero />
            <Demat />
            <Account />
            <Faqs />
            <OpenAccount />
        </>
    );
}

export default Signup;
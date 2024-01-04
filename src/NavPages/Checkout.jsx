import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { loadStripe } from '@stripe/stripe-js';


import {
    PaymentElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const options = {
    mode: 'payment',
    amount: 101,
    currency: 'usd',
    // Fully customizable with appearance API.
    appearance: {
        /*...*/
    },
};


const Checkout = () => {
    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <Elements stripe={stripePromise} options={options}>
                <CheckoutForm />
            </Elements>
            <div></div>
        </div>
    );
};

export default Checkout;
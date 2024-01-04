import {
    PaymentElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import { useState } from 'react';


const items = [
    { id: "xl-tshirt", price: 50 },
    { id: "xl-tshirt", price: 50 },
    { id: "xl-tshirt", price: 50 },
    { id: "xl-tshirt", price: 50 },
    { id: "xl-tshirt", price: 50 },
];
const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentId,setPaymentId] = useState('')

    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (stripe == null || elements == null) {
            return;
        }
    
        // Trigger form validation and wallet collection
        const { error: submitError } = await elements.submit();
        if (submitError) {
            // Show error to your customer
            setErrorMessage(submitError.message);
            return;
        }
    
        // Create the PaymentIntent and obtain clientSecret from your server endpoint
        const res = await fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ items }),
        });
    
        const { clientSecret } = await res.json();
        console.log(res);
    
        setPaymentId(clientSecret);
    
        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            clientSecret: clientSecret,
            confirmParams: {
              return_url: `${window.location.origin}/success/:${res}`,
            },
          });
          
        
        
    
        if (error) {
            // This point will only be reached if there is an immediate error when
            // confirming the payment. Show error to your customer (for example, payment
            // details incomplete)
            setErrorMessage(error.message);
        } else {
            // Your customer will be redirected to your `return_url`.
            // For some payment methods like iDEAL, your customer will be redirected to an intermediate
            // site first to authorize the payment, then redirected to the `return_url`.
        }
    };
    
    return (
        <div className=''>
            <form onSubmit={handleSubmit} className='h-[500px] w-[500px]'>
                <PaymentElement />
                {/* Show error message to your customers */}
                {errorMessage && <div>{errorMessage}</div>}
                <button className='bg-[blue] px-10' type="submit" disabled={!stripe || !elements}>
                    Pay
                </button>
            </form>
            <div id="paymentIntentId"></div>
        </div>
    );
};
export default CheckoutForm;
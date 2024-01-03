import React, { useState } from 'react';
import './cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 54, quantity: 1, total: 54, stock:7 }, 
        { id: 2, name: 'Product 2', price: 34, quantity: 1, total: 34, stock:3 },
        { id: 3, name: 'Product 1', price: 54, quantity: 1, total: 54, stock:7 }, 
        { id: 4, name: 'Product 2', price: 34, quantity: 1, total: 34, stock:4 },
        { id: 5, name: 'Product 1', price: 54, quantity: 1, total: 54, stock:3 }, 
        { id: 6, name: 'Product 2', price: 34, quantity: 1, total: 34, stock:2 },
        // ... (other items with initial total values)
    ]);

    const increaseQuantity = (id) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id && item.quantity < item.stock
                ? { ...item, quantity: item.quantity + 1, total: (item.quantity + 1) * item.price }
                : item
        );
        setCartItems(updatedCart);
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cartItems.map((item) =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1, total: (item.quantity - 1) * item.price }
                : item
        );
        setCartItems(updatedCart);
    };

    const removeProduct = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.total, 0).toFixed(2);
    };

    const calculateTotal = () => {
        const subtotal = parseFloat(calculateSubtotal());
        const shippingFee = 15;
        return (subtotal + shippingFee).toFixed(2);
    };

    return (
        <div className="cart-container">
            <table>
                <thead>
                    <tr>
                        <th>Thumbnail</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {cartItems.map((item) => (
                        <tr key={item.id} className='h-[80px]'>
                            <td>{'images will display here'}</td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>
                                <span className='text-[1.5em]' onClick={() => decreaseQuantity(item.id)}>-</span>
                                {item.quantity}
                                <span className='text-[1.5em]' onClick={() => increaseQuantity(item.id)} >+</span>
                            </td>
                            <td>${item.total}</td>
                            <td>
                                <button onClick={() => removeProduct(item.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="order-summary">
                <div className='addressForm' >
                    <label> Name:
                        <input type="text" placeholder='Name'/>
                    </label>
                    <label>
                        Address:
                        <input type="text" placeholder="Enter your address" />
                    </label>
                    <label>
                        Contact Number:
                        <input type="tel" placeholder="Enter your contact number" />
                    </label>
                    {/* You can add more fields as needed for the user's contact information */}

                    <button type="submit">Submit Order</button>
                </div>
                <h2>Order Summary</h2>
                <p>Subtotal: ${calculateSubtotal()}</p>
                <p>Estimated Shipping Fee: $15.00</p>
                <p>Tax: $0.00</p>
                <p>Total: ${calculateTotal()}</p>
                <button><Link to={'/checkout'}>Checkout</Link></button>
                <button>Checkout Paypal</button>
                <button>Checkout GPay</button>
            </div>
        </div>
    );
};

export default Cart;

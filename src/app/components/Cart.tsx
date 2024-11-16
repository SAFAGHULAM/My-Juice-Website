import React from 'react'
import RootLayout from '../layout';

const Cart = () => {
    interface CartItem {
        id: number;
        name: string;
        price: number;
        quantity: number;
      }
      
    const cartItems:CartItem[] = [
        {
            id:1,
            name:"Orange Juice",
            price:5.47,
            quantity:2
        },
        {
            id:2,
            name:"Apple Juice",
            price:4.88,
            quantity:1
        },
        {
            id:3,
            name:"Lemon Juice",
            price:3.47,
            quantity:1
        },
        { 
            id: 4,
            name: 'Carrot Juice',
            price: 6.99, 
            quantity: 1
        },
        { 
            id: 5,
            name: 'Mango Juice', 
            price: 7.49,
            quantity: 3
        },
        { 
            id: 6,
            name: 'Pineapple Juice',
            price: 5.49, 
            quantity: 2 
        },
        { 
            id: 7,
            name: 'Grape Juice',
            price: 6.59,
            quantity: 1
        },
        { 
            id: 8,
            name: 'Strawberry Juice',
            price: 5.79,
            quantity: 4 
        },
        { 
            id: 9,
            name: 'Blueberry Juice',
            price: 6.29,
            quantity: 2
        },
        { 
            id: 10,
            name: 'Peach Juice',
            price: 4.79,
            quantity: 5 
        },
        { 
            id: 11,
            name: 'Watermelon Juice',
            price: 7.99,
            quantity: 1
        },
    ];
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    return(
        <RootLayout>
            <h1 className='text-3xl font-semibold text-center mb-8'>Your Cart</h1>
            <div className='space-y-6'>
                {cartItems.length === 0 ? (
                    <p className='text-center'>Your cart is empty.</p>
                ):(
                    cartItems.map((item) => (
                        <div key={item.id} className='flex flex-col sm:flex-row justify-between items-center sm:space-x-4'>
                            <span>{item.name} x{item.quantity}</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))
                )}
            </div>
            {cartItems.length > 0  && (
                <div className='mt-6 text-right'>
                    <h2 className='font-semibold text-xl'>Total: ${total.toFixed(2)}</h2>
                    <button className='mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 sm:px-8 sm:py-3'>
                        Proceed to Checkout
                    </button>
                </div>
            )}
        </RootLayout>
    );
};

export default Cart
import React from 'react';

// Define the prop type, or use `any` as you prefer
const CartSummary = ({ cart = [] }: { cart: any[] }) => {  // Provide an empty array as the default value
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Cart Summary</h2>
      
      {/* Cart Item Count */}
      <p>{cart.length} item{cart.length !== 1 && 's'} in cart</p>

      {/* List of Cart Items */}
      <div className="mt-4">
        {cart.length > 0 ? (
          cart.map((item: any) => (
            <div key={item.id} className="flex justify-between items-center mt-2">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))
        ) : (
          <p>No items in the cart yet.</p>
        )}
      </div>

      {/* Total Price */}
      <h3 className="text-xl font-semibold mt-4">
        Total: ${cart.reduce((sum: number, item: { price: number; quantity: number }) => sum + item.price * item.quantity, 0).toFixed(2)}
      </h3>
    </div>
  );
};

export default CartSummary;

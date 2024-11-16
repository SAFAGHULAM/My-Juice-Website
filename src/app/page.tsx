"use client";
import React, { useState } from 'react';
import ProductList from '../app/components/ProductList'; // Assume this is a component that displays products
import CartSummary from '../app/components/CartSummary'; // Assume this is the cart summary component

const Home = () => {
  const [cart, setCart] = useState<any[]>([]);  // Ensure cart state is initialized properly

  // Function to add items to the cart
  const addToCart = (product: any) => {
    setCart((prevCart: any[]) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // If the product exists in the cart, increase its quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If the product is not in the cart, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Sample product data
  const products = [
    { id: 1, name: 'Orange Juice', description: 'Fresh, 100% pure orange juice, packed with natural sweetness and vitamins—no added sugars or preservatives.', price: 5.47, image: 'images/orangejuice-image.webp' },
    { id: 2, name: 'Apple Juice', description: 'Crisp and delicious, our 100% pure apple juice is made from hand-picked apples, offering a smooth, refreshing taste with no added sugars or preservatives.', price: 4.88, image: 'images/applejuice-image.webp' },
    { id: 3, name: 'Lemon Juice', description: 'Tangy and fresh, our 100% pure lemon juice is a zesty, all-natural way to brighten up any dish or drink—no added sugars or preservatives.', price: 3.47, image: 'images/lemonjuice-image.webp' },
    { id: 4, name: 'Carrot Juice', description: 'Fresh and flavorful, our 100% pure carrot juice is packed with nutrients and natural sweetness—no added sugars or preservatives.', price: 6.99, image: 'images/carrotjuice-image.jpeg' },
    { id: 5, name: 'Mango Juice', description: 'Indulge in the rich, tropical flavor of our 100% pure mango juice—refreshing, naturally sweet, and free from added sugars or preservatives.', price: 7.49, image: 'images/mangojuice-image.webp' },
    { id: 6, name: 'Pineapple Juice', description: 'Our 100% pure pineapple juice offers a vibrant, tangy taste of the tropics, with no added sugars or preservatives—just pure, natural refreshment.', price: 5.49, image: 'images/pineapplejuice-image.webp' },
    { id: 7, name: 'Grape Juice', description: 'Enjoy the rich, bold flavor of our 100% pure grape juice—naturally sweet, refreshing, and free from added sugars or preservatives.', price: 6.59, image: 'images/grapejuice-image.jpg' },
    { id: 8, name: 'Strawberry Juice', description: 'Bursting with natural sweetness, our 100% pure strawberry juice is refreshingly smooth and free from added sugars or preservatives.', price: 5.79, image: 'images/strawberryjuice-image.jpeg' },
    { id: 9, name: 'Blueberry Juice', description: 'Our 100% pure blueberry juice is rich in flavor, naturally sweet, and packed with antioxidants—free from added sugars or preservatives.', price: 6.29, image: 'images/blueberryjuice-image.jpeg' },
    { id: 10, name: 'Peach Juice', description: 'Enjoy the smooth, juicy sweetness of our 100% pure peach juice—refreshing, naturally delicious, and free from added sugars or preservatives.', price: 4.79, image: 'images/peachjuice-image.jpg' },
    { id: 11, name: 'Watermelon Juice', description: 'Quench your thirst with our 100% pure watermelon juice—refreshing, naturally sweet, and free from added sugars or preservatives.', price: 3.44, image: 'images/watermelonjuice-image.jpeg' },
  ];


  return (
    <div>
      <h1 className='text-3xl font-semibold text-center mb-8'>Our Juices</h1>
      <ProductList products={products} addToCart={addToCart} />
      {/* Render the CartSummary and pass the cart state */}
      <CartSummary cart={cart} />
      <div className='text-right'>
      <button className='mt-4 bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 sm:px-8 sm:py-3'>
          Proceed to Checkout
      </button>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import AddToCartButton from '../components/addCart.js'; 
import './App.css';

const Home = () => {
  const menus = [
    { name: "Appliances", url: "#", id: 1 },
    { name: "Groceries", url: "#", id: 2 },
    { name: "Gadgets", url: "#", id: 3 },
    { name: "Clothing", url: "#", id: 4 },
  ];

  return (
    <div className="cart">
      <div className="home">
      <div className="header"><Header name="Lazado" /></div>
      <div className="Navigation"> <Navigation menus={menus} /></div>
      </div>
      <div className="cart1">
        <h1 className="item1">Item 1</h1>
        <img className="ads1" src="ads1.jpg" alt="Description"></img>
        <AddToCartButton itemName="Item 1" />
      </div>
      <div className="cart2">
        <h1 className="item2">Item 2</h1>
        <img className="ads2" src="ads2.jpg" alt="Description"></img>
        <AddToCartButton itemName="Item 2" />
      </div>
      <div className="cart3">
        <h1 className="item3">Item 3</h1>
        <img className="ads3" src="ads3.webp" alt="Description"></img>
        <AddToCartButton itemName="Item 3" />
      </div>
      <div className="cart4">
        <h1 className="item4">Item 4</h1>
        <img className="ads4" src="ads4.jpg" alt="Description"></img>
        <AddToCartButton itemName="Item 4" />
      </div>
    </div>
  );
}

export default Home;
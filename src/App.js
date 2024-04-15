import React from 'react';
import './App.css';
import Header from './components/Header';
import ProductTypes from './components/ProductTypes';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="bg-container">
      <Header />
      <ProductTypes />
      <ProductList />
    </div>
  );
}

export default App;
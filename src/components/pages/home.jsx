// components/home/Home.jsx
import React, { useEffect, useState } from 'react';
import Card from '../card/card.jsx'; 
import axios from 'axios';
import './home.css';
import Spinner from '../spin/spin.jsx'; 

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []); 

 

  if (loading) return <Spinner />;

  return (
    <div className="list">
      {products?.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;

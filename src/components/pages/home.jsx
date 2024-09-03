// components/home/Home.jsx
import React, { useEffect, useState } from 'react';
import Card from '../card/card.jsx'; 
import axios from 'axios';
import './home.css';
import Spinner from '../spin/spin.jsx'; 
import themeContext from "../../../src/context/themcontext.js"
import { useDispatch, useSelector } from "react-redux"
import { useContext } from 'react';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

   const cart = useSelector(state => state.cart.cartBody)
    const dispatch = useDispatch()

    const {darkMode} = useContext(themeContext)

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
    <div id="list" className= {`mt-3 p-3 ${darkMode ? "bg-dark text-light" : "bg-light"}`}>
      {products?.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;

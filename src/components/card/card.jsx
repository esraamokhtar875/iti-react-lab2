
import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import './card.css';
import {addProduct} from '../../store/cartslice';
import { useDispatch } from 'react-redux';
const Card = ({ product }) => {
  const {  title, thumbnail, price, stock, rating, discountPercentage } = product;
  const inStock = stock > 0;
  const dispatch = useDispatch();
  
  // const handleAddProduct =() =>{
  //   dispatch(addProduct(product));
  //   console.log("product added to cart", product); 
  // }

  return (
    <div className="card">
      <img src={thumbnail} alt={title} />
      <h2>{title}</h2>
      <p>
        ${price} {discountPercentage && <span className="discount">${(price - (price * discountPercentage) / 100).toFixed(2)}</span>}
      </p>
      <p>Rating: {rating} stars</p>
      <button disabled={!inStock} onClick={()=>dispatch(addProduct(product))}>Add to cart</button>
      <button>
        <Link to={`/detail/${product.id}`}>View Details</Link>
      </button>
    </div>
  );
};

export default Card;

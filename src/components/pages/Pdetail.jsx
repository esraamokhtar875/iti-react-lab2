// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons';
// import '../pages/Pdetails.css';

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     fetch(`https://dummyjson.com/products/${id}`)
//       .then(response => response.json())
//       .then(data => setProduct(data));
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   const { title, description, price, discountPercentage, rating, stock, images } = product;
//   const discountedPrice = discountPercentage ? (price * (100 - discountPercentage) / 100).toFixed(2) : price;

//   return (
//     <div className="product-details">
//       <div className="product-images">
//         <img src={ images[0] } alt={title} className="main-image" />
//         <div className="thumbnail-images">
//           {images.map((img, index) => (
//             <img key={index} src={img} alt={`${title} ${index}`} />
//           ))}
//         </div>
//       </div>
//       <div className="product-info">
//         <h1>{title}</h1>
//         <p>{description}</p>
//         <div className="product-rating">
//           {Array.from({ length: 5 }, (_, index) => (
//             <FontAwesomeIcon key={index} icon={faStar} color={index < Math.round(rating) ? "green" : "gray"} />
//           ))}
//           <span>{rating}</span>
//         </div>
//         <div className="product-pricing">
//           <p>${discountedPrice} {discountPercentage && <span>or ${price.toFixed(2)}/month</span>}</p>
//           {discountPercentage && <p className="original-price"><strike>${price.toFixed(2)}</strike> {discountPercentage}% off</p>}
//         </div>
//         <div className="stock-info">
//           <p className={stock > 0 ? "in-stock" : "out-of-stock"}>
//             {stock > 0 ? `In Stock (${stock} items left)` : "Out of Stock"}
//           </p>
//         </div>
//         <div className="action-buttons">
//           <button className="buy-now">Buy Now</button>
//           <button className="add-to-cart">Add to Cart</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../pages/Pdetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { title, description, price, discountPercentage, rating, stock, images } = product;
  const discountedPrice = discountPercentage ? (price * (100 - discountPercentage) / 100).toFixed(2) : price;

  return (
    <div className="product-details">
      <div className="product-images">
        {images && images.length > 0 && (
          <>
            <img src={images[0]} alt={title} className="main-image" />
            <div className="thumbnail-images">
              {images.map((img, index) => (
                <img key={index} src={img} alt={`${title} ${index}`} />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="product-info">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="product-rating">
          {Array.from({ length: 5 }, (_, index) => (
            <FontAwesomeIcon key={index} icon={faStar} color={index < Math.round(rating) ? "green" : "gray"} />
          ))}
          <span>{rating}</span>
        </div>
        <div className="product-pricing">
          <p>${discountedPrice} {discountPercentage && <span>or ${price.toFixed(2)}/month</span>}</p>
          {discountPercentage && <p className="original-price"><strike>${price.toFixed(2)}</strike> {discountPercentage}% off</p>}
        </div>
        <div className="stock-info">
          <p className={stock > 0 ? "in-stock" : "out-of-stock"}>
            {stock > 0 ? `In Stock (${stock} items left)` : "Out of Stock"}
          </p>
        </div>
        <div className="action-buttons">
          <button className="buy-now">Buy Now</button>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

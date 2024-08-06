
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, incrementQuantity, decrementQuantity } from '../../store/cartslice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  if (cart.totalQuantity === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div>
      <h1>Cart</h1>
      {cart.items.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Quantity: {item.quantity}</p>
          <p>Price: £{item.price}</p>
          <p>Total: £{item.totalPrice}</p>
          <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
          <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(removeProduct(item.id))}>Remove</button>
        </div>
      ))}
      <h2>Total Price: £{cart.totalPrice}</h2>
    </div>
  );
};

export default CartPage;

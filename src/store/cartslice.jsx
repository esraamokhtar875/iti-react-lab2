
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct(state, action) { 
      console.log(state.items)
      const newProduct = action.payload;
      const existingProduct = state.items.find(item => item.id === newProduct.id);

      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.totalPrice += newProduct.price;
      } else {
        state.items.push({
          ...newProduct,
          quantity: 1,
          totalPrice: newProduct.price,
        });
      }

      state.totalQuantity++;
      state.totalPrice += newProduct.price;
    },
    removeProduct(state, action) {
      const id = action.payload;
      const existingProduct = state.items.find(item => item.id === id);

      if (existingProduct) {
        state.items = state.items.filter(item => item.id !== id);
        state.totalQuantity -= existingProduct.quantity;
        state.totalPrice -= existingProduct.totalPrice;
      }
    },
    incrementQuantity(state, action) {
      const id = action.payload;
      const existingProduct = state.items.find(item => item.id === id);

      if (existingProduct) {
        existingProduct.quantity++;
        existingProduct.totalPrice += existingProduct.price;
        state.totalQuantity++;
        state.totalPrice += existingProduct.price;
      }
    },
    decrementQuantity(state, action) {
      const id = action.payload;
      const existingProduct = state.items.find(item => item.id === id);

      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity--;
        existingProduct.totalPrice -= existingProduct.price;
        state.totalQuantity--;
        state.totalPrice -= existingProduct.price;
      }
    },
  },
});

export const { addProduct, removeProduct, incrementQuantity, decrementQuantity } = cartSlice.actions;

export default cartSlice.reducer;




















































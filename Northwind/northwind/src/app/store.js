import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../features/component/category/categorySlice'
import productReducer from '../features/component/product/productSlice';


export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer
  },
});

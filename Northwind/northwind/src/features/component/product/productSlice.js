import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  status: "idle",
  products: [],
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    let url = "http://localhost:3000/products";

    let request = await fetch(url);
    let response = await request.json();
    return response;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.products = state.products.concat(action.payload);
    },
    [fetchProducts.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const selectAllProducts = (state) => state.products.products;
export default productSlice.reducer;

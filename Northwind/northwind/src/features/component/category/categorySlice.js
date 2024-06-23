import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  error: null,
  status: "idle",
  categories: [],
  current_category: {}
}; 

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    let url = "http://localhost:3000/categories";
    let request = await fetch(url);
    let response = await request.json();
    return response;
  }
);

const categorySlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchCategories.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.categories = state.categories.concat(action.payload);
    },
    [fetchCategories.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
}); 

export const selectAllCategories = (state) => state.categories.categories;
export default categorySlice.reducer;

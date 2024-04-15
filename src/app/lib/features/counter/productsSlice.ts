import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  products: Movie[];
}

const initialState: CounterState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<Movie>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.products.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<Movie>) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },
    removeAllFromCart: (state, action: PayloadAction<Movie>) => {
      const { id } = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, removeAllFromCart } =
  productsSlice.actions;

export default productsSlice.reducer;

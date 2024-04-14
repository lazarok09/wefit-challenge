import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./features/counter/productsSlice";
import { moviesApi } from "./features/counter/moviesApi";

export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productsSlice,
      [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(moviesApi.middleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

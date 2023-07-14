import { configureStore } from "@reduxjs/toolkit";
import dataOfBarbershopReducer from './dataSlices';
import fetchDataServices from "../api/fetchDataServices";

export const store = configureStore({
  reducer: {
    dataOfBarbershop: dataOfBarbershopReducer,
    [fetchDataServices.reducerPath]: fetchDataServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchDataServices.middleware),
});
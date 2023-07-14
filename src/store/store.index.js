import { configureStore } from "@reduxjs/toolkit";
import dataOfBarbershopReducer from './dataSlices';
import fetchDataServices from "../api/fetchDataServices";
import fetchDataSpecialists from "../api/fetchDataSpecialists";

export const store = configureStore({
  reducer: {
    dataOfBarbershop: dataOfBarbershopReducer,
    [fetchDataServices.reducerPath]: fetchDataServices.reducer,
    [fetchDataSpecialists.reducerPath]: fetchDataSpecialists.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchDataServices.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchDataSpecialists.middleware),
});
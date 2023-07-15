import { configureStore } from "@reduxjs/toolkit";
import dataOfBarbershopReducer from './dataSlices';
import fetchDataServices from "../api/fetchDataServices.ts";
import fetchDataSpecialists from "../api/fetchDataSpecialists.ts";

export const store = configureStore({
  reducer: {
    dataOfBarbershop: dataOfBarbershopReducer,
    [fetchDataServices.reducerPath]: fetchDataServices.reducer,
    [fetchDataSpecialists.reducerPath]: fetchDataSpecialists.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fetchDataServices.middleware, fetchDataSpecialists.middleware),
});

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const fetchDataServices = createApi({
  reducerPath: 'fetchDataServices',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    servicing: builder.query({
      query: () => '/servicing',
    }),
  }),
});

export const { useServicingQuery } = fetchDataServices;
export default fetchDataServices;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const fetchDataSpecialists = createApi({
  reducerPath: 'fetchDataSpecialists',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    specialists: builder.query({
      query: () => '/barbers',
    }),
  }),
});

export const { useSpecialistsQuery } = fetchDataSpecialists;
export default fetchDataSpecialists;
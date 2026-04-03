import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlBaseQuery } from './graphqlBaseQuery';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: graphqlBaseQuery(),

  // 🔥 REQUIRED for SSR hydration
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === 'HYDRATE') {
      return (action.payload as Record<string, any>)?.[reducerPath];
    }
  },

  // ⚡ IMPORTANT: must stay empty (codegen injects here)
  endpoints: () => ({}),

  // 🔥 OPTIONAL but recommended
  keepUnusedDataFor: 300, // global cache (5 min)
  refetchOnMountOrArgChange: false,
  refetchOnReconnect: true,
});
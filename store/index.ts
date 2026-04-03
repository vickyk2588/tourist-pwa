import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@/services/baseApi';

export const makeStore = () =>
  configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (gDM) => gDM().concat(baseApi.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
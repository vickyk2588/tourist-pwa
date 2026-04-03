'use client';

import { Provider } from 'react-redux';
import { makeStore } from '@/store';

export default function HydrateClient({
  children,
  state,
}: any) {
  const store = makeStore();
const HYDRATE = 'HYDRATE';
  // inject server state
  store.dispatch({
    type: HYDRATE,
    payload: state,
  });

  return <Provider store={store}>{children}</Provider>;
}
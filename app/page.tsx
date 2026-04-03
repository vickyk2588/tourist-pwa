import { makeStore } from '@/store';
import HydrateClient from './HydrateClient';
import Home from '@/features/home/Home';

import { api } from '@/generated/graphql';

export const revalidate = 60;

export default async function Page() {
  const store = makeStore();

  store.dispatch(
    api.endpoints.FetchHomeData.initiate()
  );

  await Promise.all(
    store.dispatch(api.util.getRunningQueriesThunk())
  );

  const state = store.getState();

  return (
    <HydrateClient state={state}>
      <Home />
    </HydrateClient>
  );
}
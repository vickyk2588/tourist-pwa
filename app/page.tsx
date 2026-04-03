'use server'
import Home from '@/features/home/Home';
import { FetchHomeDataDocument } from '@/generated/graphql';
import { graphqlClient } from '@/services/client';

export default async function Page() {
  let data;
  try {
   data = await graphqlClient.request(FetchHomeDataDocument);
  } catch (error) {
    console.error("Error fetching home data:", error);
  }
console.log("data----",data);

  return <Home/>;
}
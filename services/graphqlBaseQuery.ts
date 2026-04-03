import { GraphQLClient } from 'graphql-request';

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_URL!
);

export const graphqlBaseQuery =
  () =>
  async ({
    document,
    variables,
  }: {
    document: string;
    variables?: any;
  }) => {
    try {
      const result = await client.request(document, variables);
      return { data: result };
    } catch (error: any) {
      return {
        error: {
          status: error.response?.status || 500,
          data: error.message,
        },
      };
    }
  };
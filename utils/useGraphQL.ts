import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { useInfiniteQuery } from '@tanstack/react-query';
import { request } from 'graphql-request';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';

const endpoint =
  process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:1337/graphql';

export function useGraphQL<TResult, TVariables = Record<string, any>>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables
): UseQueryResult<TResult> {
  const queryName =
    (document.definitions[0] as any)?.name?.value || 'query';

  return useQuery({
    queryKey: [queryName, variables],
    queryFn: async () => request(endpoint, document, variables ?? undefined),
  });
}


export function useInfiniteGraphQL<TResult, TVariables = Record<string, any>>(
  document: TypedDocumentNode<TResult, TVariables>,
  variables?: TVariables
) {
  const queryName =
    (document.definitions[0] as any)?.name?.value || 'query';

  return useInfiniteQuery({
    queryKey: [queryName, variables],
    queryFn: async ({ pageParam = 1 }) =>
      request(endpoint, document, {
        ...(variables || {}),
        pageParam,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage: any) =>
      lastPage?.meta?.pagination?.page + 1,
  });
}
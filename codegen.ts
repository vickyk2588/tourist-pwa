import type { CodegenConfig } from '@graphql-codegen/cli';
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_URL!,

  documents: ['services/graphql/**/*.graphql'],

  generates: {
    './generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-rtk-query',
      ],
      config: {
        importBaseApiFrom: '@/services/baseApi', 
        exportHooks: true,                     
        fetchBaseQuery: false,
        documentMode: 'string',
      },
    },
  },
};

export default config;
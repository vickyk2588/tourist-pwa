import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_GRAPHQL_URL!,
  documents: "services/graphql/**/*.graphql",

  generates: {
    "./generated/": {
      plugins: [],
      preset: "client", // ✅ generates typed documents
    },
  },
};

export default config;
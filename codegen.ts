import type { CodegenConfig } from "@graphql-codegen/cli";
import { env } from 'node:process'
import { config as dotenvConfig } from 'dotenv'

// 加载 .env 文件中的环境变量
dotenvConfig()
console.log('xxxxxxx', env)
const config: CodegenConfig = {
  schema: `${env.VITE_API_URL}/graphql`,
  documents: ["src/**/*.gql"],
  ignoreNoDocuments: true,
  generates: {
    "./src/graphql/": {
      preset: "client",
      config: {
        documentMode: "string",
      },
    },
  },
};

export default config;

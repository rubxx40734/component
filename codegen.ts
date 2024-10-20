import type { CodegenConfig } from "@graphql-codegen/cli";
import { env } from 'node:process'
import { config as dotenvConfig } from 'dotenv'

// 加载 .env 文件中的环境变量
dotenvConfig()

const config: CodegenConfig = {
  schema: `${env.VITE_API_URL}/graphql`,
  // 要編譯的檔案
  documents: ["src/**/*.graphql"],
  ignoreNoDocuments: true,
  generates: {
    "./src/apis/graphql-schema.ts": {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        strictScalars: true,
        vueCompositionApiImportFrom: 'vue',
        scalars: {
          UnixDate: 'number',
          Upload: 'File',
          JSON: '{ [key: string]: any }',
        },
      },
    },
  },
};

export default config;

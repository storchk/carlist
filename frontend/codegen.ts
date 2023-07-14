import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:4001/graphql',
  documents: ['./src/graphql/**/*.graphql'],
  generates: {
    './src/graphql/__generated__/operations.ts': {
      config: {
        gqlImport: 'graphql-tag',
        noGraphQLTag: false,
        dedupeOperationSuffix: true,
        inlineFragmentTypes: 'combine',
        namingConvention: 'keep',
        preResolveTypes: false,
      },
      plugins: [
        { [`add`]: { content: `/* eslint-disable */` } },
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
        'named-operations-object',
        'typescript-document-nodes',
      ],
    },
    './src/graphql/__generated__/schema.json': {
      plugins: ['introspection'],
    },
  },
  hooks: {
    beforeDone: ['prettier "./src/**/*.ts" --write'],
  },
}

export default config

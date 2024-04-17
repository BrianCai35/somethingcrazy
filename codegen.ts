import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema:
    'https://ca-central-1.cdn.hygraph.com/content/cluurq38a0l5007um549t2h2l/master',
  documents: 'modules/queries/*',
  generates: {
    'modules/gql/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql'
      }
    }
  }
}

export default config

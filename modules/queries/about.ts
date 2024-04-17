import { gql } from '../gql'

export const ABOUT_PAGE_DATA = gql(`
  query AboutPages {
    aboutPages {
      heroSection {
        subtitle {
          raw
        }
        heroImage {
          altText
          asset
        }
        title
      }
    }
  }
`)

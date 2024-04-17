import { gql } from '../gql'

export const HOME_PAGE_DATA = gql(`
  query HomePageData {
    homePages {
      heroSection {
        linkText
        subtitle
        title
        details {
          raw
        }
      }
    }
  }
`)

import { ABOUT_PAGE_DATA } from 'queries'
import { gqlClient } from '@/modules/graphqlClient'

export default async function About (): Promise<JSX.Element> {
  try {
    const data = await gqlClient.request(ABOUT_PAGE_DATA)
    console.log(data.aboutPages[0].heroSection)
    return (
      <main />
    )
  } catch (error) {
    console.error(error)
    return (
      <main />
    )
  }
}

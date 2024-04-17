import { gqlClient } from '@/modules/graphqlClient'
import { HOME_PAGE_DATA } from 'queries'
import { H1 } from 'components'

export default async function Home (): Promise<JSX.Element> {
  try {
    const response = await gqlClient.request(HOME_PAGE_DATA)
    const data = response.homePages[0]
    return (
      <main>
        <section className='min-h-[80vh] w-screen flex items-center justify-center bg-azulado'>
          <H1 theme='dark'>{data.heroSection.title}</H1>
        </section>
      </main>
    )
  } catch (error) {
    console.error(error)
    return (
      <main />
    )
  }
}

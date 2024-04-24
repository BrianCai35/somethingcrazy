import { gqlClient } from '@/modules/graphqlClient'
import { HOME_PAGE_DATA } from 'queries'
import { FaceLeftIcon, FaceRightIcon } from 'svgs'
import { H4, Paragraph, Button, RichTextRenderer } from 'components'

export default async function Home (): Promise<JSX.Element> {
  try {
    const response = await gqlClient.request(HOME_PAGE_DATA)
    const data = response.homePages[0]
    return (
      <main>
        <section className='relative min-h-screen w-screen flex flex-col gap-y-8 items-center justify-center bg-azulado'>
          <div className='absolute top-10 right-0 z-0'>
            <FaceRightIcon color='#F45327' styles='min-w-[80px] max-w-[80px]' />
          </div>
          <div className='flex flex-col gap-y-2 items-center z-10 text-center w-[80%]'>
            <H4 theme='dark'>{data.heroSection.title}</H4>
            <Paragraph theme='dark'>{data.heroSection.subtitle}</Paragraph>
          </div>
          <div className='flex flex-col items-center'>
            <RichTextRenderer content={data.heroSection.details.raw} />
          </div>
          <Button label={data.heroSection.linkText} theme='dark' />
          <div className='absolute bottom-0 left-0 z-0'>
            <FaceLeftIcon color='#F45327' styles='min-w-[100px] max-w-[120px]' />
          </div>
        </section>
        <section className='relative min-h-screen py-[10%] w-screen flex flex-col gap-y-24 items-center justify-center bg-tilted-pinball'>
          <div className='absolute top-[5vh] right-0 z-0'>
            <FaceRightIcon color='white' styles='min-w-[70px] max-w-[80px]' />
          </div>
          <div className='absolute top-[40%] transform -translate-y-[40%] left-0 z-0'>
            <FaceLeftIcon color='white' styles='min-w-[80px] max-w-[80px]' />
          </div>
          <div className='flex flex-col gap-y-8 items-center'>
            {data.mainSection.bulletPoints.map((point, index) => (
              <H4 theme='dark' key={index} styles='w-[50%] text-center z-10'>{point}</H4>
            ))}
          </div>
          <div className='w-[80%] text-center'>
            <RichTextRenderer content={data.mainSection.details.raw} />
          </div>
          <Button label={data.mainSection.linkText} theme='light' />
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

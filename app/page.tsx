import Card from "@/modules/components/Card";

export default function Home (): JSX.Element {
  return (
    <div className="m-auto w-11/12 sm:w-[90%] flex flex-wrap xl:space-x-3.5">
    <Card color="tilted-pinball" title="Breaking Barriers" number="1" style="mt-4"><b>Breaking barriers</b> is about overcoming barriers in the HIV response to engage young people effectively involves addressing stigma, improving education, enhancing healthcare services, and advocating for policy changes.</Card>
    <Card color="ias-blue" title="Building Power" number="2" style="mt-4"><b>Building power</b>and removing the obstacles that prevent youth-led organisations from being leaders of the response to HIV/AIDS. We discuss various issues, such as community mobilisation efforts gearing towards reducing stigma, promoting testing and treatment and funding capacity-building programs to empower young people.</Card>
    <Card color="forest-olive" title="Building Power" number="2" style="mt-4">Lastly, <b>'forging' alliances</b> is symbolic in our partnership and understanding how forming strategic alliances can help us end AIDS through cross-sectoral collaboration, pooling resources and increasing sustainable funding for youth-led movements.</Card>
    </div>
  )
}
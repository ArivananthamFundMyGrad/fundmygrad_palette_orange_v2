import dynamic from 'next/dynamic'

const ComponentWithNoSSR = dynamic(
  () => import('../components/dashboard/OtherBankOffers1'),
  { ssr: false }
)

function NewChart() {
  return (
    <div><ComponentWithNoSSR/></div>
  )
}

export default NewChart
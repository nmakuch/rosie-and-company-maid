import Layout from '../../components/Layout/Layout'
import BookAnywhereSection from '../../components/Sections/BookAnywhereSection/BookAnywhereSection'
import PricingSection from '../../components/Sections/PricingSection/PricingSection'
import ServiceAreaSection from '../../components/Sections/ServiceAreaSection/ServiceAreaSection'
import StepsSection from '../../components/Sections/StepsSection/StepsSection'

export default function Home() {
  return (
    <Layout hero={true}>
      <BookAnywhereSection />
      <StepsSection />
      <ServiceAreaSection />
      <PricingSection />
    </Layout>
  )
}

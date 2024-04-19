import { CardSection } from './components/cards/CardSection'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import { Hire } from './components/hire/Hire'
import { Tech } from './components/technologies/Tech'

export default function Home() {
  return (
    <>
      <Hero />
      <CardSection />
      <Tech />
      <Hire />
      <Footer />
    </>
  )
}

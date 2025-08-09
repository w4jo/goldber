import ContactForm from '@/components/contact-form'
import CTABanner from '@/components/cta'
import FleetCarousel from '@/components/fleet'
import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import FeaturedProjects from '@/components/projects'
import ServicesGrid from '@/components/services'

export const dynamic = 'force-static'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <FeaturedProjects />
        <ServicesGrid />
        <FleetCarousel />
        <ContactForm />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}

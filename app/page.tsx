import ContactForm from './sections/contact-form'
import CTABanner from './sections/cta'
// import FAQAccordion from './sections/faq'
import FleetCarousel from './sections/fleet'
import Footer from './sections/footer'
import Header from './sections/header'
import Hero from './sections/hero'
import FeaturedProjects from './sections/projects'
import ServicesGrid from './sections/services'

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <ServicesGrid />
        <FleetCarousel />
        {/* <FAQAccordion /> */}
        <ContactForm />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}

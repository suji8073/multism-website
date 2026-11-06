import { Toaster } from '@/components/atoms/sonner'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { MobileBottomBar } from '@/components/layout/mobile-bottom-bar'
import { BusinessSection } from '@/components/sections/business-section'
import { ClientsSection, ContactSection } from '@/components/sections/contact-section'
import { HeroSection } from '@/components/sections/hero-section'
import { ProgramsSection } from '@/components/sections/programs-section'
import { PortfolioSection } from '@/components/sections/portfolio-section'
import { ProcessSection } from '@/components/sections/process-section'
import { WhySection } from '@/components/sections/why-section'
import { FaqSection, GreetingSection } from '@/components/sections/about-section'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <BusinessSection />
        <ProcessSection />
        <PortfolioSection />
        <ProgramsSection />
        <GreetingSection />
        <FaqSection />
        <ClientsSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileBottomBar />
      <Toaster />
    </>
  )
}

export default App

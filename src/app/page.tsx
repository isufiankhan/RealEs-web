import AboutUs from '@/components/AboutUs'
import Faq from '@/components/Faq'
import FeaturedProperties from '@/components/FeaturedProperties'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import HowitWorks from '@/components/HowitWorks'
import NavBar from '@/components/NavBar'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

const Home = () => {
  return (
    <>
    <NavBar />
    <Hero />
    <HowitWorks />
    <FeaturedProperties />
    <Services />
    <AboutUs />
    <Testimonials />
    <Faq />
    <Footer />
    </>
  )
}

export default Home

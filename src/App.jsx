import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Packages from './sections/Packages'
import Process from './sections/Process'
import FAQ from './sections/FAQ'
import Contact from './sections/Contact'

const App = () => {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Packages />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App

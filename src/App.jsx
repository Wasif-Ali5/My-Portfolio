
import Naavbar from './component/Naavbar/Naavbar'
import Home from './component/Home/Home'
import About from './component/About/About'
import Experience from './component/Experience/Experience'
import Projects from './component/Projects/Projects'
import Footer from './component/Footer/Footer'


function App() {
  return (
    <div className="h-auto w-full overflow-hidden bg-[#171d32]">

      <Naavbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
      
    </div>
  )
}

export default App

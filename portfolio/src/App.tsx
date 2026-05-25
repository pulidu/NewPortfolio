 import Navbar from './components/Navbar'
 import Hero from './components/Hero'
 import About from './components/About'
// import Service from './components/Service'
// import Blog from './components/Blog'
// import Skills from './components/Skills'
// import Project from './components/Project'
// import Education from './components/Education'
// import Achievements from './components/Achievements'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import CustomCursor from './components/CustomCursor'
import { JSX } from 'react'

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-black text-white">
      {<Navbar /> }

      <main className="overflow-hidden">
        <>
          <Hero />
          <About />
        </>
      </main>
    </div>
  )
}
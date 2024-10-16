import Navbar from './components/navbar/navbar'
import Introduction from './components/introduction/introduction'
import ProjectsView from './components/projects/projectView'
import './App.css'
import Skills from './components/skills/skills'
import Contact from './components/contact/contact'

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <ProjectsView />
      <Skills />
      <Contact />
    </>
  )
}

export default App

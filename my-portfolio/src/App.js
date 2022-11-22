import './App.css';
import Header from './components/Header'
import Contact from './components/Contact'
import ProjectContainer from './components/ProjectContainer'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import { HashRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <HashRouter hashType="hashbang">
      <Header name="Trey Kockelman"/>

      <Routes>
        <Route path="" element={<AboutMe />}/>
        <Route path="about" element={<AboutMe />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="portfolio" element={<ProjectContainer />}/>
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;
import './App.css';
import Header from './components/Header'
import Contact from './components/Contact'
import ProjectContainer from './components/ProjectContainer'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header name="Trey Kockelman"/>

      <AboutMe />

      <Contact />

      <ProjectContainer />

      <Footer />
    </div>
  );
}

export default App;

import AboutMe from './components/aboutme/AboutMe';
import Educations from './components/educations/Educations';
import Experiences from './components/experiences/Experiences';
import Languages from './components/languages/Languages';
import Skills from './components/skills/Skills';
import TopBar from './components/topbar/TopBar';
import Menu from './components/menu/Menu';
import { useState } from 'react';

import "./app.scss"
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <AboutMe />
        <Educations />
        <Experiences />
        <Languages />
        <Skills />
      </div>

    </div>
  );
}

export default App;

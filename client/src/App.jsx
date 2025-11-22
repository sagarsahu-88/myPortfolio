import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import Background from './components/Background';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
    return (
        <div className="app">
            <Cursor />
            <Background />
            <Navbar />
            <main>
                <Hero />
                <Services />
                <About />
                <Experience />
                <Education />
                <Skills />
                <Certifications />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;

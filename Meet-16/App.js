import React from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import HistorySection from './components/HistorySection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <AboutSection />
      <TeamSection />
      <HistorySection />
      <Footer />
    </div>
  );
}

export default App;

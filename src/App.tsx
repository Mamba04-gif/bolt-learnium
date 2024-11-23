import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Navbar from './components/Navbar';
    import Hero from './components/Hero';
    import CardGrid from './components/CardGrid';
    import About from './pages/About';
    import Home from './pages/Home';

    const App: React.FC = () => {
      return (
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      );
    };

    export default App;

import React from 'react';

// Import components
import { About, CTA, Footer, Gallery, Header, Navbar, Pricing, Services, FAQ } from './components';

import './App.css';

const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <Header />
        <Services />
        <Pricing />
        <Gallery />
        <About />
        <FAQ />
        <CTA />
        <Footer />
    </div>
  )
}

export default App
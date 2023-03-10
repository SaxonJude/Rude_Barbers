import React from 'react';

// Import components
import { About, CTA, Footer, Gallery, Header, Navbar, Pricing, Services } from './components';

import './App.css';

const App = () => {
  return (
    <div className='App'>
        <About />
        <CTA />
        <Footer />
        <Gallery />
        <Header />
        <Navbar />
        <Pricing />
        <Services />
    </div>
  )
}

export default App
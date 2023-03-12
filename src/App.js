import React from 'react';

// Import components
import { About, CTA, Footer, Lookbook, Header, Navbar, Pricing, Services, Location } from './components';

import './App.css';

const App = () => {
  return (
    <div className='App'>
        <div className="background_img">
          <Navbar />
          <Header />
        </div>
        <About />
        <Services />
        <Pricing />
        <Lookbook />
        <CTA />
        <Location />
        <Footer />
    </div>
  )
}

export default App
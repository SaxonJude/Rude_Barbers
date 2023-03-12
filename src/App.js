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
        <div className='background_paint-1'>
          <About />
        </div>
        <div className="background_offwhite">
          <Services />
        </div>
        <Pricing />
        <div className="background_offwhite">
        <Lookbook />
        </div>
        <div className="background_paint-2">
          <CTA />
        </div>
        <Location />
        <Footer />
    </div>
  )
}

export default App
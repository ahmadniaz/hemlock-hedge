import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { theme } from './styles/theme';

import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Accommodations = React.lazy(() => import('./pages/Accommodations'));
const Activities = React.lazy(() => import('./pages/Activities'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Location = React.lazy(() => import('./pages/Location'));
const FAQ = React.lazy(() => import('./pages/FAQ'));

// Common components
const Header = React.lazy(() => import('./components/common/Header'));
const Footer = React.lazy(() => import('./components/common/Footer'));

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Router>
          <div className="App">
            <Header />
            <main>
              <React.Suspense fallback={<LoadingSpinner message="Loading page..." />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/accommodations" element={<Accommodations />} />
                  <Route path="/activities" element={<Activities />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/location" element={<Location />} />
                  <Route path="/faq" element={<FAQ />} />
                </Routes>
              </React.Suspense>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;

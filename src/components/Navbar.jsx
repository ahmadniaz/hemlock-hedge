import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/local-activities', label: 'Activities' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/faq', label: 'FAQ' },
  { to: '/location', label: 'Location' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{
        backdropFilter: 'blur(7px)',
        background: 'rgba(255,255,255,0.82)',
        boxShadow: '0 4px 24px rgba(60,90,70,0.09)',
        borderBottom: '1.5px solid #e7ede7',
        position: 'sticky',
        top: 0,
        zIndex: 200,
        width: '100%',
        fontFamily: `'Lato', sans-serif`,
      }}
    >
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1rem 4vw', maxWidth: 1700, margin: '0 auto'
      }}>
        <Link to="/" style={{ fontFamily: `'Playfair Display', serif`, fontWeight: 800, fontSize: '2rem', color: '#39553A', letterSpacing: '1.5px', textShadow: '0 1px 10px #e7ede7' }}>
          {/* Optionally replace with an SVG or PNG logo */}
          <span style={{ letterSpacing: 2 }}>Hemlock Point</span>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {links.map(link =>
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: '#39553A',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1.12rem',
                position: 'relative',
                padding: '0.2rem 0.7rem',
                borderRadius: '0.6rem',
                transition: 'background 0.2s, color 0.2s',
                fontFamily: `'Lato', sans-serif`,
              }}
              className="nav-link"
            >
              {link.label}
              {/* Hover underline */}
              <span className="nav-underline" />
            </Link>
          )}
        </div>
        {/* Hamburger menu for mobile */}
        <button onClick={() => setMobileOpen(o => !o)} style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }} className="mobile-menu-btn" aria-label="Menu">
          {mobileOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
      </div>
      {/* Mobile nav */}
      {mobileOpen && (
        <div className="mobile-nav" style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(255,255,255,0.97)',
          zIndex: 300,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem'
        }}>
          {links.map(link =>
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              style={{
                color: '#39553A',
                fontWeight: 700,
                fontSize: '1.45rem',
                textDecoration: 'none',
                fontFamily: `'Lato', sans-serif`,
              }}
            >{link.label}</Link>
          )}
        </div>
      )}
      <style>
        {`
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        .nav-link:hover .nav-underline {
          width: 100%;
          background: linear-gradient(90deg,#a7c957,#8fc0a9 90%);
        }
        .nav-underline {
          display: block;
          height: 3px;
          width: 0;
          margin-top: 2px;
          transition: width 0.3s;
          border-radius: 3px;
        }
        `}
      </style>
    </nav>
  );
}

export default Navbar;

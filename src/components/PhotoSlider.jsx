import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // Lake
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80', // Lodge
  'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80', // Interior
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80', // Nature
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80', // Activities
];

export default function PhotoSlider() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent((prev) => (prev + 1) % images.length);
  }
  function prevSlide() {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }

  return (
    <section style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      margin: '3rem 0 1.5rem',
      width: '100vw', maxWidth: '100vw', padding: 0
    }}>
      <div style={{
        position: 'relative', width: '92vw', maxWidth: '1400px',
        height: '45vw', maxHeight: 550, minHeight: 220,
        borderRadius: '2.2rem',
        overflow: 'hidden',
        boxShadow: '0 6px 38px rgba(60,90,70,0.13)',
        background: '#f4f6ee',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '1.5px solid #e7ede7',
      }}>
        <AnimatePresence>
          <motion.img
            key={images[current]}
            src={images[current]}
            alt="Hemlock Point Lodge"
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              position: 'absolute', top: 0, left: 0,
              filter: 'brightness(0.98) saturate(1.03) contrast(1.03)',
              zIndex: 1
            }}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        </AnimatePresence>
        {/* Glassy nav buttons */}
        <NavButton side="left" onClick={prevSlide} />
        <NavButton side="right" onClick={nextSlide} />

        {/* Soft vignette overlay */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          height: '34%', background: 'linear-gradient(0deg,rgba(52,75,61,0.19) 75%,transparent 100%)',
          zIndex: 2,
        }} />
      </div>
      {/* Dots */}
      <div style={{ marginTop: 22, display: 'flex', gap: 12 }}>
        {images.map((_, idx) => (
          <motion.span key={idx}
            style={{
              width: idx === current ? 18 : 13,
              height: 13,
              borderRadius: '999px',
              background: idx === current
                ? 'linear-gradient(90deg,#e1c37f 10%,#a7c957 90%)'
                : '#b7b7a4',
              boxShadow: idx === current ? '0 2px 8px #cdd5c6cc' : 'none',
              transition: 'all 0.24s',
              opacity: 0.92,
              border: idx === current ? '1.5px solid #fff8db' : 'none',
              display: 'inline-block',
            }}
            animate={{ scale: idx === current ? 1.17 : 1 }}
          />
        ))}
      </div>
      {/* Testimonial */}
      <div style={{
        textAlign: 'center',
        margin: '1.6rem 0 0',
        fontFamily: `'Lato',sans-serif`
      }}>
        <blockquote style={{
          fontSize: '1.09rem',
          color: '#52796f',
          fontStyle: 'italic',
          marginBottom: 10
        }}>
          “Easily the most beautiful mountain home we’ve ever seen. Thank you. We can’t wait to come back next year.”
        </blockquote>
        <a href="/testimonials" style={{
          color: '#39553A', textDecoration: 'underline',
          fontWeight: 600,
        }}>Read More Guest Stories</a>
      </div>
    </section>
  );
}

// Extracted nav button for clarity!
function NavButton({ side, onClick }) {
  const Icon = side === "left" ? ChevronLeftIcon : ChevronRightIcon;
  return (
    <motion.button
      whileHover={{ scale: 1.15, boxShadow: "0 6px 18px #e1c37f33" }}
      whileTap={{ scale: 0.92 }}
      onClick={onClick}
      aria-label={side === "left" ? "Previous Slide" : "Next Slide"}
      style={{
        position: 'absolute',
        [side]: 34,
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'rgba(255,255,255,0.74)',
        border: '2.5px solid #f5f5e9',
        borderRadius: '50%',
        width: 54, height: 54,
        cursor: 'pointer',
        fontSize: '2.2rem',
        color: '#39553A',
        boxShadow: '0 2px 12px #e1c37f30',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 3,
        outline: 'none',
        transition: 'background 0.19s, box-shadow 0.18s, color 0.18s',
        opacity: 0.98,
        backdropFilter: 'blur(2px)',
      }}
    >
      <Icon style={{ fontSize: 32 }} />
    </motion.button>
  );
}

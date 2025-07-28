import { useState, useEffect, useRef } from 'react';

// ====== Hero Images ======
const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Private Lake View',
    caption: 'Peaceful mornings at Hemlock Point Lodge',
  },
  {
    src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80',
    alt: 'Lodge Interior',
    caption: 'Rustic elegance and cozy living spaces',
  },
  {
    src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80',
    alt: 'Lakeside Porch',
    caption: 'Evenings on the porch, overlooking the water',
  },
  {
    src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80',
    alt: 'Fireplace Gathering',
    caption: 'Memories made around the fire',
  },
];

// ====== Gallery Data ======
const galleryTabs = [
  {
    title: 'Summer at the Lake',
    images: [
      { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', alt: 'Lake in summer' },
      { src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', alt: 'Lodge exterior' },
      { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80', alt: 'Dock and water' },
    ],
  },
  {
    title: 'Inside the Lodge',
    images: [
      { src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80', alt: 'Lodge interior' },
      { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', alt: 'Cozy bedroom' },
      { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80', alt: 'Fireplace' },
    ],
  },
  {
    title: 'Nature & Trails',
    images: [
      { src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80', alt: 'Hemlock forest' },
      { src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80', alt: 'Ferns and blueberries' },
      { src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80', alt: 'Wildlife' },
    ],
  },
  {
    title: 'Activities & Fun',
    images: [
      { src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80', alt: 'Game room' },
      { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80', alt: 'Boating' },
      { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80', alt: 'Campfire' },
    ],
  },
];

// ====== Hero Carousel ======
function GalleryHeroCarousel() {
  const [idx, setIdx] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIdx((prev) => (prev + 1) % heroImages.length);
    }, 4200);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (i) => setIdx(i);

  return (
    <section
      style={{
        width: '100vw',
        maxWidth: '100vw',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '44vh',
        height: '52vw',
        maxHeight: 470,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#eaf6fb',
        borderRadius: '0 0 2.4rem 2.4rem',
        boxShadow: '0 8px 48px #b7b7a428',
      }}
    >
      {heroImages.map((img, i) => (
        <div
          key={img.src}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: i === idx ? 1 : 0,
            zIndex: i === idx ? 2 : 1,
            transition: 'opacity 1.1s cubic-bezier(.85,0,.15,1)',
            willChange: 'opacity',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={img.src}
            alt={img.alt}
            draggable="false"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'brightness(0.62) saturate(1.07)',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          />
          {/* Dark overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(180deg,rgba(32,44,44,0.62) 0%,rgba(26,34,34,0.65) 100%)',
              pointerEvents: 'none',
              zIndex: 2,
              transition: 'opacity 0.6s',
            }}
          />
          {/* Centered caption */}
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3,
              pointerEvents: 'none',
            }}
          >
            <span
              style={{
                color: '#fff',
                fontFamily: 'serif',
                fontSize: '2.3rem',
                fontWeight: 500,
                textAlign: 'center',
                textShadow: '0 2px 16px #1a242e88',
                letterSpacing: '0.5px',
                lineHeight: 1.19,
                opacity: i === idx ? 1 : 0,
                transition: 'opacity 1.3s',
                marginBottom: 32,
                padding: '0 2vw',
                maxWidth: '70vw',
              }}
            >
              {img.caption}
            </span>
            {/* Small dots under caption */}
            <div style={{ display: 'flex', gap: 7, marginTop: 10, justifyContent: 'center' }}>
              {heroImages.map((_, j) => (
                <span
                  key={j}
                  onClick={() => goTo(j)}
                  style={{
                    width: 9,
                    height: 9,
                    borderRadius: '50%',
                    background: j === idx ? '#b5c99a' : '#fff',
                    border: j === idx ? '1.5px solid #3a5a40' : '1.5px solid #eaf6fb',
                    boxShadow: '0 2px 6px #0002',
                    cursor: 'pointer',
                    opacity: 0.86,
                    transition: 'background 0.18s, border 0.18s',
                  }}
                  aria-label={`Go to slide ${j + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

// ====== Gallery Tabs Component ======
function GalleryTabs({ tabs, selected, onSelect }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: 18,
      margin: '2.5rem 0 1.6rem 0',
      flexWrap: 'wrap',
    }}>
      {tabs.map((tab, idx) => (
        <button
          key={tab.title}
          onClick={() => onSelect(idx)}
          style={{
            padding: '0.65rem 1.8rem',
            fontSize: '1.08rem',
            borderRadius: '2.2rem',
            border: 'none',
            background: selected === idx ? '#3a5a40' : '#eaf6fb',
            color: selected === idx ? '#fff' : '#3a5a40',
            fontFamily: 'serif',
            cursor: 'pointer',
            fontWeight: 600,
            boxShadow: selected === idx ? '0 2px 12px #3a5a401a' : 'none',
            transition: 'background 0.19s, color 0.19s',
            marginBottom: 4,
            letterSpacing: '0.04em'
          }}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
}

// ====== Gallery Grid Section (with lightbox) ======
function GalleryGrid({ images }) {
  const [lightboxIdx, setLightboxIdx] = useState(null);

  return (
    <section>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 24,
        width: '96vw',
        maxWidth: '1800px',
        margin: '0 auto',
      }}>
        {images.map((img, idx) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            style={{
              width: '100%',
              height: '32vw',
              maxHeight: '420px',
              minHeight: '180px',
              objectFit: 'cover',
              borderRadius: '1rem',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
            }}
            onClick={() => setLightboxIdx(idx)}
          />
        ))}
      </div>
      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
        }} onClick={() => setLightboxIdx(null)}>
          <img
            src={images[lightboxIdx].src}
            alt={images[lightboxIdx].alt}
            style={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              borderRadius: '1rem',
              boxShadow: '0 4px 24px rgba(0,0,0,0.18)'
            }}
          />
        </div>
      )}
    </section>
  );
}

// ====== Main Gallery Page ======
function Gallery() {
  const [tabIdx, setTabIdx] = useState(0);

  return (
    <main style={{
      background: 'linear-gradient(120deg, #f7fff7 0%, #eaf6fb 100%)',
      minHeight: '100vh',
      padding: 0
    }}>
      {/* HERO CAROUSEL */}
      <GalleryHeroCarousel />

      {/* TABS */}
      <GalleryTabs
        tabs={galleryTabs}
        selected={tabIdx}
        onSelect={setTabIdx}
      />

      {/* ACTIVE GALLERY GRID */}
      <GalleryGrid images={galleryTabs[tabIdx].images} />
    </main>
  );
}

export default Gallery;

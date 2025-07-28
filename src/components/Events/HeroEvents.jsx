function HeroEvents() {
  return (
    <section style={{
      minHeight: '45vh',
      background: 'url(https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80) center/cover no-repeat',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(34, 49, 63, 0.35)',
        zIndex: 1,
      }} />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.2rem', fontFamily: 'serif', marginBottom: '1rem' }}>
          Events & Retreats
        </h1>
        <p style={{ fontSize: '1.1rem' }}>Gather, celebrate, and connect in nature</p>
      </div>
    </section>
  );
}

export default HeroEvents; 
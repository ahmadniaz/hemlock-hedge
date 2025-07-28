function HeroAccommodations() {
  return (
    <section style={{
      minHeight: '50vh',
      background: 'url(https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80) center/cover no-repeat',
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
        <h1 style={{ fontSize: '2.5rem', fontFamily: 'serif', marginBottom: '1rem' }}>
          Accommodations
        </h1>
        <p style={{ fontSize: '1.2rem' }}>Elegant comfort on the lake</p>
      </div>
    </section>
  );
}

export default HeroAccommodations; 
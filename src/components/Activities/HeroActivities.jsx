function HeroActivities() {
  return (
    <section style={{
      minHeight: '45vh',
      background: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80) center/cover no-repeat',
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
          Activities at Hemlock Point Lodge
        </h1>
        <p style={{ fontSize: '1.1rem' }}>Fun and adventure for every season</p>
      </div>
    </section>
  );
}

export default HeroActivities; 
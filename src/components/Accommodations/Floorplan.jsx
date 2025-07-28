function Floorplan() {
  return (
    <section style={{ width: '96vw', maxWidth: '1400px', margin: '2.5rem auto', padding: '0 1rem', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'serif', color: '#3a5a40', marginBottom: 18 }}>Lodge Floorplan</h2>
      <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=700&q=80" alt="Lodge Floorplan" style={{ width: '100%', maxWidth: '1000px', minHeight: '200px', height: '32vw', maxHeight: '420px', borderRadius: '1rem', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }} />
      <div style={{ fontSize: '0.95rem', color: '#6c757d', marginTop: 8 }}>(Illustrative floorplan - for reference only)</div>
    </section>
  );
}

export default Floorplan; 
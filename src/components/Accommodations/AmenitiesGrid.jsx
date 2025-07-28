const amenities = [
  { icon: '🍳', label: 'Country Kitchen' },
  { icon: '🛋️', label: 'Great Room' },
  { icon: '🎲', label: 'Game Room' },
  { icon: '🔥', label: 'Fireplace' },
  { icon: '🌅', label: 'Porch' },
  { icon: '📶', label: 'WiFi' },
  { icon: '🚿', label: 'Private Bath' },
  { icon: '🎵', label: 'iPod Dock' },
];

function AmenitiesGrid() {
  return (
    <section style={{ maxWidth: 900, margin: '2.5rem auto', padding: '0 1rem' }}>
      <h2 style={{ fontFamily: 'serif', color: '#3a5a40', marginBottom: 24, textAlign: 'center' }}>Lodge Amenities</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24, justifyItems: 'center' }}>
        {amenities.map((a) => (
          <div key={a.label} style={{ background: 'rgba(236,245,236,0.7)', borderRadius: '1rem', padding: 18, textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', minWidth: 120 }}>
            <div style={{ fontSize: '2.2rem', marginBottom: 8 }}>{a.icon}</div>
            <div style={{ fontFamily: 'serif', color: '#52796f', fontSize: '1.1rem' }}>{a.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AmenitiesGrid; 
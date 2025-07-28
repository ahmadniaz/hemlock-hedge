const highlights = [
  { icon: '🛠️', label: 'Custom Setups', desc: 'Flexible spaces for ceremonies, meetings, and celebrations.' },
  { icon: '🏡', label: 'Group Amenities', desc: 'Spacious lodge, game room, country kitchen, and more.' },
  { icon: '🌲', label: 'Privacy', desc: 'Exclusive use of the property for your group.' },
  { icon: '🗺️', label: 'Activity Planning', desc: 'Fishing, boating, hiking, and seasonal adventures.' },
  { icon: '🍽️', label: 'Catering Options', desc: 'Local partners for delicious group meals.' },
];

function EventHighlights() {
  return (
    <section style={{ maxWidth: 900, margin: '2.5rem auto', padding: '0 1rem' }}>
      <h2 style={{ fontFamily: 'serif', color: '#3a5a40', marginBottom: 24, textAlign: 'center' }}>Event Highlights</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24, justifyItems: 'center' }}>
        {highlights.map((h) => (
          <div key={h.label} style={{ background: 'rgba(236,245,236,0.7)', borderRadius: '1rem', padding: 18, textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', minWidth: 140 }}>
            <div style={{ fontSize: '2rem', marginBottom: 8 }}>{h.icon}</div>
            <div style={{ fontFamily: 'serif', color: '#52796f', fontSize: '1.1rem', marginBottom: 6 }}>{h.label}</div>
            <div style={{ fontSize: '0.98rem', color: '#2d3a2e' }}>{h.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventHighlights; 
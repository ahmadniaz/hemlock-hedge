const events = [
  { icon: '💍', name: 'Wedding', desc: 'A magical lakeside setting for your special day.' },
  { icon: '👨‍👩‍👧‍👦', name: 'Family Reunion', desc: 'Reconnect and make memories with loved ones.' },
  { icon: '💼', name: 'Corporate Retreat', desc: 'Inspire your team with nature and comfort.' },
  { icon: '⛪', name: 'Church Retreat', desc: 'A peaceful place for reflection and fellowship.' },
  { icon: '🤝', name: 'Friend Gathering', desc: 'Celebrate milestones or just enjoy time together.' },
];

function EventCards() {
  return (
    <section style={{ maxWidth: 1000, margin: '2.5rem auto', padding: '0 1rem' }}>
      <h2 style={{ fontFamily: 'serif', color: '#3a5a40', marginBottom: 24, textAlign: 'center' }}>Group Events</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 28 }}>
        {events.map((e) => (
          <div key={e.name} style={{ background: 'rgba(255,255,255,0.92)', borderRadius: '1.25rem', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: 18, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>{e.icon}</div>
            <h3 style={{ fontFamily: 'serif', color: '#52796f', marginBottom: 6 }}>{e.name}</h3>
            <p style={{ fontSize: '1rem', color: '#2d3a2e', marginBottom: 8 }}>{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventCards; 
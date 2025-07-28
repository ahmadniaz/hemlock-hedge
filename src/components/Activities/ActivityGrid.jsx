const activities = [
  { icon: '🛶', name: 'Boating', desc: 'Paddle, row, or float on the private lake.', seasons: ['Summer', 'Fall', 'Spring'] },
  { icon: '🎣', name: 'Fishing', desc: 'Cast a line for bass, perch, and more.', seasons: ['Summer', 'Fall', 'Spring'] },
  { icon: '🥾', name: 'Hiking', desc: 'Explore scenic trails through hemlock forests.', seasons: ['Summer', 'Fall', 'Spring'] },
  { icon: '⛷️', name: 'Winter Sports', desc: 'Ski, snowshoe, or snowmobile in a winter wonderland.', seasons: ['Winter'] },
  { icon: '🫐', name: 'Berry Picking', desc: 'Pick wild blueberries in season.', seasons: ['Summer'] },
  { icon: '🦉', name: 'Wildlife Watching', desc: 'Spot deer, birds, and woodland creatures.', seasons: ['All'] },
  { icon: '🎲', name: 'Game Room', desc: 'Enjoy games and fun indoors.', seasons: ['All'] },
  { icon: '🪑', name: 'Porch Relaxation', desc: 'Unwind on the porch with a view.', seasons: ['All'] },
  { icon: '🔥', name: 'Campfires', desc: 'Gather around the fire for stories and s’mores.', seasons: ['All'] },
];

function ActivityGrid({ season }) {
  return (
    <section style={{ maxWidth: 1000, margin: '2.5rem auto', padding: '0 1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 36, width: '100%' }}>
        {activities.filter(a => a.seasons.includes(season) || a.seasons.includes('All')).map((a) => (
          <div key={a.name} style={{ background: 'rgba(255,255,255,0.97)', borderRadius: '1.5rem', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', padding: 32, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'box-shadow 0.2s, transform 0.2s', cursor: 'pointer', fontSize: '1.1rem' }}>
            <div style={{ fontSize: '2.8rem', marginBottom: 18 }}>{a.icon}</div>
            <h3 style={{ fontFamily: 'serif', color: '#52796f', marginBottom: 12, fontSize: '1.3rem', fontWeight: 600 }}>{a.name}</h3>
            <p style={{ fontSize: '1.08rem', color: '#2d3a2e', marginBottom: 8 }}>{a.desc}</p>
            <div style={{ fontSize: '1.05rem', color: '#6c757d' }}>Seasons: {a.seasons.includes('All') ? 'All' : a.seasons.join(', ')}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActivityGrid; 
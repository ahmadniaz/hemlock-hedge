const rooms = [
  {
    name: 'Hemlock Suite',
    img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=600&q=80',
    sleeps: 2,
    amenities: ['Private Bath', 'iPod Dock', 'Lake View'],
    desc: 'A spacious suite with a king bed, private bath, iPod® docking station, and stunning lake views. Custom-made furniture and tranquil decor offer elegant comfort.'
  },
  {
    name: 'Fern Room',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
    sleeps: 2,
    amenities: ['Queen Bed', 'Shared Bath', 'Forest View'],
    desc: 'Cozy and tranquil, with a queen bed, iPod® docking station, and views of the surrounding hemlocks. Furnished with rustic, handcrafted touches.'
  },
  {
    name: 'Blueberry Bunk',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
    sleeps: 4,
    amenities: ['Bunk Beds', 'Shared Bath', 'Game Room Access'],
    desc: 'Perfect for kids or friends, with two sets of bunks, iPod® docking, and easy access to the game room for pool, foosball, and movies.'
  },
  {
    name: 'Great Room Loft',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    sleeps: 2,
    amenities: ['Loft', 'Fireplace Nearby', 'WiFi'],
    desc: 'A charming loft space overlooking the great room, ideal for reading and relaxing. Enjoy the warmth of the stone fireplace and views of the lake.'
  },
];

function RoomGrid() {
  return (
    <section style={{ width: '96vw', maxWidth: '1800px', margin: '2.5rem auto', padding: '0 1rem' }}>
      <h2 style={{ fontFamily: 'serif', color: '#3a5a40', marginBottom: 24, textAlign: 'center' }}>Bedrooms</h2>
      <p style={{ textAlign: 'center', color: '#52796f', fontSize: '1.08rem', marginBottom: 28 }}>
        Five bedrooms and three private baths can soothe a total of 16 guests. Each bedroom features an iPod® docking station with built-in speakers, custom-made furniture, and tranquil views. The lodge’s country kitchen, great room with stone fireplace, and game room offer spaces for gathering, dining, and play—combining rustic living with elegant comfort.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 36, width: '100%' }}>
        {rooms.map((room) => (
          <div key={room.name} style={{ background: 'rgba(255,255,255,0.97)', borderRadius: '1.5rem', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', padding: 32, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'box-shadow 0.2s, transform 0.2s', cursor: 'pointer', fontSize: '1.1rem' }}>
            <img src={room.img} alt={room.name} style={{ width: '100%', height: '28vw', maxHeight: '340px', minHeight: '140px', objectFit: 'cover', borderRadius: '1rem', marginBottom: 18, boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }} />
            <h3 style={{ fontFamily: 'serif', color: '#52796f', marginBottom: 10, fontSize: '1.25rem', fontWeight: 600 }}>{room.name}</h3>
            <div style={{ color: '#3a5a40', fontSize: '1.08rem', marginBottom: 8 }}>Sleeps {room.sleeps}</div>
            <div style={{ fontSize: '1.05rem', color: '#6c757d', marginBottom: 8 }}>
              {room.amenities.join(' • ')}
            </div>
            <p style={{ fontSize: '1.08rem', color: '#2d3a2e' }}>{room.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ margin: '2.5rem 0 0', textAlign: 'center' }}>
        <blockquote style={{ fontSize: '1.08rem', color: '#52796f', fontStyle: 'italic', marginBottom: 8 }}>
          “It (Hemlock Point Lodge) has the feel and ambiance of a rustic log cabin, with all the modern comforts you would expect of a 5 star resort.”
        </blockquote>
        <a href="/testimonials" style={{ color: '#3a5a40', textDecoration: 'underline', fontWeight: 500 }}>Read More Guest Stories</a>
      </div>
    </section>
  );
}

export default RoomGrid; 
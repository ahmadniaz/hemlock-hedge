function EventTestimonial() {
  return (
    <section style={{ maxWidth: 700, margin: '2.5rem auto', padding: '2rem 1.5rem', background: 'rgba(236,245,236,0.7)', borderRadius: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', gap: 24 }}>
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Event Host" style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 2px 8px rgba(0,0,0,0.07)' }} />
      <div>
        <p style={{ fontSize: '1.1rem', color: '#2d3a2e', fontStyle: 'italic', marginBottom: 8 }}>
          “Our family reunion at Hemlock Point Lodge was unforgettable. The staff made everything easy, and the setting was perfect for all ages!”
        </p>
        <div style={{ color: '#52796f', fontWeight: 600 }}>— Mark T., Reunion Host</div>
      </div>
    </section>
  );
}

export default EventTestimonial; 
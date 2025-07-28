function CheckAvailability() {
  return (
    <section style={{ textAlign: 'center', margin: '2.5rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 10 }}>
        <a href="mailto:nfahimi@yahoo.com?subject=Hemlock%20Point%20Lodge%20Reservation%20Inquiry" style={{ padding: '1rem 2.5rem', fontSize: '1.2rem', background: 'linear-gradient(90deg, #3a5a40 60%, #b5c99a 100%)', color: '#fff', border: 'none', borderRadius: '2rem', cursor: 'pointer', fontFamily: 'serif', boxShadow: '0 2px 12px rgba(0,0,0,0.10)', textDecoration: 'none', fontWeight: 500, marginRight: 8 }}>Check Availability</a>
        <a href="https://www.homeaway.com/vacation-rental/p4681479#ratesAnchor" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem 2.5rem', fontSize: '1.2rem', background: '#b5c99a', color: '#fff', border: 'none', borderRadius: '2rem', cursor: 'pointer', fontFamily: 'serif', boxShadow: '0 2px 12px rgba(0,0,0,0.10)', textDecoration: 'none', fontWeight: 500 }}>View on VRBO</a>
      </div>
      <div style={{ color: '#6c757d', fontSize: '1rem' }}>
        For current rates and availability, please email us or visit our VRBO page.
      </div>
    </section>
  );
}

export default CheckAvailability; 
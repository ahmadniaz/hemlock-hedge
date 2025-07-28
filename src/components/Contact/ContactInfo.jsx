function ContactInfo() {
  return (
    <section style={{ width: '100%', background: 'rgba(236,245,236,0.92)', borderRadius: '1.5rem', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', padding: '2vw 2vw 1vw 2vw', textAlign: 'center', minWidth: 0 }}>
      <h3 style={{ fontFamily: 'serif', color: '#3a5a40', marginBottom: 12, fontSize: '1.5rem' }}>Contact Information</h3>
      <div style={{ margin: '18px 0', color: '#52796f', fontSize: '1.15rem' }}>
        <b>Hemlock Point Lodge</b><br/>
        3159 May Road<br/>
        Thompson, PA 18465<br/>
        <span style={{ fontSize: '1.08rem' }}>GPS: N41°50.115' - W75°28.416'</span>
      </div>
      <div style={{ fontSize: '1.18rem', color: '#2d3a2e', marginBottom: 10 }}>📞 (555) 123-4567</div>
      <div style={{ fontSize: '1.18rem', color: '#2d3a2e', marginBottom: 10 }}>✉️ info@hemlockpointlodge.com</div>
      <div style={{ fontSize: '1.18rem', color: '#2d3a2e', marginBottom: 18 }}>
        <span style={{ marginRight: 8 }}>🌐</span>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#52796f', textDecoration: 'none', marginRight: 8 }}>Instagram</a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#52796f', textDecoration: 'none' }}>Facebook</a>
      </div>
      <div style={{ margin: '24px 0', padding: '1rem', background: 'rgba(255,255,255,0.85)', borderRadius: '1rem', boxShadow: '0 1px 6px rgba(0,0,0,0.03)' }}>
        <div style={{ fontWeight: 600, color: '#3a5a40', marginBottom: 10 }}>To make a reservation, email us at <a href="mailto:nfahimi@yahoo.com" style={{ color: '#3a5a40', textDecoration: 'underline' }}>nfahimi@yahoo.com</a></div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 8, flexWrap: 'wrap' }}>
          <a href="mailto:nfahimi@yahoo.com?subject=Hemlock%20Point%20Lodge%20Reservation%20Inquiry" style={{ padding: '0.7rem 1.5rem', background: '#3a5a40', color: '#fff', borderRadius: '2rem', textDecoration: 'none', fontWeight: 500, fontFamily: 'serif', fontSize: '1.08rem' }}>Check Availability</a>
          <a href="https://www.homeaway.com/vacation-rental/p4681479#ratesAnchor" target="_blank" rel="noopener noreferrer" style={{ padding: '0.7rem 1.5rem', background: '#b5c99a', color: '#fff', borderRadius: '2rem', textDecoration: 'none', fontWeight: 500, fontFamily: 'serif', fontSize: '1.08rem' }}>View on VRBO</a>
        </div>
        <div style={{ color: '#52796f', fontSize: '1.05rem' }}>For rates and up-to-date availability, please email us or check our VRBO listing.</div>
      </div>
      <div style={{ marginTop: 16 }}>
        <a href="/faq" style={{ color: '#3a5a40', textDecoration: 'underline', marginRight: 12 }}>FAQ</a>
        <a href="/about" style={{ color: '#3a5a40', textDecoration: 'underline', marginRight: 12 }}>About</a>
        <a href="/directions" style={{ color: '#3a5a40', textDecoration: 'underline' }}>Directions</a>
      </div>
    </section>
  );
}

export default ContactInfo; 
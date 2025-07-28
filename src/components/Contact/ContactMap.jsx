function ContactMap() {
  return (
    <section style={{ width: '100%', background: 'rgba(255,255,255,0.92)', borderRadius: '1.5rem', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', padding: '2vw 2vw 1vw 2vw', textAlign: 'center', minWidth: 0, margin: '2vw 0' }}>
      <h3 style={{ fontFamily: 'serif', color: '#3a5a40', marginBottom: 12, fontSize: '1.5rem' }}>Our Location</h3>
      <div style={{ borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.08)', border: '2px solid #eaf6fb', width: '100%', maxWidth: '100%', minHeight: 320, margin: '0 auto' }}>
        <iframe
          title="Hemlock Point Lodge Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9999999999995!2d-75.00000000000001!3d41.50000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNDDCsDMwJzAwLjAiTiA3NcKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
          width="100%"
          height="340"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactMap; 
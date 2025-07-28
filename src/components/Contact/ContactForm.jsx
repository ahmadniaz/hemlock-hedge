import { useState } from 'react';

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '', dates: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return <div style={{ textAlign: 'center', color: '#3a5a40', fontSize: '1.2rem', margin: '2rem 0' }}>Thank you for reaching out! We’ll be in touch soon.</div>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', background: 'rgba(255,255,255,0.92)', borderRadius: '1.5rem', boxShadow: '0 4px 16px rgba(0,0,0,0.08)', padding: '2.5vw 2vw', display: 'flex', flexDirection: 'column', gap: 24, minWidth: 0 }}>
      <h2 style={{ fontFamily: 'serif', color: '#3a5a40', textAlign: 'center', fontSize: '2rem', marginBottom: 8 }}>Contact Us</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required style={{ padding: '0.9rem', borderRadius: '0.9rem', border: '1px solid #b5c99a', fontSize: '1.1rem' }} />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" type="email" required style={{ padding: '0.9rem', borderRadius: '0.9rem', border: '1px solid #b5c99a', fontSize: '1.1rem' }} />
      <input name="dates" value={form.dates} onChange={handleChange} placeholder="Preferred Dates" style={{ padding: '0.9rem', borderRadius: '0.9rem', border: '1px solid #b5c99a', fontSize: '1.1rem' }} />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows={4} required style={{ padding: '0.9rem', borderRadius: '0.9rem', border: '1px solid #b5c99a', fontSize: '1.1rem' }} />
      <button type="submit" style={{ padding: '1.1rem', borderRadius: '2rem', background: '#3a5a40', color: '#fff', fontSize: '1.15rem', border: 'none', cursor: 'pointer', fontFamily: 'serif', marginTop: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>Send Message</button>
    </form>
  );
}

export default ContactForm; 
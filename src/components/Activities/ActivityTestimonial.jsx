function ActivityTestimonial() {
  return (
    <section style={{ maxWidth: 700, margin: '2.5rem auto', padding: '2rem 1.5rem', background: 'rgba(236,245,236,0.7)', borderRadius: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', gap: 24, flexDirection: 'column', textAlign: 'center' }}>
      <blockquote style={{ fontSize: '1.08rem', color: '#52796f', fontStyle: 'italic', marginBottom: 8 }}>
        “We explored the trails, traveled across the lake by rowboat, canoe, paddle boat and kayak. The blend of nature and comfort far exceeded our expectations.”
      </blockquote>
      <a href="/testimonials" style={{ color: '#3a5a40', textDecoration: 'underline', fontWeight: 500 }}>Read More Guest Stories</a>
    </section>
  );
}

export default ActivityTestimonial; 
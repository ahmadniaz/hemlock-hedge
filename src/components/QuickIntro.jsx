function QuickIntro() {
  return (
    <section style={{
      background: 'rgba(252,252,250,0.97)',
      padding: '2.8rem 5vw 2.3rem',
      textAlign: 'center',
      fontFamily: "'Playfair Display', serif",
      fontSize: '1.21rem',
      color: '#2d3a2e',
      boxShadow: '0 6px 32px #39553a13, 0 1.5px 8px #e1c37f19',
      borderRadius: '2.1rem',
      marginTop: '-4.6rem',
      position: 'relative',
      zIndex: 7,
      maxWidth: 850,
      marginLeft: 'auto',
      marginRight: 'auto'
    }}>
      {/* Decorative leaf icon */}
      <div style={{
        position: 'absolute', top: 24, right: 34, opacity: 0.16, fontSize: 38
      }}>🌲</div>
      <h2 style={{
        color: '#3a5a40',
        fontSize: 'clamp(1.4rem,2vw,2rem)',
        fontWeight: 700,
        marginBottom: 20,
        fontFamily: "'Playfair Display', serif",
        letterSpacing: '0.5px'
      }}>
        Imagine Your Own Private Lakeside Lodge
      </h2>
      <p style={{
        margin: "0 auto 1.5rem",
        fontSize: '1.13rem',
        fontFamily: "'Lato',sans-serif",
        color: "#52796f",
        lineHeight: 1.7,
        maxWidth: 720
      }}>
        Set on over 100 acres of pristine Pennsylvania wilderness, Hemlock Point Lodge is your exclusive retreat for relaxation, adventure, and togetherness.
      </p>
      <p style={{
        margin: "0 auto 1.5rem",
        fontSize: '1.11rem',
        color: "#2d3a2e",
        fontFamily: "'Lato',sans-serif",
        lineHeight: 1.6,
        maxWidth: 720
      }}>
        The 15-acre lake is entirely private—no other homes or people, just pure tranquility. This elegant yet rustic Adirondack lodge sleeps 16 in five bedrooms, with four full bathrooms. Gather in the spacious great room, or enjoy the tremendous game room with pool, air hockey, foosball, darts, and a 50" TV. Relax on the porch and savor endless views of the water and woods.
      </p>
      <p style={{
        margin: "0 auto 0",
        fontSize: '1.11rem',
        color: "#2d3a2e",
        fontFamily: "'Lato',sans-serif",
        lineHeight: 1.6,
        maxWidth: 720
      }}>
        Whether you’re planning a family vacation, church or corporate retreat, family reunion, ski getaway to Elk Mountain, or a fishing trip with friends—<span style={{ color: "#a7c957", fontWeight: 600 }}>Hemlock Point Lodge is where lasting memories are made</span>.
      </p>
    </section>
  );
}

export default QuickIntro;

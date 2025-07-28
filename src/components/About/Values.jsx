import { motion } from "framer-motion";
const values = [
  { icon: '🌲', title: 'Tranquility', desc: 'A peaceful retreat where guests can unwind, recharge, and reconnect with nature.' },
  { icon: '🦉', title: 'Respect for Nature', desc: 'We honor the land, wildlife, and water, fostering stewardship and sustainability.' },
  { icon: '🤗', title: 'Guest Experience', desc: 'Warm hospitality and thoughtful touches ensure every stay is memorable.' },
];

function Values() {
  return (
    <section style={{
      background: 'linear-gradient(90deg, #eaf6fb 60%, #b5c99a 100%)',
      padding: '3vw 0', borderRadius: '0', margin: 0,
      width: '100vw', maxWidth: '100vw',
      boxShadow: '0 6px 32px #e1c37f15',
    }}>
      <h2 style={{
        fontFamily: 'Playfair Display, serif', color: '#3a5a40',
        fontSize: '2.1rem', marginBottom: 36, fontWeight: 700, textAlign: 'center', letterSpacing: '1px'
      }}>
        Our Values
      </h2>
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: 44, justifyContent: 'center',
        width: '96vw', maxWidth: '1600px', margin: '0 auto'
      }}>
        {values.map((v) => (
          <motion.div
            key={v.title}
            whileHover={{ scale: 1.045, boxShadow: "0 6px 22px #e1c37f55" }}
            style={{
              flex: '1 1 290px', minWidth: 210, maxWidth: 380,
              background: 'rgba(255,255,255,0.97)',
              borderRadius: '1.5rem', padding: 32,
              textAlign: 'center',
              boxShadow: '0 2px 8px #e1c37f1a',
              border: "1.5px solid #a7c95723",
              transition: 'box-shadow 0.22s, transform 0.18s',
              fontSize: '1.1rem',
              position: "relative"
            }}>
            <div style={{
              fontSize: '3.1rem', marginBottom: 14,
              opacity: 0.92, filter: "drop-shadow(0 2px 6px #e1c37f22)"
            }}>{v.icon}</div>
            <h3 style={{
              fontFamily: 'Playfair Display, serif', color: '#52796f',
              marginBottom: 9, fontSize: '1.19rem', fontWeight: 600
            }}>{v.title}</h3>
            <p style={{ fontSize: '1.08rem', color: '#2d3a2e' }}>{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Values;

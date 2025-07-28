import { motion } from "framer-motion";

function LodgeStory() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        background: 'rgba(252,252,250,0.98)',
        padding: '3vw 3vw',
        borderRadius: '2.2rem',
        margin: '2vw 0',
        boxShadow: '0 8px 36px 0 #e1c37f1a, 0 1.5px 7px #39553a13',
        borderLeft: '6px solid #e1c37f88',
        display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '3vw', minHeight: 320, flexWrap: 'wrap'
      }}>
      <motion.div
        initial={{ scale: 0.92 }}
        whileHover={{ scale: 1.02, rotate: -1 }}
        style={{
          flex: '1 1 320px', minWidth: 220, maxWidth: 420,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
        }}>
        <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80"
          alt="Hemlock trees"
          style={{
            width: '100%', maxWidth: 320, minWidth: 180, borderRadius: '1.4rem',
            boxShadow: '0 6px 20px rgba(200,180,110,0.10)', objectFit: 'cover'
          }} />
      </motion.div>
      <div style={{ flex: '2 1 420px', minWidth: 220, maxWidth: 900, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{
          fontFamily: 'Playfair Display, serif', color: '#3a5a40', fontSize: '2.1rem',
          marginBottom: 18, fontWeight: 700, textAlign: 'left'
        }}>Our Story</h2>
        {/* Content unchanged */}
        <p style={{ fontSize: '1.18rem', color: '#2d3a2e', lineHeight: 1.7, marginBottom: 18, textAlign: 'left' }}>
          Located in the Endless Mountains region of northeast Pennsylvania, Hemlock Point Lodge is a four-season private lake retreat where family, friends and fun come together. A hemlock grove at the lake’s edge knits a canopy of branches, providing shade and tranquility. Indigenous hemlocks and ferns surround the 4,000 sq. ft. Adirondack style lodge, blending rustic living with elegant comfort. The lodge is furnished with custom-made furniture crafted from logs, sticks, twigs, and bark—some sourced from the property itself.
        </p>
        <p style={{ fontSize: '1.18rem', color: '#2d3a2e', lineHeight: 1.7, marginBottom: 18, textAlign: 'left' }}>
          Formerly private hunting and fishing grounds, the 103 acres that is home to Hemlock Point Lodge has numerous trails bordered by blueberry bushes, a hidden marshland, acres of deciduous woods, a 45-acre rolling field, and a 15-acre lake. This diverse ecology is home to a variety of wildlife that shares their habitat with guests. Take the time to mingle with them, listen to their voices, and treat their home with care.
        </p>
        <p style={{ fontSize: '1.18rem', color: '#2d3a2e', lineHeight: 1.7, marginBottom: 18, textAlign: 'left' }}>
          Most guests to Hemlock Point Lodge never want to leave. It’s a place that allows you to be yourself or find yourself.
        </p>
        <p style={{ fontSize: '1.1rem', color: '#52796f', fontStyle: 'italic', marginTop: 24, marginBottom: 0, textAlign: 'left' }}>
          A peaceful breeze whispers your name…<br />
          <span style={{ color: '#3a5a40', fontWeight: 600 }}>Consider this your invitation to Hemlock Point Lodge…</span>
        </p>
      </div>
    </motion.section>
  );
}
export default LodgeStory;

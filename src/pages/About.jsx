// About.jsx

import LodgeStory from '../components/About/LodgeStory';
import EcologyWildlife from '../components/About/EcologyWildlife';
import Values from '../components/About/Values';
import { motion } from "framer-motion";

// You can use a custom SVG of hemlock leaves or just a pretty Unsplash landscape.
const HERO_IMG = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=80";

function About() {
  return (
    <main style={{ background: 'linear-gradient(120deg, #eaf6fb 0%, #f7fff7 100%)', minHeight: '100vh', padding: 0 }}>
      {/* HERO */}
      <section style={{
        width: '100vw', maxWidth: '100vw', padding: 0, margin: 0,
        position: "relative",
        minHeight: '48vh',
        boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: "hidden"
      }}>
        {/* Background image with gradient overlay */}
        <img
          src={HERO_IMG}
          alt="Sunrise over Hemlock Lake"
          style={{
            position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 1,
            filter: "brightness(0.75) saturate(1.08) blur(0.5px)"
          }}
        />
        <div style={{
          position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
          background: "linear-gradient(120deg,rgba(243,249,238,0.69) 60%,rgba(87,113,93,0.12) 100%)",
          zIndex: 2
        }} />
        {/* Optional illustration overlay */}
        <div style={{ position: "absolute", bottom: 0, right: "8vw", zIndex: 3, opacity: 0.13 }}>
          {/* <img src="/assets/hemlock-branch.svg" width={220} alt="" /> */}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            position: "relative", zIndex: 4, textAlign: 'center',
            padding: '3vw 5vw', width: "100%", maxWidth: 980
          }}>
          <h1 style={{
            fontSize: 'clamp(2.1rem, 4vw, 3.5rem)',
            fontFamily: `'Playfair Display', serif`,
            color: '#29422c',
            margin: 0, fontWeight: 800, letterSpacing: '2px',
            textShadow: '0 2px 18px #e7ede7',
          }}>
            About Hemlock Point Lodge
          </h1>
          <p style={{
            fontSize: "clamp(1.1rem, 2vw, 1.55rem)",
            color: "#3a5a409a",
            margin: "2vw auto 0",
            maxWidth: 620,
            fontFamily: `'Lato', sans-serif`,
            lineHeight: 1.5
          }}>
            Discover the story, land, and values behind this lakeside sanctuary in Pennsylvania’s Endless Mountains.
          </p>
        </motion.div>
      </section>
      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: 0.1 }}
        style={{
          display: 'flex', flexWrap: 'wrap', gap: '3vw', justifyContent: 'center', alignItems: 'flex-start',
          width: '96vw', maxWidth: '1800px', margin: '0 auto', marginTop: '-4rem', zIndex: 2, position: 'relative'
        }}>
        <div style={{ flex: '1 1 420px', minWidth: 340, maxWidth: 700 }}>
          <LodgeStory />
        </div>
        <div style={{ flex: '1 1 420px', minWidth: 340, maxWidth: 700 }}>
          <EcologyWildlife />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: 0.35 }}
        style={{ width: '100vw', maxWidth: '100vw', margin: '3rem 0 0 0', padding: 0 }}>
        <Values />
      </motion.div>
    </main>
  );
}
export default About;

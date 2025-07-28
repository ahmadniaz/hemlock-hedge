import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '84vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80) center/cover no-repeat',
        position: 'relative',
      }}
    >
      {/* Animated overlay for sunlight/floating leaves effect */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
        background: 'linear-gradient(120deg, rgba(234, 241, 228, 0.1) 50%, rgba(104, 136, 115, 0.18) 100%)',
        zIndex: 1,
        pointerEvents: 'none'
      }}>
        {/* Example sunlight effect */}
        <div className="sunbeam" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.3 }}
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: '#fff',
          padding: '3vw 5vw',
          background: 'rgba(40,57,40,0.20)',
          borderRadius: '2rem',
          boxShadow: '0 6px 38px 0 rgba(80,90,80,0.12)',
        }}
      >
        <h1 style={{
          fontFamily: `'Playfair Display', serif`,
          fontSize: 'clamp(2.1rem, 4vw, 3.4rem)',
          fontWeight: 700,
          marginBottom: '1.1rem',
          letterSpacing: '1.4px',
          textShadow: '0 2px 22px #234e43,0 1px 2px #fff3',
        }}>
          A Private Lake Retreat for All Seasons
        </h1>
        <p style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
          fontFamily: `'Lato', sans-serif`,
          marginBottom: '2.5rem',
          color: '#f6f6e9',
          textShadow: '0 1px 8px #253926',
        }}>
          Where family, friends, and fun come together
        </p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 8px 22px #b7b7a4aa" }}
          whileTap={{ scale: 0.97 }}
          style={{
            padding: '0.88rem 2.5rem',
            fontSize: '1.22rem',
            fontWeight: 700,
            background: 'linear-gradient(92deg, #a7c957 40%, #52796f 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '2rem',
            boxShadow: '0 4px 16px rgba(35,78,67,0.16)',
            cursor: 'pointer',
            fontFamily: `'Lato', sans-serif`,
            letterSpacing: '1px',
            outline: 'none',
            transition: 'background 0.3s, box-shadow 0.3s'
          }}
        >
          Book Your Stay
        </motion.button>
      </motion.div>
      <style>
        {`
        .sunbeam {
          position: absolute;
          top: 7vw; left: 20vw;
          width: 240px; height: 240px;
          border-radius: 50%;
          background: radial-gradient(ellipse at center, rgba(251,249,226,0.27) 0%, rgba(250, 243, 206, 0.05) 75%);
          filter: blur(5px);
          pointer-events: none;
          animation: beamFade 6s infinite alternate;
        }
        @keyframes beamFade {
          0% { opacity: 0.44; }
          100% { opacity: 0.20; }
        }
        `}
      </style>
    </section>
  );
}

export default HeroSection;

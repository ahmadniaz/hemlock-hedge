import { motion } from "framer-motion";

const floraFauna = [
  {
    title: 'Eastern Hemlocks',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    desc: 'Towering hemlocks shade the lodge and lake, providing a cool, tranquil canopy and vital wildlife habitat.'
  },
  {
    title: 'Ferns & Blueberries',
    img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
    desc: 'Lush ferns and wild blueberries carpet the forest floor, offering beauty and seasonal treats.'
  },
  {
    title: 'Woodland Creatures',
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    desc: 'Deer, foxes, and playful chipmunks roam the woods, while the call of loons and owls echoes across the water.'
  },
  {
    title: 'Birdlife',
    img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
    desc: 'Songbirds, woodpeckers, and majestic eagles are frequent visitors, delighting nature lovers and birdwatchers.'
  },
];

function EcologyWildlife() {
  return (
    <section style={{
      background: 'rgba(255,255,255,0.96)',
      padding: '2vw 2vw 2vw 2vw',
      borderRadius: '2rem',
      margin: '2vw 0',
      boxShadow: '0 6px 32px #52796f16, 0 2px 8px #e1c37f13',
      width: '100%',
      position: "relative"
    }}>
      <h2 style={{
        fontFamily: 'Playfair Display, serif', color: '#3a5a40',
        fontSize: '2rem', marginBottom: 32, fontWeight: 700, textAlign: 'center', letterSpacing: '1px'
      }}>
        Ecology & Wildlife
      </h2>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 30, width: '100%'
      }}>
        {floraFauna.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ scale: 1.045, boxShadow: "0 8px 32px #a7c9573a,0 2px 8px #e1c37f13" }}
            style={{
              background: 'rgba(236,245,236,0.96)',
              borderRadius: '1.25rem',
              padding: 22,
              textAlign: 'center',
              boxShadow: '0 2px 8px #e1c37f12',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              border: "1.5px solid #a7c95727",
              transition: 'box-shadow 0.25s',
              cursor: 'pointer',
              position: "relative"
            }}>
            <img src={item.img} alt={item.title}
              style={{
                width: '100%', maxWidth: 320, height: 160, objectFit: 'cover',
                borderRadius: '1rem', marginBottom: 16,
                boxShadow: '0 2px 8px #3a5a4017'
              }} />
            <h3 style={{
              fontFamily: 'serif', color: '#52796f',
              marginBottom: 10, fontSize: '1.19rem', fontWeight: 600
            }}>{item.title}</h3>
            <p style={{
              fontSize: '1.08rem', color: '#2d3a2e'
            }}>{item.desc}</p>
            {/* Optional: Watermark icon (leaf/fern/animal) in bg */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default EcologyWildlife;

import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    excerpt: "Hemlock Point Lodge is in all honesty the BEST vacation spot in the tri-state area!... The way the lodge is able to scream rustic log cabin while containing EVERY modern amenity and comfort is just astounding!... Please don't miss out on an opportunity to stay at Hemlock Point Lodge.",
    full: `Twelve people would like to thank you for the most fantastic weekend of our lives!

Please feel free to put the following testimonial on your website so I can help convince people to decide to take the trip of their lifetime. Hemlock Point Lodge, is in all honesty the BEST vacation spot in the tri-state area! For those who are still debating whether to make that reservation, let me describe as best as I can in words the experience that is Hemlock Point Lodge. The scenic drive through the "Endless mountains" is breathtaking. The excitement builds up as the winding roads change from one view to another, and your destination draws ever closer. You can see, smell and just sense nature all around you as you pull into Thompson and its surrounding towns. Finally you reach the gate, open it up, and you just feel the rush of excitement as you jump back into the car and down the scenic driveway. When you first see the Lodge itself, its simply AMAZING, words cannot describe it's simple yet detailed beauty. You punch in the code and open the door.....It's just overwhelming, to say pictures don't do it justice is an understatement. It is quite simply a work of art. EVERY SINGLE OUNCE OF THE LODGE WAS DELIBERATELY AND CAREFULLY THOUGHT OUT AND PLACED. We all (12 people in my group) felt like we were inside a painting. My wife put it beautifully when she said "It (Hemlock Point Lodge) has the feel and ambiance of a rustic log cabin, with all the modern comforts you would expect of a 5 star resort". That is EXACTLY how we all felt! The way the lodge is able to scream rustic log cabin while containing EVERY modern amenity and comfort is just astounding! I don't want to ruin the surprise and give you a room by room description. I will say that it can VERY easily accommodate a party of 16 very comfortably. In addition, Bob's instructions are flawless and his attention to detail is seen throughout the house as well as throughout the booking. He is absolutely a pleasure to deal with and very accommodating. I have NOTHING bad to say about my trip other that it ended too quickly. I am already working on my second booking and I can guarantee if i had my way I would make this a biannual trip. Please don't miss out on an opportunity to stay at Hemlock Point Lodge. I look forward to reading about your stay in the sign-in book on my next visit.`
  },
  {
    excerpt: "Your home is beautiful! ... The setting was perfectly serene. We hope you have endless wonderful times here.",
    full: "Your home is beautiful! We noticed new things all weekend, the details are great! The setting was perfectly serene. We hope you have endless wonderful times here. Thank you for sharing with us! My husband’s surprise 40th weekend was lots of fun."
  },
  {
    excerpt: "Tough to describe how perfect Hemlock Point was – WOW! Plans to come back are already brewing.",
    full: "Tough to describe how perfect Hemlock Point was – WOW! Plans to come back are already brewing. Until next time….."
  },
  {
    excerpt: "Amazing……quality, craftsmanship – 5 stars. We love your place.",
    full: "Amazing……quality, craftsmanship – 5 stars. We love your place."
  },
  {
    excerpt: "We can’t even begin to describe how much joy your house brought us this weekend. For 16 friends from New York City, this was exactly what we needed to get away and relax.",
    full: "We can’t even begin to describe how much joy your house brought us this weekend. For 16 friends from New York City, this was exactly what we needed to get away and relax. Your house is absolutely stunning, from the land to the last details of construction, especially the hot tub! Thanks so much for sharing your home. We can’t wait to do it again."
  },
  {
    excerpt: "Easily the most beautiful mountain home we’ve ever seen. Thank you. We can’t wait to come back next year.",
    full: "Easily the most beautiful mountain home we’ve ever seen. Thank you. We can’t wait to come back next year."
  },
  {
    excerpt: "Best house, property and ski weekend we’ve ever experienced…..",
    full: "Best house, property and ski weekend we’ve ever experienced….."
  },
  {
    excerpt: "Dear Hemlock Family – We enjoyed these 3 days of quiet and peace after spending a few days in loud and crowded NYC. ... Your house is one of the most impressive houses we’ve ever seen!! Thank you.",
    full: "Dear Hemlock Family – We enjoyed these 3 days of quiet and peace after spending a few days in loud and crowded NYC. We used this marvelous facility for taping a video with our band. Your house is one of the most impressive houses we’ve ever seen!! Thank you."
  },
];

function truncate(text, maxLength = 220) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

// === Testimonial Carousel ===
function TestimonialCarousel({ testimonials }) {
  const [idx, setIdx] = useState(0);
  const [modal, setModal] = useState(null);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIdx((prev) => (prev + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(intervalRef.current);
  }, [testimonials.length]);

  // Mobile: swipe/scroll, Desktop: show carousel with controls
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: 750,
      minHeight: 320,
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '2rem 0 1.2rem 0',
    }}>
      {testimonials.map((t, i) => (
        <div
          key={i}
          style={{
            position: i === idx ? 'relative' : 'absolute',
            opacity: i === idx ? 1 : 0,
            pointerEvents: i === idx ? 'auto' : 'none',
            transition: 'opacity 1s cubic-bezier(.6,0,.4,1)',
            zIndex: i === idx ? 2 : 1,
            width: '100%',
            minHeight: 260,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <div style={{
            width: '100%',
            background: 'rgba(236,245,236,0.97)',
            borderRadius: '1.5rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
            padding: '2.5rem 2rem 2rem 2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            fontSize: '1.18rem',
            color: '#29472b',
            fontFamily: 'serif',
            minHeight: 210,
            lineHeight: 1.65,
          }}>
            <span style={{ fontSize: 34, lineHeight: 0.8, color: '#b5c99a', marginBottom: 10 }}>“</span>
            <span>{truncate(t.full, 330)}</span>
            {t.full.length > 330 && (
              <span
                style={{
                  color: '#7cb518',
                  fontWeight: 500,
                  fontSize: '1.05rem',
                  marginTop: 10,
                  cursor: 'pointer',
                  display: 'inline-block',
                  textDecoration: 'underline',
                  letterSpacing: '.2px'
                }}
                onClick={() => setModal(t.full)}
              >
                Read full story
              </span>
            )}
          </div>
        </div>
      ))}
      {/* Dots */}
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', margin: '1.6rem 0 0 0' }}>
        {testimonials.map((_, i) => (
          <span
            key={i}
            onClick={() => setIdx(i)}
            style={{
              width: 13,
              height: 13,
              borderRadius: '50%',
              background: i === idx ? '#b5c99a' : '#eaf6fb',
              border: i === idx ? '2px solid #3a5a40' : 'none',
              boxShadow: '0 2px 8px #29472b22',
              cursor: 'pointer',
              transition: 'background 0.2s, border 0.2s'
            }}
          />
        ))}
      </div>
      {/* Modal */}
      {modal && (
        <div
          onClick={() => setModal(null)}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(32,44,44,0.62)',
            zIndex: 99,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#fff',
              borderRadius: '1.5rem',
              maxWidth: 520,
              width: '90vw',
              padding: '2.3rem 2rem 2rem 2rem',
              fontSize: '1.13rem',
              color: '#29472b',
              boxShadow: '0 6px 32px rgba(0,0,0,0.18)',
              fontFamily: 'serif',
              position: 'relative',
              maxHeight: '82vh',           // ADDED!
              overflowY: 'auto',           // ADDED!
              overscrollBehavior: 'contain' // Optional, for smoother mobile scroll
            }}
          >
            <button
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                fontSize: 20,
                background: 'none',
                border: 'none',
                color: '#52796f',
                cursor: 'pointer'
              }}
              onClick={() => setModal(null)}
            >✕</button>
            <div style={{ fontSize: 32, color: '#b5c99a', marginBottom: 14 }}>“</div>
            <div style={{ whiteSpace: 'pre-line', lineHeight: 1.68 }}>{modal}</div>
          </div>
        </div>
      )}

    </div>
  );
}

// === Main Testimonials Page ===
function Testimonials() {
  return (
    <main style={{
      background: 'linear-gradient(120deg, #f7fff7 0%, #eaf6fb 100%)',
      minHeight: '100vh',
      padding: 0
    }}>
      {/* Hero/Intro */}
      <section style={{
        width: '100vw',
        maxWidth: '100vw',
        margin: 0,
        background: 'linear-gradient(90deg, #eaf6fb 60%, #b5c99a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '38vh',
        boxShadow: '0 4px 24px rgba(0,0,0,0.07)'
      }}>
        <div style={{ padding: '2.6rem 1vw', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '2.8rem',
            fontFamily: 'serif',
            color: '#3a5a40',
            fontWeight: 700,
            textShadow: '0 2px 12px #fff8',
            marginBottom: 12,
            letterSpacing: '1.4px'
          }}>What Our Guests Say</h1>
          <div style={{
            color: '#52796f',
            fontSize: '1.19rem',
            marginBottom: 0,
            maxWidth: 740,
            margin: '0 auto',
            fontFamily: 'serif'
          }}>
            We are grateful for every guest who has shared their experience and memories at Hemlock Point Lodge. Here are just a few of their stories.
          </div>
        </div>
      </section>
      {/* Carousel */}
      <div style={{
        width: '100vw',
        maxWidth: '100vw',
        margin: '0 auto',
        marginTop: '-3.3rem',
        zIndex: 2,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '3vw'
      }}>
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </main>
  );
}

export default Testimonials;

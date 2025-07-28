import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  Paper,
  useMediaQuery,
  Divider,
  Link,
  IconButton
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { FaLeaf, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// Theme colors
const COLORS = {
  bg: "#f7f5f1",
  card: "rgba(255,255,255,0.94)",
  primary: "#214340",
  accent: "#987853",
  gold: "#d9b77b",
  green: "#4a5e39",
  brown: "#72573b"
};

// FAQ Content
const FAQS = [
  {
    q: "What is provided?",
    a: (
      <>
        <Typography>
          We provide bed linens, pillows, blankets, towels (one per person), three queen beds, five bunk beds, gas grill, eight life jackets, canoe, row boat, paddle boat, four kayaks, toilet paper, pots, pans, cooking utensils, china, glasses, iron & ironing board, cable TV, DVD/CD player, internet access, land phone, board games, and books.  
          <br />
          <Link href="/documents/WhatnottoBring_000.pdf" target="_blank" rel="noopener" sx={{ color: COLORS.accent, fontWeight: 500 }}>
            Download printable list
          </Link>
        </Typography>
      </>
    ),
  },
  {
    q: "What should I bring?",
    a: (
      <>
        <Typography>
          Bring your food and beverages, paper products (paper towels, napkins), special pillow/blanket, toiletries (shampoo, conditioner, soap, toothpaste), liquid laundry soap, dishwasher & dish soap, garbage bags, laptop/data cable, fishing gear.
          <br />
          <Link href="/documents/WhattoBring_002.pdf" target="_blank" rel="noopener" sx={{ color: COLORS.accent, fontWeight: 500 }}>
            Download printable list
          </Link>
        </Typography>
      </>
    ),
  },
  {
    q: "What are the house rules?",
    a: (
      <ul>
        <li>Life jackets required near/on lake</li>
        <li>No smoking indoors; use butt cans outside</li>
        <li>No pets/animals, fireworks, campfires, or candles (fire hazard)</li>
        <li>No more than 16 guests (for septic)</li>
        <li>No ATVs, motorbikes, or motorboats</li>
        <li>No cutting trees or disturbing wildlife</li>
        <li>No illegal drugs, excessive alcohol, or firearms</li>
        <li>Parking only on stone driveways</li>
        <li>No littering—keep the land beautiful!</li>
      </ul>
    ),
  },
  {
    q: "Are there bugs?",
    a: (
      <Typography>
        Yes, it’s the great outdoors! Expect gnats and mosquitoes, especially in summer. We recommend bringing bug spray.
      </Typography>
    ),
  },
  {
    q: "Are pets allowed?",
    a: <Typography>No. For the comfort and safety of all guests, pets are not allowed.</Typography>
  },
  {
    q: "Are laundry facilities available?",
    a: <Typography>Yes, there is a washer & dryer. Please bring only liquid soap.</Typography>
  },
  {
    q: "Is there a TV?",
    a: <Typography>Yes, a 50-inch plasma TV with surround sound in the game room. One TV only—enjoy nature and togetherness!</Typography>
  },
  {
    q: "Is the house handicapped accessible?",
    a: <Typography>The first floor and one bedroom are accessible.</Typography>
  },
  {
    q: "How do we get the key?",
    a: (
      <Typography>
        No physical key! Before your stay, you’ll receive a 4-digit code for the front door keypad—active for your dates only.
      </Typography>
    ),
  },
  {
    q: "What safety features does the house have?",
    a: (
      <Typography>
        Fully interconnected fire/smoke alarms, sprinkler system, security keypad, and three fire extinguishers. Please locate extinguishers upon arrival.
      </Typography>
    ),
  },
  {
    q: "Do you have a game room?",
    a: (
      <Typography>
        Yes! Features a 50” TV, surround sound, pool, foosball, ping pong, chess, air hockey, and more. Great for rainy days!
      </Typography>
    ),
  },
  {
    q: "How many bathrooms?",
    a: <Typography>Four full bathrooms and one powder room.</Typography>
  },
  {
    q: "Can I keep in touch with the outside world?",
    a: (
      <Typography>
        Land phone and WiFi available. Cell service is limited—enjoy the digital detox!
      </Typography>
    ),
  },
  {
    q: "Can I swim in the lake?",
    a: (
      <Typography>
        Swimming not recommended—no beach, muddy bottom, and no lifeguard.
      </Typography>
    ),
  },
  {
    q: "Can I fish in the lake?",
    a: (
      <Typography>
        Yes, with a valid PA fishing license. Catch-and-release encouraged. Fish: perch, pickerel, catfish.
      </Typography>
    ),
  },
  {
    q: "Are boats available?",
    a: (
      <Typography>
        Yes: row boat, paddle boat, four kayaks, canoe. Bring your own small boat if desired (carry-in only, electric motors allowed, no gas). Life jackets provided.
      </Typography>
    ),
  },
  {
    q: "Can I ice skate on the lake?",
    a: (
      <Typography>
        We discourage skating—ice may not be safe.
      </Typography>
    ),
  },
  {
    q: "Can I use my ATV on the property?",
    a: (
      <Typography>
        No ATVs or off-road vehicles—the land is protected for wildlife and peace.
      </Typography>
    ),
  },
  {
    q: "Can I snowmobile on the property?",
    a: (
      <Typography>
        Yes, but only on driveway, trails, or field—stay off woods/lake and respect property lines.
      </Typography>
    ),
  },
  {
    q: "Are there hiking trails?",
    a: (
      <Typography>
        Yes, enjoy mowed trails right on the property.
      </Typography>
    ),
  },
  {
    q: "Where can I buy groceries?",
    a: (
      <Typography>
        <b>Zazzera’s</b> (Forest City, Rt 171, 13mi south), <b>Hobb’s Country Market</b> (Thompson, 3.5mi NW), <b>Weis Market</b> (Carbondale, 20mi south), <b>Schneider’s Market</b> (Susquehanna). See the Activities page for more.
      </Typography>
    ),
  },
  {
    q: "Can we have meals catered?",
    a: (
      <Typography>
        We can recommend a catering service if you’re interested.
      </Typography>
    ),
  },
  {
    q: "What do we do in an emergency?",
    a: (
      <Typography>
        Call 911. The lodge address is 3159 May Road, Thompson, PA 18465 (not marked). For non-emergencies, call (973) 521-1007.
      </Typography>
    ),
  },
  {
    q: "Is the house kid-friendly?",
    a: (
      <Typography>
        As much as any house with a lake, stairs, and hot tub—supervise young children. No child locks or safety gates provided.
      </Typography>
    ),
  },
  {
    q: "Are campfires allowed?",
    a: (
      <Typography>
        No, for fire safety. Please do not create campfires anywhere on the property.
      </Typography>
    ),
  },
  {
    q: "What is there to do in the area?",
    a: (
      <Typography>
        See our Activities page—enjoy boating, hiking, fishing, wildlife, and local attractions!
      </Typography>
    ),
  },
];

const FAQPage = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(120deg, ${COLORS.bg} 60%, ${COLORS.brown} 120%)`,
        pt: { xs: 6, md: 8 },
        pb: 10,
      }}
    >
      {/* Subtle background illustration or photo */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          opacity: 0.07,
          backgroundImage:
            "url('/images/faq-bg.jpg')", // swap to your blurred forest/lake image!
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          pointerEvents: "none",
        }}
      />
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Paper
            elevation={0}
            sx={{
              mb: 4,
              background: COLORS.card,
              borderRadius: 5,
              px: { xs: 3, md: 7 },
              py: { xs: 3, md: 5 },
              boxShadow: "0 8px 32px rgba(60,45,20,0.08)",
              textAlign: "center",
            }}
          >
            <FaLeaf size={isMobile ? 32 : 44} color={COLORS.green} style={{ marginBottom: 8 }} />
            <Typography
              variant={isMobile ? "h5" : "h4"}
              sx={{
                fontFamily: "'Playfair Display', serif",
                color: COLORS.primary,
                fontWeight: 700,
                letterSpacing: 0.5,
                mb: 0.5,
              }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: COLORS.brown,
                fontFamily: "'Lato', sans-serif",
                maxWidth: 500,
                mx: "auto",
                mb: 1.5,
              }}
            >
              All you need to know for a seamless, relaxing lakeside stay.
            </Typography>
            <Divider sx={{ my: 1, background: COLORS.gold, height: 3, borderRadius: 2, width: 56, mx: "auto" }} />
          </Paper>
        </motion.div>
        {/* FAQ Accordion */}
        <Box sx={{ mt: 2, mb: 7 }}>
          {FAQS.map(({ q, a }, i) => (
            <motion.div
              key={q}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.10 + i * 0.03 }}
            >
              <Accordion
                sx={{
                  mb: 2,
                  borderRadius: 4,
                  overflow: "hidden",
                  background: COLORS.card,
                  border: `1.5px solid ${COLORS.bg}`,
                  boxShadow: "0 4px 18px 0 rgba(100,70,30,0.04)",
                  transition: "box-shadow 0.2s",
                  "&:hover": { boxShadow: `0 6px 30px 0 ${COLORS.gold}33` },
                }}
                disableGutters
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMore
                      sx={{
                        color: COLORS.accent,
                        fontSize: isMobile ? 28 : 32,
                        transition: "transform 0.2s",
                      }}
                    />
                  }
                  aria-controls={`faq-panel-${i}-content`}
                  id={`faq-panel-${i}-header`}
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    fontSize: isMobile ? 17 : 20,
                    color: COLORS.primary,
                    px: { xs: 2, md: 3 },
                    py: { xs: 1.5, md: 2.2 },
                    letterSpacing: 0.2,
                  }}
                >
                  {q}
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: isMobile ? 15 : 17,
                    color: COLORS.green,
                    background: COLORS.bg,
                    px: { xs: 2, md: 4 },
                    pb: 2.5,
                    pt: 0,
                  }}
                >
                  {a}
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Box>
        {/* Contact/Need Help Block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <Paper
            elevation={0}
            sx={{
              mt: 6,
              py: 3,
              px: { xs: 2, md: 4 },
              background: COLORS.card,
              borderRadius: 4,
              textAlign: "center",
              boxShadow: "0 2px 10px 0 rgba(0,0,0,0.05)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Playfair Display', serif",
                color: COLORS.primary,
                mb: 1,
                fontWeight: 600,
              }}
            >
              Still have questions?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: COLORS.green,
                mb: 2,
                fontFamily: "'Lato', sans-serif"
              }}
            >
              Reach out to us anytime—our team is happy to help.
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                justifyContent: "center",
                mt: 1,
                mb: -1,
              }}
            >
              <IconButton component="a" href="tel:9735211007" sx={{ color: COLORS.primary }}>
                <FaPhoneAlt size={22} />
              </IconButton>
              <IconButton component="a" href="mailto:info@hemlockpointlodge.com" sx={{ color: COLORS.primary }}>
                <FaEnvelope size={22} />
              </IconButton>
              <IconButton component="a" href="https://maps.google.com/?q=Hemlock+Point+Lodge,+Thompson,+PA+18465" target="_blank" rel="noopener" sx={{ color: COLORS.primary }}>
                <FaMapMarkerAlt size={22} />
              </IconButton>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FAQPage;

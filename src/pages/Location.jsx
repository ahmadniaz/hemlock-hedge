import React from "react";
import { Box, Typography, Card, CardContent, Grid, Divider, Button, useTheme, Link, Paper } from "@mui/material";
import { styled } from "@mui/material";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaRoad, FaDownload } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import { FiArrowDownCircle } from "react-icons/fi";

// --- Styled Components
const Hero = styled(motion.div)`
  min-height: 380px;
  background: linear-gradient(
    120deg,
    rgba(44,71,62,0.93) 0%,
    rgba(81,115,102,0.82) 75%,
    rgba(235,229,219,0.67) 100%
  ), url('/images/lake_hero.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SunOverlay = styled(motion.div)`
  position: absolute;
  left: 0; top: 0; right: 0; bottom: 0;
  background: radial-gradient(circle at 65% 20%, rgba(255,244,203,0.28) 0%, transparent 80%);
  pointer-events: none;
`;

const ContentCard = styled(Card)`
  background: rgba(255,255,255,0.97);
  border-radius: 1.5rem;
  box-shadow: 0 8px 32px 0 rgba(51,51,51,0.11);
  overflow: hidden;
  margin-top: 0;
`;

const Section = styled(Box)`
  padding: 2.5rem 0 3.5rem 0;
  background: ${({ alt }) => alt ? "#f8f5ef" : "transparent"};
`;

const LocationIcon = styled(FaMapMarkerAlt)`
  color: #48664b;
  font-size: 2.3rem;
  margin-right: 0.5rem;
`;

const GpsIcon = styled(MdGpsFixed)`
  color: #214340;
  vertical-align: middle;
  margin-right: 4px;
  font-size: 1.3em;
`;

const Heading = styled(Typography)`
  font-family: "Playfair Display", "Times New Roman", serif;
  font-weight: 700;
  font-size: 2.4rem;
  letter-spacing: -1px;
  color: #fff;
`;

const SubHeading = styled(Typography)`
  font-family: "Playfair Display", serif;
  font-size: 1.19rem;
  color: #e9e5db;
  font-weight: 500;
`;

const GoldDivider = styled(Divider)`
  && {
    margin: 1.5rem auto 2.2rem auto;
    width: 80px;
    border-bottom-width: 3px;
    border-color: #dab873;
    border-radius: 2px;
  }
`;

const MapPaper = styled(Paper)`
  height: 230px;
  overflow: hidden;
  border-radius: 1rem;
  margin-top: 0.4rem;
  box-shadow: 0 4px 22px rgba(91, 97, 84, 0.13);
`;

// --- Animations
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: [0.4, 0.13, 0.23, 1] }
};

export default function Location() {
  return (
    <Box sx={{ bgcolor: "#f5f2eb" }}>
      {/* Hero */}
      <Hero initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <SunOverlay
          animate={{ scale: [1, 1.11, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <Box sx={{ zIndex: 2, color: "#fff", textAlign: "center", py: 8 }}>
          <Heading component="h1">
            Find Hemlock Point Lodge
          </Heading>
          <SubHeading>
            Secluded. Tranquil. Easy to Find.
          </SubHeading>
        </Box>
      </Hero>

      {/* Main Content Card */}
      <Box
        maxWidth="md"
        sx={{
          mx: "auto",
          mt: { xs: -6, sm: -8 },
          mb: 5,
          px: { xs: 1.2, sm: 3 },
          position: "relative",
          zIndex: 10,
        }}
      >
        <ContentCard elevation={4} component={motion.div} {...fadeUp}>
          <CardContent>
            <Grid container spacing={4}>
              {/* Address + Map */}
              <Grid item xs={12} md={6}>
                <Box mb={1.7} display="flex" alignItems="center">
                  <LocationIcon />
                  <Typography variant="h5" sx={{ fontFamily: "Playfair Display, serif", fontWeight: 600, color: "#48664b" }}>
                    Lodge Location
                  </Typography>
                </Box>
                <Box mb={0.8} fontSize="1.03rem" color="#42503d">
                  <GpsIcon />
                  <strong>GPS:</strong> N41°50.115' - W75°28.416'
                </Box>
                <Box mb={2.5} fontSize="1.07rem" color="#554624" lineHeight={1.5}>
                  <strong>Hemlock Point Lodge</strong><br />
                  3159 May Road<br />
                  Thompson, PA 18465
                </Box>
                <Box>
                  <Button
                    component={Link}
                    href="https://www.google.com/maps/dir//41.83396,-75.47339"
                    target="_blank"
                    rel="noopener"
                    startIcon={<FaMapMarkerAlt />}
                    size="large"
                    sx={{
                      bgcolor: "#48664b", color: "#fff", fontWeight: 600,
                      px: 3, py: 1.4, borderRadius: "1.5rem",
                      fontFamily: "Montserrat, Arial, sans-serif",
                      "&:hover": { bgcolor: "#26341c", color: "#f5e4be" }
                    }}
                  >
                    OPEN IN GOOGLE MAPS
                  </Button>
                </Box>
                {/* Small Map Preview */}
                {/* Map */}
                <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 2px 12px rgba(76,127,178,0.14)', mb: 2, mt:3 }}>
                  <iframe
                    title="Hemlock Point Lodge Map"
                    src="https://www.google.com/maps?q=Hemlock+Point+Lodge+3159+May+Road+Thompson+PA+18465&output=embed"
                    width="100%"
                    height={180}
                    style={{ border: 0, minWidth: 220 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </Box>
              </Grid>

              {/* Directions */}
              <Grid item xs={12} md={6}>
                <Box>
                  <Typography variant="h6" sx={{ fontFamily: "Playfair Display, serif", color: "#6b4b22", fontWeight: 600, mb: 0.7, display: "flex", alignItems: "center", gap: 1 }}>
                    <FaRoad style={{ color: "#dab873", marginRight: 6, fontSize: "1.4em" }} />
                    Getting Here
                  </Typography>
                  <GoldDivider />
                  {/* Directions from North */}
                  <Box mb={2.2}>
                    <Typography variant="subtitle1" sx={{ color: "#8b4828", fontWeight: 600, mb: 0.3 }}>
                      Driving Directions from the North
                      <Button
                        href="/documents/Directionsfromnorth.pdf"
                        target="_blank"
                        rel="noopener"
                        size="small"
                        variant="text"
                        startIcon={<FaDownload />}
                        sx={{
                          color: "#48664b",
                          ml: 1,
                          fontWeight: 500,
                          fontSize: "0.93rem",
                          textTransform: "none",
                          "&:hover": { color: "#dab873", bgcolor: "transparent" }
                        }}
                      >
                        PDF
                      </Button>
                    </Typography>
                    <ul style={{ color: "#5c4320", fontSize: "1.01rem", marginLeft: "1em", paddingLeft: "1.1em" }}>
                      <li>Take Route 81 South to Exit 230 (Great Bend Route 171 Exit).</li>
                      <li>At ramp, turn left onto Route 171 South. Set odometer to zero.</li>
                      <li>Susquehanna River on your right. 8.2 miles in, turn right to continue on 171 South, cross bridge.</li>
                      <li>On other side, turn left to stay on 171 South—now in Susquehanna town.</li>
                      <li>Schneider’s Grocery Store on the left for supplies.</li>
                      <li>At mile 9.7, turn right at bottom of hill, continue on 171 South.</li>
                      <li>At mile 17.5, straight through intersection (don’t turn right) in Thompson.</li>
                      <li>At mile 20.7, turn right on Wrighter Lake Road. Red barn left, driveway is immediate right.</li>
                    </ul>
                  </Box>

                  {/* Directions from South */}
                  <Box mb={1.7}>
                    <Typography variant="subtitle1" sx={{ color: "#8b4828", fontWeight: 600, mb: 0.3 }}>
                      Driving Directions from the South
                      <Button
                        href="/documents/Directionsfromsouth_000.pdf"
                        target="_blank"
                        rel="noopener"
                        size="small"
                        variant="text"
                        startIcon={<FaDownload />}
                        sx={{
                          color: "#48664b",
                          ml: 1,
                          fontWeight: 500,
                          fontSize: "0.93rem",
                          textTransform: "none",
                          "&:hover": { color: "#dab873", bgcolor: "transparent" }
                        }}
                      >
                        PDF
                      </Button>
                    </Typography>
                    <ul style={{ color: "#5c4320", fontSize: "1.01rem", marginLeft: "1em", paddingLeft: "1.1em" }}>
                      <li>Take Route 80 to Route 380 North. Then take Route 81 North.</li>
                      <li>From Route 81 North, take the second exit labeled “6 East – Carbondale”.</li>
                      <li>Continue 15.6 miles on Route 6 East, exit at Exit 7 “Bus. 6 – to Carbondale”.</li>
                      <li>Turn right on Canaan St. at the bottom of the hill, then left on Honesdale Road.</li>
                      <li>At two close stop signs, turn right at the second onto Route 171 North (military tank visible).</li>
                      <li>Cross bridge, continue 14.9 miles on Route 171 North to RT 370 East.</li>
                      <li>Turn right on RT 370 East (Crosstown Hwy), go 2.4 miles, left on Oxbow Road.</li>
                      <li>Continue 2.4 miles to Wrighter Lake Road (May Road), left again, lodge driveway is 0.25 miles on right (across from red barn).</li>
                    </ul>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </ContentCard>
      </Box>

      {/* Scenic Section: Endless Mountains */}
      <Section alt>
        <Box maxWidth="md" sx={{ mx: "auto", textAlign: "center" }}>
          <Typography variant="h6" sx={{
            fontFamily: "Playfair Display, serif", color: "#214340", fontWeight: 600,
            mb: 1, letterSpacing: "0.03em"
          }}>
            <FiArrowDownCircle style={{ color: "#dab873", verticalAlign: "middle", fontSize: "1.5em", marginRight: 7 }} />
            Nestled in the Endless Mountains of NE Pennsylvania
          </Typography>
          <Typography sx={{ color: "#5b4a2a", fontSize: "1.08rem", maxWidth: 510, mx: "auto", mb: 1.7 }}>
            Experience pure tranquility just a short, scenic drive from New York, Philadelphia, and New Jersey. Our private lakeside lodge sits at the heart of pristine forests and rolling hills—perfect for unplugging, unwinding, and connecting with nature.
          </Typography>
        </Box>
      </Section>
    </Box>
  );
}

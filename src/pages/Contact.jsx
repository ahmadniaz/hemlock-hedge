import React from 'react';
import { Box, Card, Typography, TextField, Button, Grid, useMediaQuery, Divider, Link, IconButton } from '@mui/material';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Custom styles
const themeColors = {
  bg: '#F8F7F2',         // Creamy white background
  accent: '#E3CFAA',     // Soft gold
  forest: '#33543D',     // Forest green
  blue: '#4C7FB2',       // Calm blue
  brown: '#9D7654',      // Wood brown
  white: '#FFF',
};

const AnimatedCard = motion(Card);

export default function Contact() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${themeColors.bg} 70%, ${themeColors.blue} 130%)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pb: 6,
        pt: isMobile ? 2 : 8,
        px: 2,
        position: 'relative',
      }}
    >
      {/* Animated sunlight overlay (subtle) */}
      <Box
        sx={{
          position: 'absolute', zIndex: 0, top: 0, left: 0, width: '100%', height: '280px',
          background: 'radial-gradient(circle at 70% 20%, rgba(255,239,188,0.25) 0%, transparent 80%)',
          pointerEvents: 'none',
        }}
      />
      {/* Floating leaves or water ripple SVG */}
      <Box
        sx={{
          position: 'absolute', zIndex: 0, bottom: 0, right: 0, width: 180, height: 80, opacity: 0.09,
          background: `url(/assets/leaf-ripple.svg) no-repeat right bottom / contain`,
          pointerEvents: 'none',
        }}
      />

      {/* Main Contact Card */}
      <AnimatedCard
        elevation={5}
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        sx={{
          maxWidth: 960,
          width: '100%',
          borderRadius: 6,
          boxShadow: '0 8px 32px rgba(51,84,61,0.10)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Left: Contact Form */}
        <Box sx={{
          flex: 1.1,
          bgcolor: themeColors.white,
          px: isMobile ? 2 : 4,
          py: isMobile ? 3 : 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <Typography variant="h4" component="h1" sx={{
            fontFamily: 'serif',
            color: themeColors.forest,
            mb: 1,
            fontWeight: 600,
            letterSpacing: 1,
          }}>
            Contact Us
          </Typography>
          <Typography sx={{
            fontFamily: 'serif',
            color: themeColors.brown,
            fontSize: 18,
            mb: 3,
            lineHeight: 1.5,
          }}>
            We’d love to hear from you! For questions, reservations, or event inquiries, please fill out the form below or reach us directly.
          </Typography>
          <Box
            component="form"
            method="POST"
            action="http://hemlockpointlodge.com/cgi-sys/formmail.pl"
            sx={{
              display: 'flex', flexDirection: 'column', gap: 2,
              mb: 2
            }}
          >
            {/* Hidden form fields */}
            <input type="hidden" name="recipient" value="nfahimi@yahoo.com" />
            <input type="hidden" name="subject" value="Hemlock Contact Us Request" />
            <input type="hidden" name="redirect" value="http://hemlockpointlodge.com/index.html" />
            <input type="hidden" name="required" value="email,name,phone" />

            <TextField
              label="Name"
              name="name"
              fullWidth
              variant="outlined"
              required
              InputLabelProps={{ sx: { fontFamily: 'serif' } }}
            />
            <TextField
              label="Phone"
              name="phone"
              fullWidth
              variant="outlined"
              required
              InputLabelProps={{ sx: { fontFamily: 'serif' } }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              variant="outlined"
              required
              InputLabelProps={{ sx: { fontFamily: 'serif' } }}
            />
            <TextField
              label="Questions or Comments"
              name="comments"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              InputLabelProps={{ sx: { fontFamily: 'serif' } }}
            />
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button type="submit" variant="contained"
                sx={{
                  bgcolor: themeColors.forest, color: themeColors.white,
                  fontWeight: 600, fontFamily: 'serif', px: 3, py: 1,
                  borderRadius: 2, boxShadow: '0 4px 16px rgba(77, 97, 61, 0.08)',
                  '&:hover': { bgcolor: themeColors.brown }
                }}>
                Send
              </Button>
              <Button type="reset" variant="outlined"
                sx={{
                  borderColor: themeColors.brown, color: themeColors.brown,
                  fontWeight: 600, fontFamily: 'serif', px: 3, py: 1,
                  borderRadius: 2,
                  '&:hover': { bgcolor: themeColors.accent, borderColor: themeColors.forest }
                }}>
                Reset
              </Button>
            </Box>
          </Box>
          {/* Reservation / Availability */}
          <Typography variant="subtitle1" sx={{ color: themeColors.forest, fontFamily: 'serif', mt: 2 }}>
            <span style={{ color: themeColors.brown, fontWeight: 700 }}>To Make a Reservation:</span>{' '}
            <Link href="mailto:nfahimi@yahoo.com" underline="hover" sx={{ color: themeColors.blue, fontWeight: 600 }}>
              e-mail us
            </Link>
          </Typography>
          <Typography variant="subtitle1" sx={{ color: themeColors.forest, fontFamily: 'serif', mt: 1 }}>
            <span style={{ color: themeColors.brown, fontWeight: 700 }}>Check Availability: </span>
            <Link
              href="https://www.homeaway.com/vacation-rental/p4681479#ratesAnchor"
              underline="hover"
              target="_blank"
              rel="noopener"
              sx={{ color: themeColors.blue, fontWeight: 600 }}
            >
              Click Here
            </Link>
          </Typography>
        </Box>

        {/* Right: Lodge Info & Map */}
        <Divider orientation={isMobile ? "horizontal" : "vertical"} flexItem sx={{ mx: isMobile ? 0 : 0, my: isMobile ? 2 : 0, bgcolor: themeColors.accent, borderWidth: 2 }} />
        <Box
          sx={{
            flex: 0.9,
            background: `linear-gradient(135deg, ${themeColors.accent} 60%, ${themeColors.bg} 120%)`,
            px: isMobile ? 2 : 4,
            py: isMobile ? 3 : 5,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            justifyContent: 'center',
          }}
        >
          {/* Lodge Address Block */}
          <Typography variant="h6" sx={{ fontFamily: 'serif', color: themeColors.forest, mb: 1, fontWeight: 700 }}>
            <FaMapMarkerAlt style={{ marginBottom: -4, color: themeColors.brown }} />&nbsp;Lodge Address
          </Typography>
          <Typography sx={{ fontFamily: 'serif', fontSize: 18, color: themeColors.forest, mb: 1.5 }}>
            Hemlock Point Lodge<br />
            3159 May Road<br />
            Thompson, PA 18465
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <FaPhoneAlt style={{ color: themeColors.brown, marginRight: 8 }} />
            <Typography sx={{ fontFamily: 'serif', fontSize: 17, color: themeColors.forest }}> (570) 727-3348 </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <FaEnvelope style={{ color: themeColors.brown, marginRight: 8 }} />
            <Typography sx={{ fontFamily: 'serif', fontSize: 17, color: themeColors.forest }}>
              <Link href="mailto:nfahimi@yahoo.com" underline="hover" sx={{ color: themeColors.blue }}>
                nfahimi@yahoo.com
              </Link>
            </Typography>
          </Box>

          {/* Map */}
          <Box sx={{ borderRadius: 3, overflow: 'hidden', boxShadow: '0 2px 12px rgba(76,127,178,0.14)', mb: 2 }}>
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

          {/* Social Links */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 1 }}>
            <IconButton href="https://www.facebook.com/yourlodge" target="_blank" rel="noopener" sx={{ color: themeColors.forest }}>
              <FaFacebookF size={22} />
            </IconButton>
            <IconButton href="https://www.instagram.com/yourlodge" target="_blank" rel="noopener" sx={{ color: themeColors.forest }}>
              <FaInstagram size={22} />
            </IconButton>
          </Box>
        </Box>
      </AnimatedCard>

      {/* Footer */}
      <Box sx={{ width: '100%', maxWidth: 960, mt: 5, zIndex: 1, position: 'relative' }}>
        <Divider sx={{ my: 2, bgcolor: themeColors.brown, borderWidth: 1.5 }} />
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="body2" sx={{ color: themeColors.forest, fontFamily: 'serif' }}>
              &copy; {new Date().getFullYear()} Hemlock Point Lodge
            </Typography>
          </Grid>
          <Grid item>
            <Box sx={{ display: 'flex', gap: 2, fontSize: 13 }}>
              <Link href="/termsconditions.html" sx={{ color: themeColors.forest }} underline="hover">Terms</Link>
              <span style={{ color: themeColors.brown }}>•</span>
              <Link href="/privacy.html" sx={{ color: themeColors.forest }} underline="hover">Privacy</Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

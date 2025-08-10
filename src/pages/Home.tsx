import React, { useState } from 'react';
import {
  Box,
  Container,
  Dialog,
  DialogContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import BookingWidget from '../components/common/BookingWidget';
import SEO from '../components/common/SEO';
import { LODGE_CONFIG } from '../utils/config';

interface BookingFormData {
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
}

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);

  const handleBookingClick = () => {
    setBookingDialogOpen(true);
  };

  const handleBookingSubmit = (data: BookingFormData) => {
    // TODO: Integrate with actual booking system
    setBookingDialogOpen(false);
  };

  return (
    <>
      <SEO 
        title="Home"
        description={LODGE_CONFIG.description}
        image={LODGE_CONFIG.images.hero.lake}
      />
      
      <Box sx={{ minHeight: '100vh' }}>
        {/* Hero Section */}
        <Hero onBookingClick={handleBookingClick} />

        {/* Features Section */}
        <Features />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Image Strip Section */}
        <Box
          sx={{
            py: { xs: 6, md: 8 },
            backgroundColor: 'background.default',
            overflow: 'hidden',
          }}
        >
          <Container maxWidth="xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  overflowX: 'auto',
                  scrollSnapType: 'x mandatory',
                  '&::-webkit-scrollbar': {
                    height: 8,
                  },
                  '&::-webkit-scrollbar-track': {
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    borderRadius: 4,
                  },
                  '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'secondary.main',
                    borderRadius: 4,
                  },
                }}
              >
                {[
                  '/assets/interior/interior1.jpg',
                  '/assets/kitchen/kitchen1.jpg',
                  '/assets/dining/dining1.jpg',
                  '/assets/bed/bed1.jpg',
                  '/assets/additional/exterior1.jpg',
                  '/assets/activity/activity1.jpg',
                ].map((image, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={image}
                    alt={`Lodge interior ${index + 1}`}
                    sx={{
                      width: { xs: 280, sm: 320, md: 400 },
                      height: { xs: 200, sm: 240, md: 300 },
                      objectFit: 'cover',
                      borderRadius: 2,
                      flexShrink: 0,
                      scrollSnapAlign: 'start',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                ))}
              </Box>
            </motion.div>
          </Container>
        </Box>

        {/* Booking Dialog */}
        <Dialog
          open={bookingDialogOpen}
          onClose={() => setBookingDialogOpen(false)}
          maxWidth="sm"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)',
              backdropFilter: 'blur(20px)',
            },
          }}
        >
          <DialogContent sx={{ p: 0 }}>
            <BookingWidget 
              variant="card"
              onBookingSubmit={handleBookingSubmit}
            />
          </DialogContent>
        </Dialog>

        {/* Mobile Booking FAB */}
        {isMobile && (
          <BookingWidget variant="drawer" onBookingSubmit={handleBookingSubmit} />
        )}
      </Box>
    </>
  );
};

export default Home;

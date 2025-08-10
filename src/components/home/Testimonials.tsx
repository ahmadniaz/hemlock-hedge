import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { LODGE_CONFIG } from '../../utils/config';
import Reveal from '../common/Reveal';

const Testimonials: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % LODGE_CONFIG.testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(45, 74, 54, 0.02) 0%, rgba(184, 134, 11, 0.02) 100%)',
          opacity: 0.5,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Reveal>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Playfair Display", serif',
                mb: 2,
                color: 'primary.main',
              }}
            >
              Guest Experiences
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1.125rem',
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Hear from our guests about their unforgettable stays at Hemlock Point Lodge
            </Typography>
          </Box>
        </Reveal>

        <Box
          sx={{
            maxWidth: '1200px',
            mx: 'auto',
            position: 'relative',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #B8860B 0%, #D4A574 50%, #B8860B 100%)',
                  },
                }}
              >
                <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                  <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                    {/* Testimonial image */}
                    <Box
                      sx={{
                        flexShrink: 0,
                        width: { xs: '100%', md: '300px' },
                        height: { xs: '200px', md: '300px' },
                        borderRadius: 3,
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <Box
                        component="img"
                        src={LODGE_CONFIG.testimonials[currentIndex].image}
                        alt="Lodge interior"
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(135deg, rgba(45, 74, 54, 0.1) 0%, rgba(184, 134, 11, 0.1) 100%)',
                        }}
                      />
                    </Box>

                    {/* Testimonial content */}
                    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <Box sx={{ mb: 3 }}>
                        <Rating
                          value={LODGE_CONFIG.testimonials[currentIndex].rating}
                          readOnly
                          size="large"
                          sx={{
                            '& .MuiRating-iconFilled': {
                              color: 'secondary.main',
                            },
                            '& .MuiRating-iconEmpty': {
                              color: 'rgba(184, 134, 11, 0.3)',
                            },
                          }}
                        />
                      </Box>

                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: '1rem', md: '1.1rem' },
                          lineHeight: 1.7,
                          mb: 3,
                          fontStyle: 'italic',
                          color: 'text.primary',
                          position: 'relative',
                          maxHeight: { xs: '200px', md: '300px' },
                          overflow: 'auto',
                          '&::-webkit-scrollbar': {
                            width: '6px',
                          },
                          '&::-webkit-scrollbar-track': {
                            backgroundColor: 'rgba(0,0,0,0.1)',
                            borderRadius: '3px',
                          },
                          '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'secondary.main',
                            borderRadius: '3px',
                          },
                          '&::before': {
                            content: '"""',
                            fontSize: '3rem',
                            color: 'secondary.main',
                            opacity: 0.3,
                            position: 'absolute',
                            top: -15,
                            left: -8,
                            fontFamily: '"Playfair Display", serif',
                          },
                        }}
                      >
                        {LODGE_CONFIG.testimonials[currentIndex].text}
                      </Typography>

                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Avatar
                          sx={{
                            width: 56,
                            height: 56,
                            bgcolor: 'secondary.main',
                            fontSize: '1.25rem',
                            fontWeight: 600,
                          }}
                        >
                          {LODGE_CONFIG.testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                        </Avatar>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontFamily: '"Playfair Display", serif',
                              fontWeight: 600,
                              color: 'primary.main',
                            }}
                          >
                            {LODGE_CONFIG.testimonials[currentIndex].name}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: 'text.secondary',
                              fontStyle: 'italic',
                            }}
                          >
                            {LODGE_CONFIG.testimonials[currentIndex].location}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation dots */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              mt: 4,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 1,
              }}
            >
              {LODGE_CONFIG.testimonials.map((_, index) => (
                <Box
                  key={index}
                  component="button"
                  onClick={() => handleDotClick(index)}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    border: 'none',
                    cursor: 'pointer',
                    backgroundColor: index === currentIndex ? 'secondary.main' : 'rgba(184, 134, 11, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: index === currentIndex ? 'secondary.dark' : 'rgba(184, 134, 11, 0.5)',
                      transform: 'scale(1.2)',
                    },
                  }}
                />
              ))}
            </Box>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                fontSize: '0.875rem',
                fontStyle: 'italic',
              }}
            >
              {currentIndex + 1} of {LODGE_CONFIG.testimonials.length} guest experiences
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;

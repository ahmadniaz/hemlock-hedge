import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { LODGE_CONFIG } from '../../utils/config';

interface HeroProps {
  onBookingClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookingClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const handleViewAccommodations = () => {
    navigate('/accommodations');
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${LODGE_CONFIG.images.hero.lake})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        overflow: 'hidden',
      }}
    >
      {/* Animated background overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(27, 67, 50, 0.2) 0%, rgba(139, 0, 0, 0.1) 100%)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            textAlign: 'center',
            color: 'white',
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          {/* Decorative subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="decorative"
              sx={{
                color: 'accent.main',
                mb: 2,
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              Welcome to
            </Typography>
          </motion.div>

          {/* Main title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem', lg: '4.5rem' },
                fontWeight: 700,
                mb: 3,
                textShadow: '0 4px 8px rgba(0,0,0,0.4)',
                lineHeight: 1.1,
              }}
            >
              {LODGE_CONFIG.name}
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2rem' },
                fontWeight: 400,
                mb: 4,
                textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                opacity: 0.95,
              }}
            >
              {LODGE_CONFIG.tagline}
            </Typography>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.125rem' },
                mb: 5,
                maxWidth: '600px',
                mx: 'auto',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                opacity: 0.9,
                lineHeight: 1.6,
              }}
            >
              Experience luxury and tranquility at our 4,000 sq ft lodge on 100+ acres featuring a private 15-acre lake, 
              sleeping 24 guests in complete privacy.
            </Typography>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={onBookingClick}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  background: 'linear-gradient(135deg, #8B0000 0%, #A52A2A 100%)',
                  boxShadow: '0 8px 24px rgba(139, 0, 0, 0.4)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #5D0000 0%, #8B0000 100%)',
                    boxShadow: '0 12px 32px rgba(139, 0, 0, 0.6)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Check Availability
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                onClick={handleViewAccommodations}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'accent.main',
                    backgroundColor: 'rgba(212, 165, 116, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                View Accommodations
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            width: 2,
            height: 40,
            backgroundColor: 'white',
            borderRadius: 1,
            opacity: 0.7,
          }}
        />
      </motion.div>
    </Box>
  );
};

export default Hero;

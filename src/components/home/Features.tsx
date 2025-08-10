import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Water as WaterIcon,
  Kitchen as KitchenIcon,
  Wifi as WifiIcon,
  LocalFireDepartment as FireplaceIcon,
  OutdoorGrill as GrillIcon,
  Park as HikingIcon,
  LocalParking as ParkingIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import Reveal from '../common/Reveal';
import { LODGE_CONFIG } from '../../utils/config';

const Features: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const features = [
    {
      icon: WaterIcon,
      title: 'Private Lake Access',
      description: 'Exclusive access to our pristine 15-acre private lake for swimming, fishing, and water activities.',
      color: '#4A90E2',
    },
    {
      icon: KitchenIcon,
      title: 'Fully Equipped Kitchen',
      description: 'Gourmet kitchen with premium appliances, perfect for preparing memorable family meals.',
      color: '#F5A623',
    },
    {
      icon: WifiIcon,
      title: 'WiFi & Smart TV',
      description: 'High-speed internet and entertainment systems to stay connected while enjoying nature.',
      color: '#7ED321',
    },
    {
      icon: FireplaceIcon,
      title: 'Cozy Fireplace',
      description: 'Stone fireplace in the great room, creating the perfect ambiance for evening relaxation.',
      color: '#D0021B',
    },
    {
      icon: GrillIcon,
      title: 'Outdoor Grill',
      description: 'Professional outdoor grill and dining area for al fresco meals with lake views.',
      color: '#9013FE',
    },
    {
      icon: HikingIcon,
      title: 'Fishing Equipment',
      description: 'Complete fishing gear provided for catch-and-release fishing in our private lake.',
      color: '#50E3C2',
    },
    {
      icon: HikingIcon,
      title: 'Hiking Trails',
      description: 'Private trails through 100+ acres of pristine forest and rolling meadows.',
      color: '#4A4A4A',
    },
    {
      icon: ParkingIcon,
      title: 'Ample Parking',
      description: 'Spacious parking area accommodating multiple vehicles for large groups.',
      color: '#BD10E0',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
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
              Lodge Amenities
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
              Every detail has been thoughtfully designed to provide you with the ultimate luxury lodge experience
            </Typography>
          </Box>
        </Reveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={feature.title}>
                <motion.div variants={itemVariants}>
                  <Card
                    component={motion.div}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3 }
                    }}
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        p: 3,
                        textAlign: 'center',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        component={motion.div}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2,
                          background: `linear-gradient(135deg, ${feature.color}20 0%, ${feature.color}40 100%)`,
                          border: `2px solid ${feature.color}30`,
                        }}
                      >
                        <feature.icon
                          sx={{
                            fontSize: 36,
                            color: feature.color,
                          }}
                        />
                      </Box>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: '"Playfair Display", serif',
                          fontWeight: 600,
                          mb: 1.5,
                          color: 'primary.main',
                        }}
                      >
                        {feature.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          flex: 1,
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Property stats */}
        <Reveal delay={0.5}>
          <Box
            sx={{
              mt: { xs: 8, md: 12 },
              p: 4,
              borderRadius: 3,
              background: 'linear-gradient(135deg, rgba(45, 74, 54, 0.05) 0%, rgba(184, 134, 11, 0.05) 100%)',
              border: '1px solid rgba(45, 74, 54, 0.1)',
            }}
          >
            <Grid container spacing={4} justifyContent="center">
              <Grid size={{ xs: 6, sm: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      color: 'secondary.main',
                      fontWeight: 700,
                    }}
                  >
                    {LODGE_CONFIG.property.size}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lodge Size
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      color: 'secondary.main',
                      fontWeight: 700,
                    }}
                  >
                    {LODGE_CONFIG.property.acres}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Private Acres
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      color: 'secondary.main',
                      fontWeight: 700,
                    }}
                  >
                    {LODGE_CONFIG.property.capacity}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Guest Capacity
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 6, sm: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      color: 'secondary.main',
                      fontWeight: 700,
                    }}
                  >
                    {LODGE_CONFIG.property.lakeSize}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Private Lake
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Reveal>
      </Container>
    </Box>
  );
};

export default Features;

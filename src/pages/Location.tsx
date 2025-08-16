import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  DirectionsCar,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { LODGE_CONFIG } from '../utils/config';

const Location: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Location - Hemlock Point Lodge</title>
        <meta 
          name="description" 
          content="Find Hemlock Point Lodge at 3159 May Road, Thompson, PA. Located in the beautiful Endless Mountains, just 15 minutes from Elk Lodge." 
        />
        <meta property="og:title" content="Location - Hemlock Point Lodge" />
        <meta property="og:description" content="Find Hemlock Point Lodge at 3159 May Road, Thompson, PA. Located in the beautiful Endless Mountains, just 15 minutes from Elk Lodge." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hemlockpointlodge.com/location" />
      </Helmet>
      
      <Box sx={{ pt: 8, pb: 6 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" component="h1" sx={{ mb: 4, textAlign: 'center' }}>
              Location
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 6, textAlign: 'center' }}>
              Find your way to Hemlock Point Lodge in the beautiful Endless Mountains of Pennsylvania
            </Typography>
          </motion.div>

          {/* Location Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Grid container spacing={4} sx={{ mb: 6 }}>
              {/* Address and GPS Info */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ height: '100%', backgroundColor: '#F5F5DC' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      <LocationOn sx={{ fontSize: 40, color: 'primary.main' }} />
                      <Typography variant="h4" component="h2" sx={{ color: 'primary.main' }}>
                        Lodge Address
                      </Typography>
                    </Box>
                    
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Hemlock Point Lodge
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem' }}>
                      {LODGE_CONFIG.contact.address}
                    </Typography>

                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                        GPS Coordinates
                      </Typography>
                      <Chip 
                        label={LODGE_CONFIG.contact.gpsCoordinates.formatted}
                        color="primary"
                        variant="outlined"
                        sx={{ fontSize: '1rem', p: 1 }}
                      />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Phone sx={{ color: 'primary.main' }} />
                        <Typography variant="body1">
                          {LODGE_CONFIG.contact.phone}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Email sx={{ color: 'primary.main' }} />
                        <Typography variant="body1">
                          {LODGE_CONFIG.contact.email}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              {/* Map */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Card sx={{ height: '100%', backgroundColor: '#F5F5DC' }}>
                  <CardContent sx={{ p: 0, height: '100%' }}>
                    <Box
                      sx={{
                        width: '100%',
                        height: '400px',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: 1,
                      }}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.3254515065!2d-75.47502488385612!3d41.83578106239341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c48cb28bdfb6df%3A0x99b36657b2a079cf!2sHemlock%20Point%20Lodge!5e0!3m2!1sen!2s!4v1754852290739!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Hemlock Point Lodge Location"
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </motion.div>

          {/* Nearby Attractions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card sx={{ backgroundColor: '#F5F5DC' }}>
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <DirectionsCar sx={{ fontSize: 40, color: 'primary.main' }} />
                  <Typography variant="h3" component="h2" sx={{ color: 'primary.main' }}>
                    Nearby Attractions
                  </Typography>
                </Box>
                
                <Typography variant="h5" sx={{ mb: 2, fontWeight: 600, color: 'secondary.main' }}>
                  Elk Lodge - Only 15 Minutes Away
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                  Hemlock Point Lodge is conveniently located just 15 minutes from Elk Lodge, making it the perfect base for your mountain adventures. Whether you're planning a ski trip, summer hiking, or just want to explore the beautiful Endless Mountains region, our location provides easy access to all the area has to offer.
                </Typography>
                
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  The lodge is situated in the heart of the Endless Mountains, surrounded by pristine forests, rolling hills, and the peaceful Pine Lake. This secluded location offers the perfect balance of privacy and accessibility to local attractions and activities.
                </Typography>
              </CardContent>
            </Card>
          </motion.div>

        </Container>
      </Box>
    </>
  );
};

export default Location;

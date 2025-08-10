import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import {
  LocationOn,
  Directions,
  Phone,
  Email,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { LODGE_CONFIG } from '../utils/config';

const Location: React.FC = () => {
  const drivingDirections = {
    fromNorth: {
      title: 'Driving Directions from the North',
      steps: [
        'Take Route 81 South to Exit 230. This is the Great Bend Route 171 Exit.',
        'At the end of the ramp turn left onto Route 171 South. Set trip odometer to Zero.',
        'As you are driving along, you will see the Susquehanna River on your right.',
        '8.2 miles from RT 81, turn right and continue on 171 South. You will cross a bridge over the Susquehanna River.',
        'On the other side of the bridge, turn left, continuing on 171 South. You are now in the town of Susquehanna.',
        'Notice Schneider\'s Grocery Store on the left in case you need supplies.',
        'At mile 9.7 turn right at the bottom of the hill, continuing on 171 South.',
        'At mile 17.5, continue straight through the intersection. Do not turn right on 171 South. This is the town of Thompson.',
        'At mile 20.7, turn right on Wrighter Lake Road. A quarter mile from this intersection, you will see a red barn on your left. The driveway is immediately to your right.',
      ]
    },
    fromSouth: {
      title: 'Driving Directions from the South',
      steps: [
        'These directions start from Route 80, if you are coming from a different direction, you need to take whatever route necessary to get to Route 81.',
        'From Route 80 East or West, turn onto Route 380 North. Take Route 380 North to Route 81 North.',
        'Once on Route 81 North, take the second exit to the right (which does not have an exit number) which is labeled "6 East – Carbondale". (It is the exit AFTER exit #1 - Tigue St.)',
        'Continue 15.6 miles on Route 6 East and exit left at Exit 7 which is labeled "Bus. 6 – to Carbondale".',
        'Continue 0.75 miles down to the bottom of the hill and turn right on Canaan Street.',
        'Go 0.25 mile to the stop sign and turn left on Honesdale Road (watch you speed limit thru here)',
        'Continue 0.8 mile to the bottom of the hill and you\'ll come to two stops signs about 50 feet apart.',
        'Turn right at the 2nd stop sign on Route 171 North. You\'ll see a military tank on the right at the stop sign.',
        'You\'ll immediately cross a bridge on Route 171. Continue 14.9 miles on Route 171 North to RT 370 East. (You\'ll go through the towns of Vandling, Forest City, and Union Dale on the way. You\'ll pass Stillwater Lake on the left at the 8.4 mile mark and Arlo\'s Gas/Country Store at the 14.5 mile mark.)',
        'RT 370 East will be 1/2 mile past Arlo\'s.',
        'Turn right on RT 370 East also called Crosstown Hwy and go 2.4 miles to Oxbow Road and turn left. Continue on Oxbow Road 2.4 miles to Wrighter Lake Road (also called May Road) and turn left. The driveway for Hemlock Point Lodge is 0.25 miles on the right. Turn right into the driveway which is directly across the street from a red barn. The driveway goes up through a large open field for about 200 yards then through woods. The driveway is about a half mile long.',
      ]
    }
  };



  return (
    <>
      <Helmet>
        <title>Location & Directions - Hemlock Point Lodge</title>
        <meta 
          name="description" 
          content="Find Hemlock Point Lodge at 3159 May Road, Thompson, PA. Get detailed driving directions from north and south, GPS coordinates, and local area information." 
        />
        <meta property="og:title" content="Location & Directions - Hemlock Point Lodge" />
        <meta property="og:description" content="Find Hemlock Point Lodge at 3159 May Road, Thompson, PA. Get detailed driving directions from north and south, GPS coordinates, and local area information." />
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
              Location & Directions
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
                <Card sx={{ height: '100%' }}>
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
                <Card sx={{ height: '100%' }}>
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

          {/* Driving Directions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography variant="h2" component="h2" sx={{ mb: 4, color: 'primary.main' }}>
              Driving Directions
            </Typography>
            
            <Grid container spacing={4} sx={{ mb: 6 }}>
              {/* From North */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Card>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      <Directions sx={{ fontSize: 32, color: 'primary.main' }} />
                      <Typography variant="h5" component="h3" sx={{ color: 'primary.main' }}>
                        From the North
                      </Typography>
                    </Box>
                    <List dense>
                      {drivingDirections.fromNorth.steps.map((step, index) => (
                        <ListItem key={index} sx={{ px: 0, py: 1 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <Box
                              sx={{
                                width: 24,
                                height: 24,
                                borderRadius: '50%',
                                backgroundColor: 'primary.main',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                              }}
                            >
                              {index + 1}
                            </Box>
                          </ListItemIcon>
                          <ListItemText 
                            primary={step}
                            sx={{
                              '& .MuiListItemText-primary': {
                                fontSize: '0.95rem',
                                lineHeight: 1.5,
                              }
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>

              {/* From South */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Card>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                      <Directions sx={{ fontSize: 32, color: 'primary.main' }} />
                      <Typography variant="h5" component="h3" sx={{ color: 'primary.main' }}>
                        From the South
                      </Typography>
                    </Box>
                    <List dense>
                      {drivingDirections.fromSouth.steps.map((step, index) => (
                        <ListItem key={index} sx={{ px: 0, py: 1 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <Box
                              sx={{
                                width: 24,
                                height: 24,
                                borderRadius: '50%',
                                backgroundColor: 'primary.main',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                              }}
                            >
                              {index + 1}
                            </Box>
                          </ListItemIcon>
                          <ListItemText 
                            primary={step}
                            sx={{
                              '& .MuiListItemText-primary': {
                                fontSize: '0.95rem',
                                lineHeight: 1.5,
                              }
                            }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </motion.div>


        </Container>
      </Box>
    </>
  );
};

export default Location;

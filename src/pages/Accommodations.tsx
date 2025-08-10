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
  Divider,
  Chip,
} from '@mui/material';
import {
  Bed,
  Bathtub,
  Kitchen,
  SportsEsports,
  HotTub,
  Fireplace,
  Wifi,
  Tv,
  LocalLaundryService,
  DirectionsWalk,
  Water,
  Forest,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { LODGE_CONFIG } from '../utils/config';

const Accommodations: React.FC = () => {
  const amenities = [
    { icon: Bed, text: `${LODGE_CONFIG.property.bedrooms} Bedrooms` },
    { icon: Bathtub, text: `${LODGE_CONFIG.property.bathrooms} Full Bathrooms` },
    { icon: Kitchen, text: 'Full-Service Country Kitchen' },
    { icon: SportsEsports, text: 'Game Room with Pool Table, Air Hockey, Foosball' },
    { icon: HotTub, text: 'Hot Tub' },
    { icon: Fireplace, text: 'Stone Fireplace' },
    { icon: Wifi, text: 'Internet Access' },
    { icon: Tv, text: '50" Plasma TV with Surround Sound' },
    { icon: LocalLaundryService, text: 'Washer & Dryer' },
    { icon: DirectionsWalk, text: 'Hiking Trails' },
    { icon: Water, text: 'Private Lake Access' },
    { icon: Forest, text: 'Wildlife Viewing' },
  ];

  const boats = [
    'Canoe',
    'Row Boat', 
    'Paddle Boat',
    '4 Kayaks',
  ];

  const gameRoomFeatures = [
    'Pool Table',
    'Air Hockey Table',
    'Foosball Table',
    'Dart Board',
    '50" Plasma TV with Surround Sound',
    'iPod Docking Stations in Each Bedroom',
  ];

  return (
    <>
      <Helmet>
        <title>Accommodations - Hemlock Point Lodge</title>
        <meta 
          name="description" 
          content="Discover our luxurious 4,000 sq ft Adirondack-style lodge. Sleeps 16 guests with 5 bedrooms, 4 bathrooms, game room, and stunning lake views." 
        />
        <meta property="og:title" content="Accommodations - Hemlock Point Lodge" />
        <meta property="og:description" content="Discover our luxurious 4,000 sq ft Adirondack-style lodge. Sleeps 16 guests with 5 bedrooms, 4 bathrooms, game room, and stunning lake views." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hemlockpointlodge.com/accommodations" />
      </Helmet>
      
      <Box sx={{ pt: 8, pb: 6 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h1" component="h1" sx={{ mb: 4, textAlign: 'center' }}>
              Lodge Accommodations
            </Typography>
            <Typography variant="h5" color="text.secondary" sx={{ mb: 6, textAlign: 'center' }}>
              Elegant, rustic lodge combining the feel of rustic living with elegant comfort
            </Typography>
          </motion.div>

          <Grid container spacing={6}>
            {/* Main Lodge Description */}
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h3" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
                      The Lodge
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                      Indigenous hemlocks and ferns surround the {LODGE_CONFIG.property.size} Adirondack style lodge that combines the feel of rustic living with elegant comfort. The lodge is furnished with custom-made furniture and appointments constructed with logs, sticks, twigs, and bark; with a portion of the supplies coming from the property.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                      The five bedrooms and four private baths can soothe a total of {LODGE_CONFIG.property.capacity} guests. Each bedroom has an iPod® docking station with built-in speakers.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                      A full-service country kitchen makes it easy to prepare meals while still being a part of the group. Guests can choose to nestle by the stone fireplace in the great room, or nibble on snacks in the dining room while the young at heart share some friendly competition in the game room.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Property Description */}
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h3" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
                      The Property
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                      Formerly private hunting and fishing grounds, the {LODGE_CONFIG.property.acres} acres that is home to Hemlock Point Lodge has numerous trails bordered by blueberries bushes, a hidden marshland, acres of deciduous woods, and a {LODGE_CONFIG.property.lakeSize} lake.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                      This diverse ecology is home to a variety of wildlife that shares their habitat with guests of Hemlock Point Lodge. Take the time to mingle with them, listen to their voices and treat their home with care.
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                      For those times when you can't seem to lace up your hiking boots, the large windows from the great room provide a view of the lake as if you were outside. Or brew yourself a cup of your favorite drink, grab a book and head out to the expansive back porch to enjoy the view of the lake from a rocking chair.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Amenities */}
            <Grid size={{ xs: 12 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Card>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h3" component="h2" sx={{ mb: 4, color: 'primary.main', textAlign: 'center' }}>
                      Lodge Amenities
                    </Typography>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                          Accommodations
                        </Typography>
                        <List>
                          {amenities.slice(0, 6).map((amenity, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                              <ListItemIcon sx={{ color: 'primary.main' }}>
                                <amenity.icon />
                              </ListItemIcon>
                              <ListItemText primary={amenity.text} />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                      <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                          Additional Features
                        </Typography>
                        <List>
                          {amenities.slice(6).map((amenity, index) => (
                            <ListItem key={index} sx={{ px: 0 }}>
                              <ListItemIcon sx={{ color: 'primary.main' }}>
                                <amenity.icon />
                              </ListItemIcon>
                              <ListItemText primary={amenity.text} />
                            </ListItem>
                          ))}
                        </List>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Game Room */}
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h3" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
                      Game Room
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                      The game room is tremendous with a pool table, air hockey table, foosball, dart board, and 50" plasma TV with surround sound. You can play a CD or plug in your own iPod. There is also a card table and chess table.
                    </Typography>
                    <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
                      Game Room Features:
                    </Typography>
                    <List dense>
                      {gameRoomFeatures.map((feature, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ color: 'secondary.main', minWidth: 30 }}>
                            <SportsEsports sx={{ fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>

            {/* Boating & Water Activities */}
            <Grid size={{ xs: 12, md: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h3" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
                      Water Activities
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                      You can boat and canoe on the lake in front of the lodge. The {LODGE_CONFIG.property.lakeSize} lake is exclusive to the property with no other homes or people - total tranquility at its best.
                    </Typography>
                    <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
                      Available Boats:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                      {boats.map((boat, index) => (
                        <Chip 
                          key={index} 
                          label={boat} 
                          color="primary" 
                          variant="outlined"
                          icon={<Water />}
                        />
                      ))}
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      Eight life jackets are provided for your safety.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Accommodations;

import React, { useState } from 'react';
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
  Button,
  IconButton,
  Dialog,
  DialogContent,
  useTheme,
  useMediaQuery,
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
  SportsTennis,
  Deck,
  Close,
  NavigateNext,
  NavigateBefore,
  PlayArrow,
  Pause,
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import { LODGE_CONFIG } from '../utils/config';

const Accommodations: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const amenities = [
    { icon: Bed, text: `${LODGE_CONFIG.property.bedrooms} Bedrooms`, color: '#1B4332' },
    { icon: Bathtub, text: `${LODGE_CONFIG.property.bathrooms} Full Bathrooms`, color: '#2D6A4F' },
    { icon: Kitchen, text: 'Full-Service Country Kitchen', color: '#8B0000' },
    { icon: SportsEsports, text: 'Indoor Fun and Games', color: '#A52A2A' },
    { icon: HotTub, text: 'Sauna', color: '#8B6508' },
    { icon: Fireplace, text: 'Stone Fireplace', color: '#D4A574' },
    { icon: Wifi, text: 'Internet Access', color: '#1B4332' },
    { icon: Tv, text: '60" Smart TV with Surround Sound', color: '#2D6A4F' },
    { icon: LocalLaundryService, text: 'Washer & Dryer', color: '#8B0000' },
    { icon: DirectionsWalk, text: 'Hiking Trails', color: '#A52A2A' },
    { icon: Water, text: 'Private Lake Access', color: '#8B6508' },
    { icon: Forest, text: 'Wildlife Viewing', color: '#D4A574' },
    { icon: SportsTennis, text: 'Sandy Volleyball/Badminton Court', color: '#1B4332' },
    { icon: Deck, text: 'Outdoor Living Room', color: '#2D6A4F' },
  ];

  const boats = [
    'Canoe',
    'Row Boat', 
    'Paddle Boat',
    'Several Kayaks',
  ];

  const gameRoomFeatures = [
    'Pool Table',
    'Air Hockey Table',
    'Foosball Table',
    'Chess Table',
    'Video Game Station',
    '60" Smart TV with Surround Sound',
    'Professional-Quality Ping Pong Room',
    'Card Table in Main Family Room',
  ];

  // Image galleries for different sections
  const imageGalleries = {
    lodge: [
      '/assets/interior/interior1.jpg',
      '/assets/interior/interior2.jpg',
      '/assets/interior/interior3.jpg',
      '/assets/interior/interior4.jpg',
      '/assets/interior/interior5.jpg',
      '/assets/interior/interior8.jpg',
    ],
    kitchen: [
      '/assets/kitchen/kitchen1.jpg',
      '/assets/kitchen/kitchen2.jpg',
      '/assets/kitchen/kitchen3.jpg',
      '/assets/kitchen/kitchen4.jpg',
    ],
    bedrooms: [
      '/assets/bed/bed1.jpg',
      '/assets/bed/bed2.jpg',
      '/assets/bed/bed3.jpg',
      '/assets/bed/bed4.jpg',
      '/assets/bed/bed5.jpg',
    ],
    bathrooms: [
      '/assets/washroom/bath1.jpg',
      '/assets/washroom/bath2.jpg',
      '/assets/washroom/bath3.jpg',
      '/assets/washroom/bath5.jpg',
    ],
    outdoor: [
      '/assets/additional/exterior1.jpg',
      '/assets/additional/outdoor1.jpg',
      '/assets/activity/activity1.jpg',
      '/assets/activity/activity2.jpg',
      '/assets/activity/activity3.jpg',
    ],
  };

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseDialog = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentGallery = Object.values(imageGalleries).flat();
    const currentIndex = currentGallery.indexOf(selectedImage!);
    const nextIndex = (currentIndex + 1) % currentGallery.length;
    setSelectedImage(currentGallery[nextIndex]);
  };

  const prevImage = () => {
    const currentGallery = Object.values(imageGalleries).flat();
    const currentIndex = currentGallery.indexOf(selectedImage!);
    const prevIndex = currentIndex === 0 ? currentGallery.length - 1 : currentIndex - 1;
    setSelectedImage(currentGallery[prevIndex]);
  };

  return (
    <>
      <Helmet>
        <title>Accommodations - Hemlock Point Lodge</title>
        <meta 
          name="description" 
          content="Discover our luxurious 4,000 sq ft Adirondack-style lodge. Sleeps 24 guests with 8 bedrooms, 6 bathrooms, indoor fun and games, and stunning lake views." 
        />
        <meta property="og:title" content="Accommodations - Hemlock Point Lodge" />
        <meta property="og:description" content="Discover our luxurious 4,000 sq ft Adirondack-style lodge. Sleeps 24 guests with 8 bedrooms, 6 bathrooms, indoor fun and games, and stunning lake views." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hemlockpointlodge.com/accommodations" />
      </Helmet>
      
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '70vh',
          minHeight: '500px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `linear-gradient(rgba(27, 67, 50, 0.4), rgba(139, 0, 0, 0.3)), url(${imageGalleries.lodge[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                color: 'white',
                textAlign: 'center',
                textShadow: '0 4px 8px rgba(0,0,0,0.5)',
                mb: 2,
              }}
            >
              Lodge Accommodations
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: 'white',
                textAlign: 'center',
                textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                fontFamily: '"Dancing Script", cursive',
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              Elegant, rustic lodge combining the feel of rustic living with elegant comfort
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Lodge Overview Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F5DC' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 6,
                color: 'primary.main',
                fontFamily: '"Playfair Display", serif',
              }}
            >
              The Lodge Experience
            </Typography>
            
            <Grid container spacing={6} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                    Your Private Adirondack Sanctuary
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
                    Indigenous hemlocks and ferns surround the {LODGE_CONFIG.property.size} Adirondack style lodge that combines the feel of rustic living with elegant comfort. The lodge is furnished with custom-made furniture and appointments constructed with logs, sticks, twigs, and bark; with a portion of the supplies coming from the property.
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
                    The eight bedrooms and six baths can accommodate a total of {LODGE_CONFIG.property.capacity} guests.
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                    A full-service country kitchen makes it easy to prepare meals while still being a part of the group. Guests can choose to nestle by the stone fireplace in the great room, or nibble on snacks in the dining room while the young at heart share some friendly competition in the indoor fun and games area.
                  </Typography>
                </motion.div>
              </Grid>
              
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    }}
                  >
                    <Box
                      component="img"
                      src={imageGalleries.lodge[1]}
                      alt="Lodge Interior"
                      sx={{
                        width: '100%',
                        height: { xs: 300, md: 400 },
                        objectFit: 'cover',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                      onClick={() => handleImageClick(imageGalleries.lodge[1])}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                        p: 3,
                        color: 'white',
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Main Living Area
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        Cozy stone fireplace and comfortable seating
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Amenities Grid Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 6,
                color: 'primary.main',
                fontFamily: '"Playfair Display", serif',
              }}
            >
              Lodge Amenities
            </Typography>
            
            <Grid container spacing={3}>
              {amenities.map((amenity, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={amenity.text}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        height: '100%',
                        borderRadius: 3,
                        backgroundColor: '#F5F5DC',
                        border: '1px solid rgba(212, 165, 116, 0.2)',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 12px 32px rgba(0,0,0,0.15)',
                          backgroundColor: '#E6D7C3',
                        },
                      }}
                    >
                      <CardContent sx={{ p: 3, textAlign: 'center' }}>
                        <Box
                          sx={{
                            width: 60,
                            height: 60,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mb: 2,
                            mx: 'auto',
                            backgroundColor: `${amenity.color}20`,
                            border: `2px solid ${amenity.color}30`,
                            transition: 'all 0.3s ease',
                          }}
                        >
                          <amenity.icon sx={{ fontSize: 30, color: amenity.color }} />
                        </Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                          {amenity.text}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Kitchen Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F5DC' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 6,
                color: 'primary.main',
                fontFamily: '"Playfair Display", serif',
              }}
            >
              Gourmet Kitchen
            </Typography>
            
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr' },
                    gap: 2,
                    height: '100%',
                  }}
                >
                  {imageGalleries.kitchen.slice(0, 4).map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Box
                        component="img"
                        src={image}
                        alt={`Kitchen ${index + 1}`}
                        sx={{
                          width: '100%',
                          height: { xs: 120, md: 150 },
                          objectFit: 'cover',
                          borderRadius: 2,
                          cursor: 'pointer',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                        onClick={() => handleImageClick(image)}
                      />
                    </motion.div>
                  ))}
                </Box>
              </Grid>
              
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                    Full-Service Country Kitchen
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
                    Our gourmet kitchen is fully equipped with premium appliances and everything you need to prepare memorable family meals. The spacious layout allows multiple people to cook together while still being part of the group.
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
                    Features include:
                  </Typography>
                  <List>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ color: 'primary.main', minWidth: 30 }}>
                        <Kitchen sx={{ fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText primary="Premium appliances and cookware" />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ color: 'primary.main', minWidth: 30 }}>
                        <Kitchen sx={{ fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText primary="Spacious countertops and storage" />
                    </ListItem>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon sx={{ color: 'primary.main', minWidth: 30 }}>
                        <Kitchen sx={{ fontSize: 20 }} />
                      </ListItemIcon>
                      <ListItemText primary="Dining area with lake views" />
                    </ListItem>
                  </List>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Indoor Fun and Games Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 6,
                color: 'primary.main',
                fontFamily: '"Playfair Display", serif',
              }}
            >
              Indoor Fun and Games
            </Typography>
            
            <Grid container spacing={6} alignItems="center">
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                    Entertainment for All Ages
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
                    The indoor fun and games area is tremendous with a pool table, air hockey table, foosball, chess table, video game station, and 60" smart TV with surround sound. There is also a card table in the main family room. Professional-quality ping pong room with paddles and balls.
                  </Typography>
                  
                  <Grid container spacing={2}>
                    {gameRoomFeatures.map((feature, index) => (
                      <Grid size={{ xs: 12, sm: 6 }} key={index}>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <SportsEsports sx={{ color: 'secondary.main', mr: 1, fontSize: 20 }} />
                          <Typography variant="body2">{feature}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </motion.div>
              </Grid>
              
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      borderRadius: 3,
                      overflow: 'hidden',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    }}
                  >
                    <Box
                      component="img"
                      src={imageGalleries.lodge[2]}
                      alt="Game Room"
                      sx={{
                        width: '100%',
                        height: { xs: 300, md: 400 },
                        objectFit: 'cover',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                      onClick={() => handleImageClick(imageGalleries.lodge[2])}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                        p: 3,
                        color: 'white',
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        Indoor Fun and Games
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        Pool table, air hockey, foosball, and more
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Water Activities Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#F5F5DC' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 6,
                color: 'primary.main',
                fontFamily: '"Playfair Display", serif',
              }}
            >
              Water Activities
            </Typography>
            
            <Grid container spacing={6}>
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Typography variant="h4" sx={{ mb: 3, color: 'primary.main' }}>
                    Private Lake Access
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, fontSize: '1.1rem' }}>
                    You can boat, canoe or fish on the lake in front of the lodge. The 15-acre private lake is exclusive to the property with no other homes or people - total tranquility at its best. You could also sit and relax on the bench or the beach chairs on the sandy shore of the lake.
                  </Typography>
                  
                  <Typography variant="h6" sx={{ mb: 2, color: 'secondary.main' }}>
                    Available Boats:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {boats.map((boat, index) => (
                      <Chip 
                        key={index} 
                        label={boat} 
                        color="primary" 
                        variant="outlined"
                        icon={<Water />}
                        sx={{ fontWeight: 600 }}
                      />
                    ))}
                  </Box>
                  
                  <Typography variant="h6" sx={{ mb: 2, color: 'secondary.main' }}>
                    Fishing:
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Catch and release. Bring your fishing gear for catch and release.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    In the shed you will find life jackets, and beach chairs. Adults and kids lifejackets are provided for your safety.
                  </Typography>
                </motion.div>
              </Grid>
              
              <Grid size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr' },
                      gap: 2,
                    }}
                  >
                    {imageGalleries.outdoor.slice(0, 4).map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Box
                          component="img"
                          src={image}
                          alt={`Outdoor ${index + 1}`}
                          sx={{
                            width: '100%',
                            height: { xs: 120, md: 150 },
                            objectFit: 'cover',
                            borderRadius: 2,
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.05)',
                            },
                          }}
                          onClick={() => handleImageClick(image)}
                        />
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Image Gallery Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                textAlign: 'center',
                mb: 6,
                color: 'primary.main',
                fontFamily: '"Playfair Display", serif',
              }}
            >
              Photo Gallery
            </Typography>
            
            <Grid container spacing={2}>
              {Object.values(imageGalleries).flat().slice(0, 12).map((image, index) => (
                <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      component="img"
                      src={image}
                      alt={`Gallery ${index + 1}`}
                      sx={{
                        width: '100%',
                        height: { xs: 200, md: 250 },
                        objectFit: 'cover',
                        borderRadius: 2,
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                          boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                        },
                      }}
                      onClick={() => handleImageClick(image)}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>

      {/* Image Dialog */}
      <Dialog
        open={!!selectedImage}
        onClose={handleCloseDialog}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
          },
        }}
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <Close />
          </IconButton>
          
          <IconButton
            onClick={prevImage}
            sx={{
              position: 'absolute',
              left: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <NavigateBefore />
          </IconButton>
          
          <IconButton
            onClick={nextImage}
            sx={{
              position: 'absolute',
              right: 16,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <NavigateNext />
          </IconButton>
          
          <Box
            component="img"
            src={selectedImage || ''}
            alt="Selected"
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '80vh',
              objectFit: 'contain',
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Accommodations;

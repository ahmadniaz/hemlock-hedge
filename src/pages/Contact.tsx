import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Snackbar,
  Alert,
  Fab,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Event as EventIcon,
  Map as MapIcon,
  LocationOn as LocationOnIcon,
  Directions as DirectionsIcon,
  ExpandMore as ExpandMoreIcon,
  Send as SendIcon,
  CheckCircle as CheckCircleIcon,
  Emergency as EmergencyIcon,
  LocalPhone as LocalPhoneIcon,
  AccessTime as AccessTimeIcon,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { LODGE_CONFIG } from '../utils/config';

// Form validation schema
interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  message: string;
  honeypot: string; // Hidden field for spam protection
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: '',
    honeypot: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Quick actions data
  const quickActions = [
    {
      icon: PhoneIcon,
      label: 'Call Now',
      href: `tel:${LODGE_CONFIG.contact.phone}`,
      color: '#2D4A36',
      description: 'Speak directly with us',
    },
    {
      icon: EmailIcon,
      label: 'Email Us',
      href: `mailto:${LODGE_CONFIG.contact.email}`,
      color: '#B8860B',
      description: 'Send us a message',
    },
    {
      icon: EventIcon,
      label: 'Check Availability',
      href: 'https://www.homeaway.com/vacation-rental/p4681479#ratesAnchor',
      color: '#4A6B52',
      description: 'View available dates',
    },
    {
      icon: MapIcon,
      label: 'Get Directions',
      href: `https://www.google.com/maps?q=${LODGE_CONFIG.contact.gpsCoordinates.latitude},${LODGE_CONFIG.contact.gpsCoordinates.longitude}`,
      color: '#8B6508',
      description: 'Navigate to the lodge',
    },
  ];

  // Driving directions data
  const drivingDirections = [
    {
      id: 'north',
      title: 'From the North (I-81S Exit 230)',
      icon: '🧭',
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
      ],
    },
    {
      id: 'south',
      title: 'From the South (I-81N Exit "6 East – Carbondale")',
      icon: '🧭',
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
      ],
    },
  ];

  // Emergency and useful numbers
  const emergencyNumbers = [
    {
      icon: EmergencyIcon,
      label: 'Emergency',
      number: '911',
      description: 'Police, Fire, Ambulance',
      color: '#DC3545',
    },
    {
      icon: LocalPhoneIcon,
      label: 'Lodge Phone',
      number: LODGE_CONFIG.contact.phone,
      description: 'Main lodge line',
      color: '#2D4A36',
    },
    {
      icon: AccessTimeIcon,
      label: 'Check-in/Check-out',
      number: '4:00 PM / 11:00 AM',
      description: 'Standard times',
      color: '#B8860B',
    },
  ];

  const handleInputChange = (field: keyof ContactFormData) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Check honeypot field
    if (formData.honeypot) {
      return; // Bot detected, don't submit
    }

    setIsSubmitting(true);
    
    try {
      // Here you would typically send to your API endpoint
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setShowSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '',
        message: '',
        honeypot: '',
      });
    } catch (error) {
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact & Reservations - Hemlock Point Lodge</title>
        <meta 
          name="description" 
          content="Contact Hemlock Point Lodge for reservations and inquiries. Located in the Endless Mountains of Pennsylvania. Call, email, or use our contact form for your perfect getaway." 
        />
        <meta property="og:title" content="Contact & Reservations - Hemlock Point Lodge" />
        <meta property="og:description" content="Contact Hemlock Point Lodge for reservations and inquiries. Located in the Endless Mountains of Pennsylvania." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://hemlockpointlodge.com/contact" />
        
        {/* Schema.org LocalBusiness structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Hemlock Point Lodge",
            "description": "Private Adirondack lodge on 100+ acres with private lake",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3159 May Road",
              "addressLocality": "Thompson",
              "addressRegion": "PA",
              "postalCode": "18465",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": LODGE_CONFIG.contact.gpsCoordinates.latitude,
              "longitude": LODGE_CONFIG.contact.gpsCoordinates.longitude
            },
            "telephone": LODGE_CONFIG.contact.phone,
            "email": LODGE_CONFIG.contact.email,
            "url": "https://hemlockpointlodge.com"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <Box sx={{
        backgroundImage: 'linear-gradient(rgba(45,74,54,0.6), rgba(45,74,54,0.6)), url("/assets/additional/additional1.jpg")',
        height: { xs: '30vh', md: '40vh' },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h1" 
              color="white" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                mb: 2
              }}
            >
              Contact & Reservations
            </Typography>
            <Typography 
              variant="h5" 
              color="white" 
              sx={{ 
                fontFamily: '"Dancing Script", cursive',
                fontSize: { xs: '1.5rem', md: '2rem' },
                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
              }}
            >
              We're here to help you plan the perfect retreat
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Quick Actions Grid */}
      <Container maxWidth="lg" sx={{ mt: { xs: -4, md: -6 }, position: 'relative', zIndex: 1, mb: 6 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Grid container spacing={3}>
            {quickActions.map((action, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={action.label}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card 
                    component="a"
                    href={action.href}
                    target={action.href.startsWith('http') ? '_blank' : '_self'}
                    sx={{ 
                      height: '100%',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 4,
                      }
                    }}
                  >
                    <CardContent sx={{ p: 3, textAlign: 'center' }}>
                      <Box sx={{ 
                        width: 60, 
                        height: 60, 
                        borderRadius: '50%', 
                        backgroundColor: action.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2
                      }}>
                        <action.icon sx={{ fontSize: 28, color: 'white' }} />
                      </Box>
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                        {action.label}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {action.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Contact & Reservation Form */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid size={{ xs: 12, lg: 7 }}>
              <Card sx={{ p: 4 }}>
                <Typography variant="h3" component="h2" sx={{ mb: 4, color: 'primary.main' }}>
                  Contact & Reservation Form
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                  Fill out the form below and we'll get back to you within 24 hours to confirm your reservation.
                </Typography>
                
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <Grid container spacing={3}>
                    {/* Guest Details */}
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        value={formData.name}
                        onChange={handleInputChange('name')}
                        required
                        sx={{ mb: 3 }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange('phone')}
                        required
                        sx={{ mb: 3 }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange('email')}
                        required
                        sx={{ mb: 3 }}
                      />
                    </Grid>
                    
                    {/* Stay Details */}
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        label="Check-in Date"
                        type="date"
                        value={formData.checkIn}
                        onChange={handleInputChange('checkIn')}
                        required
                        InputLabelProps={{ shrink: true }}
                        sx={{ mb: 3 }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        label="Check-out Date"
                        type="date"
                        value={formData.checkOut}
                        onChange={handleInputChange('checkOut')}
                        required
                        InputLabelProps={{ shrink: true }}
                        sx={{ mb: 3 }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <TextField
                        fullWidth
                        label="Number of Guests"
                        type="number"
                        value={formData.guests}
                        onChange={handleInputChange('guests')}
                        required
                        inputProps={{ min: 1, max: 16 }}
                        helperText="Maximum 16 guests"
                        sx={{ mb: 3 }}
                      />
                    </Grid>
                    
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Message or Special Requests"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange('message')}
                        placeholder="Tell us about your stay plans, special requests, or any questions you have..."
                        sx={{ mb: 3 }}
                      />
                    </Grid>
                    
                    {/* Honeypot field for spam protection */}
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        label="Leave this blank"
                        value={formData.honeypot}
                        onChange={handleInputChange('honeypot')}
                        sx={{ 
                          display: 'none',
                          '& .MuiInputBase-root': { display: 'none' }
                        }}
                      />
                    </Grid>
                    
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        startIcon={<SendIcon />}
                        disabled={isSubmitting}
                        sx={{ 
                          minWidth: 200,
                          py: 1.5,
                          px: 4
                        }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Grid>

            {/* Lodge Address & Map */}
            <Grid size={{ xs: 12, lg: 5 }}>
              <Card sx={{ height: '100%', p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <LocationOnIcon sx={{ fontSize: 40, color: 'primary.main' }} />
                  <Typography variant="h4" component="h3" sx={{ color: 'primary.main' }}>
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
                    sx={{ fontFamily: 'monospace' }}
                  />
                </Box>

                {/* Map */}
                <Box sx={{ 
                  height: 0, 
                  paddingTop: '56.25%', 
                  position: 'relative',
                  borderRadius: 2,
                  overflow: 'hidden',
                  mb: 3
                }}>
                  <iframe
                    title="Hemlock Point Lodge Location"
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2131.3254515065!2d-75.47502488385612!3d41.83578106239341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c48cb28bdfb6df%3A0x99b36657b2a079cf!2sHemlock%20Point%20Lodge!5e0!3m2!1sen!2s!4v1754852290739!5m2!1sen!2s`}
                    style={{ 
                      position: 'absolute', 
                      top: 0, 
                      left: 0, 
                      width: '100%', 
                      height: '100%', 
                      border: 0 
                    }}
                    loading="lazy"
                    allowFullScreen
                  />
                </Box>

                {/* Emergency Numbers */}
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Important Numbers
                </Typography>
                <Stack spacing={2}>
                  {emergencyNumbers.map((item) => (
                    <Box key={item.label} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ 
                        width: 40, 
                        height: 40, 
                        borderRadius: '50%', 
                        backgroundColor: item.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <item.icon sx={{ fontSize: 20, color: 'white' }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          {item.label}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.number}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {item.description}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Driving Directions */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Typography variant="h2" component="h2" sx={{ mb: 4, textAlign: 'center', color: 'primary.main' }}>
            Driving Directions
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4, textAlign: 'center' }}>
            Detailed directions to help you find your way to Hemlock Point Lodge
          </Typography>

          {drivingDirections.map((direction, index) => (
            <Accordion key={direction.id} sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography variant="h4">{direction.icon}</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {direction.title}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <List dense>
                  {direction.steps.map((step, stepIndex) => (
                    <ListItem key={stepIndex} sx={{ px: 0, py: 1 }}>
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
                          {stepIndex + 1}
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
              </AccordionDetails>
            </Accordion>
          ))}
        </motion.div>
      </Container>

      {/* Sticky FAB for mobile */}
      {isMobile && (
        <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}>
          <Stack spacing={2}>
            <Fab
              color="primary"
              aria-label="call"
              href={`tel:${LODGE_CONFIG.contact.phone}`}
              sx={{ 
                backgroundColor: '#2D4A36',
                '&:hover': { backgroundColor: '#1E3124' }
              }}
            >
              <PhoneIcon />
            </Fab>
            <Fab
              color="secondary"
              aria-label="email"
              href={`mailto:${LODGE_CONFIG.contact.email}`}
              sx={{ 
                backgroundColor: '#B8860B',
                '&:hover': { backgroundColor: '#8B6508' }
              }}
            >
              <EmailIcon />
            </Fab>
          </Stack>
        </Box>
      )}

      {/* Success/Error Snackbars */}
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowSuccess(false)} 
          severity="success" 
          sx={{ width: '100%' }}
          icon={<CheckCircleIcon />}
        >
          Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
        </Alert>
      </Snackbar>

      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={() => setShowError(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={() => setShowError(false)} 
          severity="error" 
          sx={{ width: '100%' }}
        >
          Sorry, there was an error sending your message. Please try again or call us directly.
        </Alert>
      </Snackbar>
    </>
  );
};

export default Contact;

import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Facebook,
  Instagram,
  Twitter,
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';
import { LODGE_CONFIG } from '../../utils/config';

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', path: '/' },
        { text: 'Accommodations', path: '/accommodations' },
        { text: 'Activities', path: '/activities' },
        { text: 'Gallery', path: '/gallery' },
        { text: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Contact Info',
      links: [
        { text: LODGE_CONFIG.contact.phone, icon: Phone, href: `tel:${LODGE_CONFIG.contact.phone}` },
        { text: LODGE_CONFIG.contact.email, icon: Email, href: `mailto:${LODGE_CONFIG.contact.email}` },
        { text: LODGE_CONFIG.contact.address, icon: LocationOn, href: undefined },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Lodge Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 700,
                mb: 2,
              }}
            >
              Hemlock Point Lodge
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 3, 
                opacity: 0.9,
                lineHeight: 1.7,
                fontSize: '1rem',
              }}
            >
              Experience luxury and tranquility at our 4,000 sq ft lodge on 100+ acres featuring a private 15-acre lake, 
              sleeping 24 guests in complete privacy.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  <social.icon />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={section.title}>
              <Typography
                variant="h6"
                component="h3"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 600,
                  mb: 2,
                }}
              >
                {section.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                {section.links.map((link) => (
                  <Box component="li" key={link.text} sx={{ mb: 1 }}>
                    {'path' in link ? (
                      <Link
                        component={RouterLink}
                        to={link.path}
                        sx={{
                          color: 'white',
                          opacity: 0.9,
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          '&:hover': {
                            opacity: 1,
                            color: 'secondary.main',
                          },
                        }}
                      >
                        {link.text}
                      </Link>
                    ) : (
                      <Link
                        component="a"
                        href={link.href}
                        sx={{
                          color: 'white',
                          opacity: 0.9,
                          textDecoration: 'none',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          '&:hover': {
                            opacity: 1,
                            color: 'secondary.main',
                          },
                        }}
                      >
                        {link.icon && <link.icon fontSize="small" />}
                        {link.text}
                      </Link>
                    )}
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Bottom Footer */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'center' : 'center',
            gap: isMobile ? 2 : 0,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {currentYear} Hemlock Point Lodge. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Link
              href="/privacy"
              sx={{
                color: 'white',
                opacity: 0.8,
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': { opacity: 1 },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              sx={{
                color: 'white',
                opacity: 0.8,
                textDecoration: 'none',
                fontSize: '0.875rem',
                '&:hover': { opacity: 1 },
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

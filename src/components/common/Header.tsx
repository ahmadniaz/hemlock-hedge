import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Container,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const { scrollY } = useScroll();

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'Accommodations', path: '/accommodations' },
    { text: 'Activities', path: '/activities' },
    { text: 'Gallery', path: '/gallery' },
    { text: 'Location', path: '/location' },
    { text: 'FAQ', path: '/faq' },
    { text: 'Contact', path: '/contact' },
  ];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path: string) => location.pathname === path;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', py: 2 }}>
      <Typography
        variant="h6"
        component="div"
        sx={{ 
          fontFamily: '"Playfair Display", serif',
          color: 'primary.main',
          fontWeight: 700,
          mb: 3,
        }}
      >
        Hemlock Point Lodge
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            key={item.text} 
            component={Link} 
            to={item.path}
            sx={{
              py: 1.5,
              '&:hover': {
                backgroundColor: 'rgba(45, 74, 54, 0.05)',
              },
            }}
          >
            <ListItemText
              primary={item.text}
              sx={{
                textAlign: 'center',
                color: isActive(item.path) ? 'secondary.main' : 'text.primary',
                fontWeight: isActive(item.path) ? 600 : 400,
                '& .MuiTypography-root': {
                  fontSize: '1.1rem',
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 8 : 0}
        sx={{
          backgroundColor: scrolled 
            ? 'rgba(255, 255, 255, 0.98)' 
            : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          borderBottom: scrolled ? '1px solid rgba(45, 74, 54, 0.1)' : 'none',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ px: { xs: 0 } }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  flexGrow: 1,
                  fontFamily: '"Playfair Display", serif',
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              >
                Hemlock Point Lodge
              </Typography>
            </motion.div>

            {isMobile ? (
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ ml: 'auto' }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ ml: 'auto', display: 'flex', gap: 1 }}>
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Button
                      component={Link}
                      to={item.path}
                      sx={{
                        color: isActive(item.path) ? 'secondary.main' : 'text.primary',
                        fontWeight: isActive(item.path) ? 600 : 400,
                        position: 'relative',
                        '&:hover': {
                          color: 'secondary.main',
                          backgroundColor: 'transparent',
                        },
                        '&::after': isActive(item.path) ? {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: '60%',
                          height: '2px',
                          backgroundColor: 'secondary.main',
                          borderRadius: '1px',
                        } : {},
                      }}
                    >
                      {item.text}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: 280,
              backgroundColor: 'background.paper',
              borderRight: '1px solid rgba(45, 74, 54, 0.1)',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Toolbar spacer to prevent content from hiding behind fixed AppBar */}
      <Toolbar />
    </>
  );
};

export default Header;

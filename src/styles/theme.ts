import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1B4332', // Dark Forest Green
      light: '#2D6A4F',
      dark: '#081C15',
    },
    secondary: {
      main: '#8B0000', // Burgundy
      light: '#A52A2A',
      dark: '#5D0000',
    },
    accent: {
      main: '#D4A574', // Warm Beige
      light: '#E6C9A3',
      dark: '#B8945A',
    },
    background: {
      default: '#F5F5DC', // Beige background
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C2C2C',
      secondary: '#6B6B6B',
    },
    success: {
      main: '#2D6A4F', // Green
      light: '#40916C',
      dark: '#1B4332',
    },
    warning: {
      main: '#D4A574', // Beige
      light: '#E6C9A3',
      dark: '#B8945A',
    },
    info: {
      main: '#8B0000', // Burgundy
      light: '#A52A2A',
      dark: '#5D0000',
    },
  },
  typography: {
    fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
      fontSize: '4rem', // 64px
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2.75rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2rem', // 32px
      lineHeight: 1.4,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 400,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1rem',
    },
    decorative: {
      fontFamily: '"Dancing Script", cursive',
      fontSize: '2rem', // 32px
      fontWeight: 600,
      lineHeight: 1.2,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 32px',
          fontSize: '1.1rem',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'scale(1.03)',
          },
        },
        contained: {
          boxShadow: '0 4px 14px 0 rgba(27, 67, 50, 0.39)',
          '&:hover': {
            boxShadow: '0 6px 20px 0 rgba(27, 67, 50, 0.49)',
          },
        },
        outlined: {
          borderWidth: '2px',
          '&:hover': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 24px 0 rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontWeight: 600,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          transition: 'all 0.3s ease',
        },
      },
    },
  },
});

// Extend the theme type to include our custom properties
declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
  }
  interface TypographyVariants {
    decorative: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    decorative?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    decorative: true;
  }
}

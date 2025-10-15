// Theme configuration for Yashoda IVF Website
const theme = {
  // Color Palette
  colors: {
    // Primary Colors
    pink: {
      primary: '#FF69B4', // hot pink - used for headers, buttons, accents
      secondary: '#FFB6D9', // lighter pink for backgrounds, cards
      light: '#FFF0F7', // very light pink for section backgrounds
    },
    orange: {
      coral: '#FF6347', // used in footer and some accents
    },
    blue: {
      navy: '#1E3A8A', // dark blue text for "YASHODA IVF"
      social: {
        facebook: '#1877F2',
      },
    },
    black: '#000000', // primary body text
    gray: {
      text: '#4A5568', // secondary text
    },
    white: '#FFFFFF', // backgrounds, cards
    // Accent Colors
    social: {
      facebook: '#1877F2',
      instagramStart: '#E4405F',
      instagramEnd: '#FCAF45',
      whatsapp: '#25D366',
      youtube: '#FF0000',
    },
  },

  // Typography
  typography: {
    fontFamily: 'Inter, Poppins, sans-serif',
    sizes: {
      h1: {
        mobile: '2rem',
        desktop: '3.5rem',
      },
      h2: {
        mobile: '1.75rem',
        desktop: '2.5rem',
      },
      h3: {
        mobile: '1.25rem',
        desktop: '1.5rem',
      },
      body: {
        large: {
          mobile: '1.125rem',
          desktop: '1.25rem',
        },
        regular: '1rem',
        small: '0.875rem',
      },
    },
    weights: {
      bold: 700, // headings, CTAs
      semibold: 600, // subheadings
      regular: 400, // body text
    },
  },

  // Spacing System
  spacing: {
    section: {
      vertical: {
        mobile: '40px',
        desktop: '80px',
      },
      horizontal: {
        mobile: '20px',
        desktop: '40px',
      },
    },
    card: {
      mobile: '16px',
      desktop: '24px',
    },
    grid: {
      gap: {
        mobile: '16px',
        desktop: '24px',
      },
    },
  },

  // Breakpoints
  breakpoints: {
    mobile: '640px',
    tablet: '1024px',
    desktop: '1024px', // > 1024px
  },

  // Border Radius
  borderRadius: {
    sm: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 2px 8px rgba(0,0,0,0.08)',
    md: '0 4px 12px rgba(255, 105, 180, 0.3)',
    lg: '0 8px 24px rgba(0,0,0,0.1)',
  },

  // Transitions
  transitions: {
    default: 'all 0.3s ease',
    hover: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
};

export default theme;
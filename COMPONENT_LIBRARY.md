# Yashoda IVF Component Library

This is a comprehensive design system and reusable component library for the Yashoda IVF website.

## Color Palette

### Primary Colors
- **Pink Primary**: `#FF69B4` (hot pink - used for headers, buttons, accents)
- **Pink Secondary**: `#FFB6D9` (lighter pink for backgrounds, cards)
- **Pink Light**: `#FFF0F7` (very light pink for section backgrounds)
- **Orange/Coral**: `#FF6347` (used in footer and some accents)

### Secondary Colors
- **Navy Blue**: `#1E3A8A` (dark blue text for "YASHODA IVF")
- **Black Text**: `#000000` (primary body text)
- **Gray Text**: `#4A5568` (secondary text)
- **White**: `#FFFFFF` (backgrounds, cards)

### Accent Colors
- **Social Media Blue (Facebook)**: `#1877F2`
- **Social Media Pink (Instagram gradient)**: `#E4405F` to `#FCAF45`
- **WhatsApp Green**: `#25D366`
- **YouTube Red**: `#FF0000`

## Typography

### Font Family
- **Primary**: Inter, Poppins, or similar modern sans-serif fonts

### Font Sizes (Mobile-First)
- **H1 Hero**: 2rem (mobile), 3.5rem (desktop)
- **H2 Section Headers**: 1.75rem (mobile), 2.5rem (desktop)
- **H3 Card Titles**: 1.25rem (mobile), 1.5rem (desktop)
- **Body Large**: 1.125rem (mobile), 1.25rem (desktop)
- **Body Regular**: 1rem
- **Body Small**: 0.875rem

### Font Weights
- **Bold**: 700 (headings, CTAs)
- **Semibold**: 600 (subheadings)
- **Regular**: 400 (body text)

## Core Components

### Layout Components
1. **TopBar** - Fixed top bar with social media icons and phone numbers
2. **Header/Navbar** - Main navigation with dropdowns and appointment button
3. **Footer** - Multi-column footer with contact info and links

### UI Components
1. **Buttons** - Primary, secondary, and tertiary variants
2. **Cards** - Doctor, blog, and testimonial cards
3. **Stats Counter** - Animated statistics section
4. **Form** - Contact/appointment form with validation
5. **Icons** - Social media and utility icons
6. **Fixed Social Media Sidebar** - Right-side social media panel
7. **Floating Contact Button** - Bottom-right contact button

## Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Spacing System
- **Container Max-Width**: 1280px centered
- **Grid Gaps**: 16px (mobile), 24px (desktop)
- **Section Padding Vertical**: 40px (mobile), 80px (desktop)
- **Section Padding Horizontal**: 20px (mobile), 40px (desktop)
- **Card Padding**: 16px (mobile), 24px (desktop)

## Animations & Transitions
- **Button hover**: transition: all 0.3s ease
- **Card hover**: transition: transform 0.3s ease, box-shadow 0.3s ease
- **Dropdown menus**: Smooth slide-down animation
- **Scroll animations**: Fade-in and slide-up for sections

## Accessibility
- Proper ARIA labels for navigation and buttons
- Focus states for keyboard navigation (pink outline)
- Alt text for all images
- Sufficient color contrast ratios

## Component Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── TopBar.jsx
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── DoctorCard.jsx
│       ├── BlogCard.jsx
│       ├── TestimonialCard.jsx
│       ├── StatsCounter.jsx
│       ├── Form.jsx
│       ├── Icon.jsx
│       ├── FixedSocialSidebar.jsx
│       └── FloatingContactButton.jsx
├── styles/
│   └── theme.js
└── pages/
    └── ComponentDemo.jsx
```

## Usage

To view all components in action, navigate to `/component-demo` in your browser.

Each component is fully responsive and follows the design system guidelines.
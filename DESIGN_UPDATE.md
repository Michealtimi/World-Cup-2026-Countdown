# World Cup 2026 Design Update

## Overview
The World Cup 2026 Countdown Hub has been completely redesigned with a modern, professional aesthetic featuring a dynamic hero background, classic flip-card countdown timer, and enhanced user experience.

## Major Changes

### 1. **Hero Section** 
- Full-width hero background image with dark overlay
- Classic World Cup branding with bold typography
- Hero text: "World Cup 2026 / 48 Teams • 3 Nations • Infinite Possibilities / June 11 – July 19, 2026"
- Background image: `/public/worldcup-2026-hero.jpg`

### 2. **Countdown Timer Redesign**
- **Style**: Classic flip-card design with black tiles and white text
- **Format**: Three-digit days + two-digit hours, minutes, seconds
- **Animation**: 3D flip transitions when values change
- **Colors**: Black backgrounds, white text, pink accent labels
- **Labels**: "Days", "Hours", "Minutes", "Seconds" in pink text below each card
- **Responsive**: Adjusts size on mobile (sm: 16x20px), tablet (md: 24x32px)

### 3. **Ticket Phase Card**
- Replaced banner with prominent card-based status display
- Shows "Random Selection Draw CLOSED" with alert icon
- Displays next phase: "April 2026 Last-Minute Sales"
- Includes helpful messaging about ticket availability
- Centered on page for maximum visibility

### 4. **Navigation Bar**
- **Fixed navbar** at top of page with semi-transparent backdrop blur
- **Branding**: World Cup 2026 logo and text
- **FAQ Button**: Prominent button with question mark icon
- **Responsive**: Text hidden on mobile, showing only icon
- **Styling**: Dark gradient background with hover effects

### 5. **FAQ Modal**
- **Trigger**: Click FAQ button in navbar to open modal
- **Display**: Full-screen modal with overlay
- **Accordion**: All 6 FAQ items in expandable accordion format
- **Smooth animations**: Content expands/collapses with transitions
- **Close button**: X button in top-right corner
- **Mobile-friendly**: Full viewport height with scrolling for overflow

### 6. **Color Theme Updates**
Updated `globals.css` with new color palette:
- **Primary**: Dark slate (0.2 for dark background, 0.95 for light)
- **Accent**: Orange/amber (oklch(0.65 0.2 40)) for vibrant highlights
- **Neutrals**: Black, white, and slate grays for structure
- **Dark mode**: Properly inverted colors for OLED displays

### 7. **Layout Structure**
1. **Navbar** - Fixed navigation with FAQ button
2. **Hero Section** - Full-screen background image with overlay and title
3. **Countdown** - Dark section with flip-card timer display
4. **Ticket Phase Card** - White/dark card with status and next steps
5. **FAQ Section** - Light background with accordion FAQ items
6. **AdSense Placeholder** - Sidebar ad space
7. **Footer** - Links and copyright information

## New Components

### `components/countdown-timer.tsx`
- Classic flip-card design with 3D animations
- Calculates time until June 11, 2026
- Fully responsive layout
- Client-side rendered with Framer Motion

### `components/ticket-phase-card.tsx`
- Card-based ticket status display
- Shows current phase and next phase information
- Uses Lucide React icons (AlertCircle, CheckCircle2, Clock)
- Animates in on page load

### `components/navbar.tsx`
- Fixed positioning navbar with backdrop blur
- FAQ button that opens modal
- Responsive design with hamburger breakpoints
- Logo with emoji and title

### `components/faq-modal.tsx`
- Modal overlay with FAQ accordion
- Smooth animations for expand/collapse
- All 6 FAQ items with detailed answers
- Close button and click-outside close functionality

## Files Modified

- `app/page.tsx` - Complete redesign with new layout and components
- `app/layout.tsx` - Enhanced metadata (already had good SEO)
- `components/countdown-timer.tsx` - Redesigned for flip-card style
- `app/globals.css` - Updated color tokens for new theme
- `package.json` - Added framer-motion dependency

## Files Created

- `components/ticket-phase-card.tsx` - New card component
- `components/navbar.tsx` - New navigation component
- `components/faq-modal.tsx` - New FAQ modal component
- `public/worldcup-2026-hero.jpg` - Hero background image

## Styling Highlights

### Typography
- Headings: Bold, uppercase where appropriate
- Body text: 16px base with proper line-height
- Labels: Pink accent color (oklch(0.65 0.2 40))

### Spacing
- Responsive padding using Tailwind scale
- Gap utilities for component spacing
- Mobile-first approach with sm: and md: breakpoints

### Effects
- Backdrop blur on navbar and modals
- Drop shadows on text over backgrounds
- Smooth transitions and animations
- Dark mode support throughout

## Browser Support
- Modern browsers with CSS Grid and Flexbox
- CSS custom properties (CSS Variables) for theming
- Framer Motion for smooth animations
- Lucide React for consistent iconography

## Performance Considerations
- Image optimization via Next.js Image component recommendations
- Client components only where needed (countdown, navbar, modal)
- Lazy loading for below-fold content with Framer Motion viewport detection
- Efficient animations using GPU acceleration

## Future Enhancements
- Add more detailed stadium information cards
- Team roster and stats sections
- Live match score updates
- Social media integration
- Newsletter signup modal
- Multi-language support

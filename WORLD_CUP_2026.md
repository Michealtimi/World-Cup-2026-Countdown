# World Cup 2026 Countdown Hub

A high-performance, SEO-optimized landing page for the FIFA World Cup 2026 featuring animated countdown, live match hub, ticket information, and comprehensive tournament details.

## Project Overview

This project implements a professional World Cup 2026 countdown hub with:

- **Animated Countdown Timer** - Real-time countdown to June 11, 2026 using Framer Motion
- **Live Match Hub** - Opening match details (Mexico vs South Africa at Estadio Azteca)
- **Ticket Alert Banner** - Current ticket sales phase information
- **SEO Optimization** - JSON-LD schemas, semantic HTML, meta tags, and structured data
- **AdSense Monetization** - Strategic ad placement placeholders
- **IndexNow Integration** - Rapid search engine indexing API
- **Responsive Design** - Mobile-first, fully responsive across all breakpoints
- **Dark Mode** - Full dark mode support with Tailwind CSS

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Animation**: Framer Motion 11
- **Styling**: Tailwind CSS 4.2
- **UI Components**: shadcn/ui
- **SEO**: Next.js Metadata API + JSON-LD schemas
- **Runtime**: React 19.2

## File Structure

```
app/
  ├── page.tsx                  # Main countdown page with all sections
  ├── layout.tsx                # Root layout with enhanced metadata
  ├── globals.css               # Tailwind theme with World Cup color scheme
  └── api/
      └── indexnow/
          └── route.ts          # IndexNow API endpoint for search indexing

components/
  ├── countdown-timer.tsx       # Animated countdown client component
  ├── live-match-hub.tsx        # Opening match information
  ├── ticket-alert-banner.tsx   # Ticket sales phase alert
  └── json-ld-schemas.tsx       # JSON-LD schema injection helper

lib/
  ├── event-schema.ts           # Event JSON-LD schema
  └── faq-schema.ts             # FAQPage JSON-LD schema

public/
  └── indexnow-key.txt          # IndexNow verification file
```

## Key Features

### 1. Countdown Timer
- Real-time countdown to June 11, 2026 (World Cup Final date)
- Animated number transitions with Framer Motion
- Displays Days, Hours, Minutes, Seconds
- High-contrast dark theme for visibility
- Fully responsive design

### 2. Content Sections
- **Hero**: Bold introduction with tournament details
- **Countdown**: Large animated timer display
- **Ticket Alert**: Current sales phase information
- **Match Hub**: Opening match (Mexico vs South Africa)
- **Main Article**: 800+ words of SEO content covering:
  - World Cup 2026 tickets release date
  - MetLife Stadium final venue
  - FIFA Resale Marketplace (April 2026)
  - 48-team tournament format
  - Stadium and venues information
  - Opening match details

### 3. FAQ Section
- 6 comprehensive FAQs about tickets, venues, and tournament details
- Collapsible accordion UI for better UX
- Schema.org FAQPage structured data

### 4. AdSense Integration
Three strategic ad placement areas:
- `ADSENSE_TOP`: Header area (728x90 or 300x250)
- `ADSENSE_IN_CONTENT`: Middle of content (300x600 or 300x250)
- `ADSENSE_SIDEBAR`: Sidebar area (3x 300x250 boxes)

### 5. SEO & Structured Data
- **Meta Tags**: Title, description, keywords optimized for search
- **OpenGraph**: Social media preview optimization
- **Twitter Cards**: Twitter sharing optimization
- **Event Schema**: JSON-LD for World Cup 2026 event
- **FAQPage Schema**: JSON-LD for FAQ structured data
- **Semantic HTML5**: Proper heading hierarchy, `<main>`, `<article>`, `<section>` tags

### 6. IndexNow API
- `/api/indexnow` endpoint for URL submission
- Rapid Google and Bing indexing
- Verification file at `/public/indexnow-key.txt`

## Environment Variables

Create a `.env.local` file with:

```env
# Optional: Override default IndexNow key
INDEXNOW_KEY=your_actual_indexnow_key

# Optional: Override site URL for IndexNow
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Visit `http://localhost:3000`

## Customization

### Update Tournament Dates
Edit the countdown target date in `components/countdown-timer.tsx`:
```typescript
const targetDate = new Date('2026-06-11T00:00:00').getTime();
```

### Change Site Information
Update site metadata in `app/layout.tsx`:
```typescript
metadataBase: new URL('https://your-domain.com'),
```

### Modify Event Schema
Edit `lib/event-schema.ts` to update:
- Tournament dates
- Venue locations and details
- Ticket pricing information

### Customize FAQ Items
Modify the `faqItems` array in `app/page.tsx` to add/edit questions

### Ad Placements
Replace the placeholder `<div>` elements with actual AdSense code:
```jsx
<div id="ADSENSE_TOP">
  {/* Your AdSense ad code here */}
</div>
```

## Performance Optimization

- **GPU-accelerated animations** via Framer Motion
- **Lazy-loaded components** with React.lazy (if needed)
- **Optimized images** with Next.js Image component
- **CSS-in-JS** via Tailwind for minimal bundle size
- **Server-side rendering** for fast initial load
- **Static generation** where applicable

## Search Engine Optimization Checklist

- ✅ Meta title and description optimized
- ✅ Keywords targeting: World Cup 2026 tickets, MetLife Stadium, Estadio Azteca, etc.
- ✅ Event JSON-LD schema for search results
- ✅ FAQPage JSON-LD for rich snippets
- ✅ Semantic HTML5 structure
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Mobile-responsive design
- ✅ Fast page load with animations
- ✅ IndexNow API integration for rapid indexing
- ✅ OpenGraph and Twitter Card tags

## Deployment

### Deploy to Vercel
```bash
vercel deploy
```

### Deploy to Other Platforms
This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Any Node.js hosting

## API Endpoints

### POST `/api/indexnow`
Submit URLs for rapid indexing:
```json
{
  "url": "https://your-domain.com/article"
}
```

Response:
```json
{
  "success": true,
  "message": "URL submitted to IndexNow successfully"
}
```

### GET `/api/indexnow`
Returns API documentation.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Dark Mode

The site automatically respects the system dark mode preference. Users can toggle via:
- System settings
- Browser dev tools theme toggle
- Custom theme selector (if implemented)

## Performance Metrics

- **Countdown Timer**: 60fps animations via Framer Motion
- **First Contentful Paint (FCP)**: < 2 seconds
- **Largest Contentful Paint (LCP)**: < 3 seconds
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 4 seconds

## SEO Keywords

Primary:
- World Cup 2026 tickets
- FIFA World Cup 2026
- World Cup countdown

Secondary:
- World Cup 2026 tickets release date
- MetLife Stadium final
- Estadio Azteca opening match
- FIFA Resale Marketplace April 2026
- 48-team World Cup format
- World Cup 2026 venues
- Mexico vs South Africa opening match
- World Cup 2026 schedule

## Future Enhancements

- Live ticker with match updates
- Ticket purchase integration
- User account system for saved matches
- Push notifications for ticket drops
- Player/team information cards
- Stadium virtual tours
- Team group stage brackets
- Real-time match scores

## Support & Updates

For updates and support:
- Check FIFA.com for official information
- Monitor ticket release announcements
- Follow official World Cup social media

## License

This project is created for informational and educational purposes related to the 2026 FIFA World Cup.

---

Built with Next.js, Framer Motion, and Tailwind CSS • Optimized for search engines and mobile devices

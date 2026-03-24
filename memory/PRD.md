# Primo Pools Website — PRD

## Original Problem Statement
Build the Primo Pools website based on the attached logo images and markdown design document (primo-pools--developer-onboarding--technical-design-document.md). Using the Primo Pools logo as reference for design direction.

## User Choices
- AI Quote Assistant: Yes, include (Claude AI via Emergent LLM key)
- Pool Visualiser: Basic version (tile/color selector with static pool SVG preview)
- Content: Luxury-grade realistic copy written by agent
- Pages: Home, Portfolio, Services, Visualiser, Contact

## Architecture

### Tech Stack
- **Frontend**: React 18 (CRA) + Tailwind CSS + Framer Motion ready
- **Backend**: FastAPI + Motor (async MongoDB)
- **AI**: Claude claude-4-sonnet-20250514 via emergentintegrations
- **Database**: MongoDB (local)

### App Structure
```
/app/frontend/          # React CRA on port 3000
  src/
    pages/             # Home, Portfolio, Services, Visualiser, Contact
    components/        # Navigation, Hero, ServicesPreview, PortfolioPreview,
                       # HomeContent, Footer, ChatBot, Reveal
/app/backend/
  server.py            # FastAPI with /api/health, /api/contact, /api/chat
  .env                 # MONGO_URL, DB_NAME, EMERGENT_LLM_KEY
```

## Business Details
- **Company**: Primo Pools
- **Location**: 35 Mannion Way, Kardinya WA 6163
- **Phone**: (08) 9331 8998 / 0488 040 150
- **Email**: hello@primopools.com.au
- **ABN**: 82 703 745 225

## Design System
- Background: #08090E (very dark navy)
- Gold: #C9A44A (primary accent)
- Gold Light: #E8D4A0
- Cream: #F8F4EE (light sections)
- Font: Cormorant Garamond (serif, headings) + Inter (body)

## Core Requirements (Static)
1. ✅ Hero: "Crafted Water. Perfected Stone." cinematic hero
2. ✅ Portfolio: 9 projects, category filters (All/Tiling/Renovation/Mosaics/Stone)
3. ✅ Services: 4 service rows + 6 tile materials
4. ✅ Pool Visualiser: 4 shapes × 8 tiles = 32 combinations, live SVG preview
5. ✅ Contact Form: Validation + MongoDB storage
6. ✅ AI Quote Assistant: Claude-powered floating chat widget
7. ✅ Navigation: Transparent → dark blur on scroll

## What's Been Implemented (Feb 2026)
- **2026-02-24**: Full MVP built from scratch
  - Complete 5-page website (Home, Portfolio, Services, Visualiser, Contact)
  - Dark luxury design matching Primo Pools brand identity
  - Claude AI chat assistant (Alex) with pool tiling expertise
  - Interactive SVG pool visualiser with 8 tile options
  - Contact form with MongoDB storage
  - Scroll reveal animations (IntersectionObserver)
  - Fully responsive mobile design

## API Endpoints
| Endpoint | Method | Description |
|----------|--------|-------------|
| /api/health | GET | Health check |
| /api/contact | POST | Store consultation request |
| /api/chat | POST | Claude AI chat (pool tiling consultant) |

## Prioritized Backlog

### P0 (Critical)
- None - MVP complete

### P1 (High Priority)
- Hero: replace with premium infinity pool sunset image
- Admin dashboard: view submitted consultation requests
- Email notifications when contact form submitted

### P2 (Medium Priority)
- Google Analytics integration
- Before/after slider for renovation portfolio items
- SEO optimization (meta tags, sitemap)
- Loading skeleton states
- Error boundary component

### Future / Nice to Have
- Real customer testimonials with photos
- Virtual tour / 3D pool walkthrough
- Tile sample request form
- Blog/news section
- Customer portal (existing at /app/client)

## Testing Status
- Backend: 100% (5/5 tests passed)
- Frontend: 100% - all core features verified
- AI Chat: Working with Claude claude-4-sonnet-20250514
- Contact Form: Storing to MongoDB correctly

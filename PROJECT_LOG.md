# Portfolio Website — Project Log

## Overview
Personal portfolio website for Aditya Jiddu, Senior Product Owner. Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build tools.

---

## What Was Built

### Pages
| File | Purpose |
|------|---------|
| `index.html` | Main landing page — hero, key achievements, experience, subscribe |
| `portfolio.html` | PRD document cards with in-page PDF viewer |
| `contact.html` | Phone and email contact cards |
| `amadeus.html` | Amadeus Labs experience detail (Jun 2023 – Aug 2025) |
| `infosys.html` | Infosys / TalkTalk UK detail (May 2021 – Jun 2023) |
| `tcs-vodacom.html` | TCS / Vodacom South Africa detail (Aug 2018 – Dec 2020) |
| `tcs-openreach.html` | TCS / Openreach UK detail (Jul 2015 – Jul 2018) |

### Supporting Files
- `styles.css` — single shared stylesheet for all pages
- `photo.jpg` — profile photo
- `resume.pdf` — CV (exported from DOCX via Pages/AppleScript)
- `PRD - Group 7 (1).pdf` — portfolio document
- `Group7_Team_Thala_NoSheeet_PRD_v2.docx.pdf` — portfolio document
- `PRD_Peak Guardian - Team Thala.docx.pdf` — portfolio document

---

## Features Built

### 1. Hero Section
- Full-width layout: name + bio on the left, circular profile photo on the right
- DM Serif Display for headings, DM Sans for body text
- Tagline with left accent border, animated divider line
- Top amber accent bar (`border-top: 3px solid var(--accent)`)

### 2. Site Navigation
- Consistent nav across all pages: Home · My Portfolio · Contact | LinkedIn · Resume
- Active page underline indicator using CSS `::after` pseudo-element
- `margin-left: -14px` trick to align first nav item with page content
- Separator rendered as a 1px CSS line (not a `·` character) for equal spacing

### 3. Key Achievements
- 3 cards: €4M+ (Amadeus), 1.9M+ (TalkTalk), €5.4M+ (Vodacom)
- Large serif numbers in accent gold, stacked vertically on desktop
- Placed side by side with Experience section in a 2-column grid

### 4. Experience Timeline
- 4 entries: Amadeus Labs, Infosys/TalkTalk, TCS/Vodacom, TCS/Openreach
- Vertical layout with a left-edge accent line and dot indicators
- Each card links to its full detail page
- Hover: card lifts with accent gradient background, dot scales up

### 5. Experience Detail Pages (×4)
- Consistent structure: About the Role, Key Contributions, Impact stats, Skills
- Shared site nav and Resume modal — no "back" button, full navigation everywhere
- Impact stats displayed as accent-tinted stat cards

### 6. Portfolio Page
- 3 PRD document cards with file icon, type badge, title, description
- Clicking any card opens the PDF in a full-screen modal viewer
- Separate Resume modal also accessible via nav

### 7. Contact Page
- Phone card with copy-to-clipboard button
- Email card with copy-to-clipboard button
- LinkedIn card removed (LinkedIn accessible via nav)

### 8. Email Gate
- Full-screen dark overlay shown to first-time visitors
- Visitor enters email → saved to Supabase `subscribers` table
- Duplicate or error: visitor is always let through (never blocked)
- `localStorage` key `portfolio_unlocked` skips gate for returning visitors
- Synchronous script in `<head>` adds `.gate-skip` class before render — prevents flash
- Fade + scale exit animation on unlock

### 9. Subscribe Form ("Stay in the loop")
- Below the experience section on the homepage
- Saves to same Supabase `subscribers` table
- Handles: success, already subscribed, error states

### 10. Resume Modal
- PDF viewer modal on every page via `<embed>`
- Opens on "Resume" nav click, closes on ✕, backdrop click, or Escape key

### 11. Supabase Integration
- Project: `https://gtcrseahjnznilnzkscv.supabase.co`
- Table: `subscribers` (id, email, created_at) — RLS enabled, anon inserts allowed
- CDN: `https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2`

---

## Design System

### Colour Tokens
| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#F7F3EE` | Page background (warm off-white) |
| `--surface` | `#FFFFFF` | Card backgrounds |
| `--ink` | `#1C1917` | Primary text |
| `--ink-muted` | `#6B6560` | Secondary / label text |
| `--accent` | `#B07D3A` | Gold — buttons, numbers, dots, underlines |
| `--accent-soft` | `#F0DFC0` | Light gold — tags, hover backgrounds |
| `--border` | `#E8DDD0` | Card borders, dividers |
| `--shadow` | `rgba(28,25,23,0.10)` | Subtle drop shadows |

### Typography
- **Headings / numbers:** DM Serif Display
- **Body / UI:** DM Sans
- Hero name: `clamp(44px, 6vw, 64px)`, letter-spacing `-0.03em`
- Achievement numbers: `48px` desktop / `36px` mobile

### Layout
- Max content width: `1040px`, centred
- Desktop padding: `64px` horizontal
- Mobile padding: `24px` horizontal
- `.home-columns` — `1fr 1fr` grid (achievements + experience side by side)
- Breakpoint: `768px`

---

## Layout Changes History

| Change | Details |
|--------|---------|
| Initial card design | Removed — replaced with unified full-page layout |
| Photo position | Moved from above nav to right column aligned with name |
| Vertical timeline | Replaced with horizontal scrolling timeline |
| Horizontal timeline | Replaced with vertical timeline (when placed side-by-side with achievements) |
| Achievements + Experience | Moved into `.home-columns` 2-column side-by-side grid |
| Dark achievements background | Removed — reverted to white surface cards |
| LinkedIn contact card | Removed from contact.html (still in nav) |

---

## Mobile Fixes Applied

| Issue | Fix |
|-------|-----|
| Nav overflow / horizontal scroll | `flex-wrap: wrap`, separator hidden on mobile |
| Contact buttons < 44px | `padding: 12px 18px`, `min-height: 44px` |
| "View Document" button < 44px | `padding: 12px 0`, `min-height: 44px`, flex alignment |
| Modal close button 32px | Increased to `40px` on mobile |
| Achievement cards cramped in 2-col | Padding reduced, number font-size `36px` |
| Subscribe button borderline | `padding: 14px 22px`, `min-height: 44px` |

---

## Custom Slash Commands
Located in `.claude/commands/`:
- `/improve` — reviews and applies 3 visual/design improvements
- `/add-section` — guides adding a new section matching the design language
- `/mobile-check` — audits and fixes mobile responsiveness issues

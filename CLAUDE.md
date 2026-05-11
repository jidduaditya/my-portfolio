# My Portfolio

## What this is
A personal portfolio website. Built with plain HTML, CSS, and vanilla JavaScript only. No frameworks, no React, no Tailwind, no build tools.

## Design guidelines
- Clean, minimal, modern aesthetic
- Professional but warm and personal
- Generous whitespace -- nothing should feel cramped
- Fully responsive -- must look great on both mobile and desktop
- Cohesive color palette -- no random colors
- Sans-serif typography
- Subtle animations and transitions to add polish

## Tech constraints
- Plain HTML + CSS + vanilla JavaScript ONLY
- No frameworks, no libraries (Supabase JS client loaded via CDN is the only dependency)
- No npm, no build steps, no bundlers
- The site must work by simply opening index.html in a browser

## File structure
- index.html -- main page (hero, key achievements, experience, subscribe form, email gate)
- portfolio.html -- PRD document cards with in-page PDF viewer modal + resume modal
- contact.html -- phone + email cards with copy-to-clipboard + resume modal
- amadeus.html -- Amadeus Labs experience detail page (Jun 2023 – Aug 2025)
- infosys.html -- Infosys / TalkTalk detail page (May 2021 – Jun 2023)
- tcs-vodacom.html -- TCS / Vodacom SA detail page (Aug 2018 – Dec 2020)
- independent.html -- Independent product work detail page (Aug 2025 – Present)
- tcs-openreach.html -- TCS / Openreach UK detail page (Jul 2015 – Jul 2018)
- styles.css -- all styles (single shared stylesheet, ~1300 lines)
- photo.jpg -- profile photo
- resume.pdf -- CV exported from DOCX via Pages
- PRD - Group 7 (1).pdf -- portfolio document
- Group7_Team_Thala_NoSheeet_PRD_v2.docx.pdf -- portfolio document
- PRD_Peak Guardian - Team Thala.docx.pdf -- portfolio document

## About me
- Name: Aditya Jiddu
- Introduction: I am a Senior Product Owner with 10+ years of experience delivering enterprise SaaS, platform, and internal products across airline, telecom, and digital commerce domains.

## Supabase integration
- Project URL: https://gtcrseahjnznilnzkscv.supabase.co
- Anon key: sb_publishable_hotdf8Nax3QZwY0kTYv5Iw_Yb2wJHT8
- Table: `subscribers` (id, email, created_at) — RLS enabled, anon inserts allowed
- CDN: https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2

## Email gate
- index.html shows a full-screen gate before the portfolio
- Visitor must enter email to unlock — saved to `subscribers` table
- On error or duplicate email, visitor is still let through (never blocked)
- localStorage key `portfolio_unlocked` = '1' skips the gate for returning visitors
- The early-skip check runs synchronously in `<head>` via a class on `<html>` to avoid flash
- A second subscribe form ("Stay in the loop") also exists below the experience timeline

## Nav structure (all pages)
- Links: Home · My Portfolio · Contact | separator | LinkedIn (external) · Resume
- `.site-nav` — `margin-left: -14px` to align first link with content; links have `padding: 0 14px`
- `.nav-sep` — 1px CSS vertical line (font-size: 0 hides the `·` char), hidden on mobile
- "Resume" link opens an in-page PDF modal (`#resume-modal`) on every page

## Layout architecture
- `body` has `border-top: 3px solid var(--accent)` as a top accent bar
- `.hero-outer` — max-width 1040px, padding 56px 64px 64px, contains nav + hero content
- `.hero-content` — CSS grid `1fr 220px`, text left / photo right
- `.home-columns` — CSS grid `1fr 1fr`, puts Key Achievements and Experience side by side
- `.achievements-grid` — single column (1fr) on desktop stacking 3 cards vertically
- `.timeline-v` — vertical experience timeline with absolute-positioned dots and a left-edge line
- `.timeline-h-body` — shared card style used by both horizontal and vertical timeline items
- All detail pages share the same nav structure (`.hero-outer` > `.site-nav`)
- `footer` — centred, `padding: 28px 40px`, accent-coloured "care" word

## PDF / Resume modals
- `.modal-overlay` — fixed fullscreen, opacity fade + scale transition, closed by default
- `.modal-box` — white card with close button (`✕`) top-right
- `.pdf-embed` — fills modal via `<embed>` tag; `src` cleared after close animation (300ms delay)
- `#pdf-modal` — used on portfolio.html; src set dynamically from `data-pdf` attribute on card
- `#resume-modal` — present on portfolio.html and contact.html; shows resume.pdf inline
- Escape key closes all modals; clicking the overlay backdrop also closes

## Portfolio page
- `.portfolio-grid` — responsive grid of `.doc-card` elements
- Each card has: SVG doc icon, `.doc-type` badge, title, description, "View Document →" button
- Clicking anywhere on the card opens the PDF modal
- Three documents: Group 7 PRD, NoSheeet PRD v2, Peak Guardian PRD

## Contact page
- `.contact-grid` — two-column grid (phone + email)
- Each `.contact-card` has icon, label, value, and a copy-to-clipboard button
- Copy button shows "Copied!" for 2 seconds then resets; uses `navigator.clipboard.writeText`

## CSS design tokens
- `--bg: #F7F3EE` (warm off-white page background)
- `--surface: #FFFFFF` (card backgrounds)
- `--ink: #1C1917` (primary text)
- `--ink-muted: #6B6560` (secondary text)
- `--accent: #B07D3A` (gold/amber — buttons, numbers, dots, underlines)
- `--accent-soft: #F0DFC0` (light accent for tags, hover gradients)
- `--border: #E8DDD0` (card borders, dividers)
- Fonts: DM Sans (body) + DM Serif Display (headings, numbers)

## Mobile behaviour (breakpoint: 768px)
- Nav wraps to two lines; separator hidden
- `.home-columns` collapses to single column
- `.achievements-grid` becomes 2 columns
- Avatar moves above text (order: -1)
- Contact, portfolio grids become single column
- Subscribe form stacks vertically
- All interactive elements meet 44px minimum touch target

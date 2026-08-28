# IKUBARI Academy — Website

## 1. Project Description
IKUBARI Academy is a purpose-driven academy for young people aged 10–30. The website communicates "Building the Next Generation" — equipping young people with the skills and mindset to thrive in a changing world through hands-on training in media and technology.

Brand identity: geometric forms, bold typography, deep navy foundation with electric blue, coral, and golden yellow accents. Tagline: "Creativity is Architecture."

Brand colours: `#0E0F44` (navy), `#00A7EA` (electric blue), `#EF4726` (coral), `#FBAD18` (golden yellow).

## 2. Page Structure
- `/` — Home (hero, promise, who it's for, development tracks, core skills, creative mind, three pillars, learning experience, progression, facilitators, partnership ecosystem, impact, CTA)
- `/about` — About (vision, mission, problem → solution → pillars → tracks → purpose)
- `/programs` — Programmes (3 development tracks)
- `/skills` — Skills (6 core skill tracks + interactive training matrix)
- `/learning-experience` — The Learning Experience (discover → think → design → create → share + delivery model)
- `/partner` — Partners (partnership categories)
- `/contact` — Contact (enquiry form)

## 3. Development Tracks
- Summer Development Track (10–16) — Discovery → Curiosity → Confidence
- Youth Development Track (17–22) — Exploration → Skill Building → Awareness
- Young Professionals Development Track (21–30) — Mastery → Application → Employment

## 4. Core Skill Tracks
1. Digital Media & Content Creation
2. Technology & Digital Innovation
3. Digital Marketing & Communication
4. Leadership & Personal Development
5. Creative Entrepreneurship & Future of Work
6. Human Skills & Wellbeing

Each track displays Focus, Core Skills and Outcome.

## 5. Training Pillars
- Hard Skills — Building Competence
- Soft Skills — Shaping Character
- Human Skills — Inspiring Purpose

## 6. Delivery Model
Theory → Practice → Mentorship → Projects → Showcase

Hybrid delivery: Onsite Learning Hubs, Ikubari Online, Partner Institutions.

## 7. Partnership Categories
Corporate Partners, Academic Institutions, Technology Partners, NGOs & Development Agencies, Government & Ministries, Alumni Network.

## 8. Core Features
- Geometric visual system with squares, circles, triangles, grids, angular intersections
- Sticky header with scroll behaviour (transparent → solid)
- Interactive development track selector
- Interactive training matrix (accordion on mobile)
- Creative Mind brand section (deep navy, large typography, geometric forms)
- Contact form with honeypot anti-spam protection
- Mobile-responsive hamburger menu
- Subtle entrance animations

## 9. Data Model Design
No database required. All content is static, sourced from a shared content module (`src/content/academy.ts`). No fabricated testimonials, partners, events, contact details or staff profiles are displayed.

## 10. Backend / Third-party Integration Plan
- Database: not needed — static site with no persistent data
- Forms: Readdy form integration for the contact enquiry
- No third-party integrations required beyond the existing form handler

## 11. Content Integrity
- Age ranges limited to 10–16, 17–22, 21–30 (no 6–12, 13–17, 18–25, 13–40)
- No fictional testimonials, partners, events, statistics, staff or contact details
- No internal strategic roadmap published
- Contact details pending verified information from the Academy

## 12. Development Phase Plan

### Phase 1: Design System & Home Page
- Deliverable: tailwind config, CSS, index.html, Header, Footer, Home page with all sections

### Phase 2: About + Programmes + Skills Pages
- Deliverable: About page, Programmes page (3 tracks), Skills page (6 tracks + matrix)

### Phase 3: Learning Experience + Partners + Contact
- Deliverable: Learning Experience page, Partners page, Contact page

### Phase 4: Routing Polish, QA
- Deliverable: final routing, QA pass
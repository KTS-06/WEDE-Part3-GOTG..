# WEDE-Part3-GOTG..
Gift of the Givers Foundation — Part 3 Web Application Implementation

An enterprise-grade, responsive web platform developed for the Gift of the Givers Foundation. Built in alignment with the Independent Institute of Education (IIE) 2026 Part 3 Web Development assessment requirements.

                                               Executive Summary & Navigation Overview

The platform consists of a fully integrated single-page multi-view architecture:

index.html (Home): Hero banner, real-time key metrics, and an interactive image lightbox gallery.

about.html (About Us): Organizational history, mission statement, and interactive accordion FAQ for governance and Section 18A tax information.

services.html (Services): Dynamic operational division catalog with live keyword search and category filtering.

enquiry.html (Sponsorship & Volunteer Portal): Interactive financial impact estimator for corporate donors and validated registration forms for field specialists.

contact.html (Contact & Dispatch): Geolocation mapping using Leaflet.js and a client-side mailto compiler.

persona.html (User Personas): UX design documentation highlighting core user profiles.

                                                 Target User Personas

To ensure user-centered architectural planning, all features and workflows were mapped to two core target personas:

1. Corporate Sponsor / Donor Persona

Name: Sarah Jenkins

Role: Corporate Social Responsibility (CSR) Director at Enterprise Logistics.

Goal: Allocate company CSR budgets to accredited NGOs with verifiable tax-deductible benefits (Section 18A certification).

Needs: Instant financial impact estimators for relief interventions (boreholes, food packs, surgical units), Section 18A tax clarity, and audited governance transparency.

Target Features: Interactive Sponsorship Calculator on enquiry.html, Section 18A verification tags, and FAQ accordions on about.html.

2. Emergency Field Volunteer / Rescue Specialist

Name: David Ndlovu

Role: Emergency Paramedic & Search and Rescue Field Specialist.

Goal: Register qualifications rapidly during active regional or international disaster deployments.

Needs: 24/7 hotline visibility, direct dispatch center mapping, rapid volunteer registration workflows, and mobile-first responsiveness.

Target Features: Interactive Leaflet.js map on contact.html, sticky emergency header bar, and volunteer submission engine on enquiry.html.

                                           Key Features & Technical Specifications

1. Advanced JavaScript & Dynamic Interactivity

Interactive Geolocation Map (contact.html): Renders operational dispatch hubs (Pietermaritzburg HQ & Gauteng Hub) using Leaflet.js with custom popup overlays.

Lightbox Operational Gallery (index.html): Clickable operational photos expand into a high-resolution, full-screen modal view with image captions.

Accordion FAQs (about.html): Dynamic CSS/JS smooth height collapsible accordions to explore organizational governance and tax details without cluttering the screen.

Live Search & Category Filter (services.html): Real-time text search and dropdown filtering across all operational divisions in DOM memory.

Dynamic Impact Estimator (enquiry.html): Real-time calculation engine that estimates project costs and automatic Section 18A tax savings as input parameters change.

2. Search Engine Optimization (SEO) & Web Accessibility

On-Page SEO: Configured metadata (<title>, <meta description>, <meta keywords>), canonical tags, Open Graph meta tags (og:title, og:description), and semantic structure (<header>, <main>, <article>, <footer>).

Structured Data: Embedded Schema.org NGO JSON-LD data for Google Knowledge Graph integration.

Crawler Compliance: Built-in modal viewers for robots.txt and sitemap.xml.

 Detailed Changelog (Part 3 Updates & Part 2 Feedback Edits)

🔹 Edits Made Based on Part 2 Feedback

Navigation & Mobile Responsiveness: Updated top header navigation to include active page highlighting and improved horizontal touch scrolling for mobile displays.

Form Validation Enhancements: Enhanced regex pattern checks on telephone fields (^[0-9+\s-]{10,15}$), minimum length restrictions on textarea inputs, and clear mandatory indicators.

Visual Hierarchy & Typography: Refined spacing, shadow depths, rounded card corner radiuses, and color contrast ratios to satisfy WCAG AA accessibility criteria.

🔹 New Part 3 Implementations

Added persona.html: Created dedicated visual documentation showcasing Sarah Jenkins (CSR Director) and David Ndlovu (Field Specialist).

Integrated Leaflet.js Mapping (contact.html): Added open-source map tiles with custom markers for primary dispatch hubs.

Created Operational Lightbox Modal (index.html): Implemented click-to-expand image preview modal for field documentation photographs.

Created FAQ Accordion System (about.html): Built interactive toggle controls with animated chevrons.

Implemented Live Search & Filter Engine (services.html & script.js): Engineered dynamic JS grid filtering based on user text query and selected dropdown category.

Built Impact Cost Calculator (enquiry.html): Integrated real-time client-side calculation for boreholes, food parcels, and medical packages with tax deduction estimations.

SEO Files Integration: Integrated viewable sitemap.xml and robots.txt schema models accessible directly from the global footer.

                                                       References & Academic Citations

Gift of the Givers Foundation. 2026. Official Humanitarian Portal and Mission Overview. Available at: https://giftofthegivers.org/ [Accessed 28 October 2026].

Leaflet JS. 2026. An Open-Source JavaScript Library for Mobile-Friendly Interactive Maps. Available at: https://leafletjs.com/ [Accessed 28 October 2026].

South African Revenue Service (SARS). 2026. Section 18A Public Benefit Organisation Tax Exemption Guidelines. Pretoria: SARS.

Tailwind CSS. 2026. Utility-First CSS Framework Documentation. Available at: https://tailwindcss.com/ [Accessed 28 October 2026].

World Wide Web Consortium (W3C). 2026. Web Content Accessibility Guidelines (WCAG) 2.2. Available at: https://www.w3.org/TR/WCAG22/ [Accessed 28 October 2026].

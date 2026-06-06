---
name: Jawhara Bakery
description: Dark, image-led bakery identity with restrained gold accents for a bilingual Chichaoua brochure site.
colors:
  kiln-black: "#000000"
  blackened-crust: "#030303"
  oven-charcoal: "#0C0C0C"
  logo-black: "#090909"
  jawhara-gold: "#E6C47E"
  fresh-cream: "#FAF7F2"
  stone-date: "#A19A93"
  dim-border: "#2A241A"
typography:
  display:
    fontFamily: "Playfair Display, Amiri, serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Playfair Display, Amiri, serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Playfair Display, Amiri, serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0"
  label:
    fontFamily: "Plus Jakarta Sans, Inter, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.16em"
rounded:
  none: "0px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section-y: "96px"
components:
  button-primary:
    backgroundColor: "{colors.jawhara-gold}"
    textColor: "{colors.kiln-black}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
  button-secondary:
    backgroundColor: "{colors.kiln-black}"
    textColor: "{colors.jawhara-gold}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 32px"
  panel:
    backgroundColor: "{colors.oven-charcoal}"
    textColor: "{colors.fresh-cream}"
    rounded: "{rounded.none}"
    padding: "32px"
  badge-gold:
    backgroundColor: "{colors.jawhara-gold}"
    textColor: "{colors.kiln-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "4px 10px"
---

# Design System: Jawhara Bakery

## 1. Overview

**Creative North Star: "The Chichaoua Gold Counter"**

Jawhara's visual system should feel like standing at a dark bakery counter while warm display-case light catches fresh bread, Moroccan sweets, and celebration cakes. The page is image-led, high-contrast, and deliberately local: the food carries appetite, the gold carries trust, and the black surfaces keep the experience premium without becoming theatrical.

The system is sharp and restrained. Panels are mostly rectangular, borders are thin, glow is rare, and gold is used as a small signal rather than a wash over the whole page. Arabic is the primary reading mode, so generous line height, clear hierarchy, and native RTL rhythm matter as much as visual atmosphere.

The system rejects the PRODUCT.md anti-references directly: no generic AI-generated landing page, no luxury template disconnected from a real local bakery, no inflated ecommerce brand, no vague hype, no fake urgency, no unsupported "best in town" language, no fake review wording, no placeholder business details, no checkout, no payments, no accounts, no analytics dashboards, and no CMS-shaped UI.

**Key Characteristics:**
- Full-bleed food imagery with black gradient overlays for legibility.
- Near-black page sections with thin gold dividers and borders.
- Gold accents reserved for CTAs, trust marks, prices, stars, icons, and section ornaments.
- Sharp card geometry, pill action buttons, and small uppercase labels.
- Subtle motion that supports appetite, scanning, and confidence.

## 2. Colors

The palette is a dark bakery counter with one warm metallic accent and two readable text tones.

### Primary
- **Jawhara Gold:** Primary action and trust color. Use it for WhatsApp CTAs, rating stars, icons, progress bars, active gallery filters, price labels, and the smallest brand marks.

### Secondary
- **Fresh Cream:** Main light text and contrast partner. Use it for headings, important labels, button hover states, and copy that must stay readable over dark or photographic backgrounds.

### Neutral
- **Kiln Black:** Global page base and hero edge color. It should feel like a real black, not a blue-gray app shell.
- **Blackened Crust:** Deep section background for gallery and CTA areas where the page needs a slight shift from pure black.
- **Oven Charcoal:** Primary panel and card surface. Use it for product cards, review cards, contact panels, and modal bodies.
- **Logo Black:** Tokenized dark surface used by the Tailwind theme as `gold-cream`. Keep the name behavior in code, but in design language treat it as a black surface.
- **Stone Date:** Muted body and secondary detail text. It should carry quiet information, never primary conversion copy.
- **Dim Border:** Thin warm border approximation for `gold-accent/10` to `gold-accent/20` strokes.

### Named Rules

**The Gold Ration Rule.** Jawhara Gold must stay rare. On a normal section it should occupy less than 10% of the visible surface, so the CTA and trust marks keep their value.

**The Black Is Black Rule.** Backgrounds must stay near black. Do not drift into navy, purple, brown, espresso, beige, or a one-note tan bakery palette.

**The Food Before Ornament Rule.** If a section has a strong product image, the image wins. Gold patterns, lines, and glows must stay secondary.

## 3. Typography

**Display Font:** Playfair Display with Amiri fallback for Arabic.
**Body Font:** Plus Jakarta Sans with Inter and system fallbacks.
**Label/Mono Font:** Plus Jakarta Sans for labels. Monospace appears only for phone-style or metric-style numeric details.

**Character:** The pairing is formal but local: a high-contrast serif for bakery pride and craft, balanced by a clear sans for navigation, labels, prices, and operational details. Arabic copy needs Amiri's calligraphic warmth without losing the structured premium layout.

### Hierarchy
- **Display** (400, clamp(3rem, 8vw, 6rem), 1.08): Hero headline only. Keep tracking no tighter than -0.025em and never exceed a 6rem maximum.
- **Headline** (700, clamp(2rem, 4vw, 3rem), 1.12): Section titles such as products, story, reviews, and contact.
- **Title** (700, 1.125rem, 1.25): Product names, contact labels, review names, and card headings.
- **Body** (400, 1rem, 1.7): Product descriptions, story copy, occasion copy, and legal text. Keep long prose at 65-75ch maximum.
- **Label** (700, 0.6875rem, 0.16em): Short navigation, badges, filters, CTAs, metadata, and rating labels. Use uppercase only for short French labels or compact system labels.

### Named Rules

**The Arabic First Rule.** Every type decision must work in RTL before it is considered finished. Avoid cramped tracking, oversized hero lines, and narrow containers that make Arabic feel forced into a French layout.

**The Short Caps Rule.** Uppercase tracking is allowed only for short labels, never sentence-length body copy.

## 4. Elevation

This system uses tonal layering first and shadow second. Depth comes from black section shifts, thin gold borders, photographic overlays, and occasional `shadow-2xl` on panels that need to sit above the dark page. Shadows should feel like ambient darkness around a bakery counter, not floating SaaS cards.

### Shadow Vocabulary
- **Text Legibility Shadow** (`text-shadow: 0 4px 20px rgba(0, 0, 0, 0.9)`): Use only on hero or image-overlaid text.
- **Gold Text Glow** (`text-shadow: 0 0 10px rgba(230, 196, 126, 0.35)`): Use sparingly for gold highlights that need a warm glint.
- **Panel Depth** (`box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)`): Tailwind `shadow-2xl`, allowed on large panels and product cards against near-black backgrounds.
- **CTA Lift** (`box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)`): Tailwind `shadow-lg`, allowed for gold action buttons.

### Named Rules

**The Rectangular Counter Rule.** Cards and panels are square-edged by default. Use pill radius for actions and small circular icon wells only.

**The No Ghost Card Rule.** Do not combine decorative 1px borders with wide bright shadows. Use dark ambient depth, thin gold borders, or hover border changes.

## 5. Components

### Buttons

Buttons are direct contact tools. Their tone is confident and operational, not decorative.

- **Shape:** Pill for primary conversion actions (`999px`). Rectangular only for compact mobile drawer actions or utility controls.
- **Primary:** Jawhara Gold background with black text, bold sans label, uppercase for French, generous horizontal padding (`14px 32px` or `16px 32px`).
- **Hover / Focus:** Primary buttons may turn Fresh Cream on hover. Focus must use a visible gold or cream outline. Active state can scale down slightly (`scale(0.95)`).
- **Secondary / Ghost:** Transparent or black fill, thin gold or cream border, gold or cream text, same typography as primary.

### Chips

Chips are gallery filters and small category selectors.

- **Style:** Pill shape, compact uppercase label, gold fill for selected state, black fill with thin gold border for unselected state.
- **State:** Selected state must be unmistakable: Jawhara Gold background and black text. Hover can brighten the border or add a quiet white tint.

### Cards / Containers

Cards feel like dark display trays, not soft app modules.

- **Corner Style:** Sharp rectangular corners (`0px`).
- **Background:** Oven Charcoal or near-black with optional low-opacity backdrop blur.
- **Shadow Strategy:** Use Panel Depth only for real separation. Hover should usually change border color rather than adding new shadows.
- **Border:** Thin gold border at low opacity (`gold-accent/10` to `gold-accent/30`).
- **Internal Padding:** Product cards use `16px`; review and contact panels use `24px` to `40px`.

### Inputs / Fields

This site currently has no forms. If fields are added later, they should be dark rectangular controls with Fresh Cream input text, Stone Date placeholder text that passes contrast, a thin gold border on focus, and clear disabled/error states. Do not add forms unless the business asks for them.

### Navigation

Navigation is a compact premium overlay. The desktop bar uses a fixed header, small uppercase sans links, gold separators, and a rounded translucent nav track. The mobile menu is a dark drawer with rectangular rows, gold dividers, and a strong bottom WhatsApp action.

### Product Cards

Product cards are the signature repeat component. They require a 4:3 image, black vignette overlay, gold prestige or category badge, price label over the image, serif product title, Stone Date description, and a pill WhatsApp order button.

### Review Cards

Review cards are trust surfaces. They must preserve honest metrics, gold stars, local reviewer names, dates, and quiet dividers. Do not use "real Google" or verified language unless backed by data.

### Legal Modal

The legal modal should stay quiet and brochure-site appropriate: dark panel, thin gold border, readable bilingual copy, and a clear close button. It should not look like a checkout, account, or ecommerce legal flow.

## 6. Do's and Don'ts

### Do:
- **Do** keep Jawhara Gold rare and concentrated on CTAs, stars, price labels, icons, and active states.
- **Do** preserve the dark/gold bakery direction with real food imagery and high-contrast copy.
- **Do** keep Arabic RTL as the primary experience and verify every layout in Arabic before French.
- **Do** use honest review numbers and real business links in every trust or contact surface.
- **Do** keep cards square-edged and use pill shapes only for action buttons, filters, and icon wells.
- **Do** make every major section lead naturally to WhatsApp, phone, Facebook, Google Maps, products, or contact.

### Don't:
- **Don't** make the site feel like a generic AI-generated landing page.
- **Don't** make it a luxury template disconnected from a real local bakery.
- **Don't** make it an inflated ecommerce brand with checkout, payment, accounts, analytics dashboards, or CMS-shaped UI.
- **Don't** use vague hype, fake urgency, unsupported "best in town" language, fake review wording, or placeholder business details.
- **Don't** hide food behind decorative clutter, oversized ornaments, glass effects, or abstract blocks.
- **Don't** add repeated tiny uppercase section eyebrows everywhere. A badge is acceptable only when it clarifies the section.
- **Don't** use gradient text, side-stripe borders thicker than 1px, or decorative card shadows that fight the dark counter feel.
- **Don't** let hero type exceed 6rem, tighten display tracking past -0.04em, or let long Arabic words overflow on mobile.

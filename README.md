# Jawhara Bakery Website

A bilingual Arabic/French brochure website for Boulangerie & Pâtisserie Jawhara in Chichaoua, Morocco.

## Features

- Arabic-first layout with French language toggle
- Premium bakery landing page with product categories, best sellers, gallery, reviews, and contact details
- WhatsApp ordering links
- Google Maps and Facebook external links
- Lightweight privacy and terms content for client handoff

## Run Locally

Prerequisite: Node.js 20 or newer.

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run lint
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Deploy on Vercel

This project is configured for Vercel with `vercel.json`.

- Framework preset: `Vite`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Node.js: `20` or newer

After deployment, check the live URL in both Arabic and French, then test the WhatsApp, Facebook, Google Maps, Privacy, and Terms links.

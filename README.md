# Growfish Digital — Website

A static marketing site for Growfish Digital, a boutique paid ads agency
(Google Ads, Meta Ads, TikTok Ads, AI-powered growth).

## Stack
- Plain HTML / CSS / JS — no build step.
- Inter + Space Grotesk via Google Fonts.

## Run locally
Open `index.html` directly, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure
- `index.html` — all page sections (hero, services, approach, results, about, contact, footer)
- `styles.css` — design system & layout
- `script.js` — mobile menu + footer year

## Customize
- Colors: CSS custom properties in `:root` at the top of `styles.css`
- Copy: edit text directly in `index.html`
- Contact form: currently a demo; wire it to your backend/form service as needed

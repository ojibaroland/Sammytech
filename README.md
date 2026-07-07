# Sammy-Tech Plumbing — Business Website

A fast, mobile-friendly website for **Sammy-Tech Plumbing**, a professional plumbing
service based in Trans-Ekulu, Enugu, Nigeria.

## What's on the site

- **Hero** with the ST monogram, service summary, and instant Call / WhatsApp buttons
- **Services** — the four services from the business flyer, each linking to the quote form
- **Why Us**, **How It Works**, **Customer Reviews**, and **FAQ** sections
- **Areas served** across Enugu, with the original business flyer on display
- **Quote request form** that opens WhatsApp with the customer's request pre-filled
  (email fallback included) — no backend or hosting fees needed
- **Open/Closed indicator** in the top bar, computed live in West Africa Time
- **Click-to-call** phone links and a **floating WhatsApp button** on every screen
- **Local SEO**: meta tags, Open Graph tags, and Schema.org `Plumber` structured data
  so the business can appear in Google results for Enugu plumbing searches

## Contact details used

| Field    | Value                          |
|----------|--------------------------------|
| Phone    | 0701 251 8327 (+2347012518327) |
| Email    | Innocentsamuel970@gmail.com    |
| Location | Trans-Ekulu, Enugu, Nigeria    |

## Editing business info

- **Phone / email / opening hours** used by the scripts: edit the `BUSINESS` object at
  the top of [`js/main.js`](js/main.js).
- **Displayed text** (contact section, top bar, footer): search for the phone number or
  email in [`index.html`](index.html) and update.
- Opening hours currently assume **Mon–Sat, 8:00am–6:00pm** with emergency calls anytime —
  adjust in both `js/main.js` and the contact section of `index.html` if different.

## Running locally

It's a static site — no build step. Either open `index.html` directly, or serve it:

```bash
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deploying free with GitHub Pages

1. On GitHub, open the repo **Settings → Pages**
2. Under *Build and deployment*, choose **Deploy from a branch**
3. Select the main branch and `/ (root)`, then save
4. The site goes live at `https://<username>.github.io/Sammytech/` within a minute or two

## When you buy your domain — SEO checklist

The site currently uses `https://sammytechplumbing.ng` as a placeholder domain in its
SEO tags. After buying the real domain:

1. **Search-and-replace** `https://sammytechplumbing.ng` with your domain in three files:
   `index.html`, `robots.txt`, and `sitemap.xml` (it appears in the canonical link,
   Open Graph/Twitter tags, both structured-data blocks, and the sitemap).
2. **Point the domain at GitHub Pages** from Settings → Pages → Custom domain
   (or at whatever host you choose), and enable "Enforce HTTPS".
3. **Register with Google**: add the site to [Google Search Console](https://search.google.com/search-console),
   verify ownership, and submit `sitemap.xml`. This gets you indexed within days.
4. **Create a Google Business Profile** (free, at business.google.com) with the same
   name, phone and Trans-Ekulu address — this is the single biggest boost for
   "plumber near me" searches in Enugu, and the website link feeds it.
5. Update `lastmod` in `sitemap.xml` whenever you make significant changes.

### What's already optimized

- Title/description tuned for "plumber Enugu / Trans-Ekulu" searches, covering both
  "Sammy-Tech" and "Sammy Tech" spellings
- Schema.org `Plumber` structured data (services, areas, hours, geo coordinates) and
  `FAQPage` structured data for rich results in Google
- Open Graph + Twitter cards, so links shared on WhatsApp/Facebook show a proper
  preview with the flyer image
- Geo meta tags, `robots.txt`, `sitemap.xml`, semantic headings, image alt text,
  mobile-friendly and fast (no frameworks) — all ranking signals Google checks

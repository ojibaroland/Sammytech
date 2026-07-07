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

A custom domain (e.g. `sammytechplumbing.ng`) can be pointed at GitHub Pages later from
the same settings page — update the `canonical` URL in `index.html` when you do.

# Restaurant G20 — Website

**Domain:** restaurant-g20.com  
**Stack:** Hugo · Sass · Netlify  
**Languages:** Albanian (default) · German (`/de/`) · English (`/en/`)

---

## Quick start

```bash
# Install Hugo (macOS)
brew install hugo

# Install Hugo (Linux)
snap install hugo

# Verify
hugo version  # should be ≥ 0.128.0

# Run dev server with live reload
cd ~/Projects/g20
hugo server -D
# → open http://localhost:1313
```

---

## Project layout

```
hugo.toml               ← Site config, contact details, opening hours
netlify.toml            ← Build & deploy settings for Netlify

i18n/
  sq.yaml               ← Albanian UI strings (nav, labels, buttons)
  de.yaml               ← German UI strings
  en.yaml               ← English UI strings

content/
  sq/menu/              ← Albanian menu items (one .md file per dish)
  de/menu/              ← German menu items
  en/menu/              ← English menu items
  sq/pages/contact.md
  de/pages/contact.md
  en/pages/contact.md

static/
  photos/               ← Drop your .jpg/.webp photos here
  css/site.css          ← Custom styles
  js/lang-redirect.js   ← Browser language auto-redirect

layouts/                ← HTML templates (edit to change design)
archetypes/menu.md      ← Template for new menu items
```

---

## Updating the menu

### Change a price
Open [data/menu.toml](data/menu.toml) and update the `price` field (given in LEK):

```yaml
price: 950   # was 850
```
Remember to update the same dish in `sq/` and `de/` too.

### Add a new dish

Open [data/menu.toml](data/menu.toml) and add the new dish, with i18n for sq, en, de

### Categories
Available: `breakfast` · `starters` · `mains` · `grills` · `pizza` · `pasta` · `salads` · `sides` · `desserts` · `drinks`

---

## Updating opening hours

Edit `hugo.toml`:
```toml
[[params.hours]]
  label = "weekdays"
  open  = "11:00"
  close = "23:00"
```
The translated day-name labels live in `i18n/*.yaml`.

---

## Updating contact details

All in `hugo.toml` under `[params]`:
| Field | What it controls |
|---|---|
| `phone` | Displayed phone number |
| `whatsapp` | WhatsApp number (no `+`, no spaces) |
| `address` | Address text |
| `googleMapsURL` | "Open in Google Maps" button |
| `appleMapsURL` | "Open in Apple Maps" button |
| `googleMapsEmbed` | `<iframe>` map on Contact page |
| `instagram` | Instagram link (empty = hidden) |
| `facebook` | Facebook link (empty = hidden) |

---

## Adding photos

1. Drop `.jpg` or `.webp` files into `static/photos/`
2. Reference them in menu item frontmatter: `photo: "my-dish.jpg"`
3. Hero photo: name it `hero.jpg`
4. Gallery photos: `gallery-1.jpg` through `gallery-4.jpg`

**Tip:** Resize photos to ≤1200px wide and compress with [Squoosh](https://squoosh.app/) before uploading.

---

## Deploy to Netlify

1. Push this repo to GitHub
2. Log in to [netlify.com](https://netlify.com) → **Add new site → Import from Git**
3. Select the repo — Netlify reads `netlify.toml` automatically
4. Set custom domain: `restaurant-g20.com` in Site settings → Domain management
5. Netlify provisions HTTPS automatically

**After that:** every `git push` triggers a live deploy in ~30 seconds.

---

## Google Maps embed URL

1. Go to [maps.google.com](https://maps.google.com) and find the restaurant
2. Click **Share → Embed a map → Copy HTML**
3. Extract the `src="..."` URL from the iframe and paste it into `hugo.toml` as `googleMapsEmbed`

---

## (Optional) Decap CMS — browser-based editor for Marious

Decap CMS lets Marious update content from a browser without touching code.  
See `docs/decap-cms-setup.md` (to be added) or https://decapcms.org/docs/hugo/

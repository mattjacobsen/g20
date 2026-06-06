---
title:       "{{ replace .Name "-" " " | title }}"
date:        {{ .Date }}
draft:       false

# ── Pricing ───────────────────────────────────────────────────────────────────
price:       0          # in Lek (ALL)  — single source of truth

# ── Categorisation ────────────────────────────────────────────────────────────
# Options: starters | mains | grills | salads | desserts | drinks
category:    "mains"

# ── Dish details ──────────────────────────────────────────────────────────────
ingredients: []         # e.g. ["lamb", "yogurt", "eggs"]
allergens:   []         # e.g. ["gluten", "dairy"]
vegetarian:  false
spicy:       false

# ── Display ───────────────────────────────────────────────────────────────────
# Optional: relative path to a photo in /static/photos/
photo:       ""         # e.g. "tave-kosi.jpg"

# Ordering within the category (lower = first)
weight:      10
---

Përshkrim i shkurtër i gjellës.  <!-- Write description in the content language -->

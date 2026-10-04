# Eram Shipping and Motors website

A responsive, cinematic website prototype for Eram Shipping and Motors in Ghana. It presents car shipping, vehicle sales, rentals, and imported American merchandise. The featured vehicle sequence responds to scrolling across six chapters: arrival, drive, front detail, exterior form, cabin, and cargo. Pointer movement adds a subtle 3D tilt on supported devices. A four-view gallery lets visitors examine the concept SUV and call Eram directly.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite. Run `npm run build` to create the production files in `dist/`.

## Project map

- `src/App.tsx` — page content, navigation, scroll sequence, and interactions
- `src/styles.css` — responsive layout, brand styling, and motion
- `src/feature-gallery.css` — expanded car sequence and detail gallery styles
- `public/images/` — generated illustrative car assets
- `docs/` — brief, content decisions, asset inventory, and launch checklist

## Current scope

This is a front-end prototype. Vehicle images are AI-generated concepts, not photos of Eram inventory. No stock, price, shipping quote, rental availability, or delivery timeline is asserted. The contact section links to the Ghana and U.S. phone numbers supplied by the owner. Email, business location, and any online inquiry channel remain to be confirmed.

## Accessibility and performance

The page has semantic landmarks, descriptive image alternatives, keyboard-operable navigation and view controls, and reduced-motion support. Generated images are stored locally as WebP; the hero image is prioritized and other images load lazily.
# shipping-website

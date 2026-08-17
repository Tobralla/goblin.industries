# Goblin Industries

A responsive portfolio and venture-studio website for Goblin Industries, using a restrained bento-grid system and interactive TikTok and Eldorado analytics.

## Run locally

```powershell
npm install
npm run dev
```

The local site runs at `http://127.0.0.1:4173`.

## Portfolio data

Project links and top-line metrics are collected in the `portfolio` object at the top of `src/main.js`.

The homepage cards open dedicated internal profiles at `/6foot4bp` and `/donutcoinshop`; each profile retains a direct external link to its platform account.

The `/upcoming` roadmap page presents Economi, ViewSum, and GenFarmers in a three-card desktop layout. ViewSum includes a horizontally scrollable gallery of its website and service previews, while supplied project logos are used for all three brands.

The complete 6foot4bp TikTok overview export is stored at `public/data/6foot4bp-overview.csv`. The current site totals cover 11 August 2025 through 10 August 2026:

- 7,680,032 video views
- 701,385 likes
- 51,633 profile views
- 43,159 shares

The profile images in `public/assets/6foot4bp-logo.jpg` and `public/assets/donutcoinshop-logo.png` are sourced from the respective public profiles.

The responsive TikTok chart is built at runtime and switches between cumulative followers, video views, likes, and shares. The follower series ends at 3,626, while the other totals come directly from the supplied TikTok CSV export.

The DonutCoinShop analytics are aggregated by date from the supplied Eldorado orders export and limited to the stated December 2025–April 2026 active period. The site displays $920.74 in total sales across 284 orders and a $3.24 average order value. The cumulative chart uses all 76 transaction dates from 21 December 2025 through 24 April 2026 without exposing customer information.

The contact form opens the visitor's email client. Replace `hello@goblinindustries.com` in `src/main.js` if a different inbox should receive inquiries.

For static hosting, configure all unknown routes to serve `404.html` or use the included file as the provider's custom error document.

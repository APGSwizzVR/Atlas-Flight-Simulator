# Atlas Flight Simulator

Official website for **Atlas Flight Simulator (Atlas FS)**, a Roblox flight simulator currently at the very beginning of development.

## Website

Static HTML/CSS/JS landing page with:
- Apple-inspired liquid-glass visual system
- Aviation-focused hero section
- Subtle aircraft animation
- Responsive mobile layout
- Experience/features section
- Development roadmap
- Community CTA
- Discord and Buy Me a Coffee buttons
- No game link yet — Atlas FS is **Coming Soon**

## Configure links

Open `script.js` and set:

```js
const CONFIG={
  DISCORD_URL:"YOUR_DISCORD_INVITE",
  COFFEE_URL:"YOUR_BUY_ME_A_COFFEE_PAGE"
};
```

Until those URLs are configured, the buttons intentionally show a Coming Soon modal rather than using fake links.

## Run locally

Open `index.html` directly, or serve the folder with any static web server.

## Deployment

The project is designed to deploy as a static site on Vercel with no build step.

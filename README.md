# 🐊 CrocKicks™ — Next-Gen Haute Foam Footwear & Interactive 3D Studio

[![CrocKicks](https://img.shields.io/badge/CrocKicks-Haute%20Foam%20Studio-fe5d39?style=for-the-badge&logo=crocs&logoColor=white)](https://github.com/KunalGhadge/crockicks)
[![WebGL 3D](https://img.shields.io/badge/3D%20Engine-Google%20model--viewer%203.5-38bdf8?style=for-the-badge&logo=webgl&logoColor=white)](https://modelviewer.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Style-Tailwind%20CSS%20CDN-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Web Audio](https://img.shields.io/badge/Audio-Web%20Audio%20API-eab308?style=for-the-badge&logo=soundcharts&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)

> **CrocKicks** is an ultra-premium, agency-grade digital footwear experience and interactive 3D configurator designed for haute foam clogs, platform lifts (+5cm), tactile Jibbitz™ charm docking, and real-time WebGL/AR spatial customization.

---

## 🌟 Key Architecture & Highlights

### 1. 🏠 Master Home Studio (`index.html`)
- **Minimalist Haute Branding**: Logo-only navigation with official CrocKicks branding and matching custom browser favicon.
- **Sculpted Visual Layer**: Dynamic 3D Parallax Tilt cards (`.tilt-card`) with cursor-tracked specular sheen physics.
- **Kinetic Infinite Marquee Runway**: 24-second infinite seasonal specification ribbon (`S/S 2025 ARCHIVE DROP`).
- **Category Spotlight Bento Grid**: Direct gateways to iconic silhouettes with instant quick-add functionality.
- **Interactive Chromatic Color Vault**: Real-time aura glow backdrop morphing across rich golden, ruby, and cobalt colorways.
- **Tactile Snap Jibbitz™ Dock**: 26-port live interactive shoe vamp with Web Audio synthesized pops.
- **Curated Best Sellers Catalog**: Live category filter pills (`All`, `Under $50`, `Platform`, `Waterproof`) with real-time catalog search.

---

### 2. 👟 Dynamic Product Details & 3D Customizer Lab (`product.html`)
- **Dynamic 8-Silhouette Catalog**: Loads individual product silhouettes via URL query parameter (`product.html?id=citrus-classic`, `product.html?id=platform`, etc.) with bespoke photography, specs, pricing, and colorways:
  1. `classic-clog` — Iconic Ergonomic Foam Clog
  2. `platform` — Classic Platform Clog (+5cm Elevated Wedge Lift)
  3. `fleece` — Fleece Sherpa Haven Clog (Sub-Zero Lining)
  4. `slide` — Cloud Slide Recovery Slip (Dual-Density Hydro Tread)
  5. `citrus-classic` — UV-Guard Summer Neon Classic
  6. `stomp-platform` — Cloud Stomp Mega Platform (6.5cm Lug Sole)
  7. `sherpa-pink` — Sherpa Hug Pink Edition (Pastel Fleece Velvet)
  8. `lagoon-slide` — Lagoon Hydro Recovery Slide (Rapid Wave Dispersion)
- **Interactive 3D WebGL / AR Model Viewer (`<model-viewer>`)**:
  - **Full 360° Orbit & Zoom**: Real-time 3D model rotation and inspection with smooth momentum physics.
  - **Single-Model Real-Time Color Tinting**: Dynamically tints the 3D Croslite™ foam material using calibrated linear-sRGB PBR factors (`Math.pow(c, 1.85)`), preventing color washout and rendering deep, rich footwear pigments.
  - **Attention-Commanding 3D Triggers**: Glowing pulse gradient button (`#view-mode-3d-btn`), floating hero stage callout, and a dedicated 5th 3D interactive tile in the thumbnail strip.
  - **Camera Orbit Presets & Reset**: Quick-switch buttons for 3/4 Hero, Side Profile, Toe Ports, and On-Model angles, plus one-click camera reset.
  - **Mobile Augmented Reality (AR)**: WebXR, Android SceneViewer, and iOS QuickLook integration for real-space footwear projection.
- **Magnetic Jibbitz™ Charm Studio**: 6-slot docking bay with dashed empty states and acoustic click synthesizer.
- **Unisex Sizing Matrix & Conversion Modal**: US standard sizing from W5/M3 to W12/M10.
- **Tactile Engineering Bento Grid**: Dynamic specs for platform lift, port density, foam composition, and outsole grip.
- **Smart Recommendations Engine**: Dynamically displays matching related silhouettes.

---

### 3. 🛍️ Haute Foam Cart & Checkout Studio (`cart.html`)
- **Default Clean State**: Initializes with a clean empty state (`0 items`, `$0.00`) and clear call-to-action to explore the catalog.
- **High-Usability Line Item Actions**: Prominent red pill "Remove" buttons (`delete` icon + label), top-right corner `(✕)` quick-delete triggers, and enlarged quantity steppers.
- **Universal Cart Storage**: Centralized `crockicks_cart_v3` engine with automatic cleanup of legacy keys.
- **Direct Customizer Links**: "Customize" button on each cart item routes back to that specific shoe's customizer page (`product.html?id=...`).
- **Telemetry Free Shipping Progress**: Dynamic progress indicator toward the $50 free carbon-neutral express shipping threshold.
- **Frequently Paired Together Quick Adds**: 1-click physical "Fly-to-Cart" physics animation for shoe cleaner, heel straps, and charm packs.
- **Promotional Coupon Engine**: Real-time discount validation (`KICK15` for 15% off, `JIBBITZ` for $10 off, `FREESHIP` for free delivery).
- **Express Checkout Modal & Confetti Celebration**: Comprehensive checkout form with live order ID generation and confetti cannon explosion.

---

## 📁 Repository Structure

```
├── .agents/
│   └── rules/
│       └── github_credentials.md # Agent rule documentation for git operations
├── AGENTS.md                    # Universal AI agent instructions & GitHub configuration
├── GEMINI.md                    # Antigravity IDE & Gemini agent standing instructions
├── .env                         # Stored GitHub repository URL and authentication token
├── .gitignore                   # Git ignore rules for clean commits
├── index.html                   # Master Home Studio
├── product.html                 # Dynamic Product Details & 3D Customizer Lab
├── cart.html                    # Haute Foam Cart & Checkout Studio
├── assets/
│   └── models/
│       └── croc.glb             # 3D Foam Clog Model (33MB 3DMakerpro Mole Scan)
├── css/
│   └── styles.css               # Hardware-accelerated animations, 3D tilt, cursor physics, glow pulses
├── js/
│   ├── products-data.js         # Single-source-of-truth catalog (8 silhouettes & colorways)
│   ├── cart.js                  # Shared cart engine, acoustic audio synthesizer, toasts
│   └── motion.js                # Lerp follower cursor, 3D tilt physics, confetti cannon
├── package.json                 # Project manifest and dev server scripts
└── README.md                    # Comprehensive repository documentation
```

---

## 🚀 How to Run Locally

### Option A: Local HTTP Server (Recommended for 3D GLB & WebGL)
Run the development server using Python or Node.js:
```bash
# Start local server on http://localhost:3000
python -m http.server 3000

# or with npm (if dependencies installed):
npm start
```
Then visit **`http://localhost:3000`** in your browser.

### Option B: Direct Browser Preview
Double-click **`index.html`** or drag it into Chrome, Edge, Safari, or Firefox.

---

## 🔗 GitHub Repository & Deployment

- **Repository**: [https://github.com/KunalGhadge/crockicks.git](https://github.com/KunalGhadge/crockicks.git)
- **Primary Branch**: `main`
- **Authenticated Remote**: Pre-configured in local `.git` and `.env` for zero-friction pushes.

```bash
# Push updates to GitHub
git add .
git commit -m "feat: CrocKicks 3D studio, customizer lab & responsive cart"
git push origin main
```

---

*Engineered with precision for CrocKicks™ Digital Footwear.*

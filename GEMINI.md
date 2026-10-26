# 🤖 Agent Standing Instructions & Repository Configuration

> **CRITICAL REPOSITORY AUTHENTICATION & ACCESS INSTRUCTIONS**
> This repository is connected to GitHub. When working on this codebase in ANY chat session, always use the stored credentials and follow the guidelines below.

---

## 🔐 GitHub Remote & Authentication Details

- **GitHub Repository**: [https://github.com/KunalGhadge/crockicks.git](https://github.com/KunalGhadge/crockicks.git)
- **Primary Branch**: `main`
- **Stored Local Credentials**: Kept safely in [`.credentials/github_token.txt`](file:///.credentials/github_token.txt) and [`.env`](file:///.env) (both are git-ignored to comply with GitHub Secret Scanning & Push Protection).
- **Git Remote Configuration**: The local git remote `origin` is already pre-configured with the Personal Access Token (PAT) for zero-prompt pushes and pulls.

### How to Push & Pull in This Project
Whenever running git operations:
```bash
# Push changes to main branch
git push origin main

# Pull latest changes from main branch
git pull origin main
```
*If git remote needs to be restored or verified, read the token from `.credentials/github_token.txt` and set: `git remote set-url origin https://<TOKEN>@github.com/KunalGhadge/crockicks.git`.*

---

## 🏗️ Project Architecture & Design Standards

### Key Files
1. **`index.html`**:
   - Master homepage with Category Spotlights, infinite marquee, Best Sellers catalog, and chromatic Color Vault.
   - Top-left navigation MUST contain **only the logo image**, no text next to it.
   - All product cards link dynamically to `product.html?id=<productId>`.

2. **`product.html`**:
   - Dynamic product customizer that loads silhouettes via URL parameter (e.g. `product.html?id=citrus-classic`).
   - Top-left navigation MUST contain **only the logo image**, no text next to it.
   - Favicon is set to the official logo image.
   - **Interactive 3D WebGL Model Viewer**: Powered by Google `<model-viewer>` (`croc-3d-viewer`) displaying `assets/models/croc.glb` (33MB scan).
   - High-visibility glowing 3D toggle button (`#view-mode-3d-btn`), floating stage callout, and 5th 3D thumbnail tile in the rail.
   - Real-time material tinting via `applyColorTo3DModel(hex)` using linear-sRGB conversion (`Math.pow(c, 1.85)`).
   - Jibbitz™ Charm Studio with sleek 6-slot docking bay and Web Audio pop synthesizer.

3. **`cart.html`**:
   - Real-time cart rendered from `localStorage` (`crockicks_cart_v3`).
   - Default state starts completely empty (`0 items`, `$0.00`).
   - Large red pill "Remove" buttons (`delete` icon + "Remove" label) + top right `(✕)` quick-delete button.
   - Full checkout modal with confetti celebration.

4. **`js/products-data.js`**:
   - Complete single-source-of-truth catalog holding 8 silhouettes (`classic-clog`, `platform`, `fleece`, `slide`, `citrus-classic`, `stomp-platform`, `sherpa-pink`, `lagoon-slide`).
   - Rich, deeply-pigmented colorways for every silhouette.

5. **`js/cart.js`**:
   - Shared cart engine, badge updater, Web Audio pop synthesizer (`playAcousticPop`), and toast notifications.

6. **`css/styles.css`**:
   - Hardware-accelerated animations, `.tilt-card` specular sheen, custom cursor physics, and `.glow-3d-pulse` 3D button animations.

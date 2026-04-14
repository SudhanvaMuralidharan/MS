# 🍄 MS Canopy — Premium Exotic Mushrooms Website

A professional business website for **MS Canopy**, built with **React + Vite**.

---

## 📁 Project Structure

```
ms-canopy/
├── client/                     # React + Vite frontend
│   ├── public/
│   │   └── logo.jpeg           # Site favicon & public logo
│   ├── src/
│   │   ├── assets/
│   │   │   └── logo.jpeg       # Logo used in components
│   │   ├── components/
│   │   │   ├── Navbar.jsx      # Sticky nav with mobile drawer
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.jsx      # 4-column footer
│   │   │   └── Footer.css
│   │   ├── pages/
│   │   │   ├── Home.jsx        # Landing page
│   │   │   ├── Home.css
│   │   │   ├── Products.jsx    # 6-product expandable grid
│   │   │   ├── Products.css
│   │   │   ├── Contact.jsx     # Contact info & map
│   │   │   └── Contact.css
│   │   ├── App.jsx             # Router setup
│   │   ├── main.jsx            # React entry point
│   │   └── index.css           # Global CSS variables & resets
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── package.json                # Root scripts
├── vercel.json                 # Vercel deployment config
├── .gitignore
└── README.md
```

---

## 🚀 Quick Start (Local Development)

### 1. Install all dependencies

```bash
npm run install:all
```

### 2. Run the application

```bash
# From project root:
npm run dev
```

- Frontend → http://localhost:3000  

---

## ☁️ Deploying to Vercel

1. Push the repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo.
3. Vercel will auto-detect the `vercel.json` config.
4. Set **Build Command**: `cd client && npm install && npm run build`
5. Set **Output Directory**: `client/dist`
6. Click **Deploy** ✅

---

## 🎨 Design Notes

| Aspect       | Choice |
|---|---|
| Typography   | Cormorant Garamond (display) + DM Sans (body) |
| Color Palette | Navy `#1a1f5e`, Teal `#3db8c8`, Cream `#faf7f1`, Forest `#2c5f2e` |
| Aesthetic    | Organic luxury — rich, editorial, warm-toned |
| Animations   | CSS-only fade-up reveals, floating orbs, hover spring transforms |
| Responsive   | Mobile-first, tested down to 375 px |

---

## 🍄 Products Featured

| Mushroom       | Scientific Name           |
|---|---|
| Golden Oyster  | *Pleurotus citrinopileatus* |
| Pink Oyster    | *Pleurotus djamor*         |
| Milky Mushroom | *Calocybe indica*          |
| King Oyster    | *Pleurotus eryngii*        |
| Shiitake       | *Lentinula edodes*         |
| Lion's Mane    | *Hericium erinaceus*       |

---

## 📄 License

© 2025 MS Canopy. All rights reserved.

# 🍄 MS Canopy — Premium Exotic Mushrooms Website

A full-stack business website for **MS Canopy**, built with **React + Vite** (frontend) and **Node.js + Express** (backend). Ready to deploy on **Vercel** (frontend) or any Node host (full-stack).

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
│   │   │   ├── Contact.jsx     # Contact form + info
│   │   │   └── Contact.css
│   │   ├── App.jsx             # Router setup
│   │   ├── main.jsx            # React entry point
│   │   └── index.css           # Global CSS variables & resets
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/                     # Node.js + Express API
│   ├── routes/
│   │   └── contact.js          # POST /api/contact handler
│   ├── index.js                # Express server entry
│   ├── .env.example            # Environment variable template
│   └── package.json
│
├── package.json                # Root scripts (runs both client + server)
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

Or manually:
```bash
npm install
cd client && npm install
cd ../server && npm install
```

### 2. Configure server environment

```bash
cd server
cp .env.example .env
# Edit .env with your SMTP credentials (optional — see below)
```

### 3. Run both client and server

```bash
# From project root:
npm run dev
```

- Frontend → http://localhost:3000  
- Backend  → http://localhost:5000

---

## 📧 Contact Form & Email Setup

The contact form posts to `POST /api/contact`.

**Without SMTP configured:** enquiries are printed to the server console.  
**With SMTP configured:** an HTML email is sent to your inbox.

To enable email, edit `server/.env`:

```env
SMTP_SERVICE=gmail
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password       # Google "App Password" — not your login password
RECIPIENT_EMAIL=info@mscanopy.in  # Where to receive enquiries
```

> **Gmail users:** Go to Google Account → Security → App Passwords → generate one for "Mail".

---

## ☁️ Deploying to Vercel (Frontend Only)

1. Push the repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo.
3. Vercel will auto-detect the `vercel.json` config.
4. Set **Build Command**: `cd client && npm install && npm run build`
5. Set **Output Directory**: `client/dist`
6. Click **Deploy** ✅

> **Note:** For full-stack deployment (with the contact form API), deploy the `server/` folder separately to **Railway**, **Render**, or **Fly.io**, then update `vite.config.js` proxy target and set the `CLIENT_URL` env var.

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

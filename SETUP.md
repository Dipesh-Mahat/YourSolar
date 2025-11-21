# 🚀 Quick Setup Guide - YourSolar

## ⚡ 5-Minute Setup

### 1. Clone & Install
```bash
git clone https://github.com/Dipesh-Mahat/YourSolar.git
cd YourSolar
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open http://localhost:3000 ✅

### 3. Build for Production
```bash
npm run build
```

That's it! Your professional solar platform is ready. 🎉

---

## 📝 Important Notes

### This is a DEMO Project
- ✅ All UI components are fully functional
- ✅ Charts and animations work perfectly
- ✅ Responsive design tested
- ❌ No real API connections (uses demo data)
- ❌ No real database (simulated data)
- ❌ No real authentication (UI only)

### Perfect For:
- 🎓 College projects and portfolios
- 💼 Startups needing a quick MVP
- 🏢 Agencies white-labeling for clients
- 📚 Learning modern web development

---

## 🔧 Customization

### Change Theme Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  solar: {
    yellow: '#YOUR_COLOR',  // Main accent
    black: '#YOUR_COLOR',   // Background
  }
}
```

### Add Your Logo
Replace in `components/Sidebar.tsx`:
```tsx
<Sun className="w-8 h-8" /> // Replace with your logo
<span>YourSolar</span>       // Replace with your brand
```

### Connect Real APIs
1. Add API endpoints in `.env.local`
2. Create API routes in `app/api/`
3. Replace demo data with real API calls

---

## 🌐 Deploy to GitHub Pages

### One-Time Setup
1. Go to repo Settings → Pages
2. Source: "GitHub Actions"
3. Done!

### Deploy
```bash
git add .
git commit -m "Deploy"
git push origin main
```

Auto-deploys to: `https://username.github.io/YourSolar/`

---

## 💰 Commercial Use

### Free (AGPL-3.0)
- Must open-source your entire code
- Must share all modifications
- Not suitable for most businesses

### Paid (Commercial License)
- Keep code private ✅
- No attribution needed ✅
- Use in SaaS/products ✅
- White-label rights ✅

**Prices:** $49 (Student) | $199 (Startup) | $499 (Business)

[Get License](COMMERCIAL-LICENSE.md) • 30% OFF for first 50 customers!

---

## 🆘 Need Help?

- 📖 Read: [README.md](README.md)
- 💬 Ask: [GitHub Issues](https://github.com/Dipesh-Mahat/YourSolar/issues)
- 📧 Commercial: Contact via GitHub

---

**Built by Dipesh Mahat** • College Project • Production-Ready Demo

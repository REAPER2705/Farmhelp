# 🌿 Green Crops - Smart Farming Assistant

A modern, responsive web application built with React, Vite, and Tailwind CSS to help farmers make informed decisions about soil health, crop selection, weather forecasting, fertilizer usage, and market prices.

## 🚀 Features

- **Home Page**: Hero section with chatbot and feature cards
- **Soil Health**: NPK value analysis with crop recommendations
- **Crop Recommendation**: Location and season-based crop suggestions
- **Weather Forecast**: 7-day weather dashboard
- **Fertilizer Guide**: Crop-specific fertilizer schedules with organic alternatives
- **Market Prices**: Real-time crop prices with comparison charts

## 📦 Installation

1. **Navigate to project directory:**
   ```bash
   cd farmer-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   Navigate to `http://localhost:5173`

## 🛠️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 📁 Project Structure

```
farmer-project/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── SoilHealth.jsx
│   │   ├── CropRecommendation.jsx
│   │   ├── Weather.jsx
│   │   ├── Fertilizer.jsx
│   │   └── MarketPrice.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Lucide React** - Icons

## 🌈 Color Theme

- Primary Green: `#22c55e` (green-500)
- Accent colors for different sections
- Clean white backgrounds with subtle gradients

## 📱 Responsive Design

Fully responsive across all devices:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🔧 Customization

### Adding New Crops
Edit the crop database in `src/pages/CropRecommendation.jsx`

### Modifying Fertilizer Schedules
Update fertilizer data in `src/pages/Fertilizer.jsx`

### Changing Market Prices
Modify market data in `src/pages/MarketPrice.jsx`

## 📄 License

© 2025 Green Crops. All rights reserved.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email support@greencrops.com

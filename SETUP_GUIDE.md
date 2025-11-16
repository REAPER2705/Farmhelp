# 🚀 Setup Guide - Green Crops AI Farming Assistant

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API Key

## 🔑 Getting Your Google Gemini API Key

1. **Visit Google AI Studio:**
   - Go to: https://makersuite.google.com/app/apikey
   - Sign in with your Google account

2. **Create API Key:**
   - Click "Create API Key"
   - Copy the generated key

3. **Keep it secure:**
   - Never commit API keys to Git
   - Don't share your API key publicly

## ⚙️ Installation Steps

### 1. Navigate to Project Directory
```bash
cd farmer-project
```

### 2. Install Dependencies
```bash
npm install
```

This will install:
- React & React DOM
- React Router
- Tailwind CSS
- Lucide React (icons)
- **@google/generative-ai** (Gemini AI SDK)

### 3. Setup Environment Variables

**Create a `.env` file in the project root:**
```bash
# Windows
copy .env.example .env

# Mac/Linux
cp .env.example .env
```

**Edit `.env` and add your API key:**
```
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

⚠️ **Important:** Replace `your_actual_api_key_here` with your real Gemini API key

### 4. Start Development Server
```bash
npm run dev
```

The app will open at: `http://localhost:5173`

## 🎯 Features Overview

### 🤖 AI Crop Analysis (NEW!)
- **Upload crop photos** for instant AI analysis
- **Disease detection** - Identify plant diseases from images
- **Soil analysis** - Analyze soil condition from photos
- **Crop identification** - Identify crops and get care recommendations
- Powered by **Google Gemini AI**

### 📊 Other Features
- Soil Health Analysis (NPK values)
- Crop Recommendations (location-based)
- Weather Forecast (7-day)
- Fertilizer Guide (organic alternatives)
- Market Prices (real-time)

## 🖼️ How to Use AI Analysis

1. **Navigate to "AI Analysis"** from the navbar
2. **Select analysis type:**
   - Crop Analysis
   - Disease Detection
   - Soil Analysis
3. **Upload an image** (JPG, PNG)
4. **Click "Analyze with AI"**
5. **Get instant AI-powered insights!**

## 🔧 Troubleshooting

### API Key Not Working
- Check if `.env` file is in the project root
- Verify the key starts with `VITE_`
- Restart the dev server after adding the key
- Check API key is valid at Google AI Studio

### Image Upload Issues
- Ensure image is under 10MB
- Use JPG or PNG format
- Check browser console for errors

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## 🌐 Deploy

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add `VITE_GEMINI_API_KEY` in Environment Variables
4. Deploy!

### Netlify
1. Build the project: `npm run build`
2. Drag `dist` folder to Netlify
3. Add environment variables in Netlify settings

## 🔒 Security Notes

- ✅ API key is stored in `.env` (not committed to Git)
- ✅ `.env` is in `.gitignore`
- ✅ API calls are made from the frontend (for demo purposes)
- ⚠️ For production, consider using a backend proxy to hide API keys

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify your API key is correct
3. Ensure all dependencies are installed
4. Check Node.js version (v16+)

## 🎉 You're Ready!

Your AI-powered farming assistant is now ready to use. Upload crop photos and get instant AI insights!

---

© 2025 Green Crops - Smart Farming Assistant

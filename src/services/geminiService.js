import { GoogleGenerativeAI } from '@google/generative-ai'

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY

if (!API_KEY) {
  console.warn('Gemini API key not found. Please add VITE_GEMINI_API_KEY to your .env file')
}

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null

// Convert file to base64
export const fileToGenerativePart = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64Data = reader.result.split(',')[1]
      resolve({
        inlineData: {
          data: base64Data,
          mimeType: file.type,
        },
      })
    }
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

// Analyze crop image
export const analyzeCropImage = async (imageFile) => {
  if (!genAI) {
    throw new Error('Gemini API not initialized. Please add your API key.')
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })
    const imagePart = await fileToGenerativePart(imageFile)

    const prompt = `Analyze this crop/plant image and provide detailed information in the following format:

1. Crop Identification: What crop or plant is this?
2. Health Status: Is the plant healthy or showing signs of disease/stress?
3. Growth Stage: What growth stage is the plant in?
4. Recommendations: What care or actions should be taken?
5. Potential Issues: Any visible problems or concerns?

Please be specific and practical in your analysis.`

    const result = await model.generateContent([prompt, imagePart])
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error('Error analyzing image:', error)
    throw error
  }
}

// Get soil recommendations based on image
export const analyzeSoilFromImage = async (imageFile) => {
  if (!genAI) {
    throw new Error('Gemini API not initialized. Please add your API key.')
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })
    const imagePart = await fileToGenerativePart(imageFile)

    const prompt = `Analyze this soil image and provide:

1. Soil Type: What type of soil is this (clay, sandy, loamy, etc.)?
2. Soil Condition: Visual assessment of soil health
3. Moisture Level: Does it appear dry, moist, or waterlogged?
4. Suitable Crops: What crops would grow well in this soil?
5. Improvement Suggestions: How to improve this soil quality?

Provide practical farming advice.`

    const result = await model.generateContent([prompt, imagePart])
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error('Error analyzing soil:', error)
    throw error
  }
}

// Get crop recommendations based on location and conditions
export const getCropRecommendations = async (location, month, additionalInfo = '') => {
  if (!genAI) {
    throw new Error('Gemini API not initialized. Please add your API key.')
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

    const prompt = `As an agricultural expert, recommend the top 5 crops for:
Location: ${location}
Month: ${month}
${additionalInfo ? `Additional Info: ${additionalInfo}` : ''}

For each crop, provide:
1. Crop Name
2. Water Requirements (Low/Medium/High)
3. Temperature Range
4. Expected Yield
5. Profitability Rating (1-5 stars)
6. Growing Duration
7. Key Care Tips

Format the response clearly with each crop separated.`

    const result = await model.generateContent(prompt)
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error('Error getting recommendations:', error)
    throw error
  }
}

// Get fertilizer recommendations
export const getFertilizerRecommendations = async (cropName, soilCondition = '') => {
  if (!genAI) {
    throw new Error('Gemini API not initialized. Please add your API key.')
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

    const prompt = `Provide a detailed fertilizer schedule for ${cropName}:
${soilCondition ? `Soil Condition: ${soilCondition}` : ''}

Include:
1. Growth stages and timing
2. Chemical fertilizer recommendations (NPK ratios)
3. Organic alternatives
4. Application methods
5. Dosage per acre
6. Important precautions

Format as a clear schedule from planting to harvest.`

    const result = await model.generateContent(prompt)
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error('Error getting fertilizer recommendations:', error)
    throw error
  }
}

// Diagnose plant disease from image
export const diagnosePlantDisease = async (imageFile) => {
  if (!genAI) {
    throw new Error('Gemini API not initialized. Please add your API key.')
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })
    const imagePart = await fileToGenerativePart(imageFile)

    const prompt = `Analyze this plant image for diseases or problems:

1. Disease Identification: What disease or problem is affecting this plant?
2. Severity: How severe is the condition (Mild/Moderate/Severe)?
3. Symptoms: What are the visible symptoms?
4. Causes: What likely caused this condition?
5. Treatment: Immediate treatment recommendations
6. Prevention: How to prevent this in the future?
7. Organic Solutions: Natural/organic treatment options

Be specific and provide actionable advice.`

    const result = await model.generateContent([prompt, imagePart])
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error('Error diagnosing disease:', error)
    throw error
  }
}

// General farming chatbot
export const askFarmingQuestion = async (question, context = '') => {
  if (!genAI) {
    throw new Error('Gemini API not initialized. Please add your API key.')
  }

  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' })

    const prompt = `You are an expert agricultural advisor. Answer this farming question:

Question: ${question}
${context ? `Context: ${context}` : ''}

Provide a clear, practical answer that a farmer can understand and implement.`

    const result = await model.generateContent(prompt)
    const response = await result.response
    return response.text()
  } catch (error) {
    console.error('Error answering question:', error)
    throw error
  }
}

// Quick test to check if API key works
import { GoogleGenerativeAI } from '@google/generative-ai'
import { readFileSync } from 'fs'

// Read .env file manually
const envContent = readFileSync('.env', 'utf-8')
const apiKey = envContent.split('=')[1].trim()

console.log('API Key found:', apiKey ? 'Yes ✓' : 'No ✗')
console.log('API Key length:', apiKey?.length || 0)
console.log('API Key starts with:', apiKey?.substring(0, 15) + '...')

// Test API
const genAI = new GoogleGenerativeAI(apiKey)

async function testAPI() {
  try {
    console.log('\nTesting Gemini API...')
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    const result = await model.generateContent('Say hello in one word')
    const response = await result.response
    console.log('✓ API Response:', response.text())
    console.log('\n✓✓✓ API KEY IS WORKING! ✓✓✓')
  } catch (error) {
    console.error('✗ API Error:', error.message)
    console.error('\nPossible issues:')
    console.error('1. API key is invalid or expired')
    console.error('2. API needs to be enabled at: https://makersuite.google.com/app/apikey')
    console.error('3. Check if Gemini API is enabled in your Google Cloud project')
    console.error('4. Billing might need to be set up')
  }
}

testAPI()

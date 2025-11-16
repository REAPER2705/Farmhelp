// List available models for your API key
import { GoogleGenerativeAI } from '@google/generative-ai'
import { readFileSync } from 'fs'

const envContent = readFileSync('.env', 'utf-8')
const apiKey = envContent.split('=')[1].trim()

const genAI = new GoogleGenerativeAI(apiKey)

async function listModels() {
  try {
    console.log('Fetching available models...\n')
    
    // Try to list models
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`
    )
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    
    console.log('✓ Available Models:\n')
    data.models.forEach((model, index) => {
      console.log(`${index + 1}. ${model.name}`)
      console.log(`   Display Name: ${model.displayName}`)
      console.log(`   Supported Methods: ${model.supportedGenerationMethods.join(', ')}`)
      console.log('')
    })
    
  } catch (error) {
    console.error('✗ Error listing models:', error.message)
  }
}

listModels()

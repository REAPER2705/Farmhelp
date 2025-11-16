import { useState } from 'react'
import { Camera, Upload, Loader2, Sparkles, AlertCircle } from 'lucide-react'
import { analyzeCropImage, diagnosePlantDisease, analyzeSoilFromImage } from '../services/geminiService'

const AIAnalysis = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [analysisType, setAnalysisType] = useState('crop')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleImageSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSelectedImage(file)
      setResult(null)
      setError(null)
      
      // Create preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAnalyze = async () => {
    if (!selectedImage) {
      setError('Please select an image first')
      return
    }

    setLoading(true)
    setError(null)
    setResult(null)

    try {
      let analysisResult
      
      switch (analysisType) {
        case 'crop':
          analysisResult = await analyzeCropImage(selectedImage)
          break
        case 'disease':
          analysisResult = await diagnosePlantDisease(selectedImage)
          break
        case 'soil':
          analysisResult = await analyzeSoilFromImage(selectedImage)
          break
        default:
          analysisResult = await analyzeCropImage(selectedImage)
      }

      setResult(analysisResult)
    } catch (err) {
      setError(err.message || 'Failed to analyze image. Please check your API key and try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Sparkles className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">AI Crop Analysis</h1>
          <p className="text-xl text-gray-600">Upload a photo and let AI analyze your crops, soil, or plant diseases</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="space-y-6">
            <div className="card">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Upload Image</h2>
              
              {/* Analysis Type Selection */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  What would you like to analyze?
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    onClick={() => setAnalysisType('crop')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      analysisType === 'crop'
                        ? 'border-purple-600 bg-purple-50 text-purple-700'
                        : 'border-gray-300 hover:border-purple-300'
                    }`}
                  >
                    <Camera className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm font-semibold">Crop</div>
                  </button>
                  <button
                    onClick={() => setAnalysisType('disease')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      analysisType === 'disease'
                        ? 'border-purple-600 bg-purple-50 text-purple-700'
                        : 'border-gray-300 hover:border-purple-300'
                    }`}
                  >
                    <AlertCircle className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm font-semibold">Disease</div>
                  </button>
                  <button
                    onClick={() => setAnalysisType('soil')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      analysisType === 'soil'
                        ? 'border-purple-600 bg-purple-50 text-purple-700'
                        : 'border-gray-300 hover:border-purple-300'
                    }`}
                  >
                    <Upload className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm font-semibold">Soil</div>
                  </button>
                </div>
              </div>

              {/* Image Upload */}
              <div className="mb-6">
                <label className="block w-full">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-500 transition-colors cursor-pointer">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="max-h-64 mx-auto rounded-lg"
                      />
                    ) : (
                      <div>
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">Click to upload image</p>
                        <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Analyze Button */}
              <button
                onClick={handleAnalyze}
                disabled={!selectedImage || loading}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    <span>Analyze with AI</span>
                  </>
                )}
              </button>

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                  {error}
                </div>
              )}
            </div>

            {/* API Key Info */}
            <div className="card bg-blue-50 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold mb-2 text-blue-800">Setup Instructions</h3>
              <ol className="text-sm text-gray-700 space-y-2">
                <li>1. Get your API key from <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Google AI Studio</a></li>
                <li>2. Create a <code className="bg-white px-2 py-1 rounded">.env</code> file in the project root</li>
                <li>3. Add: <code className="bg-white px-2 py-1 rounded">VITE_GEMINI_API_KEY=your_key_here</code></li>
                <li>4. Restart the development server</li>
              </ol>
            </div>
          </div>

          {/* Results Section */}
          <div>
            {result && (
              <div className="card animate-fade-in">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center space-x-2">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                  <span>AI Analysis Results</span>
                </h2>
                <div className="prose max-w-none">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg whitespace-pre-wrap text-gray-800">
                    {result}
                  </div>
                </div>
              </div>
            )}

            {!result && !loading && (
              <div className="card text-center text-gray-500">
                <Camera className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <p className="text-lg">Upload an image and click "Analyze with AI" to get started</p>
              </div>
            )}
          </div>
        </div>

        {/* Features Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="card bg-green-50 border-l-4 border-green-500">
            <h3 className="text-xl font-bold mb-3 text-green-800">Crop Analysis</h3>
            <p className="text-gray-700">Identify crops, assess health, and get growth recommendations</p>
          </div>

          <div className="card bg-red-50 border-l-4 border-red-500">
            <h3 className="text-xl font-bold mb-3 text-red-800">Disease Detection</h3>
            <p className="text-gray-700">Diagnose plant diseases and get treatment suggestions</p>
          </div>

          <div className="card bg-amber-50 border-l-4 border-amber-500">
            <h3 className="text-xl font-bold mb-3 text-amber-800">Soil Analysis</h3>
            <p className="text-gray-700">Assess soil type, condition, and get improvement tips</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AIAnalysis

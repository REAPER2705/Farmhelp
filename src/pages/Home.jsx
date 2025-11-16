import { Link } from 'react-router-dom'
import { Leaf, CloudRain, TrendingUp, Droplets, DollarSign, MessageSquare } from 'lucide-react'
import { useState } from 'react'

const Home = () => {
  const [chatMessage, setChatMessage] = useState('')

  const features = [
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: 'AI Crop Analysis',
      description: 'Upload crop photos for instant AI-powered analysis and recommendations',
      link: '/ai-analysis',
      color: 'bg-purple-500'
    },
    {
      icon: <Leaf className="w-12 h-12" />,
      title: 'Soil Health',
      description: 'Analyze NPK values and get soil condition reports',
      link: '/soil',
      color: 'bg-green-500'
    },
    {
      icon: <Droplets className="w-12 h-12" />,
      title: 'Crop Recommendation',
      description: 'Get best crop suggestions based on location and season',
      link: '/crops',
      color: 'bg-blue-500'
    },
    {
      icon: <CloudRain className="w-12 h-12" />,
      title: 'Weather Forecast',
      description: '7-day weather predictions for better planning',
      link: '/weather',
      color: 'bg-sky-500'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Fertilizer Guide',
      description: 'Crop-specific fertilizer schedules and organic alternatives',
      link: '/fertilizer',
      color: 'bg-amber-500'
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: 'Market Prices',
      description: 'Real-time crop prices and market trends',
      link: '/market',
      color: 'bg-emerald-500'
    },
  ]

  const handleChatSubmit = (e) => {
    e.preventDefault()
    alert(`Message sent: ${chatMessage}`)
    setChatMessage('')
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-r from-primary-700 to-primary-500 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920')"
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Green Crops
            </h1>
            <p className="text-2xl md:text-3xl mb-4 font-semibold">
              Smart Farming Assistant
            </p>
            <p className="text-xl mb-8 text-primary-100">
              Empowering farmers with AI-driven insights for better yields and sustainable agriculture
            </p>
            <Link to="/soil" className="btn-primary inline-block">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Our Features
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Everything you need for smart farming decisions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="card hover:scale-105 transform transition-all duration-300"
            >
              <div className={`${feature.color} w-20 h-20 rounded-full flex items-center justify-center text-white mb-4 shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Chatbot Section */}
      <div className="bg-primary-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card">
            <div className="flex items-center space-x-3 mb-6">
              <MessageSquare className="w-10 h-10 text-primary-600" />
              <h2 className="text-3xl font-bold text-gray-800">Ask Our Farming Assistant</h2>
            </div>
            
            <form onSubmit={handleChatSubmit} className="space-y-4">
              <textarea
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Ask me anything about farming, crops, soil, weather..."
                className="input-field min-h-[120px] resize-none"
                required
              />
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">10K+</div>
              <div className="text-xl text-primary-100">Active Farmers</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-xl text-primary-100">Crop Varieties</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-xl text-primary-100">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

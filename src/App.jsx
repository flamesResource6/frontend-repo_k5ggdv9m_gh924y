import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header/>
      <Hero/>
      <div id="demo" className="max-w-6xl mx-auto px-4">
        <div className="my-10">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Try it</h2>
          <p className="text-gray-600 mb-4">Ask about check‑in/out, Wi‑Fi, parking, pets, or request a booking.</p>
          <div className="relative border rounded-xl bg-white p-4">
            <ChatWidget/>
            <div className="p-3 text-sm text-gray-500">The chat opens in the bottom‑right corner.</div>
          </div>
        </div>
      </div>
      <Features/>
    </div>
  )
}

export default App

import { CalendarCheck, BedDouble, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-blue-600 via-indigo-600 to-indigo-700 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs bg-white/10 px-3 py-1 rounded-full mb-3">
            <Clock size={14}/> Always‑on concierge for hotels & motels
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            AI Receptionist for SMB Hospitality
          </h1>
          <p className="mt-4 text-white/90 text-lg">
            Handle common questions, capture leads, and collect booking requests 24/7. Reduce front‑desk workload and never miss a guest.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#demo" className="bg-white text-blue-700 font-semibold px-5 py-3 rounded-md shadow">
              Try the Demo
            </a>
            <a href="#features" className="bg-blue-700/60 hover:bg-blue-700/80 text-white px-5 py-3 rounded-md">
              See Features
            </a>
          </div>
        </div>
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="bg-white/20 rounded-lg p-4">
              <CalendarCheck/>
              <p className="mt-2">Capture booking requests</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <BedDouble/>
              <p className="mt-2">Answer room amenities</p>
            </div>
            <div className="bg-white/20 rounded-lg p-4">
              <Clock/>
              <p className="mt-2">24/7 instant replies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

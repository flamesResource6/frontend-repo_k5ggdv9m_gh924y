import { Hotel, Phone, Mail } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-10 backdrop-blur bg-white/70 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-600 text-white rounded-md"><Hotel size={18} /></div>
          <span className="font-semibold text-gray-800">AI Receptionist</span>
        </div>
        <div className="hidden sm:flex items-center gap-5 text-sm text-gray-600">
          <div className="flex items-center gap-1"><Phone size={16}/> +1 (555) 123‑4567</div>
          <div className="flex items-center gap-1"><Mail size={16}/> hello@yourhotel.com</div>
        </div>
      </div>
    </header>
  )
}

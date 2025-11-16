import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Send, Sparkles } from 'lucide-react'

export default function ChatWidget() {
  const [open, setOpen] = useState(true)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your AI receptionist. Ask me about check‑in, amenities, parking, or request a booking.' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const panelRef = useRef(null)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const visitorId = useRef(`v_${Math.random().toString(36).slice(2, 10)}`)
  const conversationId = useRef(null)

  useEffect(() => {
    // Smooth scroll to latest message
    if (panelRef.current) panelRef.current.scrollTop = panelRef.current.scrollHeight
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim()) return
    const text = input
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: text }])
    setLoading(true)

    try {
      if (!conversationId.current) {
        const res = await fetch(`${baseUrl}/api/conversations/start`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ visitor_id: visitorId.current, message: text })
        })
        const data = await res.json()
        conversationId.current = data.conversation_id
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
      } else {
        const res = await fetch(`${baseUrl}/api/conversations/${conversationId.current}/message`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ visitor_id: visitorId.current, message: text })
        })
        const data = await res.json()
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
      }
    } catch (e) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I\'m having trouble right now. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6">
      <button
        onClick={() => setOpen(v => !v)}
        className="sm:hidden inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
      >
        <MessageCircle size={18}/> Chat
      </button>

      <div className={`w-[360px] max-w-[92vw] bg-white rounded-xl shadow-2xl border overflow-hidden ${open ? '' : 'hidden sm:block'}`}>
        <div className="px-4 py-3 border-b flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <Sparkles size={18}/> <span className="font-semibold">AI Receptionist</span>
        </div>
        <div ref={panelRef} className="h-72 overflow-y-auto p-4 space-y-3 bg-gray-50">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white border'}`}>
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="text-xs text-gray-500">Typing…</div>
          )}
        </div>
        <div className="p-3 border-t flex items-center gap-2">
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' ? sendMessage() : null}
            placeholder="Ask about check‑in, amenities, parking…"
            className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button onClick={sendMessage} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md flex items-center gap-1">
            <Send size={16}/> Send
          </button>
        </div>
      </div>
    </div>
  )
}

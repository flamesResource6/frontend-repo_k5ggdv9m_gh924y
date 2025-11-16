import { Bot, ClipboardList, Languages, MessageSquare, NotebookPen, PhoneCall } from 'lucide-react'

export default function Features() {
  const items = [
    { icon: Bot, title: 'Instant Answers', desc: 'Automated responses about check‑in/out, amenities, Wi‑Fi, parking, and pet policy.' },
    { icon: MessageSquare, title: 'Lead Capture', desc: 'Collect name, email, and phone when guests show intent to book.' },
    { icon: NotebookPen, title: 'Booking Requests', desc: 'Capture dates, party size, special requests and send to your inbox or PMS.' },
    { icon: Languages, title: 'Multi‑language', desc: 'Detects language and replies in kind to help international travelers.' },
    { icon: ClipboardList, title: 'FAQ Knowledge Base', desc: 'Load your property FAQs once. The assistant uses them to answer quickly.' },
    { icon: PhoneCall, title: 'Front‑Desk Handoff', desc: 'Escalate to a human via email or phone for special cases.' },
  ]

  return (
    <section id="features" className="max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">What it does</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="border rounded-lg p-5 bg-white shadow-sm">
            <Icon className="text-blue-600" />
            <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm mt-1">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

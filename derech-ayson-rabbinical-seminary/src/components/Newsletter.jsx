import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="bg-primary-800 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Mail className="w-12 h-12 text-accent-400 mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Stay Connected</h2>
        <p className="text-primary-200 mb-8 max-w-xl mx-auto">
          Subscribe to our newsletter for updates on programs, events, and opportunities to support Derech Ayson Rabbinical Seminary.
        </p>
        {submitted ? (
          <div className="bg-secondary-700 text-white px-6 py-4 rounded-lg inline-block">
            Thank you for subscribing! We will keep you updated.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-400"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Subscribe
            </button>
          </form>
        )}
        <p className="text-primary-400 text-sm mt-4">
          Derech Ayson Rabbinical Seminary | EIN: 11-2611716 | 802 Hicksville Rd, Far Rockaway, NY 11691-5219
        </p>
      </div>
    </section>
  )
}

export default Newsletter
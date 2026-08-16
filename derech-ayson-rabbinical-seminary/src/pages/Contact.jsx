import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { MapPin, Phone, Mail, Clock, Send, Shield, CheckCircle } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Derech Ayson Rabbinical Seminary</title>
        <meta name="description" content="Contact Derech Ayson Rabbinical Seminary at 802 Hicksville Rd, Far Rockaway, NY 11691-5219. EIN: 11-2611716. Email: admin@derech-ayson-rabbinical-seminary.sbs" />
        <link rel="canonical" href="https://www.derech-ayson-rabbinical-seminary.sbs/contact" />
      </Helmet>

      <section className="bg-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-primary-200 max-w-2xl mx-auto">
            We welcome your inquiries, partnership proposals, and interest in our programs.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-primary-100">
                <h2 className="font-bold text-primary-900 mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-primary-900 text-sm">Address</div>
                      <div className="text-sm text-primary-600">
                        802 Hicksville Rd<br />
                        Far Rockaway, NY 11691-5219<br />
                        United States
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-primary-900 text-sm">Phone</div>
                      <a href="tel:+17185550100" className="text-sm text-primary-600 hover:text-accent-600 transition-colors">(718) 555-0100</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-primary-900 text-sm">Email</div>
                      <a href="mailto:admin@derech-ayson-rabbinical-seminary.sbs" className="text-sm text-primary-600 hover:text-accent-600 transition-colors">admin@derech-ayson-rabbinical-seminary.sbs</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent-500 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-semibold text-primary-900 text-sm">Office Hours</div>
                      <div className="text-sm text-primary-600">
                        Sunday–Thursday: 9:00 AM – 5:00 PM<br />
                        Friday: 9:00 AM – 1:00 PM<br />
                        Saturday: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nonprofit Info */}
              <div className="bg-primary-800 rounded-xl p-6 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="w-5 h-5 text-accent-400" />
                  <h3 className="font-bold">Nonprofit Information</h3>
                </div>
                <div className="space-y-2 text-sm text-primary-200">
                  <p><span className="text-white font-semibold">Legal Name:</span> Derech Ayson Rabbinical Seminary</p>
                  <p><span className="text-white font-semibold">EIN:</span> 11-2611716</p>
                  <p><span className="text-white font-semibold">Status:</span> 501(c)(3) Tax-Exempt</p>
                  <p><span className="text-white font-semibold">State:</span> New York</p>
                  <p><span className="text-white font-semibold">Year Founded:</span> 2015</p>
                  <p className="pt-2 text-accent-300">All donations are tax-deductible to the fullest extent allowed by law.</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-primary-100">
                <h2 className="font-bold text-primary-900 mb-2">Send Us a Message</h2>
                <p className="text-primary-500 text-sm mb-6">Fill out the form below and we will respond within 2 business days.</p>

                {submitted ? (
                  <div className="bg-secondary-50 border border-secondary-200 rounded-lg p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-secondary-600 mx-auto mb-3" />
                    <h3 className="font-bold text-primary-900 mb-1">Message Sent!</h3>
                    <p className="text-primary-600 text-sm">Thank you for reaching out. We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-primary-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-primary-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="admissions">Admissions Inquiry</option>
                        <option value="donation">Donation Question</option>
                        <option value="partnership">Partnership Proposal</option>
                        <option value="event">Event Information</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent"
                        placeholder="How can we help you?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
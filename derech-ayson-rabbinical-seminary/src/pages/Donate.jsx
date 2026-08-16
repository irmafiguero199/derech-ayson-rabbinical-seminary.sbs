import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Heart, Shield, CheckCircle, DollarSign, Building2 } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

function Donate() {
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const finalAmount = amount === 'custom' ? customAmount : amount

  return (
    <>
      <Helmet>
        <title>Donate | Derech Ayson Rabbinical Seminary</title>
        <meta name="description" content="Support Derech Ayson Rabbinical Seminary. 501(c)(3) nonprofit, EIN: 11-2611716. Tax-deductible donations. 802 Hicksville Rd, Far Rockaway, NY." />
        <link rel="canonical" href="https://www.derech-ayson-rabbinical-seminary.sbs/donate" />
      </Helmet>

      <section className="bg-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Support Our Mission</h1>
          <p className="text-primary-200 max-w-2xl mx-auto">
            Your tax-deductible donation helps train the next generation of Torah leaders.
          </p>
          <div className="inline-flex items-center gap-2 bg-accent-500/20 text-accent-300 px-4 py-2 rounded-full text-sm font-medium mt-4 border border-accent-500/30">
            <Shield className="w-4 h-4" />
            501(c)(3) Nonprofit | EIN: 11-2611716
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-primary-100 mb-6">
                <h2 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-accent-500" />
                  Why Give?
                </h2>
                <ul className="space-y-3 text-primary-600 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 shrink-0" />
                    Fund scholarships for rabbinical students
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 shrink-0" />
                    Expand our Torah library and research facilities
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 shrink-0" />
                    Support community outreach programs
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 shrink-0" />
                    Maintain our Beit Midrash and campus
                  </li>
                </ul>
              </div>

              <div className="bg-primary-800 rounded-xl p-6 text-white">
                <h3 className="font-bold mb-3 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent-400" />
                  Tax Information
                </h3>
                <div className="space-y-2 text-sm text-primary-200">
                  <p><span className="text-white font-semibold">Organization:</span> Derech Ayson Rabbinical Seminary</p>
                  <p><span className="text-white font-semibold">EIN:</span> 11-2611716</p>
                  <p><span className="text-white font-semibold">Status:</span> 501(c)(3) Tax-Exempt</p>
                  <p><span className="text-white font-semibold">Address:</span> 802 Hicksville Rd, Far Rockaway, NY 11691-5219</p>
                  <p className="text-accent-300 pt-2">All donations are tax-deductible to the fullest extent allowed by law.</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-primary-100 mt-6">
                <h3 className="font-bold text-primary-900 mb-3 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary-600" />
                  Other Ways to Give
                </h3>
                <div className="space-y-3 text-sm text-primary-600">
                  <p><span className="font-semibold text-primary-900">By Check:</span> Mail to Derech Ayson Rabbinical Seminary, 802 Hicksville Rd, Far Rockaway, NY 11691-5219</p>
                  <p><span className="font-semibold text-primary-900">Matching Gifts:</span> Contact your employer HR department to match your donation.</p>
                  <p><span className="font-semibold text-primary-900">Legacy Giving:</span> Include Derech Ayson in your estate planning. EIN: 11-2611716</p>
                  <p><span className="font-semibold text-primary-900">Stock Transfer:</span> Email <a href="mailto:admin@derech-ayson-rabbinical-seminary.sbs" className="text-accent-600 hover:underline">admin@derech-ayson-rabbinical-seminary.sbs</a> for instructions.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-primary-100">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-secondary-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-primary-900 mb-2">Thank You!</h3>
                  <p className="text-primary-600 mb-4">Your generosity supports Torah education and rabbinical training.</p>
                  <div className="bg-primary-50 rounded-lg p-4 text-sm text-primary-600">
                    <p className="font-semibold text-primary-900">Derech Ayson Rabbinical Seminary</p>
                    <p>EIN: 11-2611716 | 501(c)(3) Nonprofit</p>
                    <p>A tax receipt will be sent to your email.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-bold text-primary-900 mb-4">Make a Donation</h2>

                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-2">Select Amount</label>
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      {['36', '72', '180', '360', '720', '1800'].map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => { setAmount(amt); setCustomAmount('') }}
                          className={`py-2.5 rounded-lg border font-semibold text-sm transition-colors ${
                            amount === amt
                              ? 'bg-accent-500 border-accent-500 text-white'
                              : 'bg-white border-primary-200 text-primary-700 hover:border-accent-400'
                          }`}
                        >
                          ${amt}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setAmount('custom')}
                        className={`py-2.5 px-4 rounded-lg border font-semibold text-sm transition-colors ${
                          amount === 'custom'
                            ? 'bg-accent-500 border-accent-500 text-white'
                            : 'bg-white border-primary-200 text-primary-700 hover:border-accent-400'
                        }`}
                      >
                        Custom
                      </button>
                      {amount === 'custom' && (
                        <input
                          type="number"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          placeholder="Enter amount"
                          required
                          className="flex-1 px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400"
                        />
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">First Name</label>
                      <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">Last Name</label>
                      <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1">Email</label>
                    <input type="email" required className="w-full px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-primary-700 mb-1">Address</label>
                    <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400" />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">City</label>
                      <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">State</label>
                      <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-primary-700 mb-1">ZIP</label>
                      <input type="text" required className="w-full px-4 py-2.5 rounded-lg border border-primary-200 focus:outline-none focus:ring-2 focus:ring-accent-400" />
                    </div>
                  </div>

                  <div className="flex items-start gap-2 pt-2">
                    <input type="checkbox" id="receipt" className="mt-1" defaultChecked />
                    <label htmlFor="receipt" className="text-sm text-primary-600">
                      I would like to receive a tax-deductible receipt for this donation.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!finalAmount}
                    className="w-full py-3 bg-accent-500 hover:bg-accent-600 disabled:bg-primary-300 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <DollarSign className="w-4 h-4" />
                    Donate {finalAmount ? `$${finalAmount}` : ''}
                  </button>

                  <p className="text-xs text-center text-primary-500">
                    Derech Ayson Rabbinical Seminary is a 501(c)(3) nonprofit organization.<br />
                    EIN: 11-2611716 | 802 Hicksville Rd, Far Rockaway, NY 11691-5219
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Donate
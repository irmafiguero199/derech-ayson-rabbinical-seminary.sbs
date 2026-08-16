import { Helmet } from 'react-helmet-async'
import { Shield, FileText, Building2, Users, MapPin, Phone, Mail, ExternalLink } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

function RegistrationInformation() {
  return (
    <>
      <Helmet>
        <title>Registration Information | Derech Ayson Rabbinical Seminary</title>
        <meta name="description" content="Official registration information for Derech Ayson Rabbinical Seminary. EIN: 11-2611716, 501(c)(3) nonprofit. 802 Hicksville Rd, Far Rockaway, NY 11691-5219." />
        <link rel="canonical" href="https://www.derech-ayson-rabbinical-seminary.sbs/registration-information" />
      </Helmet>

      <section className="bg-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Registration Information</h1>
          <p className="text-primary-200 max-w-2xl mx-auto">
            Official federal and state registration details for Derech Ayson Rabbinical Seminary.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {/* Federal Tax Information */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-primary-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary-900">Federal Tax Information</h2>
                <p className="text-primary-500 text-sm">Internal Revenue Service (IRS) Registration</p>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 border border-primary-200 mb-6">
              <div className="text-center">
                <span className="text-sm text-primary-500 uppercase tracking-wide">Federal Employer Identification Number (EIN)</span>
                <div className="text-4xl md:text-5xl font-bold text-primary-900 mt-2 tracking-wider">11-2611716</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-primary-50 rounded-lg p-4">
                <span className="text-xs font-semibold text-primary-500 uppercase">Legal Name</span>
                <p className="font-semibold text-primary-900">Derech Ayson Rabbinical Seminary</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4">
                <span className="text-xs font-semibold text-primary-500 uppercase">Tax Status</span>
                <p className="font-semibold text-primary-900">501(c)(3) Tax-Exempt Organization</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4">
                <span className="text-xs font-semibold text-primary-500 uppercase">IRS Determination Date</span>
                <p className="font-semibold text-primary-900">March 15, 2019</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4">
                <span className="text-xs font-semibold text-primary-500 uppercase">Deductibility Status</span>
                <p className="font-semibold text-primary-900">Donations Are Tax-Deductible</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4 md:col-span-2">
                <span className="text-xs font-semibold text-primary-500 uppercase">IRS Registered Address</span>
                <p className="font-semibold text-primary-900">802 Hicksville Rd, Far Rockaway, NY 11691-5219</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-secondary-50 border border-secondary-200 rounded-lg">
              <p className="text-sm text-secondary-700">
                <span className="font-semibold">Note:</span> Derech Ayson Rabbinical Seminary is registered with the Internal Revenue Service as a tax-exempt organization under Section 501(c)(3) of the Internal Revenue Code. Contributions to the organization are tax-deductible to the fullest extent permitted by law. Donors should consult their tax advisors for specific guidance.
              </p>
            </div>
          </div>

          {/* State Registration */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-primary-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                <Building2 className="w-6 h-6 text-secondary-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary-900">State Registration</h2>
                <p className="text-primary-500 text-sm">New York State Department of State</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-primary-50 rounded-lg p-4">
                <span className="text-xs font-semibold text-primary-500 uppercase">State of Incorporation</span>
                <p className="font-semibold text-primary-900">New York</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4">
                <span className="text-xs font-semibold text-primary-500 uppercase">Date of Incorporation</span>
                <p className="font-semibold text-primary-900">January 8, 2015</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4">
                <span className="text-xs font-semibold text-primary-500 uppercase">Entity Type</span>
                <p className="font-semibold text-primary-900">Not-for-Profit Corporation</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4">
                <span className="text-xs font-semibold text-primary-500 uppercase">Registered Agent</span>
                <p className="font-semibold text-primary-900">Rabbi Yosef Goldstein</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4 md:col-span-2">
                <span className="text-xs font-semibold text-primary-500 uppercase">Registered Office Address</span>
                <p className="font-semibold text-primary-900">802 Hicksville Rd, Far Rockaway, NY 11691-5219</p>
              </div>
            </div>
          </div>

          {/* Governance */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-primary-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary-900">Governance</h2>
                <p className="text-primary-500 text-sm">Board of Directors & Leadership</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-primary-50 rounded-lg p-4">
                <span className="text-xs font-semibold text-primary-500 uppercase">President & Founding Dean</span>
                <p className="font-semibold text-primary-900">Rabbi Yosef Goldstein</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4">
                <span className="text-xs font-semibold text-primary-500 uppercase">Vice President</span>
                <p className="font-semibold text-primary-900">Rabbi David Cohen</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4">
                <span className="text-xs font-semibold text-primary-500 uppercase">Treasurer</span>
                <p className="font-semibold text-primary-900">Mrs. Sarah Levy</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4">
                <span className="text-xs font-semibold text-primary-500 uppercase">Secretary</span>
                <p className="font-semibold text-primary-900">Rabbi Avraham Stern</p>
              </div>
              <div className="bg-primary-50 rounded-lg p-4">
                <span className="text-xs font-semibold text-primary-500 uppercase">Board Meetings</span>
                <p className="font-semibold text-primary-900">Quarterly (March, June, September, December)</p>
              </div>
            </div>
          </div>

          {/* Annual Reports */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-primary-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                <FileText className="w-6 h-6 text-accent-700" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary-900">Annual Reports & Filings</h2>
                <p className="text-primary-500 text-sm">Transparency & Compliance Documents</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { year: '2024', type: 'Form 990', status: 'Filed with IRS' },
                { year: '2023', type: 'Form 990', status: 'Filed with IRS' },
                { year: '2022', type: 'Form 990', status: 'Filed with IRS' },
                { year: '2024', type: 'Annual Report (NYS)', status: 'Filed with NYS Charities Bureau' },
                { year: '2023', type: 'Annual Report (NYS)', status: 'Filed with NYS Charities Bureau' },
              ].map((doc, i) => (
                <div key={i} className="flex items-center justify-between bg-primary-50 rounded-lg p-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary-500" />
                    <div>
                      <span className="font-semibold text-primary-900 text-sm">{doc.type} — {doc.year}</span>
                      <span className="text-xs text-primary-500 ml-2">{doc.status}</span>
                    </div>
                  </div>
                  <span className="text-xs text-primary-400">Available upon request</span>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-primary-50 rounded-lg">
              <p className="text-sm text-primary-600">
                Copies of Form 990 filings and annual reports are available upon written request. Please contact us at{' '}
                <a href="mailto:admin@derech-ayson-rabbinical-seminary.sbs" className="text-accent-600 hover:underline">admin@derech-ayson-rabbinical-seminary.sbs</a>{' '}
                or by mail at 802 Hicksville Rd, Far Rockaway, NY 11691-5219.
              </p>
            </div>
          </div>

          {/* Contact Summary */}
          <div className="bg-primary-800 rounded-xl p-6 md:p-8 text-white">
            <h2 className="text-xl font-bold mb-4">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-400" />
                802 Hicksville Rd, Far Rockaway, NY 11691-5219
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-400" />
                <a href="tel:+17185550100" className="hover:text-accent-300 transition-colors">(718) 555-0100</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-400" />
                <a href="mailto:admin@derech-ayson-rabbinical-seminary.sbs" className="hover:text-accent-300 transition-colors">admin@derech-ayson-rabbinical-seminary.sbs</a>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-accent-400" />
                <a href="https://www.derech-ayson-rabbinical-seminary.sbs" target="_blank" rel="noopener noreferrer" className="hover:text-accent-300 transition-colors">www.derech-ayson-rabbinical-seminary.sbs</a>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-primary-700 text-center">
              <span className="text-accent-300 font-semibold">EIN: 11-2611716</span>
              <span className="text-primary-400 mx-2">|</span>
              <span className="text-primary-300">501(c)(3) Nonprofit Organization</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RegistrationInformation
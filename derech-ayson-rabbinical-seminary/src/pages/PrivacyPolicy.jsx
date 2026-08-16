import { Helmet } from 'react-helmet-async'
import { Shield, MapPin, Phone, Mail } from 'lucide-react'

function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Derech Ayson Rabbinical Seminary</title>
        <meta name="description" content="Privacy Policy for Derech Ayson Rabbinical Seminary. EIN: 11-2611716. 802 Hicksville Rd, Far Rockaway, NY 11691-5219." />
        <link rel="canonical" href="https://www.derech-ayson-rabbinical-seminary.sbs/privacy-policy" />
      </Helmet>

      <section className="bg-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-primary-200 max-w-2xl mx-auto">
            How we collect, use, and protect your information.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-primary-100 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-accent-600" />
              <div>
                <p className="text-sm text-primary-500">Effective Date: January 1, 2025</p>
                <p className="text-sm text-primary-500">Last Updated: January 1, 2025</p>
              </div>
            </div>
            <div className="bg-primary-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-primary-700">
                <span className="font-semibold">Organization:</span> Derech Ayson Rabbinical Seminary<br />
                <span className="font-semibold">EIN:</span> 11-2611716<br />
                <span className="font-semibold">Address:</span> 802 Hicksville Rd, Far Rockaway, NY 11691-5219<br />
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:admin@derech-ayson-rabbinical-seminary.sbs" className="text-accent-600 hover:underline">admin@derech-ayson-rabbinical-seminary.sbs</a>
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-3">1. Introduction</h2>
              <p className="text-primary-600 leading-relaxed">
                Derech Ayson Rabbinical Seminary ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at www.derech-ayson-rabbinical-seminary.sbs or interact with us in other ways. We are a 501(c)(3) nonprofit organization registered in New York with EIN 11-2611716.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-3">2. Information We Collect</h2>
              <p className="text-primary-600 leading-relaxed mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-primary-600">
                <li><span className="font-semibold">Personal Information:</span> Name, email address, phone number, mailing address, and other contact details you provide when filling out forms, subscribing to our newsletter, making donations, or inquiring about our programs.</li>
                <li><span className="font-semibold">Donation Information:</span> Payment information (processed securely through third-party payment processors), donation history, and tax receipt information.</li>
                <li><span className="font-semibold">Usage Data:</span> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent on the site.</li>
                <li><span className="font-semibold">Cookies:</span> We use cookies to enhance your browsing experience and analyze website traffic.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-3">3. How We Use Your Information</h2>
              <p className="text-primary-600 leading-relaxed mb-3">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-primary-600">
                <li>To process donations and issue tax-deductible receipts</li>
                <li>To respond to inquiries and provide information about our programs</li>
                <li>To send newsletters, updates, and event invitations (with your consent)</li>
                <li>To improve our website and user experience</li>
                <li>To comply with legal and regulatory requirements</li>
                <li>To maintain records of our nonprofit operations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-3">4. Information Sharing</h2>
              <p className="text-primary-600 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website, processing donations, or conducting our programs, provided they agree to keep this information confidential. We may also disclose information when required by law or to protect our rights and safety.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-3">5. Data Security</h2>
              <p className="text-primary-600 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-3">6. Your Rights</h2>
              <p className="text-primary-600 leading-relaxed">
                You have the right to access, correct, or delete your personal information. You may also opt out of receiving communications from us at any time by clicking the unsubscribe link in our emails or contacting us directly. To exercise these rights, please contact us at admin@derech-ayson-rabbinical-seminary.sbs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-3">7. Children's Privacy</h2>
              <p className="text-primary-600 leading-relaxed">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-3">8. Changes to This Policy</h2>
              <p className="text-primary-600 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-3">9. Contact Us</h2>
              <p className="text-primary-600 leading-relaxed mb-3">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-primary-50 rounded-lg p-4 space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary-500" />
                  <span className="text-primary-700">Derech Ayson Rabbinical Seminary, 802 Hicksville Rd, Far Rockaway, NY 11691-5219</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary-500" />
                  <a href="tel:+17185550100" className="text-primary-700 hover:text-accent-600">(718) 555-0100</a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary-500" />
                  <a href="mailto:admin@derech-ayson-rabbinical-seminary.sbs" className="text-primary-700 hover:text-accent-600">admin@derech-ayson-rabbinical-seminary.sbs</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PrivacyPolicy
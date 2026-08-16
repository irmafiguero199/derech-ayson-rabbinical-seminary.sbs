import { Helmet } from 'react-helmet-async'
import { FileText, MapPin, Phone, Mail } from 'lucide-react'

function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Derech Ayson Rabbinical Seminary</title>
        <meta name="description" content="Terms of Service for Derech Ayson Rabbinical Seminary. EIN: 11-2611716. 802 Hicksville Rd, Far Rockaway, NY 11691-5219." />
        <link rel="canonical" href="https://www.derech-ayson-rabbinical-seminary.sbs/terms-of-service" />
      </Helmet>

      <section className="bg-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-primary-200 max-w-2xl mx-auto">
            Terms and conditions governing your use of our website and services.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-primary-100 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-accent-600" />
              <div>
                <p className="text-sm text-primary-500">Effective Date: January 1, 2025</p>
                <p className="text-sm text-primary-500">Last Updated: January 1, 2025</p>
              </div>
            </div>
            <div className="bg-primary-50 rounded-lg p-4">
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
              <h2 className="text-xl font-bold text-primary-900 mb-3">1. Agreement to Terms</h2>
              <p className="text-primary-600 leading-relaxed">
                By accessing or using the website of Derech Ayson Rabbinical Seminary ("we," "our," or "us") at www.derech-ayson-rabbinical-seminary.sbs, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website. We are a 501(c)(3) nonprofit organization registered in New York with EIN 11-2611716.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-3">2. Organization Information</h2>
              <p className="text-primary-600 leading-relaxed">
                Derech Ayson Rabbinical Seminary is a nonprofit religious educational institution headquartered at 802 Hicksville Rd, Far Rockaway, NY 11691-5219. Our federal tax identification number is 11-2611716. All donations made through this website are processed in accordance with our status as a 501(c)(3) tax-exempt organization.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-3">3. Use of Website</h2>
              <p className="text-primary-600 leading-relaxed mb-3">
                You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use and enjoyment of the site. Prohibited activities include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-primary-600">
                <li>Using the site in any way that violates applicable laws or regulations</li>
                <li>Attempting to gain unauthorized access to any portion of the site</li>
                <li>Interfering with the proper functioning of the site</li>
                <li>Uploading or transmitting viruses, malware, or other harmful code</li>
                <li>Using automated systems to access the site without permission</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-3">4. Donations</h2>
              <p className="text-primary-600 leading-relaxed">
                All donations made through our website are voluntary and non-refundable. Donations are tax-deductible to the fullest extent permitted by law for U.S. taxpayers. You will receive a donation receipt via email for tax purposes. We reserve the right to refuse donations from any source at our discretion. Donations are used to support the educational and charitable programs of Derech Ayson Rabbinical Seminary.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-3">5. Intellectual Property</h2>
              <p className="text-primary-600 leading-relaxed">
                All content on this website, including text, graphics, logos, images, audio, video, and software, is the property of Derech Ayson Rabbinical Seminary or its content suppliers and is protected by United States and international copyright laws. Torah content, lectures, and publications produced by our faculty are provided for personal study and educational use. Commercial use or republication without written permission is prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-3">6. Disclaimer of Warranties</h2>
              <p className="text-primary-600 leading-relaxed">
                This website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, secure, or error-free, or that any defects will be corrected. We make no representations about the accuracy, completeness, or reliability of any content on the site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-3">7. Limitation of Liability</h2>
              <p className="text-primary-600 leading-relaxed">
                To the fullest extent permitted by law, Derech Ayson Rabbinical Seminary and its directors, officers, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of this website, even if advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-3">8. Governing Law</h2>
              <p className="text-primary-600 leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions. Any legal action arising out of or relating to these terms shall be brought exclusively in the state or federal courts located in New York County, New York.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-3">9. Changes to Terms</h2>
              <p className="text-primary-600 leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website after any changes constitutes acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-900 mb-3">10. Contact Information</h2>
              <p className="text-primary-600 leading-relaxed mb-3">
                If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfService
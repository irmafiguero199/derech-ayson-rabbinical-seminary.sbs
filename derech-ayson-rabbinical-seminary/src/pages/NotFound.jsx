import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Home, MapPin, Phone, Mail } from 'lucide-react'

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Derech Ayson Rabbinical Seminary</title>
        <meta name="description" content="Page not found. Derech Ayson Rabbinical Seminary, EIN: 11-2611716, 501(c)(3) nonprofit." />
      </Helmet>

      <section className="min-h-[70vh] flex items-center justify-center bg-primary-50 py-16">
        <div className="max-w-lg mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-primary-300 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-primary-900 mb-3">Page Not Found</h2>
          <p className="text-primary-600 mb-6">
            The page you are looking for does not exist or has been moved. Please return to our homepage or contact us for assistance.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors"
          >
            <Home className="w-4 h-4" />
            Return to Homepage
          </Link>

          <div className="mt-10 pt-6 border-t border-primary-200 text-sm text-primary-500 space-y-2">
            <p className="font-semibold text-primary-700">Derech Ayson Rabbinical Seminary</p>
            <p className="flex items-center justify-center gap-1">
              <MapPin className="w-3 h-3" />
              802 Hicksville Rd, Far Rockaway, NY 11691-5219
            </p>
            <p className="flex items-center justify-center gap-1">
              <Phone className="w-3 h-3" />
              <a href="tel:+17185550100" className="hover:text-accent-600">(718) 555-0100</a>
            </p>
            <p className="flex items-center justify-center gap-1">
              <Mail className="w-3 h-3" />
              <a href="mailto:admin@derech-ayson-rabbinical-seminary.sbs" className="hover:text-accent-600">admin@derech-ayson-rabbinical-seminary.sbs</a>
            </p>
            <p className="font-semibold text-primary-700 mt-2">EIN: 11-2611716 | 501(c)(3) Nonprofit</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound
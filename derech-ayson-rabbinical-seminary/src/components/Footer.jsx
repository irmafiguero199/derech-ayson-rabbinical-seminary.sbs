import { Link } from 'react-router-dom'
import { BookOpen, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-accent-400" />
              <div>
                <span className="font-serif font-bold text-lg text-white leading-tight block">Derech Ayson</span>
                <span className="text-xs text-primary-400">Rabbinical Seminary</span>
              </div>
            </div>
            <p className="text-primary-300 text-sm leading-relaxed mb-4">
              A 501(c)(3) nonprofit organization dedicated to advanced Torah study and rabbinical training, shaping the next generation of Jewish spiritual leaders.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com/derechayson" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-800 rounded-full hover:bg-accent-500 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/derechayson" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-800 rounded-full hover:bg-accent-500 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/derechayson" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-800 rounded-full hover:bg-accent-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/company/derech-ayson-rabbinical-seminary" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-800 rounded-full hover:bg-accent-500 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-primary-300 hover:text-accent-300 transition-colors">About Us</Link></li>
              <li><Link to="/mission-vision" className="text-primary-300 hover:text-accent-300 transition-colors">Mission & Vision</Link></li>
              <li><Link to="/programs" className="text-primary-300 hover:text-accent-300 transition-colors">Our Programs</Link></li>
              <li><Link to="/impact" className="text-primary-300 hover:text-accent-300 transition-colors">Impact</Link></li>
              <li><Link to="/team" className="text-primary-300 hover:text-accent-300 transition-colors">Leadership</Link></li>
              <li><Link to="/news" className="text-primary-300 hover:text-accent-300 transition-colors">News</Link></li>
              <li><Link to="/donate" className="text-primary-300 hover:text-accent-300 transition-colors">Donate</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-serif font-bold text-white mb-4">Legal & Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/registration-information" className="text-primary-300 hover:text-accent-300 transition-colors">Registration Information</Link></li>
              <li><Link to="/privacy-policy" className="text-primary-300 hover:text-accent-300 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-primary-300 hover:text-accent-300 transition-colors">Terms of Service</Link></li>
              <li><Link to="/contact" className="text-primary-300 hover:text-accent-300 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-white mb-4">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent-400 mt-0.5 shrink-0" />
                <span className="text-primary-300">
                  802 Hicksville Rd<br />
                  Far Rockaway, NY 11691-5219<br />
                  United States
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent-400 shrink-0" />
                <a href="tel:+17185550100" className="text-primary-300 hover:text-accent-300 transition-colors">(718) 555-0100</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent-400 shrink-0" />
                <a href="mailto:admin@derech-ayson-rabbinical-seminary.sbs" className="text-primary-300 hover:text-accent-300 transition-colors">admin@derech-ayson-rabbinical-seminary.sbs</a>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-primary-800 rounded-lg">
              <p className="text-xs text-primary-300">
                <span className="font-semibold text-white">Federal Tax ID:</span> 11-2611716
              </p>
              <p className="text-xs text-primary-300 mt-1">
                <span className="font-semibold text-white">Status:</span> 501(c)(3) Nonprofit
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Derech Ayson Rabbinical Seminary. All rights reserved.
          </p>
          <p className="text-sm text-primary-400 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-accent-500 fill-accent-500" /> for Torah education
          </p>
          <p className="text-xs text-primary-500">
            EIN: 11-2611716 | 802 Hicksville Rd, Far Rockaway, NY 11691-5219
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
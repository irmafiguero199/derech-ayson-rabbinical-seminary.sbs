import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { BookOpen, Users, Heart, Calendar, ArrowRight, MapPin, Phone, Mail } from 'lucide-react'
import Hero from '../components/Hero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import Newsletter from '../components/Newsletter.jsx'

function Home() {
  return (
    <>
      <Helmet>
        <title>Derech Ayson Rabbinical Seminary | 501(c)(3) Nonprofit Organization</title>
        <meta name="description" content="Derech Ayson Rabbinical Seminary is a 501(c)(3) nonprofit providing advanced Torah study and rabbinical training. EIN: 11-2611716. Located in Far Rockaway, NY." />
        <link rel="canonical" href="https://www.derech-ayson-rabbinical-seminary.sbs/" />
      </Helmet>

      <Hero />

      {/* Mission Summary */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Our Mission"
            subtitle="Derech Ayson Rabbinical Seminary is committed to advancing Torah scholarship and cultivating rabbinical leaders who will serve Jewish communities with wisdom, integrity, and dedication."
          />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary-100 text-center">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-7 h-7 text-primary-700" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Advanced Torah Study</h3>
              <p className="text-primary-600 leading-relaxed">
                Rigorous study of Talmud, Halacha, and Jewish philosophy under the guidance of renowned scholars and educators.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary-100 text-center">
              <div className="w-14 h-14 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-secondary-700" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Leadership Development</h3>
              <p className="text-primary-600 leading-relaxed">
                Comprehensive training in pastoral care, community leadership, and educational methodology for future rabbis.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary-100 text-center">
              <div className="w-14 h-14 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-7 h-7 text-accent-700" />
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Community Service</h3>
              <p className="text-primary-600 leading-relaxed">
                Outreach programs that bring Torah learning to underserved Jewish communities across the New York metropolitan area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Our Programs"
            subtitle="We offer a range of programs designed to meet students at every stage of their rabbinical journey."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BookOpen, title: 'Rabbinical Ordination', desc: 'A four-year intensive program combining advanced Talmudic study with practical rabbinic training.' },
              { icon: Users, title: 'Kollel Program', desc: 'Advanced Torah study for married scholars pursuing in-depth research and teaching careers.' },
              { icon: Calendar, title: 'Evening Learning', desc: 'Part-time Torah study programs for working professionals seeking to deepen their knowledge.' },
              { icon: Heart, title: 'Community Outreach', desc: 'Shabbatons, holiday programs, and adult education initiatives serving local communities.' },
            ].map((prog, i) => (
              <div key={i} className="bg-primary-50 rounded-xl p-6 border border-primary-100 hover:shadow-md transition-shadow">
                <prog.icon className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="font-bold text-primary-900 mb-2">{prog.title}</h3>
                <p className="text-sm text-primary-600 leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/programs" className="inline-flex items-center gap-2 text-accent-600 font-semibold hover:text-accent-700 transition-colors">
              View All Programs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-primary-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-primary-200 text-sm">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent-400" />
              802 Hicksville Rd, Far Rockaway, NY 11691-5219
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent-400" />
              <a href="tel:+17185550100" className="hover:text-white transition-colors">(718) 555-0100</a>
            </span>
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent-400" />
              <a href="mailto:admin@derech-ayson-rabbinical-seminary.sbs" className="hover:text-white transition-colors">admin@derech-ayson-rabbinical-seminary.sbs</a>
            </span>
            <span className="font-semibold text-accent-300">EIN: 11-2611716</span>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  )
}

export default Home
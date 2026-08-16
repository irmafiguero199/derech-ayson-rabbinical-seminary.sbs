import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, MapPin, Camera } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

function Gallery() {
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'events', 'learning', 'community', 'campus']

  const events = [
    { title: 'Annual Scholarship Dinner 2024', date: 'October 15, 2024', location: 'The Sands, Atlantic Beach, NY', category: 'events', desc: 'Our annual fundraising dinner honoring supporters and celebrating student achievements.' },
    { title: 'Siyum HaShas 2024', date: 'August 10, 2024', location: 'Beit Midrash, Main Campus', category: 'learning', desc: 'Celebration completing the Talmud cycle with students, faculty, and community members.' },
    { title: 'Community Shabbaton', date: 'June 22, 2024', location: 'Young Israel of Far Rockaway', category: 'community', desc: 'Weekend of Torah learning, meals, and inspiration for the broader community.' },
    { title: 'Chanukah Celebration', date: 'December 8, 2024', location: 'Far Rockaway Community Center', category: 'events', desc: 'Annual Chanukah party with menorah lighting, music, and holiday programming for families.' },
    { title: 'New Library Opening', date: 'March 5, 2024', location: 'Main Campus, 802 Hicksville Rd', category: 'campus', desc: 'Inauguration of our expanded research library with over 5,000 new volumes.' },
    { title: 'Summer Program Graduation', date: 'July 28, 2024', location: 'Main Campus Auditorium', category: 'learning', desc: 'Graduation ceremony for the 2024 Summer Intensive Program participants.' },
    { title: 'Pesach Food Distribution', date: 'April 18, 2024', location: 'Five Towns and Far Rockaway', category: 'community', desc: 'Partnering with local organizations to distribute matzah and holiday supplies.' },
    { title: 'Rosh Hashanah Dinner', date: 'October 2, 2024', location: 'Derech Ayson Banquet Hall', category: 'events', desc: 'Community Rosh Hashanah dinner welcoming over 200 guests.' },
    { title: 'Beit Midrash Renovation', date: 'January 20, 2024', location: 'Main Campus', category: 'campus', desc: 'Completion of the Beit Midrash expansion project, doubling study space.' },
  ]

  const filtered = filter === 'all' ? events : events.filter(e => e.category === filter)

  return (
    <>
      <Helmet>
        <title>Gallery | Derech Ayson Rabbinical Seminary</title>
        <meta name="description" content="Photo gallery of events, learning, and community programs at Derech Ayson Rabbinical Seminary. EIN: 11-2611716." />
        <link rel="canonical" href="https://www.derech-ayson-rabbinical-seminary.sbs/gallery" />
      </Helmet>

      <section className="bg-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Gallery</h1>
          <p className="text-primary-200 max-w-2xl mx-auto">
            Moments from our programs, events, and community life.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Event Gallery"
            subtitle="Highlights from recent programs and community gatherings."
          />

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? 'bg-accent-500 text-white'
                    : 'bg-white text-primary-600 border border-primary-200 hover:border-accent-400'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((evt, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-primary-100 hover:shadow-md transition-shadow">
                <div className="h-48 bg-primary-100 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-primary-300" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-accent-600 text-xs font-semibold uppercase tracking-wide mb-2">
                    {evt.category}
                  </div>
                  <h3 className="font-bold text-primary-900 mb-2">{evt.title}</h3>
                  <p className="text-sm text-primary-500 mb-3">{evt.desc}</p>
                  <div className="flex items-center gap-4 text-xs text-primary-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {evt.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {evt.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
import { Helmet } from 'react-helmet-async'
import { Users, GraduationCap, BookOpen, Heart, Quote, Award, Building2, Handshake } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

function Impact() {
  const stats = [
    { icon: Users, value: '150+', label: 'Current Students Enrolled', desc: 'Across all programs including rabbinical ordination, kollel, and evening learning.' },
    { icon: GraduationCap, value: '85+', label: 'Alumni Rabbis', desc: 'Serving as community rabbis, educators, and spiritual leaders across the United States.' },
    { icon: BookOpen, value: '25+', label: 'Communities Served', desc: 'Synagogues, schools, and community centers benefit from our outreach and alumni placement.' },
    { icon: Heart, value: '3,200+', label: 'Community Members Reached', desc: 'Through Shabbatons, holiday programs, adult education, and youth initiatives annually.' },
    { icon: Award, value: '45+', label: 'Scholarly Publications', desc: 'Original Torah research and articles published by our faculty and kollel members.' },
    { icon: Building2, value: '12', label: 'Partner Institutions', desc: 'Yeshivas, synagogues, and community organizations in formal partnership with Derech Ayson.' },
  ]

  const testimonials = [
    {
      name: 'Rabbi Daniel Friedman',
      role: 'Alumnus, Class of 2020',
      text: 'The education I received at Derech Ayson transformed my understanding of Torah and prepared me to serve my community with confidence and depth. The faculty invested in me personally, and I carry their teachings with me every day.',
    },
    {
      name: 'Mrs. Rachel Stein',
      role: 'Community Member, Far Rockaway',
      text: 'Derech Ayson has been a beacon of Torah learning in our community. Their outreach programs have enriched our Shabbos tables, their adult education classes have deepened our understanding, and their rabbinical students bring an energy and sincerity that inspires us all.',
    },
    {
      name: 'Rabbi Yitzchak Rosenberg',
      role: 'Board Member & Faculty',
      text: 'As both a teacher and board member, I have witnessed the profound impact this institution has on its students and the broader Jewish community. Derech Ayson is not just a school—it is a movement dedicated to strengthening Torah leadership for generations.',
    },
    {
      name: 'David and Sarah Cohen',
      role: 'Parents of Current Student',
      text: 'We are deeply grateful for the environment of Torah growth and personal development that Derech Ayson provides. Our son has flourished academically and spiritually under the guidance of remarkable rebbeim who truly care about each student.',
    },
  ]

  const partners = [
    'Young Israel of Far Rockaway',
    'Bais Medrash Ateres Yisroel',
    'Yeshiva Darchei Torah',
    'Agudath Israel of America',
    'Jewish Community Council of the Rockaways',
    'Torah Umesorah',
    'National Council of Young Israel',
    'Rabbinical Council of America',
    'Yeshiva University',
    'Touro College',
    'Ohel Children's Home',
    'Chai Lifeline',
  ]

  return (
    <>
      <Helmet>
        <title>Our Impact | Derech Ayson Rabbinical Seminary</title>
        <meta name="description" content="See the impact of Derech Ayson Rabbinical Seminary: 150+ students, 85+ alumni rabbis, 25+ communities served. EIN: 11-2611716, 501(c)(3) nonprofit." />
        <link rel="canonical" href="https://www.derech-ayson-rabbinical-seminary.sbs/impact" />
      </Helmet>

      <section className="bg-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Impact</h1>
          <p className="text-primary-200 max-w-2xl mx-auto">
            Measuring the reach and influence of Derech Ayson Rabbinical Seminary in communities across the nation.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Impact at a Glance"
            subtitle="The numbers reflect our commitment to Torah education and community service."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-primary-100 text-center hover:shadow-md transition-shadow">
                <stat.icon className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-primary-900 mb-1">{stat.value}</div>
                <div className="font-semibold text-primary-700 mb-2">{stat.label}</div>
                <p className="text-sm text-primary-500">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Voices from Our Community"
            subtitle="Hear from alumni, community members, and families whose lives have been touched by Derech Ayson."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                <Quote className="w-8 h-8 text-accent-400 mb-4" />
                <p className="text-primary-700 leading-relaxed mb-4 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center">
                    <span className="text-primary-700 font-bold text-sm">{t.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-primary-900 text-sm">{t.name}</div>
                    <div className="text-xs text-primary-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Our Partners"
            subtitle="We are proud to collaborate with these outstanding organizations in our shared mission of Torah education and community service."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-primary-100 flex items-center gap-3">
                <Handshake className="w-5 h-5 text-secondary-600 shrink-0" />
                <span className="text-sm font-medium text-primary-700">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Impact
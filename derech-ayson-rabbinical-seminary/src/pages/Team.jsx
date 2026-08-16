import { Helmet } from 'react-helmet-async'
import { Users, Calendar, Mail, Phone } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

function Team() {
  const board = [
    {
      name: 'Rabbi Yosef Goldstein',
      role: 'President & Founding Dean',
      bio: 'Rabbi Goldstein founded Derech Ayson Rabbinical Seminary in 2015 after serving as Rosh Yeshiva at Yeshiva Darchei Torah for 18 years. He holds semicha from Rabbi Moshe Feinstein zt"l and has published extensively on Talmudic methodology. He provides visionary leadership and oversees all academic programs.',
    },
    {
      name: 'Rabbi David Cohen',
      role: 'Vice President',
      bio: 'Rabbi Cohen brings over 25 years of experience in Jewish communal leadership, having served as executive director of two major Jewish community centers. He oversees institutional development, fundraising, and strategic partnerships for the seminary.',
    },
    {
      name: 'Mrs. Sarah Levy',
      role: 'Treasurer',
      bio: 'Mrs. Levy is a certified public accountant with 20 years of experience in nonprofit financial management. She ensures the fiscal integrity of Derech Ayson, manages budgets, and oversees compliance with all federal and state reporting requirements.',
    },
    {
      name: 'Rabbi Avraham Stern',
      role: 'Secretary',
      bio: 'Rabbi Stern serves as the seminary's senior maggid shiur and has been a faculty member since 2016. He holds a doctorate in Jewish philosophy from Yeshiva University and is the author of three books on contemporary Halacha.',
    },
    {
      name: 'Dr. Michael Feldman',
      role: 'Board Member',
      bio: 'Dr. Feldman is a clinical psychologist who specializes in pastoral counseling and mental health in religious communities. He advises the seminary on student wellness, pastoral training curriculum, and community mental health initiatives.',
    },
    {
      name: 'Mr. Jacob Weiss',
      role: 'Board Member',
      bio: 'Mr. Weiss is a successful entrepreneur and philanthropist who has been a dedicated supporter of Torah education for over three decades. He chairs the development committee and works to expand the seminary's financial resources.',
    },
  ]

  const staff = [
    { name: 'Rabbi Yosef Goldstein', role: 'Founding Dean & Rosh Yeshiva' },
    { name: 'Rabbi Avraham Stern', role: 'Senior Maggid Shiur' },
    { name: 'Rabbi Chaim Berger', role: 'Maggid Shiur, Talmud' },
    { name: 'Rabbi Eliyahu Kaplan', role: 'Maggid Shiur, Halacha' },
    { name: 'Rabbi Moshe Klein', role: 'Maggid Shiur, Jewish Philosophy' },
    { name: 'Rabbi Shlomo Adler', role: 'Director of Student Affairs' },
    { name: 'Mrs. Esther Friedman', role: 'Administrative Director' },
    { name: 'Mr. Aaron Rosen', role: 'Development Coordinator' },
    { name: 'Mrs. Leah Cohen', role: 'Registrar & Admissions' },
    { name: 'Rabbi Yitzchak Rosenberg', role: 'Director of Community Outreach' },
  ]

  return (
    <>
      <Helmet>
        <title>Leadership & Team | Derech Ayson Rabbinical Seminary</title>
        <meta name="description" content="Meet the Board of Directors and staff of Derech Ayson Rabbinical Seminary. EIN: 11-2611716, 501(c)(3) nonprofit at 802 Hicksville Rd, Far Rockaway, NY." />
        <link rel="canonical" href="https://www.derech-ayson-rabbinical-seminary.sbs/team" />
      </Helmet>

      <section className="bg-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Leadership & Team</h1>
          <p className="text-primary-200 max-w-2xl mx-auto">
            Dedicated scholars, educators, and professionals committed to the mission of Torah education.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Board of Directors"
            subtitle="Our Board of Directors provides governance, strategic direction, and oversight for Derech Ayson Rabbinical Seminary."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {board.map((member, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-primary-100">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-primary-700" />
                </div>
                <h3 className="font-bold text-primary-900">{member.name}</h3>
                <p className="text-accent-600 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-sm text-primary-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-primary-50 rounded-xl p-6 border border-primary-100">
            <h3 className="font-bold text-primary-900 mb-2 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary-600" />
              Board Meetings
            </h3>
            <p className="text-primary-600 text-sm">
              The Board of Directors meets quarterly to review institutional progress, approve budgets, and set strategic priorities. Annual meetings are held in December. Meeting minutes are available upon written request to the Secretary at{' '}
              <a href="mailto:admin@derech-ayson-rabbinical-seminary.sbs" className="text-accent-600 hover:underline">admin@derech-ayson-rabbinical-seminary.sbs</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Faculty & Staff"
            subtitle="The dedicated educators and professionals who make Derech Ayson Rabbinical Seminary a center of Torah excellence."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {staff.map((s, i) => (
              <div key={i} className="bg-primary-50 rounded-lg p-4 border border-primary-100 flex items-center gap-4">
                <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-primary-700 font-bold text-sm">{s.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <div className="font-semibold text-primary-900 text-sm">{s.name}</div>
                  <div className="text-xs text-primary-500">{s.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team
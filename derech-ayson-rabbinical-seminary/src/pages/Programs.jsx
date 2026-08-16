import { Helmet } from 'react-helmet-async'
import { BookOpen, Users, Clock, Calendar, MapPin, CheckCircle, GraduationCap, Heart, Lightbulb } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

function Programs() {
  const programsList = [
    {
      icon: GraduationCap,
      title: 'Rabbinical Ordination Program',
      duration: '4 Years Full-Time',
      description: 'Our flagship program provides comprehensive training for aspiring rabbis. Students engage in intensive Talmudic study, Halacha, Jewish philosophy, pastoral counseling, and community leadership. The curriculum is designed to produce rabbis who are both scholars and effective community leaders.',
      eligibility: 'Male students aged 18–30 with prior yeshiva background',
      schedule: 'Sunday–Thursday, 8:00 AM – 7:00 PM',
      highlights: ['Advanced Talmudic analysis (Iyun)', 'Comprehensive Halacha curriculum', 'Pastoral counseling certification', 'Community internship placements', 'Public speaking and homiletics training'],
    },
    {
      icon: BookOpen,
      title: 'Advanced Kollel Program',
      duration: 'Ongoing / Multi-Year',
      description: 'Designed for married scholars seeking to dedicate themselves to in-depth Torah research and teaching. Kollel members produce original Torah scholarship, teach in local yeshivas, and contribute to the intellectual life of the seminary community.',
      eligibility: 'Married men with advanced Talmudic background',
      schedule: 'Sunday–Thursday, 9:00 AM – 6:00 PM',
      highlights: ['Independent research opportunities', 'Publication support and mentorship', 'Teaching practicum in partner institutions', 'Stipend and family housing support', 'Access to specialized research library'],
    },
    {
      icon: Clock,
      title: 'Evening Learning Institute',
      duration: 'Semester-Based (12 Weeks)',
      description: 'Part-time Torah study for working professionals, college students, and community members who wish to deepen their knowledge without committing to full-time study. Courses cover Talmud, Halacha, Jewish history, and philosophy at various levels.',
      eligibility: 'Open to all men aged 16+ regardless of background',
      schedule: 'Sunday–Wednesday, 7:30 PM – 9:30 PM',
      highlights: ['Flexible scheduling for working professionals', 'Beginner through advanced tracks', 'No prior yeshiva experience required', 'Small class sizes with individual attention', 'Certificate of completion for each course'],
    },
    {
      icon: Heart,
      title: 'Community Outreach & Education',
      duration: 'Year-Round Programs',
      description: 'Derech Ayson extends its mission beyond the classroom through community programs that bring Torah learning to synagogues, schools, and community centers. Our outreach initiatives include Shabbatons, holiday programming, adult education series, and youth enrichment.',
      eligibility: 'Open to all members of the Jewish community',
      schedule: 'Weekends and evenings throughout the year',
      highlights: ['Shabbaton weekends with guest scholars', 'Holiday workshops and celebrations', 'Adult education lecture series', 'Youth group programming', 'Senior citizen Torah study circles'],
    },
    {
      icon: Lightbulb,
      title: 'Summer Intensive Program',
      duration: '6 Weeks (June–August)',
      description: 'An immersive summer experience for high school graduates and college students considering rabbinical study. The program combines intensive Talmud study with Jewish philosophy, leadership workshops, and community service projects.',
      eligibility: 'High school graduates and college students ages 17–22',
      schedule: 'Sunday–Thursday, 9:00 AM – 5:00 PM',
      highlights: ['Intensive Talmud study with renowned faculty', 'Jewish philosophy and ethics seminars', 'Leadership development workshops', 'Community service projects', 'College credit available through partner institutions'],
    },
    {
      icon: Users,
      title: 'Continuing Rabbinic Education',
      duration: 'Workshops & Conferences',
      description: 'Professional development opportunities for ordained rabbis and educators seeking to expand their knowledge and skills. Offerings include advanced Halacha seminars, pastoral care workshops, and annual conferences on contemporary Jewish issues.',
      eligibility: 'Ordained rabbis and Jewish educators',
      schedule: 'Weekend workshops and annual conference',
      highlights: ['Advanced contemporary Halacha seminars', 'Mental health and pastoral care training', 'Educational technology workshops', 'Annual rabbinic conference', 'Peer networking and support groups'],
    },
  ]

  const upcomingEvents = [
    { date: 'September 1, 2026', title: 'Fall Semester Begins', location: 'Main Campus, 802 Hicksville Rd' },
    { date: 'September 15, 2026', title: 'Rosh Hashanah Community Dinner', location: 'Derech Ayson Banquet Hall' },
    { date: 'October 12, 2026', title: 'Annual Scholarship Dinner', location: 'The Sands, Atlantic Beach' },
    { date: 'November 20, 2026', title: 'Alumni Reunion Weekend', location: 'Main Campus' },
    { date: 'December 15, 2026', title: 'Chanukah Community Celebration', location: 'Far Rockaway Community Center' },
    { date: 'January 10, 2027', title: 'Winter Kollel Siyum', location: 'Beit Midrash, Main Campus' },
  ]

  return (
    <>
      <Helmet>
        <title>Our Programs | Derech Ayson Rabbinical Seminary</title>
        <meta name="description" content="Explore our rabbinical ordination, kollel, evening learning, and community outreach programs. Derech Ayson Rabbinical Seminary, EIN: 11-2611716." />
        <link rel="canonical" href="https://www.derech-ayson-rabbinical-seminary.sbs/programs" />
      </Helmet>

      <section className="bg-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Programs</h1>
          <p className="text-primary-200 max-w-2xl mx-auto">
            Comprehensive Torah education and rabbinical training programs designed for every stage of spiritual growth.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Academic & Community Programs"
            subtitle="From full-time rabbinical ordination to part-time community learning, we offer programs that meet students where they are."
          />
          <div className="space-y-8">
            {programsList.map((prog, i) => (
              <div key={i} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-primary-100">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                    <prog.icon className="w-7 h-7 text-primary-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-primary-900">{prog.title}</h3>
                      <span className="bg-secondary-100 text-secondary-700 text-xs font-semibold px-3 py-1 rounded-full">{prog.duration}</span>
                    </div>
                    <p className="text-primary-600 leading-relaxed mb-4">{prog.description}</p>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-primary-50 rounded-lg p-3">
                        <span className="text-xs font-semibold text-primary-500 uppercase">Eligibility</span>
                        <p className="text-sm text-primary-700">{prog.eligibility}</p>
                      </div>
                      <div className="bg-primary-50 rounded-lg p-3">
                        <span className="text-xs font-semibold text-primary-500 uppercase">Schedule</span>
                        <p className="text-sm text-primary-700">{prog.schedule}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {prog.highlights.map((h, j) => (
                        <span key={j} className="inline-flex items-center gap-1 bg-accent-50 text-accent-700 text-xs px-3 py-1.5 rounded-full border border-accent-100">
                          <CheckCircle className="w-3 h-3" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Upcoming Events"
            subtitle="Join us for these upcoming programs and community events at Derech Ayson Rabbinical Seminary."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((evt, i) => (
              <div key={i} className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                <div className="flex items-center gap-2 text-accent-600 font-semibold text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  {evt.date}
                </div>
                <h3 className="font-bold text-primary-900 mb-2">{evt.title}</h3>
                <div className="flex items-center gap-1 text-sm text-primary-500">
                  <MapPin className="w-3 h-3" />
                  {evt.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Programs
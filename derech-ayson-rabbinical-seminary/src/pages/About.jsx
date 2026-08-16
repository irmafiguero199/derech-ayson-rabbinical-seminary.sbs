import { Helmet } from 'react-helmet-async'
import { BookOpen, Shield, Clock, Target, Users, Award, MapPin, Phone, Mail } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

function About() {
  const milestones = [
    { year: '2015', title: 'Foundation Established', desc: 'Derech Ayson Rabbinical Seminary was founded in Far Rockaway, NY, with a vision to provide advanced Torah education and rabbinical training to aspiring Jewish leaders.' },
    { year: '2016', title: 'First Cohort Admitted', desc: 'The seminary welcomed its first class of 12 students, launching the Rabbinical Ordination program under the leadership of founding Dean Rabbi Yosef Goldstein.' },
    { year: '2017', title: 'Kollel Program Launched', desc: 'The Advanced Kollel program was established to provide married scholars with dedicated time for in-depth Talmudic research and publication.' },
    { year: '2018', title: 'Community Outreach Expansion', desc: 'Derech Ayson expanded its community programs to serve 8 local synagogues and community centers across Queens and Long Island.' },
    { year: '2019', title: '501(c)(3) Status Granted', desc: 'The Internal Revenue Service officially recognized Derech Ayson Rabbinical Seminary as a 501(c)(3) tax-exempt organization, EIN 11-2611716.' },
    { year: '2020', title: 'Virtual Learning Initiative', desc: 'In response to the global pandemic, the seminary launched comprehensive online Torah study programs, reaching students across the United States and internationally.' },
    { year: '2022', title: 'New Campus Facilities', desc: 'The seminary expanded its facilities at 802 Hicksville Rd, adding a dedicated Beit Midrash, library, and student residence hall.' },
    { year: '2024', title: '150+ Students Milestone', desc: 'Enrollment surpassed 150 students across all programs, with alumni serving as rabbis and educators in 25+ communities nationwide.' },
  ]

  const values = [
    { icon: BookOpen, title: 'Torah Excellence', desc: 'We are committed to the highest standards of Torah scholarship, fostering deep analytical skills and a profound connection to Jewish tradition.' },
    { icon: Shield, title: 'Integrity & Ethics', desc: 'Our students and faculty uphold the principles of honesty, humility, and moral responsibility in all aspects of study and service.' },
    { icon: Users, title: 'Community Centric', desc: 'We believe Torah learning must translate into meaningful community engagement and service to the Jewish people.' },
    { icon: Target, title: 'Leadership Focus', desc: 'Every aspect of our curriculum is designed to cultivate effective, compassionate, and knowledgeable spiritual leaders.' },
    { icon: Clock, title: 'Lifelong Learning', desc: 'We instill a commitment to continuous growth and intellectual curiosity that extends far beyond formal study.' },
    { icon: Award, title: 'Academic Rigor', desc: 'Our programs maintain demanding academic standards while providing the support necessary for every student to succeed.' },
  ]

  return (
    <>
      <Helmet>
        <title>About Us | Derech Ayson Rabbinical Seminary</title>
        <meta name="description" content="Learn about Derech Ayson Rabbinical Seminary, a 501(c)(3) nonprofit founded in 2015. EIN: 11-2611716. Located at 802 Hicksville Rd, Far Rockaway, NY." />
        <link rel="canonical" href="https://www.derech-ayson-rabbinical-seminary.sbs/about" />
      </Helmet>

      {/* Page Header */}
      <section className="bg-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">About Derech Ayson Rabbinical Seminary</h1>
          <p className="text-primary-200 max-w-2xl mx-auto">
            A nonprofit institution dedicated to Torah scholarship and rabbinical leadership since 2015.
          </p>
        </div>
      </section>

      {/* Legal Info Banner */}
      <section className="bg-accent-50 border-y border-accent-200 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-accent-200">
            <h2 className="text-lg font-bold text-primary-900 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-accent-600" />
              Official Organization Information
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="text-primary-500 block">Legal Name</span>
                <span className="font-semibold text-primary-900">Derech Ayson Rabbinical Seminary</span>
              </div>
              <div>
                <span className="text-primary-500 block">Federal Tax ID (EIN)</span>
                <span className="font-semibold text-primary-900">11-2611716</span>
              </div>
              <div>
                <span className="text-primary-500 block">Tax Status</span>
                <span className="font-semibold text-primary-900">501(c)(3) Nonprofit</span>
              </div>
              <div>
                <span className="text-primary-500 block">Year Founded</span>
                <span className="font-semibold text-primary-900">2015</span>
              </div>
              <div>
                <span className="text-primary-500 block">State of Incorporation</span>
                <span className="font-semibold text-primary-900">New York</span>
              </div>
              <div className="lg:col-span-3">
                <span className="text-primary-500 block">Registered Address</span>
                <span className="font-semibold text-primary-900">802 Hicksville Rd, Far Rockaway, NY 11691-5219, United States</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-primary-700 leading-relaxed">
                <p>
                  Derech Ayson Rabbinical Seminary was established in 2015 in Far Rockaway, New York, by a group of dedicated Torah scholars and community leaders who recognized a growing need for rigorous, values-driven rabbinical education. Named after the Hebrew phrase meaning "the path of the upright," our institution was founded on the belief that authentic Torah leadership requires both intellectual depth and moral character.
                </p>
                <p>
                  From our humble beginnings with a single classroom and twelve students, we have grown into a respected institution serving over 150 students annually across multiple programs. Our campus at 802 Hicksville Rd now includes a state-of-the-art Beit Midrash, comprehensive research library, student residences, and community event spaces.
                </p>
                <p>
                  In 2019, the Internal Revenue Service granted Derech Ayson Rabbinical Seminary official 501(c)(3) tax-exempt status (EIN: 11-2611716), affirming our commitment to educational excellence and public benefit. All donations to our organization are tax-deductible to the fullest extent allowed by law.
                </p>
                <p>
                  Today, our alumni serve as rabbis, educators, and community leaders in more than 25 Jewish communities across the United States. We remain steadfast in our mission to cultivate Torah scholars who will inspire, educate, and lead the Jewish people with wisdom and integrity for generations to come.
                </p>
              </div>
            </div>
            <div className="bg-primary-100 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900">Our Location</h3>
                    <p className="text-primary-600 text-sm">802 Hicksville Rd, Far Rockaway, NY 11691-5219</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900">Phone</h3>
                    <a href="tel:+17185550100" className="text-primary-600 text-sm hover:text-accent-600 transition-colors">(718) 555-0100</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-900">Email</h3>
                    <a href="mailto:admin@derech-ayson-rabbinical-seminary.sbs" className="text-primary-600 text-sm hover:text-accent-600 transition-colors">admin@derech-ayson-rabbinical-seminary.sbs</a>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-primary-200">
                  <p className="text-sm text-primary-600">
                    <span className="font-semibold text-primary-900">Board of Directors:</span> Rabbi Yosef Goldstein (President), Rabbi David Cohen (Vice President), Mrs. Sarah Levy (Treasurer), Rabbi Avraham Stern (Secretary)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Our Journey"
            subtitle="Key milestones in the growth and development of Derech Ayson Rabbinical Seminary."
          />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 md:-translate-x-px"></div>
            {milestones.map((m, i) => (
              <div key={i} className={`relative flex items-start gap-6 mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="hidden md:block w-1/2"></div>
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-accent-500 rounded-full border-4 border-white shadow md:-translate-x-1.5 mt-1.5"></div>
                <div className="ml-10 md:ml-0 md:w-1/2 bg-primary-50 rounded-xl p-6 border border-primary-100">
                  <span className="inline-block bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">{m.year}</span>
                  <h3 className="font-bold text-primary-900 mb-1">{m.title}</h3>
                  <p className="text-sm text-primary-600 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide every aspect of our educational mission and community engagement."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-primary-100 hover:shadow-md transition-shadow">
                <v.icon className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="font-bold text-primary-900 mb-2">{v.title}</h3>
                <p className="text-sm text-primary-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
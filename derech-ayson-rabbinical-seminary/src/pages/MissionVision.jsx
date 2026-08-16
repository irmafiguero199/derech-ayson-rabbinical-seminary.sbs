import { Helmet } from 'react-helmet-async'
import { Target, Eye, Compass, Lightbulb, Heart, Globe, BookOpen, Users } from 'lucide-react'
import SectionHeader from '../components/SectionHeader.jsx'

function MissionVision() {
  const objectives = [
    { icon: BookOpen, title: 'Expand Torah Scholarship', desc: 'Increase enrollment to 200+ students by 2028 while maintaining our rigorous academic standards and personalized mentorship approach.' },
    { icon: Users, title: 'Strengthen Alumni Network', desc: 'Build a comprehensive support and continuing education network for our 85+ alumni rabbis serving communities nationwide.' },
    { icon: Globe, title: 'Digital Learning Platform', desc: 'Launch a comprehensive online learning platform to make advanced Torah study accessible to students worldwide by 2027.' },
    { icon: Heart, title: 'Community Partnerships', desc: 'Establish formal partnerships with 40+ synagogues and Jewish community organizations across the Northeast by 2030.' },
    { icon: Lightbulb, title: 'Research & Publication', desc: 'Found a peer-reviewed journal of Torah scholarship and publish 15+ scholarly works annually by 2029.' },
    { icon: Compass, title: 'Leadership Institute', desc: 'Create an executive leadership program for experienced rabbis seeking advanced training in organizational management and pastoral care.' },
  ]

  return (
    <>
      <Helmet>
        <title>Mission & Vision | Derech Ayson Rabbinical Seminary</title>
        <meta name="description" content="Our mission is to advance Torah scholarship and cultivate rabbinical leaders. Derech Ayson Rabbinical Seminary, EIN: 11-2611716, 501(c)(3) nonprofit." />
        <link rel="canonical" href="https://www.derech-ayson-rabbinical-seminary.sbs/mission-vision" />
      </Helmet>

      {/* Page Header */}
      <section className="bg-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Mission & Vision</h1>
          <p className="text-primary-200 max-w-2xl mx-auto">
            Guided by Torah values, we are building the future of Jewish spiritual leadership.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-primary-800 rounded-2xl p-10 text-white">
              <Target className="w-12 h-12 text-accent-400 mb-6" />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-primary-200 leading-relaxed text-lg mb-4">
                Derech Ayson Rabbinical Seminary is dedicated to providing advanced Torah education and comprehensive rabbinical training that prepares students to serve as knowledgeable, compassionate, and effective spiritual leaders in Jewish communities throughout the United States and beyond.
              </p>
              <p className="text-primary-200 leading-relaxed">
                We accomplish this mission through rigorous study of Talmud, Halacha, and Jewish philosophy; practical training in pastoral care, education, and community leadership; and a steadfast commitment to the ethical and moral development of every student who enters our doors.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-900 mb-4">Mission in Action</h3>
              <ul className="space-y-4">
                {[
                  'Delivering intensive Torah study programs led by world-class scholars and educators',
                  'Providing hands-on rabbinic training through community internships and mentorship',
                  'Fostering an environment of intellectual curiosity, spiritual growth, and ethical integrity',
                  'Serving Jewish communities through outreach, adult education, and holiday programming',
                  'Producing scholarly research that contributes to the ongoing development of Torah thought',
                  'Building a network of alumni who continue to learn, support, and inspire one another',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary-100 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-secondary-700 text-xs font-bold">{i + 1}</span>
                    </div>
                    <span className="text-primary-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-xl font-bold text-primary-900 mb-4">What We Envision</h3>
              <div className="space-y-4 text-primary-700 leading-relaxed">
                <p>
                  We envision a world where every Jewish community has access to learned, compassionate, and dedicated rabbinical leadership. A world where Torah study is not confined to the walls of a yeshiva but flows outward to strengthen families, synagogues, schools, and the broader Jewish people.
                </p>
                <p>
                  By 2030, Derech Ayson Rabbinical Seminary will be recognized as a premier institution of Torah learning and rabbinical training, with alumni serving as transformative leaders in 50+ communities. Our research publications will shape contemporary Jewish thought, and our community programs will touch thousands of lives annually.
                </p>
                <p>
                  We will achieve this vision while remaining true to our core values of Torah excellence, integrity, and community service—ensuring that every graduate of Derech Ayson carries forward not only knowledge but also the character and commitment to lead with wisdom and heart.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 bg-secondary-800 rounded-2xl p-10 text-white">
              <Eye className="w-12 h-12 text-accent-400 mb-6" />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-secondary-200 leading-relaxed text-lg mb-4">
                To be the leading rabbinical seminary in the United States, recognized for producing Torah scholars and spiritual leaders who transform Jewish communities through wisdom, compassion, and unwavering dedication to Jewish tradition.
              </p>
              <p className="text-secondary-200 leading-relaxed">
                We see a future where Derech Ayson alumni are the pillars of vibrant, educated, and spiritually connected Jewish communities—communities that thrive because they are led by rabbis who embody the highest ideals of Torah scholarship and ethical leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Strategic Objectives 2026–2030"
            subtitle="Concrete goals that will guide our growth and impact over the next five years."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-primary-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4">
                  <obj.icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="font-bold text-primary-900 mb-2">{obj.title}</h3>
                <p className="text-sm text-primary-600 leading-relaxed">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default MissionVision
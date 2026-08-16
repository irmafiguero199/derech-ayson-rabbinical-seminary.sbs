import { Helmet } from 'react-helmet-async'
import { Calendar, Tag, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeader from '../components/SectionHeader.jsx'

function News() {
  const articles = [
    {
      title: 'Derech Ayson Welcomes Record Enrollment for Fall 2026',
      date: 'August 12, 2026',
      category: 'Admissions',
      excerpt: 'With over 150 students registered across all programs, Derech Ayson Rabbinical Seminary marks its largest incoming class in history. The growth reflects increasing demand for rigorous Torah education and rabbinical training.',
    },
    {
      title: 'New Partnership with Yeshiva University Announced',
      date: 'July 28, 2026',
      category: 'Partnerships',
      excerpt: 'Derech Ayson and Yeshiva University have established a formal partnership to share library resources, faculty exchanges, and joint research initiatives in contemporary Halacha and Jewish philosophy.',
    },
    {
      title: 'Annual Scholarship Dinner Raises $450,000',
      date: 'October 18, 2025',
      category: 'Fundraising',
      excerpt: 'The 2025 Annual Scholarship Dinner at The Sands in Atlantic Beach exceeded all goals, raising $450,000 for student scholarships and campus expansion. Over 300 supporters attended the sold-out event.',
    },
    {
      title: 'Rabbi Yosef Goldstein Publishes New Sefer on Talmudic Methodology',
      date: 'June 5, 2025',
      category: 'Publications',
      excerpt: 'Founding Dean Rabbi Yosef Goldstein has published a comprehensive work on Talmudic analysis, now being adopted as a text in yeshivas across the United States. The book is available through our campus bookstore.',
    },
    {
      title: 'Community Outreach Program Reaches 3,200 Residents',
      date: 'March 22, 2025',
      category: 'Community',
      excerpt: 'Our Shabbatons, holiday programs, and adult education initiatives served over 3,200 community members in the past year. New partnerships with 4 additional synagogues have expanded our reach in Queens and Long Island.',
    },
    {
      title: 'Beit Midrash Expansion Project Completed',
      date: 'January 15, 2025',
      category: 'Campus',
      excerpt: 'The newly expanded Beit Midrash at 802 Hicksville Rd now accommodates 200 students with state-of-the-art study carrels, enhanced lighting, and climate control. A dedication ceremony was held on January 12.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>News & Updates | Derech Ayson Rabbinical Seminary</title>
        <meta name="description" content="Latest news from Derech Ayson Rabbinical Seminary. EIN: 11-2611716, 501(c)(3) nonprofit in Far Rockaway, NY." />
        <link rel="canonical" href="https://www.derech-ayson-rabbinical-seminary.sbs/news" />
      </Helmet>

      <section className="bg-primary-800 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">News & Updates</h1>
          <p className="text-primary-200 max-w-2xl mx-auto">
            The latest from Derech Ayson Rabbinical Seminary.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Recent Articles"
            subtitle="Stay informed about our programs, achievements, and community impact."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <article key={i} className="bg-white rounded-xl p-6 shadow-sm border border-primary-100 hover:shadow-md transition-shadow flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1 bg-accent-50 text-accent-700 text-xs font-semibold px-3 py-1 rounded-full">
                    <Tag className="w-3 h-3" />
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-primary-400">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>
                <h3 className="font-bold text-primary-900 mb-2 leading-snug">{article.title}</h3>
                <p className="text-sm text-primary-600 leading-relaxed flex-grow">{article.excerpt}</p>
                <div className="mt-4 pt-4 border-t border-primary-100">
                  <Link to="/contact" className="inline-flex items-center gap-1 text-sm text-accent-600 font-semibold hover:text-accent-700 transition-colors">
                    Read More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default News
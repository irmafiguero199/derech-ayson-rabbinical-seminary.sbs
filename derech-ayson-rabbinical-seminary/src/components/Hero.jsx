import { Link } from 'react-router-dom'
import { BookOpen, Users, GraduationCap, Award, ArrowRight, Shield } from 'lucide-react'

function Hero() {
  return (
    <section className="relative bg-primary-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent-500/20 text-accent-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-accent-500/30">
            <Shield className="w-4 h-4" />
            Registered 501(c)(3) Nonprofit Organization | EIN: 11-2611716
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Shaping the Future of<br />
            <span className="text-accent-400">Torah Leadership</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Derech Ayson Rabbinical Seminary provides advanced Torah study and comprehensive rabbinical training to prepare the next generation of Jewish spiritual leaders serving communities across the United States.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/programs"
              className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Explore Our Programs
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/donate"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors border border-white/20"
            >
              Support Our Mission
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <BookOpen className="w-6 h-6 text-accent-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">150+</div>
              <div className="text-sm text-primary-300">Students Enrolled</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <GraduationCap className="w-6 h-6 text-accent-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">85+</div>
              <div className="text-sm text-primary-300">Alumni Rabbis</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Users className="w-6 h-6 text-accent-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-sm text-primary-300">Communities Served</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Award className="w-6 h-6 text-accent-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">10+</div>
              <div className="text-sm text-primary-300">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80V40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0Z" fill="#f5f3ef"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
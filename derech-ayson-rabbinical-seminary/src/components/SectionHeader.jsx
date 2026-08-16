function SectionHeader({ title, subtitle, centered = true }) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-primary-600 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
      <div className={`h-1 w-20 bg-accent-500 mt-6 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  )
}

export default SectionHeader
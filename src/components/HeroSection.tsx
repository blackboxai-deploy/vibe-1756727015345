interface HeroSectionProps {
  backgroundImage: string
  title: string
  subtitle?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  height?: 'screen' | 'large' | 'medium'
  overlay?: 'dark' | 'light' | 'gradient'
  textAlign?: 'left' | 'center'
}

const HeroSection = ({
  backgroundImage,
  title,
  subtitle,
  description,
  ctaText,
  ctaLink = '/booking',
  height = 'screen',
  overlay = 'dark',
  textAlign = 'center'
}: HeroSectionProps) => {
  const heightClasses = {
    screen: 'min-h-screen',
    large: 'h-[80vh]',
    medium: 'h-[60vh]'
  }

  const overlayClasses = {
    dark: 'bg-gradient-to-r from-black/70 to-black/40',
    light: 'bg-gradient-to-r from-white/30 to-white/10',
    gradient: 'bg-gradient-to-r from-[#1e3a8a]/80 to-[#1e3a8a]/50'
  }

  const textAlignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center'
  }

  return (
    <section className={`hero-section ${heightClasses[height]} relative`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClasses[overlay]} z-10`} />
      
      {/* Content */}
      <div className={`relative z-20 max-w-7xl mx-auto container-padding h-full flex flex-col justify-center ${textAlignClasses[textAlign]}`}>
        <div className="max-w-4xl space-y-6">
          {subtitle && (
            <p className="text-[#fbbf24] font-medium text-lg md:text-xl tracking-wide uppercase">
              {subtitle}
            </p>
          )}
          
          <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
            {title}
          </h1>
          
          {description && (
            <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-light max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
          
          {ctaText && (
            <div className="pt-4">
              <a
                href={ctaLink}
                className="inline-flex items-center btn-secondary text-lg px-10 py-4 font-semibold transform hover:scale-105 transition-transform duration-300"
              >
                {ctaText}
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
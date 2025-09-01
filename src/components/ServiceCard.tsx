import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
  features?: string[]
  price?: string
}

const ServiceCard = ({ title, description, image, href, features, price }: ServiceCardProps) => {
  return (
    <div className="card-luxury group cursor-pointer transform hover:scale-105 transition-all duration-500">
      <Link href={href} className="block">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {price && (
            <div className="absolute top-4 right-4 bg-[#fbbf24] text-[#1e3a8a] px-3 py-1 rounded-full font-semibold text-sm">
              {price}
            </div>
          )}
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="font-serif font-bold text-xl text-[#1e3a8a] mb-2 group-hover:text-[#fbbf24] transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            {description}
          </p>
          
          {features && (
            <ul className="space-y-1 mb-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 text-[#fbbf24] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          )}
          
          <div className="flex items-center text-[#1e3a8a] font-semibold group-hover:text-[#fbbf24] transition-colors">
            Learn More
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ServiceCard
interface TestimonialCardProps {
  name: string
  location: string
  rating: number
  review: string
  avatar: string
  date: string
}

const TestimonialCard = ({ name, location, rating, review, avatar, date }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-full hover:shadow-xl transition-shadow duration-300">
      {/* Rating Stars */}
      <div className="flex items-center space-x-1 mb-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-[#fbbf24]' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-gray-500 ml-2">({rating}.0)</span>
      </div>

      {/* Review Text */}
      <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
        "{review}"
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center space-x-4">
        <img 
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-[#1e3a8a]">{name}</h4>
          <p className="text-sm text-gray-500">{location}</p>
          <p className="text-xs text-gray-400">{date}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
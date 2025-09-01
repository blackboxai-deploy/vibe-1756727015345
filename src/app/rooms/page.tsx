import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import { Button } from '@/components/ui/button'

export default function Rooms() {
  const roomCategories = [
    {
      name: 'Presidential Suite',
      description: 'The epitome of luxury with panoramic mountain views, private terrace, personal butler service, and exclusive access to our executive lounge.',
      price: 'From $450',
      originalPrice: '$500',
      image: 'https://placehold.co/800x600?text=Presidential+suite+luxury+interior+with+panoramic+mountain+views+and+elegant+furnishing',
      features: [
        'Private Terrace with Mountain Views',
        'Personal Butler Service',
        'Executive Lounge Access',
        'Premium Amenities Package',
        'Complimentary Airport Transfer',
        'Private Dining Options'
      ],
      amenities: ['King Bed', 'Living Area', 'Work Desk', 'Mini Bar', 'Safe', 'WiFi', 'AC', 'TV'],
      size: '120 sqm'
    },
    {
      name: 'Mountain View Suite',
      description: 'Spacious suite featuring floor-to-ceiling windows showcasing the magnificent Virunga mountains, separate living area, and premium comfort.',
      price: 'From $280',
      originalPrice: '$320',
      image: 'https://placehold.co/800x600?text=Mountain+view+suite+with+floor+to+ceiling+windows+modern+design+spacious+living+area',
      features: [
        'Panoramic Mountain Views',
        'Separate Living Area',
        'Premium Bedding',
        'Complimentary Breakfast',
        '24/7 Room Service',
        'Daily Housekeeping'
      ],
      amenities: ['King Bed', 'Sofa', 'Work Desk', 'Mini Fridge', 'Safe', 'WiFi', 'AC', 'Smart TV'],
      size: '80 sqm'
    },
    {
      name: 'Garden View Suite',
      description: 'Elegant suite overlooking our beautifully landscaped gardens, offering tranquility and modern luxury with thoughtful design elements.',
      price: 'From $240',
      originalPrice: '$280',
      image: 'https://placehold.co/800x600?text=Garden+view+suite+overlooking+landscaped+gardens+with+modern+luxury+design',
      features: [
        'Private Garden Views',
        'Modern Luxury Design',
        'Premium Comfort',
        'Complimentary WiFi',
        'Daily Breakfast',
        'Room Service Available'
      ],
      amenities: ['Queen Bed', 'Seating Area', 'Work Space', 'Mini Bar', 'Safe', 'WiFi', 'AC', 'Cable TV'],
      size: '65 sqm'
    },
    {
      name: 'Deluxe Room',
      description: 'Contemporary designed room with premium amenities, comfortable furnishings, and choice of city or garden views for the perfect stay.',
      price: 'From $180',
      originalPrice: '$210',
      image: 'https://placehold.co/800x600?text=Deluxe+hotel+room+contemporary+design+with+city+or+garden+views+comfortable+furnishing',
      features: [
        'City or Garden Views',
        'Contemporary Design',
        'Premium Bedding',
        'Modern Amenities',
        'Complimentary WiFi',
        'Daily Housekeeping'
      ],
      amenities: ['Queen Bed', 'Chair', 'Desk', 'Mini Fridge', 'Safe', 'WiFi', 'AC', 'TV'],
      size: '45 sqm'
    },
    {
      name: 'Superior Room',
      description: 'Well-appointed room featuring modern comfort, elegant decor, and essential amenities for a comfortable and memorable stay.',
      price: 'From $140',
      originalPrice: '$170',
      image: 'https://placehold.co/800x600?text=Superior+hotel+room+with+modern+comfort+elegant+decor+and+essential+amenities',
      features: [
        'Modern Comfort',
        'Elegant Decor',
        'Quality Bedding',
        'Essential Amenities',
        'WiFi Access',
        'Housekeeping Service'
      ],
      amenities: ['Double Bed', 'Seating', 'Workspace', 'Mini Fridge', 'Safe', 'WiFi', 'AC', 'TV'],
      size: '35 sqm'
    },
    {
      name: 'Standard Room',
      description: 'Comfortable and affordable accommodation with all essential amenities, perfect for travelers seeking quality and value.',
      price: 'From $100',
      originalPrice: '$130',
      image: 'https://placehold.co/800x600?text=Standard+hotel+room+comfortable+affordable+accommodation+with+essential+amenities',
      features: [
        'Comfortable Accommodation',
        'Essential Amenities',
        'Quality Service',
        'Clean & Modern',
        'WiFi Included',
        'Daily Cleaning'
      ],
      amenities: ['Double Bed', 'Chair', 'Desk', 'Fridge', 'Safe', 'WiFi', 'AC', 'TV'],
      size: '28 sqm'
    }
  ]

  const specialOffers = [
    {
      title: 'Honeymoon Package',
      description: 'Romantic getaway with champagne, rose petals, couple spa treatment, and candlelit dinner.',
      discount: '25% OFF',
      image: 'https://placehold.co/400x300?text=Romantic+honeymoon+suite+with+rose+petals+champagne+and+mountain+views',
      features: ['Welcome Champagne', 'Rose Petal Decoration', 'Couples Spa Treatment', 'Candlelit Dinner', 'Late Checkout']
    },
    {
      title: 'Family Getaway',
      description: 'Perfect for families with connecting rooms, kids activities, and family-friendly amenities.',
      discount: '20% OFF',
      image: 'https://placehold.co/400x300?text=Family+friendly+hotel+rooms+with+connecting+spaces+and+kids+activities',
      features: ['Connecting Rooms', 'Kids Activities', 'Family Meals', 'Pool Access', 'Babysitting Service']
    },
    {
      title: 'Extended Stay',
      description: 'Special rates for stays longer than 7 nights with additional services and amenities.',
      discount: '30% OFF',
      image: 'https://placehold.co/400x300?text=Extended+stay+hotel+suite+with+work+space+and+long+term+amenities',
      features: ['Weekly Housekeeping', 'Laundry Service', 'Kitchenette', 'Work Space', 'Local Transport']
    }
  ]

  const comparisonData = [
    { feature: 'Room Size', standard: '28 sqm', superior: '35 sqm', deluxe: '45 sqm', garden: '65 sqm', mountain: '80 sqm', presidential: '120 sqm' },
    { feature: 'View', standard: 'City', superior: 'City/Garden', deluxe: 'City/Garden', garden: 'Garden', mountain: 'Mountain', presidential: 'Mountain' },
    { feature: 'Bed Type', standard: 'Double', superior: 'Double', deluxe: 'Queen', garden: 'Queen', mountain: 'King', presidential: 'King' },
    { feature: 'Living Area', standard: '❌', superior: '❌', deluxe: '❌', garden: 'Seating', mountain: 'Separate', presidential: 'Large' },
    { feature: 'Balcony/Terrace', standard: '❌', superior: '❌', deluxe: '❌', garden: 'Balcony', mountain: 'Balcony', presidential: 'Private Terrace' },
    { feature: 'Butler Service', standard: '❌', superior: '❌', deluxe: '❌', garden: '❌', mountain: '❌', presidential: '✅' },
    { feature: 'Executive Lounge', standard: '❌', superior: '❌', deluxe: '❌', garden: '❌', mountain: '❌', presidential: '✅' },
    { feature: 'Complimentary Breakfast', standard: 'Paid', superior: 'Paid', deluxe: 'Paid', garden: '✅', mountain: '✅', presidential: '✅' }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        backgroundImage="https://placehold.co/1920x1080?text=Luxury+hotel+suite+interior+with+panoramic+mountain+views+elegant+design"
        title="Luxury Rooms & Suites"
        subtitle="Accommodation"
        description="Experience unparalleled comfort in our thoughtfully designed rooms and suites, each offering stunning views and premium amenities."
        ctaText="Book Your Room"
        height="large"
      />

      {/* Room Categories */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
              Our Accommodations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From intimate rooms to luxurious suites, each accommodation is designed to provide exceptional comfort with breathtaking views.
            </p>
          </div>

          <div className="space-y-12">
            {roomCategories.map((room, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={room.image}
                      alt={room.name}
                      className="w-full h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6 bg-[#e50914] text-white px-4 py-2 rounded-full font-semibold">
                      {Math.round(((parseInt(room.originalPrice.replace(/\D/g, '')) - parseInt(room.price.replace(/\D/g, ''))) / parseInt(room.originalPrice.replace(/\D/g, ''))) * 100)}% OFF
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="font-serif text-3xl font-bold text-[#1e3a8a] mb-2">
                      {room.name}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {room.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <svg className="w-4 h-4 text-[#fbbf24] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Amenities */}
                  <div>
                    <h4 className="font-semibold text-[#1e3a8a] mb-3">Room Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.map((amenity, idx) => (
                        <span key={idx} className="px-3 py-1 bg-[#f5f5dc] text-[#1e3a8a] text-sm rounded-full">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing and CTA */}
                  <div className="bg-gradient-to-r from-[#f5f5dc] to-white p-6 rounded-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="flex items-baseline space-x-2">
                          <span className="text-3xl font-bold text-[#1e3a8a]">{room.price}</span>
                          <span className="text-gray-500 text-lg line-through">{room.originalPrice}</span>
                          <span className="text-gray-600">/night</span>
                        </div>
                        <p className="text-gray-500 text-sm">{room.size} • Includes taxes</p>
                      </div>
                      <div className="text-right">
                        <Button className="btn-primary mb-2">
                          Book Now
                        </Button>
                        <p className="text-xs text-gray-500">Free cancellation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="section-padding bg-[#f5f5dc]/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
              Special Offers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Take advantage of our exclusive packages designed to make your stay even more memorable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <div key={index} className="card-luxury group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-[#e50914] text-white px-3 py-1 rounded-full font-bold text-sm">
                    {offer.discount}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#1e3a8a] mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {offer.description}
                  </p>
                  <ul className="space-y-1 mb-6">
                    {offer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <svg className="w-3 h-3 text-[#fbbf24] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full btn-secondary">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Comparison Table */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
              Compare Room Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find the perfect accommodation for your needs with our detailed comparison of room features and amenities.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="bg-[#1e3a8a] text-white">
                  <th className="px-6 py-4 text-left font-serif font-semibold">Features</th>
                  <th className="px-6 py-4 text-center font-serif font-semibold">Standard</th>
                  <th className="px-6 py-4 text-center font-serif font-semibold">Superior</th>
                  <th className="px-6 py-4 text-center font-serif font-semibold">Deluxe</th>
                  <th className="px-6 py-4 text-center font-serif font-semibold">Garden View</th>
                  <th className="px-6 py-4 text-center font-serif font-semibold">Mountain View</th>
                  <th className="px-6 py-4 text-center font-serif font-semibold">Presidential</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <td className="px-6 py-4 font-semibold text-[#1e3a8a]">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.standard}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.superior}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.deluxe}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.garden}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.mountain}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{row.presidential}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="section-padding bg-[#1e3a8a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]" />
        <div className="relative z-10 max-w-4xl mx-auto container-padding text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Experience Before You Book
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Take a virtual 360° tour of our rooms and suites to see the luxury and comfort that awaits you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-secondary text-lg px-8 py-4">
              Take Virtual Tour
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] text-lg px-8 py-4">
              Book Your Stay
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
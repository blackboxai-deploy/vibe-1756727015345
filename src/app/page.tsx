import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import { Button } from '@/components/ui/button'

export default function Home() {
  const services = [
    {
      title: 'Luxury Rooms & Suites',
      description: 'Experience ultimate comfort in our elegantly designed rooms with stunning views of the Virunga mountains and modern amenities.',
      image: 'https://placehold.co/400x300?text=Luxury+hotel+room+with+mountain+views+elegant+modern+design',
      href: '/rooms',
      features: ['Mountain Views', 'Premium Amenities', '24/7 Room Service'],
      price: 'From $180/night'
    },
    {
      title: 'World-Class Spa',
      description: 'Rejuvenate your body and mind with our comprehensive wellness treatments inspired by traditional Rwandan healing practices.',
      image: 'https://placehold.co/400x300?text=Luxury+spa+treatment+room+with+calming+ambiance+wellness+center',
      href: '/spa',
      features: ['Massage Therapy', 'Facial Treatments', 'Wellness Packages']
    },
    {
      title: 'Fine Dining',
      description: 'Savor exquisite cuisine crafted by our award-winning chefs, featuring local Rwandan flavors and international delicacies.',
      image: 'https://placehold.co/400x300?text=Elegant+fine+dining+restaurant+with+gourmet+food+presentation',
      href: '/restaurant',
      features: ['Local Cuisine', 'International Menu', 'Wine Selection']
    },
    {
      title: 'State-of-Art Gym',
      description: 'Maintain your fitness routine with our fully equipped gym featuring modern equipment and personal training services.',
      image: 'https://placehold.co/400x300?text=Modern+hotel+gym+with+professional+equipment+and+city+views',
      href: '/gym',
      features: ['Latest Equipment', 'Personal Trainers', 'Fitness Classes']
    },
    {
      title: 'Private Cinema',
      description: 'Enjoy an exclusive movie night experience in our private cinema with premium sound, comfortable seating, and curated refreshments.',
      image: 'https://placehold.co/400x300?text=Luxury+private+cinema+with+premium+seating+and+ambient+lighting',
      href: '/cinema',
      features: ['Netflix & Prime Access', 'Luxury Seating', 'Food & Beverage Service']
    },
    {
      title: 'Events & Meetings',
      description: 'Host memorable events and productive meetings in our versatile spaces equipped with cutting-edge technology and professional service.',
      image: 'https://placehold.co/400x300?text=Professional+conference+room+with+modern+technology+and+mountain+backdrop',
      href: '/events',
      features: ['Wedding Venues', 'Conference Facilities', 'Event Planning']
    }
  ]

  const whyChooseFeatures = [
    {
      title: 'Unmatched Luxury',
      description: 'Every detail crafted for your comfort and satisfaction with premium amenities and personalized service.',
      image: 'https://placehold.co/600x400?text=Luxury+hotel+lobby+with+elegant+design+and+premium+finishes',
      icon: '👑'
    },
    {
      title: 'Prime Location',
      description: 'Perfectly situated in Kigali with breathtaking views of the Virunga mountains and easy access to local attractions.',
      image: 'https://placehold.co/600x400?text=Stunning+Virunga+mountains+view+from+luxury+hotel+balcony',
      icon: '🏔️'
    },
    {
      title: 'Authentic Experience',
      description: 'Immerse yourself in Rwandan culture while enjoying world-class hospitality and genuine warmth.',
      image: 'https://placehold.co/600x400?text=Traditional+Rwandan+cultural+elements+in+modern+luxury+hotel+setting',
      icon: '🌍'
    },
    {
      title: 'Exceptional Service',
      description: 'Our dedicated team ensures every moment of your stay exceeds expectations with personalized attention.',
      image: 'https://placehold.co/600x400?text=Professional+hotel+staff+providing+excellent+customer+service',
      icon: '⭐'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'London, UK',
      rating: 5,
      review: 'Absolutely magical experience! The views of the Virunga mountains from our suite were breathtaking, and the spa treatments were incredibly relaxing. The staff went above and beyond to make our honeymoon unforgettable.',
      avatar: 'https://placehold.co/80x80?text=Professional+woman+smiling+portrait+photo',
      date: 'November 2024'
    },
    {
      name: 'David Chen',
      location: 'Singapore',
      rating: 5,
      review: 'The private cinema experience was a highlight of our stay! The food service was exceptional, and the movie selection was perfect. This hotel truly offers unique experiences you cannot find elsewhere.',
      avatar: 'https://placehold.co/80x80?text=Professional+man+business+portrait+headshot',
      date: 'October 2024'
    },
    {
      name: 'Maria Rodriguez',
      location: 'Barcelona, Spain',
      rating: 5,
      review: 'Our corporate event was flawlessly executed. The conference facilities are state-of-the-art, and the catering was outstanding. The team\'s attention to detail made our international meeting a huge success.',
      avatar: 'https://placehold.co/80x80?text=Confident+businesswoman+professional+portrait',
      date: 'September 2024'
    }
  ]

  const featuredRooms = [
    {
      name: 'Presidential Suite',
      description: 'Ultimate luxury with panoramic mountain views, private terrace, and exclusive concierge service.',
      image: 'https://placehold.co/500x400?text=Presidential+suite+with+panoramic+mountain+views+luxury+interior',
      price: 'From $450/night',
      features: ['Private Terrace', 'Concierge Service', 'Mountain Views', 'Premium Amenities']
    },
    {
      name: 'Mountain View Suite',
      description: 'Spacious suite with floor-to-ceiling windows showcasing the magnificent Virunga mountains.',
      image: 'https://placehold.co/500x400?text=Mountain+view+suite+with+floor+to+ceiling+windows+modern+design',
      price: 'From $280/night',
      features: ['Mountain Views', 'Spacious Living Area', 'Modern Amenities', 'Room Service']
    },
    {
      name: 'Deluxe Room',
      description: 'Elegant room with contemporary design, premium comfort, and garden or city views.',
      image: 'https://placehold.co/500x400?text=Deluxe+hotel+room+with+contemporary+design+and+garden+views',
      price: 'From $180/night',
      features: ['Garden Views', 'Modern Design', 'Premium Bedding', 'Work Desk']
    }
  ]

  const galleryImages = [
    'https://placehold.co/400x300?text=Luxury+hotel+pool+with+mountain+backdrop+sunset+lighting',
    'https://placehold.co/400x300?text=Elegant+hotel+dining+area+with+panoramic+windows',
    'https://placehold.co/400x300?text=Spa+wellness+center+with+natural+lighting+and+plants',
    'https://placehold.co/400x300?text=Professional+conference+room+with+modern+technology',
    'https://placehold.co/400x300?text=Hotel+bar+area+with+sophisticated+lighting+and+design',
    'https://placehold.co/400x300?text=Fitness+center+with+mountain+views+modern+equipment'
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        backgroundImage="https://placehold.co/1920x1080?text=Breathtaking+Virunga+mountains+landscape+with+luxury+hotel+in+foreground"
        title="Experience Luxury & Serenity in Rwanda"
        subtitle="Welcome to Virungainn Hotel"
        description="Where modern comfort meets the breathtaking beauty of the Virunga mountains. Discover unparalleled hospitality in the heart of Rwanda."
        ctaText="Book Your Stay"
        ctaLink="/booking"
      />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
              World-Class Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover exceptional services and facilities designed to create unforgettable experiences during your stay in Rwanda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Virungainn */}
      <section className="section-padding bg-[#f5f5dc]/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
              Why Choose Virungainn
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of luxury, culture, and natural beauty that makes us Rwanda's premier hospitality destination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center text-3xl">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <div className="relative h-48 mb-4 rounded-2xl overflow-hidden">
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
              Featured Accommodations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our carefully designed rooms and suites, each offering unique luxury experiences with stunning views.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredRooms.map((room, index) => (
              <div key={index} className="card-luxury group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-[#fbbf24] text-[#1e3a8a] px-3 py-1 rounded-full font-semibold text-sm">
                    {room.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-[#1e3a8a] mb-2">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {room.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-1 mb-6">
                    {room.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <svg className="w-3 h-3 text-[#fbbf24] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full btn-primary">
                    Book Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#f5f5dc]/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
              What Our Guests Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from our valued guests about their exceptional experiences at Virungainn Hotel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Gallery */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
              Life at Virungainn
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get a glimpse of the luxury lifestyle and memorable moments that await you at our hotel.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-2xl aspect-square">
                <img 
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="btn-secondary">
              View Full Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-[#1e3a8a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]" />
        <div className="relative z-10 max-w-4xl mx-auto container-padding text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of satisfied guests who have experienced the perfect blend of luxury, culture, and natural beauty at Virungainn Hotel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-secondary text-lg px-8 py-4">
              Book Your Stay Now
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] text-lg px-8 py-4">
              Take a Virtual Tour
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
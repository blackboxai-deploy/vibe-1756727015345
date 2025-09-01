'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function Cinema() {
  const [selectedPackage, setSelectedPackage] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')

  const packages = [
    {
      name: 'Standard Experience',
      price: '$45',
      duration: '2 hours',
      description: 'Perfect for casual movie nights with premium seating and surround sound.',
      image: 'https://placehold.co/400x300?text=Standard+cinema+experience+with+comfortable+seating+and+premium+sound',
      features: [
        'Premium Reclining Seats',
        '4K Ultra HD Projection',
        'Dolby Atmos Sound',
        'Popcorn & Drinks Included',
        'Netflix/Prime Access',
        '2-Hour Time Slot'
      ],
      maxGuests: 6
    },
    {
      name: 'Couples Romance',
      price: '$120',
      duration: '3 hours',
      description: 'Intimate movie experience designed for couples with luxury amenities and romantic touches.',
      image: 'https://placehold.co/400x300?text=Romantic+couples+cinema+with+luxury+seating+dim+lighting+intimate+atmosphere',
      features: [
        'Private Double Recliners',
        'Romantic Lighting',
        'Champagne Service',
        'Gourmet Snack Platter',
        'Rose Petal Decoration',
        'Blankets & Pillows'
      ],
      maxGuests: 2,
      popular: true
    },
    {
      name: 'Family Fun Night',
      price: '$150',
      duration: '3 hours',
      description: 'Family-friendly experience with kid-approved snacks and comfortable seating for all ages.',
      image: 'https://placehold.co/400x300?text=Family+cinema+night+with+comfortable+seating+for+all+ages+and+kid+friendly+snacks',
      features: [
        'Family Seating Layout',
        'Kid-Friendly Movie Selection',
        'Family Snack Pack',
        'Juice Boxes & Candy',
        'Extra Cushions',
        '3-Hour Time Slot'
      ],
      maxGuests: 8
    },
    {
      name: 'VIP Luxury Experience',
      price: '$300',
      duration: '4 hours',
      description: 'Ultimate luxury cinema experience with premium service, gourmet dining, and exclusive amenities.',
      image: 'https://placehold.co/400x300?text=VIP+luxury+cinema+experience+with+premium+service+gourmet+dining+exclusive+amenities',
      features: [
        'Luxury Leather Recliners',
        'Personal Concierge Service',
        'Gourmet Dining Menu',
        'Premium Wine Selection',
        'Heated Seats & Blankets',
        '4-Hour Private Access'
      ],
      maxGuests: 4,
      exclusive: true
    }
  ]

  const movieCategories = [
    'Latest Releases',
    'Action & Adventure', 
    'Romance & Drama',
    'Comedy',
    'Documentaries',
    'Classic Films',
    'Family Movies',
    'International Cinema'
  ]

  const testimonials = [
    {
      name: 'Emma & James',
      review: 'The couples package was absolutely magical! The romantic setting with champagne and rose petals made it the perfect date night. Best anniversary celebration ever!',
      rating: 5,
      package: 'Couples Romance'
    },
    {
      name: 'The Johnson Family',
      review: 'Our kids loved the family movie night! The staff was so accommodating and the snacks were perfect. Already planning our next visit!',
      rating: 5,
      package: 'Family Fun Night'
    },
    {
      name: 'Michael Chen',
      review: 'The VIP experience exceeded all expectations. From the gourmet dining to the personal service, everything was flawless. Truly luxurious!',
      rating: 5,
      package: 'VIP Luxury Experience'
    }
  ]

  const addOns = [
    { name: 'Extra Hour', price: '$25', description: 'Extend your cinema time' },
    { name: 'Cake & Celebration', price: '$40', description: 'Special occasion setup' },
    { name: 'Premium Wine Selection', price: '$60', description: '3 bottles of premium wine' },
    { name: 'Gourmet Dinner', price: '$80', description: 'Full course meal service' },
    { name: 'Photography Service', price: '$100', description: 'Professional photos of your experience' }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Cinematic Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Dark Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://placehold.co/1920x1080?text=Luxury+private+cinema+hall+with+glowing+projector+and+premium+seating')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60" />
        
        {/* Glowing Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#e50914]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#e50914]/10 rounded-full blur-2xl"></div>
        
        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto container-padding text-center">
          <div className="mb-6">
            <span className="text-[#e50914] font-bold text-xl tracking-wider uppercase">Virungainn Cinema</span>
          </div>
          
          <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Private Cinema
            <span className="block text-gradient">Nights</span>
          </h1>
          
          <p className="text-gray-300 text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Experience movies like never before in our luxury private cinema with premium seating, 
            state-of-the-art sound, and personalized service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-accent text-lg px-10 py-4 font-semibold transform hover:scale-105 transition-transform duration-300">
              Book Your Cinema Night
            </Button>
            <Button className="bg-transparent border-2 border-[#e50914] text-[#e50914] hover:bg-[#e50914] hover:text-white text-lg px-10 py-4">
              View Packages
            </Button>
          </div>
        </div>
        
        {/* Floating Movie Elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-8 border-2 border-[#e50914] rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-[#e50914]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Cinema Highlights */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Cinema <span className="text-[#e50914]">Features</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art technology meets luxury comfort for an unforgettable movie experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🎬',
                title: '4K Ultra HD',
                description: 'Crystal clear projection with stunning visual quality'
              },
              {
                icon: '🔊',
                title: 'Dolby Atmos',
                description: 'Immersive surround sound that puts you in the action'
              },
              {
                icon: '🪑',
                title: 'Luxury Seating',
                description: 'Premium reclining chairs with heating and massage'
              },
              {
                icon: '🍿',
                title: 'Gourmet Service',
                description: 'Fine dining and premium snacks delivered to your seat'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-black rounded-2xl border border-gray-800 hover:border-[#e50914] transition-colors group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="font-serif text-xl font-bold text-white mb-2 group-hover:text-[#e50914] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-black">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Cinema <span className="text-[#e50914]">Packages</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Choose from our curated experiences designed for every occasion and group size.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-gray-900 rounded-2xl overflow-hidden border-2 hover:scale-105 transition-transform duration-300 ${pkg.popular ? 'border-[#e50914]' : 'border-gray-800'} ${pkg.exclusive ? 'border-[#fbbf24]' : ''}`}>
                {pkg.popular && (
                  <div className="absolute top-4 right-4 bg-[#e50914] text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                {pkg.exclusive && (
                  <div className="absolute top-4 right-4 bg-[#fbbf24] text-black px-4 py-1 rounded-full text-sm font-bold">
                    Exclusive
                  </div>
                )}

                <div className="relative h-64">
                  <img 
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="text-3xl font-bold text-[#e50914]">{pkg.price}</div>
                    <div className="text-gray-300 text-sm">{pkg.duration} • Up to {pkg.maxGuests} guests</div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {pkg.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <svg className="w-4 h-4 text-[#e50914] mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button className={`w-full font-semibold ${pkg.popular || pkg.exclusive ? 'btn-accent' : 'bg-gray-800 hover:bg-gray-700 text-white'}`}>
                    Select Package
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section-padding bg-gray-900">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Book Your <span className="text-[#e50914]">Cinema Night</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Reserve your private cinema experience and create unforgettable memories.
            </p>
          </div>

          <div className="bg-black rounded-2xl p-8 border border-gray-800">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Select Package</label>
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Choose your experience" />
                    </SelectTrigger>
                    <SelectContent>
                      {packages.map((pkg) => (
                        <SelectItem key={pkg.name} value={pkg.name}>
                          {pkg.name} - {pkg.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Number of Guests</label>
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1,2,3,4,5,6,7,8].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Preferred Date</label>
                  <Input 
                    type="date" 
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Preferred Time</label>
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                      <SelectValue placeholder="Select time slot" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2pm">2:00 PM</SelectItem>
                      <SelectItem value="5pm">5:00 PM</SelectItem>
                      <SelectItem value="8pm">8:00 PM</SelectItem>
                      <SelectItem value="10pm">10:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Movie Preference</label>
                <Select>
                  <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                    <SelectValue placeholder="Choose movie category" />
                  </SelectTrigger>
                  <SelectContent>
                    {movieCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Add-Ons</label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {addOns.map((addon, index) => (
                    <label key={index} className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors">
                      <input type="checkbox" className="text-[#e50914] rounded" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">{addon.name}</span>
                          <span className="text-[#e50914] font-bold">{addon.price}</span>
                        </div>
                        <p className="text-gray-400 text-sm">{addon.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Contact Name</label>
                  <Input 
                    placeholder="Your full name" 
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Phone Number</label>
                  <Input 
                    placeholder="+250 xxx xxx xxx" 
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Email Address</label>
                <Input 
                  type="email" 
                  placeholder="your.email@example.com" 
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Special Requests</label>
                <textarea 
                  placeholder="Any special requests or dietary restrictions..."
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 resize-none"
                  rows={3}
                />
              </div>

              <Button className="w-full btn-accent text-lg py-4 font-semibold">
                Confirm Your Cinema Night - From $45
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-black">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Guest <span className="text-[#e50914]">Reviews</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              See what our guests are saying about their unforgettable cinema experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-[#e50914] transition-colors">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <svg key={idx} className="w-5 h-5 text-[#e50914]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-4 leading-relaxed italic">
                  "{testimonial.review}"
                </blockquote>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-[#e50914] text-sm">{testimonial.package}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
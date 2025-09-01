'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import { Button } from '@/components/ui/button'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'dining', label: 'Dining' },
    { id: 'spa', label: 'Spa & Wellness' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'events', label: 'Events' },
    { id: 'surroundings', label: 'Surroundings' }
  ]

  const galleryImages = [
    // Rooms & Suites
    {
      id: 1,
      category: 'rooms',
      title: 'Presidential Suite',
      description: 'Luxurious presidential suite with panoramic mountain views',
      image: 'https://placehold.co/800x600?text=Presidential+suite+luxury+interior+panoramic+mountain+views+elegant+furnishing',
      thumbnail: 'https://placehold.co/400x300?text=Presidential+suite+luxury+interior+panoramic+mountain+views+elegant+furnishing'
    },
    {
      id: 2,
      category: 'rooms',
      title: 'Mountain View Suite',
      description: 'Spacious suite featuring floor-to-ceiling windows',
      image: 'https://placehold.co/800x600?text=Mountain+view+suite+spacious+interior+floor+to+ceiling+windows+modern+design',
      thumbnail: 'https://placehold.co/400x300?text=Mountain+view+suite+spacious+interior+floor+to+ceiling+windows+modern+design'
    },
    {
      id: 3,
      category: 'rooms',
      title: 'Garden View Suite',
      description: 'Elegant suite overlooking landscaped gardens',
      image: 'https://placehold.co/800x600?text=Garden+view+suite+elegant+interior+overlooking+landscaped+gardens+luxury+design',
      thumbnail: 'https://placehold.co/400x300?text=Garden+view+suite+elegant+interior+overlooking+landscaped+gardens+luxury+design'
    },
    {
      id: 4,
      category: 'rooms',
      title: 'Deluxe Room',
      description: 'Contemporary designed room with premium amenities',
      image: 'https://placehold.co/800x600?text=Deluxe+hotel+room+contemporary+design+premium+amenities+comfortable+furnishing',
      thumbnail: 'https://placehold.co/400x300?text=Deluxe+hotel+room+contemporary+design+premium+amenities+comfortable+furnishing'
    },

    // Dining
    {
      id: 5,
      category: 'dining',
      title: 'Main Restaurant',
      description: 'Elegant dining area with panoramic windows',
      image: 'https://placehold.co/800x600?text=Elegant+hotel+dining+restaurant+panoramic+windows+luxury+table+setting',
      thumbnail: 'https://placehold.co/400x300?text=Elegant+hotel+dining+restaurant+panoramic+windows+luxury+table+setting'
    },
    {
      id: 6,
      category: 'dining',
      title: 'Gourmet Cuisine',
      description: 'Award-winning chef\'s signature dishes',
      image: 'https://placehold.co/800x600?text=Gourmet+fine+dining+cuisine+award+winning+chef+signature+dishes+presentation',
      thumbnail: 'https://placehold.co/400x300?text=Gourmet+fine+dining+cuisine+award+winning+chef+signature+dishes+presentation'
    },
    {
      id: 7,
      category: 'dining',
      title: 'Wine Collection',
      description: 'Premium wine selection from around the world',
      image: 'https://placehold.co/800x600?text=Premium+wine+collection+cellar+bottles+from+around+the+world+luxury+display',
      thumbnail: 'https://placehold.co/400x300?text=Premium+wine+collection+cellar+bottles+from+around+the+world+luxury+display'
    },
    {
      id: 8,
      category: 'dining',
      title: 'Bar & Lounge',
      description: 'Sophisticated bar with craft cocktails',
      image: 'https://placehold.co/800x600?text=Sophisticated+hotel+bar+lounge+craft+cocktails+elegant+atmosphere',
      thumbnail: 'https://placehold.co/400x300?text=Sophisticated+hotel+bar+lounge+craft+cocktails+elegant+atmosphere'
    },

    // Spa & Wellness
    {
      id: 9,
      category: 'spa',
      title: 'Spa Treatment Room',
      description: 'Tranquil treatment suite with mountain views',
      image: 'https://placehold.co/800x600?text=Luxury+spa+treatment+room+tranquil+suite+mountain+views+premium+amenities',
      thumbnail: 'https://placehold.co/400x300?text=Luxury+spa+treatment+room+tranquil+suite+mountain+views+premium+amenities'
    },
    {
      id: 10,
      category: 'spa',
      title: 'Relaxation Lounge',
      description: 'Peaceful spa lounge for pre and post-treatment',
      image: 'https://placehold.co/800x600?text=Peaceful+spa+relaxation+lounge+pre+post+treatment+comfortable+seating',
      thumbnail: 'https://placehold.co/400x300?text=Peaceful+spa+relaxation+lounge+pre+post+treatment+comfortable+seating'
    },
    {
      id: 11,
      category: 'spa',
      title: 'Hydrotherapy Pool',
      description: 'Therapeutic pool with mineral-infused water',
      image: 'https://placehold.co/800x600?text=Spa+hydrotherapy+pool+therapeutic+mineral+infused+water+jets+relaxation',
      thumbnail: 'https://placehold.co/400x300?text=Spa+hydrotherapy+pool+therapeutic+mineral+infused+water+jets+relaxation'
    },

    // Facilities
    {
      id: 12,
      category: 'facilities',
      title: 'Fitness Center',
      description: 'Modern gym with mountain views',
      image: 'https://placehold.co/800x600?text=Modern+hotel+gym+fitness+center+mountain+views+professional+equipment',
      thumbnail: 'https://placehold.co/400x300?text=Modern+hotel+gym+fitness+center+mountain+views+professional+equipment'
    },
    {
      id: 13,
      category: 'facilities',
      title: 'Swimming Pool',
      description: 'Infinity pool with spectacular views',
      image: 'https://placehold.co/800x600?text=Infinity+swimming+pool+spectacular+mountain+views+luxury+poolside+area',
      thumbnail: 'https://placehold.co/400x300?text=Infinity+swimming+pool+spectacular+mountain+views+luxury+poolside+area'
    },
    {
      id: 14,
      category: 'facilities',
      title: 'Private Cinema',
      description: 'Luxury cinema with premium seating',
      image: 'https://placehold.co/800x600?text=Luxury+private+cinema+premium+seating+ambient+lighting+entertainment',
      thumbnail: 'https://placehold.co/400x300?text=Luxury+private+cinema+premium+seating+ambient+lighting+entertainment'
    },
    {
      id: 15,
      category: 'facilities',
      title: 'Lobby & Reception',
      description: 'Grand entrance with elegant design',
      image: 'https://placehold.co/800x600?text=Grand+hotel+lobby+reception+elegant+design+luxury+finishes+welcoming',
      thumbnail: 'https://placehold.co/400x300?text=Grand+hotel+lobby+reception+elegant+design+luxury+finishes+welcoming'
    },

    // Events
    {
      id: 16,
      category: 'events',
      title: 'Conference Hall',
      description: 'Professional meeting space with modern technology',
      image: 'https://placehold.co/800x600?text=Professional+conference+hall+meeting+space+modern+technology+mountain+backdrop',
      thumbnail: 'https://placehold.co/400x300?text=Professional+conference+hall+meeting+space+modern+technology+mountain+backdrop'
    },
    {
      id: 17,
      category: 'events',
      title: 'Wedding Venue',
      description: 'Romantic outdoor wedding setup',
      image: 'https://placehold.co/800x600?text=Romantic+outdoor+wedding+venue+setup+mountain+views+elegant+decoration',
      thumbnail: 'https://placehold.co/400x300?text=Romantic+outdoor+wedding+venue+setup+mountain+views+elegant+decoration'
    },
    {
      id: 18,
      category: 'events',
      title: 'Banquet Hall',
      description: 'Elegant space for special celebrations',
      image: 'https://placehold.co/800x600?text=Elegant+banquet+hall+special+celebrations+luxury+table+setting+chandeliers',
      thumbnail: 'https://placehold.co/400x300?text=Elegant+banquet+hall+special+celebrations+luxury+table+setting+chandeliers'
    },

    // Surroundings
    {
      id: 19,
      category: 'surroundings',
      title: 'Virunga Mountains',
      description: 'Breathtaking mountain range views',
      image: 'https://placehold.co/800x600?text=Breathtaking+Virunga+mountains+range+views+from+luxury+hotel+location',
      thumbnail: 'https://placehold.co/400x300?text=Breathtaking+Virunga+mountains+range+views+from+luxury+hotel+location'
    },
    {
      id: 20,
      category: 'surroundings',
      title: 'Kigali Skyline',
      description: 'Modern city views from the hotel',
      image: 'https://placehold.co/800x600?text=Modern+Kigali+city+skyline+views+from+luxury+hotel+urban+landscape',
      thumbnail: 'https://placehold.co/400x300?text=Modern+Kigali+city+skyline+views+from+luxury+hotel+urban+landscape'
    },
    {
      id: 21,
      category: 'surroundings',
      title: 'Garden Landscapes',
      description: 'Beautifully landscaped hotel gardens',
      image: 'https://placehold.co/800x600?text=Beautifully+landscaped+hotel+gardens+tropical+plants+peaceful+pathways',
      thumbnail: 'https://placehold.co/400x300?text=Beautifully+landscaped+hotel+gardens+tropical+plants+peaceful+pathways'
    },
    {
      id: 22,
      category: 'surroundings',
      title: 'Sunset Views',
      description: 'Spectacular sunset over the mountains',
      image: 'https://placehold.co/800x600?text=Spectacular+sunset+over+Virunga+mountains+from+luxury+hotel+golden+hour',
      thumbnail: 'https://placehold.co/400x300?text=Spectacular+sunset+over+Virunga+mountains+from+luxury+hotel+golden+hour'
    }
  ]

  const filteredImages = activeFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter)

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        backgroundImage="https://placehold.co/1920x1080?text=Luxury+hotel+photo+gallery+showcase+with+multiple+beautiful+interior+and+exterior+shots"
        title="Photo Gallery"
        subtitle="Visual Journey"
        description="Explore the beauty and luxury of Virungainn Hotel through our curated collection of stunning photography."
        ctaText="View Our Virtual Tour"
        height="large"
      />

      {/* Filter Tabs */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-[#1e3a8a] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-square bg-gray-100 hover:shadow-xl transition-all duration-500"
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image.thumbnail}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif font-bold text-white text-lg mb-1">
                    {image.title}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {image.description}
                  </p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-[#fbbf24] text-[#1e3a8a] text-xs font-semibold rounded-full uppercase tracking-wide">
                    {categories.find(cat => cat.id === image.category)?.label}
                  </span>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-[#f5f5dc]/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1e3a8a] font-serif mb-2">
                {galleryImages.filter(img => img.category === 'rooms').length}+
              </div>
              <p className="text-gray-600">Luxury Rooms & Suites</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1e3a8a] font-serif mb-2">
                {galleryImages.filter(img => img.category === 'dining').length}+
              </div>
              <p className="text-gray-600">Dining Venues</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1e3a8a] font-serif mb-2">
                {galleryImages.filter(img => img.category === 'facilities').length}+
              </div>
              <p className="text-gray-600">Premium Facilities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#1e3a8a] font-serif mb-2">
                {galleryImages.filter(img => img.category === 'events').length}+
              </div>
              <p className="text-gray-600">Event Spaces</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
            Virtual Hotel Tour
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Take a cinematic journey through our hotel and experience the luxury before your visit.
          </p>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gray-900">
            <img 
              src="https://placehold.co/800x450?text=Virtual+hotel+tour+video+thumbnail+with+play+button+cinematic+preview"
              alt="Virtual Tour Preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button className="w-20 h-20 bg-[#e50914] rounded-full flex items-center justify-center hover:bg-[#b91c1c] transition-colors transform hover:scale-105">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="btn-primary">
              Watch Full Tour
            </Button>
            <Button className="btn-secondary">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      {/* Full Screen Image Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <img 
              src={filteredImages[selectedImage]?.image}
              alt={filteredImages[selectedImage]?.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Navigation */}
            {selectedImage > 0 && (
              <button
                onClick={() => setSelectedImage(selectedImage - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {selectedImage < filteredImages.length - 1 && (
              <button
                onClick={() => setSelectedImage(selectedImage + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 bg-black/50 rounded-full p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white font-serif text-2xl font-bold mb-2">
                {filteredImages[selectedImage]?.title}
              </h3>
              <p className="text-white/90">
                {filteredImages[selectedImage]?.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
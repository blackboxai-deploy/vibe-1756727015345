import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import { Button } from '@/components/ui/button'

export default function Spa() {
  const services = [
    {
      category: 'Massage Therapy',
      treatments: [
        {
          name: 'Rwandan Heritage Massage',
          description: 'Traditional healing massage using indigenous techniques and locally sourced oils from Rwanda\'s natural resources.',
          duration: '90 minutes',
          price: '$120',
          image: 'https://placehold.co/400x300?text=Traditional+Rwandan+massage+therapy+with+natural+oils+and+healing+techniques'
        },
        {
          name: 'Mountain Stone Massage',
          description: 'Hot stone therapy using volcanic stones from the Virunga mountains for deep muscle relaxation.',
          duration: '75 minutes',
          price: '$100',
          image: 'https://placehold.co/400x300?text=Hot+stone+massage+therapy+with+volcanic+stones+in+luxury+spa+setting'
        },
        {
          name: 'Couples Retreat Massage',
          description: 'Intimate side-by-side massage experience for couples in our private treatment suite.',
          duration: '60 minutes',
          price: '$180',
          image: 'https://placehold.co/400x300?text=Couples+massage+therapy+in+private+luxury+spa+suite+with+romantic+ambiance'
        }
      ]
    },
    {
      category: 'Facial Treatments',
      treatments: [
        {
          name: 'Virunga Clay Purifying Facial',
          description: 'Detoxifying facial using mineral-rich clay from the Virunga region for radiant, purified skin.',
          duration: '60 minutes',
          price: '$85',
          image: 'https://placehold.co/400x300?text=Luxury+facial+treatment+with+natural+clay+mask+in+professional+spa+environment'
        },
        {
          name: 'Anti-Aging Gold Facial',
          description: 'Luxurious anti-aging treatment with 24k gold infusion for youthful, glowing skin.',
          duration: '75 minutes',
          price: '$150',
          image: 'https://placehold.co/400x300?text=Anti+aging+gold+facial+treatment+with+luxury+skincare+products+in+spa'
        },
        {
          name: 'Hydrating Coffee Scrub Facial',
          description: 'Energizing facial featuring locally sourced Rwandan coffee for exfoliation and hydration.',
          duration: '45 minutes',
          price: '$70',
          image: 'https://placehold.co/400x300?text=Coffee+scrub+facial+treatment+using+local+Rwandan+coffee+for+skin+exfoliation'
        }
      ]
    },
    {
      category: 'Body Treatments',
      treatments: [
        {
          name: 'Full Body Detox Wrap',
          description: 'Complete body detoxification using natural herbs and minerals for skin renewal and wellness.',
          duration: '90 minutes',
          price: '$130',
          image: 'https://placehold.co/400x300?text=Full+body+detox+wrap+treatment+with+natural+herbs+in+luxury+spa'
        },
        {
          name: 'Honey & Milk Body Polish',
          description: 'Nourishing body scrub with local honey and milk for silky smooth, moisturized skin.',
          duration: '60 minutes',
          price: '$90',
          image: 'https://placehold.co/400x300?text=Honey+and+milk+body+polish+treatment+for+smooth+moisturized+skin'
        }
      ]
    },
    {
      category: 'Wellness Experiences',
      treatments: [
        {
          name: 'Sauna & Steam Experience',
          description: 'Rejuvenating session in our eucalyptus-infused sauna and steam rooms with mountain views.',
          duration: '45 minutes',
          price: '$40',
          image: 'https://placehold.co/400x300?text=Luxury+sauna+and+steam+room+with+eucalyptus+infusion+and+mountain+views'
        },
        {
          name: 'Meditation & Aromatherapy',
          description: 'Guided meditation session with therapeutic aromatherapy in our tranquil wellness pavilion.',
          duration: '30 minutes',
          price: '$35',
          image: 'https://placehold.co/400x300?text=Meditation+and+aromatherapy+session+in+tranquil+spa+wellness+pavilion'
        }
      ]
    }
  ]

  const packages = [
    {
      name: 'Romantic Couples Retreat',
      description: 'Perfect for couples seeking relaxation and romance with private treatments and champagne service.',
      duration: '3 hours',
      price: '$350',
      originalPrice: '$400',
      image: 'https://placehold.co/500x400?text=Romantic+couples+spa+retreat+with+private+treatments+and+champagne+service',
      includes: [
        'Couples Massage (60 min)',
        'Private Jacuzzi Session',
        'Champagne & Strawberries',
        'Rose Petal Bath',
        'Light Lunch',
        'Private Relaxation Area'
      ],
      popular: true
    },
    {
      name: 'Stress Relief & Detox',
      description: 'Complete wellness journey designed to eliminate stress and detoxify mind, body, and soul.',
      duration: '4 hours',
      price: '$280',
      originalPrice: '$320',
      image: 'https://placehold.co/500x400?text=Stress+relief+and+detox+spa+package+with+multiple+wellness+treatments',
      includes: [
        'Mountain Stone Massage (75 min)',
        'Full Body Detox Wrap (90 min)',
        'Virunga Clay Facial (60 min)',
        'Sauna & Steam Session',
        'Healthy Wellness Lunch',
        'Meditation Session'
      ]
    },
    {
      name: 'Bridal Beauty Bliss',
      description: 'Pre-wedding pampering package to ensure you look and feel radiant on your special day.',
      duration: '5 hours',
      price: '$450',
      originalPrice: '$500',
      image: 'https://placehold.co/500x400?text=Bridal+beauty+spa+package+with+multiple+treatments+for+wedding+preparation',
      includes: [
        'Anti-Aging Gold Facial (75 min)',
        'Full Body Polish (60 min)',
        'Manicure & Pedicure',
        'Hair Styling Session',
        'Makeup Application',
        'Bridal Lunch & Champagne'
      ]
    },
    {
      name: 'Executive Wellness',
      description: 'Designed for busy professionals needing quick but effective relaxation and rejuvenation.',
      duration: '2 hours',
      price: '$180',
      originalPrice: '$220',
      image: 'https://placehold.co/500x400?text=Executive+wellness+spa+package+for+busy+professionals+quick+relaxation',
      includes: [
        'Express Massage (45 min)',
        'Power Facial (45 min)',
        'Steam Room Access',
        'Healthy Snack',
        'Energy Smoothie',
        'Quick Meditation'
      ]
    }
  ]

  const facilities = [
    {
      name: 'Treatment Suites',
      description: 'Private, luxurious treatment rooms with mountain views and premium amenities.',
      image: 'https://placehold.co/400x300?text=Luxury+spa+treatment+suite+with+mountain+views+and+premium+amenities',
      features: ['Mountain Views', 'Private Bathrooms', 'Heated Floors', 'Sound Therapy']
    },
    {
      name: 'Relaxation Lounge',
      description: 'Tranquil space for pre and post-treatment relaxation with herbal teas and healthy snacks.',
      image: 'https://placehold.co/400x300?text=Spa+relaxation+lounge+with+comfortable+seating+and+mountain+views',
      features: ['Comfortable Seating', 'Herbal Tea Bar', 'Healthy Snacks', 'Reading Materials']
    },
    {
      name: 'Hydrotherapy Pool',
      description: 'Therapeutic pool with jets and mineral-infused water for muscle relief and circulation.',
      image: 'https://placehold.co/400x300?text=Spa+hydrotherapy+pool+with+jets+and+mineral+water+for+therapeutic+benefits',
      features: ['Therapeutic Jets', 'Mineral Water', 'Temperature Control', 'Pool Bar']
    },
    {
      name: 'Fitness Integration',
      description: 'Connect your wellness journey with our state-of-the-art fitness facilities.',
      image: 'https://placehold.co/400x300?text=Spa+fitness+integration+with+yoga+studio+and+exercise+equipment',
      features: ['Yoga Classes', 'Personal Training', 'Fitness Equipment', 'Group Sessions']
    }
  ]

  const testimonials = [
    {
      name: 'Isabella Rodriguez',
      location: 'Madrid, Spain',
      rating: 5,
      review: 'The Rwandan Heritage Massage was incredible! The therapists were so knowledgeable about traditional techniques and the local oils smelled amazing. I felt completely renewed.',
      treatment: 'Rwandan Heritage Massage',
      avatar: 'https://placehold.co/80x80?text=Happy+spa+client+woman+relaxed+portrait+photo'
    },
    {
      name: 'James & Sarah Thompson',
      location: 'Toronto, Canada',
      rating: 5,
      review: 'We booked the Romantic Couples Retreat for our anniversary and it was perfect! The private jacuzzi, champagne service, and couples massage made it unforgettable.',
      treatment: 'Romantic Couples Retreat',
      avatar: 'https://placehold.co/80x80?text=Happy+couple+spa+clients+portrait+photo'
    },
    {
      name: 'Dr. Michael Chen',
      location: 'Singapore',
      rating: 5,
      review: 'As a busy executive, the Executive Wellness package was exactly what I needed. Quick, efficient, and incredibly relaxing. The staff understood my time constraints perfectly.',
      treatment: 'Executive Wellness',
      avatar: 'https://placehold.co/80x80?text=Professional+man+spa+client+relaxed+portrait'
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        backgroundImage="https://placehold.co/1920x1080?text=Luxury+spa+interior+with+natural+lighting+plants+and+mountain+views"
        title="Spa & Wellness"
        subtitle="Rejuvenation & Serenity"
        description="Discover inner peace and rejuvenation with our world-class spa treatments inspired by traditional Rwandan healing practices."
        ctaText="Book Your Spa Experience"
        height="large"
        overlay="light"
      />

      {/* Services by Category */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
              Spa Treatments & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience authentic wellness with treatments that blend modern luxury with traditional Rwandan healing wisdom.
            </p>
          </div>

          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h3 className="font-serif text-3xl font-bold text-[#1e3a8a] mb-8 text-center">
                {category.category}
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.treatments.map((treatment, index) => (
                  <div key={index} className="card-luxury group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={treatment.image}
                        alt={treatment.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 right-4 bg-[#fbbf24] text-[#1e3a8a] px-3 py-1 rounded-full font-semibold text-sm">
                        {treatment.price}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h4 className="font-serif text-xl font-bold text-[#1e3a8a] mb-2">
                        {treatment.name}
                      </h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {treatment.description}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-500 text-sm">Duration: {treatment.duration}</span>
                        <span className="font-bold text-[#1e3a8a]">{treatment.price}</span>
                      </div>
                      <Button className="w-full btn-primary">
                        Book Treatment
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wellness Packages */}
      <section className="section-padding bg-[#f5f5dc]/30">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
              Wellness Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Curated spa experiences designed for different occasions and wellness goals, offering exceptional value and comprehensive care.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`card-luxury group relative ${pkg.popular ? 'border-2 border-[#fbbf24]' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#fbbf24] text-[#1e3a8a] px-6 py-1 rounded-full font-bold text-sm">
                    Most Popular
                  </div>
                )}
                
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-[#e50914] text-white px-3 py-1 rounded-full font-bold text-sm">
                    Save ${parseInt(pkg.originalPrice.replace('$', '')) - parseInt(pkg.price.replace('$', ''))}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {pkg.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#1e3a8a] mb-3">Package Includes:</h4>
                    <ul className="space-y-1">
                      {pkg.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-600 text-sm">
                          <svg className="w-3 h-3 text-[#fbbf24] mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-[#f5f5dc] to-white p-4 rounded-xl mb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline space-x-2">
                          <span className="text-2xl font-bold text-[#1e3a8a]">{pkg.price}</span>
                          <span className="text-gray-500 line-through">{pkg.originalPrice}</span>
                        </div>
                        <p className="text-gray-500 text-sm">{pkg.duration} experience</p>
                      </div>
                    </div>
                  </div>
                  
                  <Button className={`w-full ${pkg.popular ? 'btn-secondary' : 'btn-primary'}`}>
                    Book Package
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Facilities */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1e3a8a] mb-4">
              Spa Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art wellness facilities designed to complement your treatment experience with luxury and comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-1/2">
                  <img 
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-48 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold text-[#1e3a8a] mb-2">
                    {facility.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {facility.description}
                  </p>
                  <ul className="space-y-1">
                    {facility.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 text-sm">
                        <svg className="w-3 h-3 text-[#fbbf24] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
              Wellness Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hear from our guests about their transformative spa experiences and wellness journeys.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, idx) => (
                    <svg key={idx} className="w-5 h-5 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.review}"
                </blockquote>

                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-[#1e3a8a]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <p className="text-xs text-[#fbbf24] font-medium">{testimonial.treatment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1e3a8a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6]" />
        <div className="relative z-10 max-w-4xl mx-auto container-padding text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Begin Your Wellness Journey
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Experience the perfect blend of traditional Rwandan healing and modern luxury. Book your spa experience today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-secondary text-lg px-8 py-4">
              Book Spa Experience
            </Button>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1e3a8a] text-lg px-8 py-4">
              View All Treatments
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
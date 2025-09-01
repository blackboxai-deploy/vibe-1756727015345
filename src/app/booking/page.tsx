'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Booking() {
  const [selectedService, setSelectedService] = useState('')
  const [bookingData, setBookingData] = useState({
    service: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    roomType: '',
    spaPackage: '',
    cinemaPackage: '',
    eventType: '',
    gymMembership: '',
    restaurantDate: '',
    restaurantTime: '',
    restaurantGuests: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  })

  const services = [
    {
      id: 'accommodation',
      name: 'Rooms & Accommodation',
      icon: '🏨',
      description: 'Book luxury rooms and suites with mountain views'
    },
    {
      id: 'spa',
      name: 'Spa & Wellness',
      icon: '🧘‍♀️',
      description: 'Reserve rejuvenating treatments and wellness packages'
    },
    {
      id: 'cinema',
      name: 'Private Cinema',
      icon: '🎬',
      description: 'Book exclusive movie nights and entertainment'
    },
    {
      id: 'restaurant',
      name: 'Restaurant Dining',
      icon: '🍽️',
      description: 'Reserve tables for fine dining experiences'
    },
    {
      id: 'gym',
      name: 'Gym & Fitness',
      icon: '💪',
      description: 'Access fitness facilities and personal training'
    },
    {
      id: 'events',
      name: 'Meetings & Events',
      icon: '🎉',
      description: 'Plan weddings, conferences, and celebrations'
    }
  ]

  const roomTypes = [
    { id: 'standard', name: 'Standard Room', price: 100 },
    { id: 'superior', name: 'Superior Room', price: 140 },
    { id: 'deluxe', name: 'Deluxe Room', price: 180 },
    { id: 'garden', name: 'Garden View Suite', price: 240 },
    { id: 'mountain', name: 'Mountain View Suite', price: 280 },
    { id: 'presidential', name: 'Presidential Suite', price: 450 }
  ]

  const spaPackages = [
    { id: 'couples', name: 'Romantic Couples Retreat', price: 350 },
    { id: 'detox', name: 'Stress Relief & Detox', price: 280 },
    { id: 'bridal', name: 'Bridal Beauty Bliss', price: 450 },
    { id: 'executive', name: 'Executive Wellness', price: 180 }
  ]

  const cinemaPackages = [
    { id: 'standard', name: 'Standard Experience', price: 45 },
    { id: 'couples', name: 'Couples Romance', price: 120 },
    { id: 'family', name: 'Family Fun Night', price: 150 },
    { id: 'vip', name: 'VIP Luxury Experience', price: 300 }
  ]

  const eventTypes = [
    { id: 'wedding', name: 'Wedding Ceremony & Reception' },
    { id: 'conference', name: 'Business Conference' },
    { id: 'meeting', name: 'Corporate Meeting' },
    { id: 'celebration', name: 'Special Celebration' },
    { id: 'workshop', name: 'Workshop or Seminar' }
  ]

  const gymMemberships = [
    { id: 'day', name: 'Day Pass', price: 25 },
    { id: 'weekly', name: 'Weekly Pass', price: 100 },
    { id: 'monthly', name: 'Monthly Membership', price: 300 },
    { id: 'training', name: 'Personal Training Session', price: 80 }
  ]

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }))
  }

  const calculateTotal = () => {
    let total = 0
    
    if (selectedService === 'accommodation' && bookingData.roomType) {
      const room = roomTypes.find(r => r.id === bookingData.roomType)
      if (room && bookingData.checkIn && bookingData.checkOut) {
        const checkIn = new Date(bookingData.checkIn)
        const checkOut = new Date(bookingData.checkOut)
        const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
        total = room.price * nights
      }
    }
    
    if (selectedService === 'spa' && bookingData.spaPackage) {
      const pkg = spaPackages.find(p => p.id === bookingData.spaPackage)
      total = pkg?.price || 0
    }
    
    if (selectedService === 'cinema' && bookingData.cinemaPackage) {
      const pkg = cinemaPackages.find(p => p.id === bookingData.cinemaPackage)
      total = pkg?.price || 0
    }
    
    if (selectedService === 'gym' && bookingData.gymMembership) {
      const membership = gymMemberships.find(m => m.id === bookingData.gymMembership)
      total = membership?.price || 0
    }
    
    return total
  }

  const renderServiceSpecificFields = () => {
    switch (selectedService) {
      case 'accommodation':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Check-in Date</label>
                <Input 
                  type="date" 
                  value={bookingData.checkIn}
                  onChange={(e) => handleInputChange('checkIn', e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Check-out Date</label>
                <Input 
                  type="date" 
                  value={bookingData.checkOut}
                  onChange={(e) => handleInputChange('checkOut', e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Number of Guests</label>
                <Select value={bookingData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Room Type</label>
                <Select value={bookingData.roomType} onValueChange={(value) => handleInputChange('roomType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose room type" />
                  </SelectTrigger>
                  <SelectContent>
                    {roomTypes.map(room => (
                      <SelectItem key={room.id} value={room.id}>
                        {room.name} - ${room.price}/night
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )

      case 'spa':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Spa Package</label>
              <Select value={bookingData.spaPackage} onValueChange={(value) => handleInputChange('spaPackage', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose spa package" />
                </SelectTrigger>
                <SelectContent>
                  {spaPackages.map(pkg => (
                    <SelectItem key={pkg.id} value={pkg.id}>
                      {pkg.name} - ${pkg.price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Preferred Date</label>
                <Input 
                  type="date" 
                  value={bookingData.checkIn}
                  onChange={(e) => handleInputChange('checkIn', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Preferred Time</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9am">9:00 AM</SelectItem>
                    <SelectItem value="11am">11:00 AM</SelectItem>
                    <SelectItem value="2pm">2:00 PM</SelectItem>
                    <SelectItem value="4pm">4:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )

      case 'cinema':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Cinema Package</label>
              <Select value={bookingData.cinemaPackage} onValueChange={(value) => handleInputChange('cinemaPackage', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose cinema package" />
                </SelectTrigger>
                <SelectContent>
                  {cinemaPackages.map(pkg => (
                    <SelectItem key={pkg.id} value={pkg.id}>
                      {pkg.name} - ${pkg.price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Date</label>
                <Input 
                  type="date" 
                  value={bookingData.checkIn}
                  onChange={(e) => handleInputChange('checkIn', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Time</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2pm">2:00 PM</SelectItem>
                    <SelectItem value="5pm">5:00 PM</SelectItem>
                    <SelectItem value="8pm">8:00 PM</SelectItem>
                    <SelectItem value="10pm">10:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Guests</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="# guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4,5,6,7,8].map(num => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )

      case 'restaurant':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Date</label>
                <Input 
                  type="date" 
                  value={bookingData.restaurantDate}
                  onChange={(e) => handleInputChange('restaurantDate', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Time</label>
                <Select value={bookingData.restaurantTime} onValueChange={(value) => handleInputChange('restaurantTime', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6pm">6:00 PM</SelectItem>
                    <SelectItem value="7pm">7:00 PM</SelectItem>
                    <SelectItem value="8pm">8:00 PM</SelectItem>
                    <SelectItem value="9pm">9:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Party Size</label>
                <Select value={bookingData.restaurantGuests} onValueChange={(value) => handleInputChange('restaurantGuests', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="# guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'Person' : 'People'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )

      case 'gym':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Membership Type</label>
              <Select value={bookingData.gymMembership} onValueChange={(value) => handleInputChange('gymMembership', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose membership" />
                </SelectTrigger>
                <SelectContent>
                  {gymMemberships.map(membership => (
                    <SelectItem key={membership.id} value={membership.id}>
                      {membership.name} - ${membership.price}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Start Date</label>
                <Input 
                  type="date" 
                  value={bookingData.checkIn}
                  onChange={(e) => handleInputChange('checkIn', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Preferred Time</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6am">6:00 AM</SelectItem>
                    <SelectItem value="8am">8:00 AM</SelectItem>
                    <SelectItem value="10am">10:00 AM</SelectItem>
                    <SelectItem value="5pm">5:00 PM</SelectItem>
                    <SelectItem value="7pm">7:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )

      case 'events':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Event Type</label>
              <Select value={bookingData.eventType} onValueChange={(value) => handleInputChange('eventType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose event type" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map(event => (
                    <SelectItem key={event.id} value={event.id}>
                      {event.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Event Date</label>
                <Input 
                  type="date" 
                  value={bookingData.checkIn}
                  onChange={(e) => handleInputChange('checkIn', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Start Time</label>
                <Input 
                  type="time" 
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Expected Guests</label>
                <Input 
                  type="number" 
                  placeholder="Number of guests"
                  min="1"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <HeroSection
        backgroundImage="https://placehold.co/1920x1080?text=Professional+hotel+booking+reception+desk+with+smiling+staff+and+welcoming+atmosphere"
        title="Book Your Experience"
        subtitle="Reservations"
        description="Reserve your perfect stay and experiences at Virungainn Hotel with our comprehensive booking system."
        height="medium"
      />

      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          {/* Service Selection */}
          <div className="mb-12">
            <h2 className="font-serif text-3xl font-bold text-[#1e3a8a] text-center mb-8">
              What Would You Like to Book?
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card 
                  key={service.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedService === service.id 
                      ? 'ring-2 ring-[#1e3a8a] bg-[#f5f5dc]/30' 
                      : 'hover:shadow-xl'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="font-serif font-bold text-[#1e3a8a] mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          {selectedService && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl text-[#1e3a8a]">
                      {services.find(s => s.id === selectedService)?.name} Booking
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {/* Service-specific fields */}
                    {renderServiceSpecificFields()}

                    {/* Contact Information */}
                    <div className="border-t pt-8">
                      <h3 className="font-serif text-xl font-bold text-[#1e3a8a] mb-6">
                        Contact Information
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">First Name</label>
                          <Input 
                            placeholder="Your first name"
                            value={bookingData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                          <Input 
                            placeholder="Your last name"
                            value={bookingData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                          <Input 
                            type="email"
                            placeholder="your.email@example.com"
                            value={bookingData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                          <Input 
                            type="tel"
                            placeholder="+250 xxx xxx xxx"
                            value={bookingData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Special Requests</label>
                        <textarea 
                          placeholder="Any special requests, dietary restrictions, or additional information..."
                          value={bookingData.specialRequests}
                          onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                          className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-[#1e3a8a] focus:border-transparent"
                          rows={4}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Booking Summary */}
              <div>
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="font-serif text-xl text-[#1e3a8a]">
                      Booking Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-[#f5f5dc]/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-[#1e3a8a] mb-2">
                        {services.find(s => s.id === selectedService)?.name}
                      </h4>
                      
                      {selectedService === 'accommodation' && bookingData.roomType && (
                        <>
                          <p className="text-gray-600 text-sm">
                            {roomTypes.find(r => r.id === bookingData.roomType)?.name}
                          </p>
                          {bookingData.checkIn && bookingData.checkOut && (
                            <p className="text-gray-600 text-sm">
                              {new Date(bookingData.checkIn).toLocaleDateString()} - {new Date(bookingData.checkOut).toLocaleDateString()}
                            </p>
                          )}
                        </>
                      )}
                      
                      {selectedService === 'spa' && bookingData.spaPackage && (
                        <p className="text-gray-600 text-sm">
                          {spaPackages.find(p => p.id === bookingData.spaPackage)?.name}
                        </p>
                      )}
                      
                      {selectedService === 'cinema' && bookingData.cinemaPackage && (
                        <p className="text-gray-600 text-sm">
                          {cinemaPackages.find(p => p.id === bookingData.cinemaPackage)?.name}
                        </p>
                      )}
                      
                      {selectedService === 'gym' && bookingData.gymMembership && (
                        <p className="text-gray-600 text-sm">
                          {gymMemberships.find(m => m.id === bookingData.gymMembership)?.name}
                        </p>
                      )}
                    </div>

                    {calculateTotal() > 0 && (
                      <>
                        <div className="border-t pt-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">Subtotal:</span>
                            <span className="font-semibold">${calculateTotal()}</span>
                          </div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600">Taxes & Fees:</span>
                            <span className="font-semibold">${Math.round(calculateTotal() * 0.15)}</span>
                          </div>
                          <div className="border-t pt-2">
                            <div className="flex justify-between items-center">
                              <span className="font-bold text-[#1e3a8a]">Total:</span>
                              <span className="font-bold text-[#1e3a8a] text-xl">
                                ${calculateTotal() + Math.round(calculateTotal() * 0.15)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    <div className="space-y-3 pt-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#fbbf24] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Free cancellation up to 24 hours
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#fbbf24] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Instant confirmation
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#fbbf24] mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        24/7 customer support
                      </div>
                    </div>

                    <Button className="w-full btn-primary text-lg py-3">
                      Confirm Booking
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      By clicking "Confirm Booking", you agree to our Terms of Service and Privacy Policy
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
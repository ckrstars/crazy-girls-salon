import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  notes: string;
}

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-beige-light py-24" id="book-now">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-navy mb-4">Book Your Experience</h2>
          <p className="text-xl font-lora text-gray-600">Schedule your perfect spa day with us</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div className="relative">
              <label className="block text-gray-700 font-lora mb-2" htmlFor="name">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/50 font-lora"
                  placeholder="Your name"
                  required
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="relative">
              <label className="block text-gray-700 font-lora mb-2" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/50 font-lora"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className="relative">
              <label className="block text-gray-700 font-lora mb-2" htmlFor="phone">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/50 font-lora"
                  placeholder="Your phone"
                  required
                />
              </div>
            </div>

            {/* Service Selection */}
            <div className="relative">
              <label className="block text-gray-700 font-lora mb-2" htmlFor="service">
                Select Service
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/50 font-lora appearance-none bg-white"
                required
              >
                <option value="">Select a service</option>
                <option value="massage">Full Body Massage</option>
                <option value="facial">Aroma Facial</option>
                <option value="manicure">Manicure</option>
                <option value="pedicure">Pedicure</option>
                <option value="waxing">Full Body Wax</option>
              </select>
            </div>

            {/* Date Field */}
            <div className="relative">
              <label className="block text-gray-700 font-lora mb-2" htmlFor="date">
                Preferred Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/50 font-lora"
                  required
                />
              </div>
            </div>

            {/* Time Field */}
            <div className="relative">
              <label className="block text-gray-700 font-lora mb-2" htmlFor="time">
                Preferred Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gold/50 font-lora"
                  required
                />
              </div>
            </div>
          </div>

          {/* Notes Field */}
          <div className="mt-6">
            <label className="block text-gray-700 font-lora mb-2" htmlFor="notes">
              Special Requests
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
              <textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold/50 font-lora h-32"
                placeholder="Any special requests or notes..."
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-gold hover:bg-gold/90 text-white px-12 py-4 rounded-full text-lg font-lora transition-all duration-300 transform hover:scale-105"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
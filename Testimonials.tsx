import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Regular Client",
    content: "The most relaxing spa experience I've ever had. The aromatherapy massage was divine, and the staff's attention to detail is impeccable.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "First-time Visitor",
    content: "Exceeded all my expectations. The facial treatment left my skin glowing, and the ambiance is truly luxurious. Will definitely return!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "VIP Member",
    content: "I've been to many luxury spas, but Luxe Spa stands out. Their attention to detail and personalized service is unmatched.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-24" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-navy mb-4">Client Experiences</h2>
          <p className="text-xl font-lora text-gray-600">What our valued guests say about us</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-beige-light rounded-lg p-8 relative transform transition-all duration-300 hover:scale-[1.02]"
            >
              <Quote className="absolute text-gold/20 w-16 h-16 -top-4 -left-4" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-playfair text-lg text-navy">{testimonial.name}</h4>
                  <p className="font-lora text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>

              <p className="font-lora text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gold hover:bg-gold/90 text-white px-8 py-3 rounded-full text-lg font-lora transition-all duration-300 transform hover:scale-105">
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
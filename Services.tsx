import React from 'react';
import { Sparkles, Scissors, Heart, MessageCircle as Massage, Flower2, Paintbrush, Eye, Palette } from 'lucide-react';

interface Service {
  name: string;
  price: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

interface ServiceCategory {
  name: string;
  services: Service[];
}

const serviceCategories: ServiceCategory[] = [
  {
    name: "Special Offers",
    services: [
      {
        name: "Bonanza Best Package",
        price: "$150",
        description: "Complete luxury treatment package including massage, facial, and spa essentials",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        icon: <Sparkles className="w-6 h-6" />
      }
    ]
  },
  {
    name: "Waxing Services",
    services: [
      {
        name: "Full Body Wax",
        price: "$159",
        description: "Complete body waxing treatment with premium products",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        icon: <Scissors className="w-6 h-6" />
      },
      {
        name: "Full Face Wax",
        price: "$35",
        description: "Gentle facial waxing for smooth, radiant skin",
        image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        icon: <Heart className="w-6 h-6" />
      }
    ]
  },
  {
    name: "Body Massage",
    services: [
      {
        name: "Full Body Massage",
        price: "$59",
        description: "Relaxing full body massage to rejuvenate your body and mind",
        image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        icon: <Massage className="w-6 h-6" />
      },
      {
        name: "Aroma Facial",
        price: "$99",
        description: "Luxurious facial treatment with aromatic essential oils",
        image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        icon: <Flower2 className="w-6 h-6" />
      }
    ]
  },
  {
    name: "Beauty Services",
    services: [
      {
        name: "Eyebrow Threading",
        price: "$10",
        description: "Precise eyebrow threading for perfect shape",
        image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        icon: <Paintbrush className="w-6 h-6" />
      },
      {
        name: "Eyelash Extensions",
        price: "From $70",
        description: "Premium eyelash extensions for stunning eyes",
        image: "https://images.unsplash.com/photo-1589710492580-db053d10f850?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        icon: <Eye className="w-6 h-6" />
      }
    ]
  },
  {
    name: "Nail Care",
    services: [
      {
        name: "Mani-Pedi Combo",
        price: "$55",
        description: "Complete manicure and pedicure treatment",
        image: "https://images.unsplash.com/photo-1610992015732-2449b0bb0a86?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
        icon: <Palette className="w-6 h-6" />
      }
    ]
  }
];

const PriceList = () => {
  return (
    <div className="bg-beige-light py-24" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair text-navy mb-4">Our Services</h2>
          <p className="text-xl font-lora text-gray-600">Indulge in our premium spa treatments</p>
        </div>

        <div className="space-y-16">
          {serviceCategories.map((category, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-3xl font-playfair text-navy text-center mb-8">{category.name}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.services.map((service, serviceIdx) => (
                  <div 
                    key={serviceIdx}
                    className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="relative h-64">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full">
                        {service.icon}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-xl font-playfair text-navy">{service.name}</h4>
                        <span className="text-xl font-lora text-gold">{service.price}</span>
                      </div>
                      <p className="text-gray-600 font-lora mb-6">{service.description}</p>
                      <button className="w-full bg-gold hover:bg-gold/90 text-white px-6 py-3 rounded-full font-lora transition-all duration-300 transform hover:scale-105">
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg font-lora text-gray-600 mb-8">
            View our complete price list and special packages
          </p>
          <button className="bg-navy hover:bg-navy/90 text-white px-8 py-3 rounded-full text-lg font-lora transition-all duration-300 transform hover:scale-105">
            Download Price List
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceList;
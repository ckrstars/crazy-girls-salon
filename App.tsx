import React from 'react';
import { Menu, X, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
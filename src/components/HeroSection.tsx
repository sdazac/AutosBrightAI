import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-detailing.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with red/black gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tight">
            Auto's <span className="text-primary font-black italic" style={{ textShadow: '0 0 30px rgba(186, 16, 16, 0.8)' }}>Bright</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-bold text-white uppercase tracking-wide">
            Professional Mobile Detailing Service
          </p>
          <p className="text-lg mb-12 text-gray-200 max-w-2xl mx-auto">
            Premium car care that comes to you in New Jersey. Certified processes, 
            premium products, and exceptional results.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="default" size="lg" className="w-full sm:w-auto text-lg font-bold px-12 py-6 h-auto uppercase">
            Book Now
          </Button>
          <Button variant="outline-white" size="lg" className="w-full sm:w-auto text-lg font-bold px-12 py-6 h-auto uppercase">
            Our Services
          </Button>
        </div>
      </div>
      
      {/* Floating Animation Element */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
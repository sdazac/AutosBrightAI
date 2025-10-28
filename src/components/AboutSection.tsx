import { CheckCircle } from "lucide-react";
import teamImage from "@/assets/team-work.jpg";

const AboutSection = () => {
  const features = [
    "Mobile service - we come to you",
    "Professional detailing experience",
    "Premium products and equipment",
    "Personalized care for every vehicle",
    "Serving all of New Jersey",
    "Fully insured and bonded"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 uppercase">
              About <span className="text-primary">Auto's Bright</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're passionate about bringing professional auto detailing services directly to your location. 
              With years of experience and a commitment to excellence, we transform your vehicle using 
              the latest techniques and premium products.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-card p-6 rounded-lg border-2 border-primary/20 shadow-card hover:border-primary hover:shadow-glow transition-all duration-300">
              <h3 className="text-xl font-bold text-foreground mb-3 uppercase">
                Our Mission
              </h3>
              <p className="text-muted-foreground font-medium">
                To provide exceptional mobile auto detailing services that exceed expectations, 
                using environmentally-friendly products and techniques that protect and enhance 
                your vehicle's appearance and value.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-premium">
              <img 
                src={teamImage} 
                alt="Auto's Bright team providing professional mobile detailing services in New Jersey" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
            </div>
            
            {/* Floating stats */}
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-lg shadow-glow border-2 border-accent">
              <div className="text-center">
                <div className="text-4xl font-black text-white">500+</div>
                <div className="text-sm text-white/90 font-bold uppercase">Cars Detailed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
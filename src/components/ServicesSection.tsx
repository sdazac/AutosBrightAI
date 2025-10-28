import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Car, 
  Sparkles, 
  Shield, 
  Paintbrush2, 
  Lightbulb, 
  Settings, 
  Zap 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Full Detailing",
      description: "Complete interior and exterior detailing service for ultimate vehicle care.",
      features: ["Interior deep cleaning", "Exterior wash & wax", "Tire & rim care", "Glass cleaning"]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Headlight Restoration",
      description: "Restore cloudy, yellowed headlights to like-new condition.",
      features: ["UV damage repair", "Clarity restoration", "Protective coating", "Improved visibility"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ceramic Coating",
      description: "Premium ceramic coating for long-lasting protection and shine.",
      features: ["9H hardness coating", "Hydrophobic properties", "UV protection", "Easy maintenance"]
    },
    {
      icon: <Paintbrush2 className="w-8 h-8" />,
      title: "Paint Correction",
      description: "Professional paint restoration to eliminate swirls and scratches.",
      features: ["Swirl mark removal", "Scratch elimination", "Multi-stage polishing", "Factory finish restoration"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Paint Protection Film",
      description: "Invisible protection film to guard against chips and damage.",
      features: ["Self-healing technology", "Clear protection", "Custom fit", "Rock chip prevention"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Material Restoration",
      description: "Restore vinyl, leather, plastic, and carpet to original condition.",
      features: ["Leather conditioning", "Vinyl restoration", "Carpet cleaning", "Plastic rejuvenation"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Engine Detailing",
      description: "Professional engine bay cleaning and detailing service.",
      features: ["Degreasing", "Steam cleaning", "Protective dressing", "Component care"]
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 uppercase">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-medium">
            Professional auto detailing services designed to protect, restore, and enhance 
            your vehicle's appearance and value.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-glow hover:border-primary transition-all duration-300 border-2 border-primary/20 bg-card">
              <CardContent className="p-6">
                <div className="text-primary mb-4 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 uppercase">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 font-medium">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-foreground flex items-center font-medium">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-secondary p-8 rounded-lg border-2 border-primary shadow-premium max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4 uppercase">
              Ready to Transform Your Vehicle?
            </h3>
            <p className="text-gray-300 mb-6 font-medium">
              Get a free quote for our professional detailing services. We'll come to you!
            </p>
            <Button variant="default" size="lg" className="w-full sm:w-auto text-lg font-bold uppercase px-12">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
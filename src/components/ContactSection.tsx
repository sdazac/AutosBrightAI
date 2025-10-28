import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Quote Request Sent!",
      description: "We'll contact you within 24 hours with a detailed quote.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 uppercase">
            Get Your <span className="text-primary">Free Quote</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Ready to give your vehicle the professional care it deserves? 
            Contact us for a free consultation and quote.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-premium border-2 border-primary/20 hover:border-primary hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground flex items-center gap-2 font-bold uppercase">
                <Send className="w-6 h-6 text-primary" />
                Request Your Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-detailing">Full Detailing</SelectItem>
                      <SelectItem value="ceramic-coating">Ceramic Coating</SelectItem>
                      <SelectItem value="paint-correction">Paint Correction</SelectItem>
                      <SelectItem value="headlight-restoration">Headlight Restoration</SelectItem>
                      <SelectItem value="ppf">Paint Protection Film</SelectItem>
                      <SelectItem value="engine-detailing">Engine Detailing</SelectItem>
                      <SelectItem value="other">Other / Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message / Additional Details</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your vehicle and what services you're interested in..."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" variant="default" size="lg" className="w-full uppercase font-bold text-lg">
                  Send Quote Request
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card border-2 border-primary/20 hover:border-primary hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Call or text anytime</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-2 border-primary/20 hover:border-primary hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">info@autosbright.com</p>
                    <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-2 border-primary/20 hover:border-primary hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Service Area</h3>
                    <p className="text-muted-foreground">New Jersey, USA</p>
                    <p className="text-sm text-muted-foreground">Mobile service - we come to you!</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-secondary p-6 rounded-lg border-2 border-primary shadow-card">
              <h3 className="text-xl font-bold text-white mb-3 uppercase">
                Why Choose Mobile Service?
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Convenient - no need to leave your location
                </li>
                <li className="flex items-center font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Time-saving - we work while you work
                </li>
                <li className="flex items-center font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Professional equipment brought to you
                </li>
                <li className="flex items-center font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  Personalized service every time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
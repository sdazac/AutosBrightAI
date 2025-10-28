import certificationsImage from "@/assets/certifications.jpg";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Certified Detailing Professional",
      description: "International Detailing Association (IDA) Certified"
    },
    {
      title: "Premium Product Training",
      description: "Certified in ceramic coating and paint protection applications"
    },
    {
      title: "Paint Correction Specialist",
      description: "Advanced training in paint restoration and correction techniques"
    },
    {
      title: "Mobile Service Excellence",
      description: "Professional mobile detailing service standards certified"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase">
            Professional <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We maintain the highest industry standards through continuous training and certification 
            in the latest detailing techniques and premium products.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg shadow-premium border-2 border-primary/20 hover:border-primary hover:shadow-glow transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-foreground mb-3 uppercase">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground font-medium">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-premium">
              <img 
                src={certificationsImage} 
                alt="Professional certifications and awards" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
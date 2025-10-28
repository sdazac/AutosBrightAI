import certTcPaint from "@/assets/cert-tc-paint.jpg";
import certAcpSanding from "@/assets/cert-acp-sanding.jpg";
import certOpDetailer from "@/assets/cert-opdetailer.jpg";
import certGtQuartz from "@/assets/cert-gtquartz.jpg";

const CertificationsSection = () => {
  const certifications = [
    {
      image: certTcPaint,
      alt: "TC Paint Protection Film - Mobile Installer Training Certificate"
    },
    {
      image: certAcpSanding,
      alt: "ACP Detail Supply - 2-Day Sanding & Polishing Course Certificate"
    },
    {
      image: certOpDetailer,
      alt: "OP Detailer Academy - Paint Correction, Ceramic Coating and Spot Sanding Certificate"
    },
    {
      image: certGtQuartz,
      alt: "GT Quartz Titanium Nano Ceramic Coatings - Authorized Applicator Certificate"
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group bg-card rounded-lg overflow-hidden shadow-premium border-2 border-primary/20 hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
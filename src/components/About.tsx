import andreasPhoto from "@/assets/andreas-ogren.jpg";

const About = () => {
  return (
    <section id="about" className="bg-card scroll-mt-8 md:scroll-mt-0">
      <div className="section-container">
        <p className="section-title">About</p>
        
        <div className="grid md:grid-cols-3 gap-12 items-start md:items-center">
          <div className="md:col-span-1">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img 
                src={andreasPhoto} 
                alt="Andreas Ögren" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-6">
              Andreas Ögren
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Specializing in front-end architecture and development, Andreas helps teams design and deliver reliable, maintainable web applications. He focuses on creating platforms that handles complex requirements and support teams in delivering high-quality solutions efficiently. With extensive experience guiding React-based initiatives at leading Swedish companies, he combines deep technical expertise with a practical, collaborative approach that ensures architectural decisions are sound and solutions are sustainable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

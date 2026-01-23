import andreasPhoto from "@/assets/andreas-ogren.jpg";

const About = () => {
  return (
    <section id="about" className="bg-card">
      <div className="section-container">
        <p className="section-title">About</p>
        
        <div className="grid md:grid-cols-3 gap-12 items-start">
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
                Single Threaded specializes in frontend platforms and architecture. 
                Two decades of experience helping teams build scalable, maintainable solutions.
              </p>
              <p>
                Based in Stockholm. M.Sc. Computing Science, Umeå University.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
